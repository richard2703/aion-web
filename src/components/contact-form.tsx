"use client";

import { useTranslations } from "next-intl";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  profession: string;
  comments: string;
  privacyConsent: boolean;
}

interface Props {
  type: string;
}

const ContactForm: React.FC<Props> = (props) => {
  const { type } = props;
  console.log({ type });

  const t = useTranslations("ContactForm");
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    profession: "",
    comments: "",
    privacyConsent: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      "checked" in e.target ? (e.target as HTMLInputElement).checked : false;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Validaciones básicas
    if (!formData.name || !formData.email || !formData.privacyConsent) {
      toast.error("Por favor, completa los campos obligatorios.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-email-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al enviar el correo");

      // Éxito
      toast.success("¡Correo enviado con éxito!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        profession: "",
        comments: "",
        privacyConsent: false,
      });

      // setTimeout(() => router.push("/"), 2000);
    } catch (error: any) {
      toast.error(error.message || "Hubo un problema al enviar el formulario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name">{t("name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label htmlFor="email">{t("email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Tu correo"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">{t("phone")}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Teléfono"
          />
        </div>

        <div>
          <label htmlFor="profession">{t("profession")}</label>
          <select
            name="profession"
            id="profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="">{t("pick_option")}</option>
            <option value="asesor">{t("consultant")}</option>
            <option value="negocio">{t("owner")}</option>
            <option value="other">{t("other")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments">{t("comment")}</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            rows={4}
            placeholder="Tus comentarios..."
          />
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mr-2"
              required
            />
            {t("agree")}{" "}
            <a href="/privacy" className="text-blue-600 underline">
              {t("privacy")}
            </a>
          </label>
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg ${
            loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
          } text-white`}
          disabled={loading}
        >
          {loading ? "Enviando..." : t("send")}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
