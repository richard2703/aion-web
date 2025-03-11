"use client";

import { useTranslations } from "next-intl";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
  position: string;
  linkedin: string;
  experience: string;
  privacyConsent: boolean;
}

interface Props {
  vacante: {
    id: number;
    title: string;
    description: string;
    requirements: string[];
  };
}

const JobForm: React.FC<Props> = (props) => {
  const { vacante } = props;

  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    position: vacante.title || "",
    linkedin: "",
    experience: "",
    privacyConsent: false,
  });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [fileLabel, setFileLabel] = useState("Adjuntar CV (PDF)");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      "checked" in e.target ? (e.target as HTMLInputElement).checked : false;

    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        setFormData((prev) => ({
          ...prev,
          [name]: fileInput.files![0],
        }));
        setFileLabel(fileInput.files[0].name);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.privacyConsent) {
      toast.error(
        "Por favor, completa los campos obligatorios y acepta la política de privacidad."
      );
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        // Si el valor es un archivo, lo agregamos correctamente
        if (key === "resume" && value instanceof File) {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(key, String(value));
        }
      }
    });

    try {
      const res = await fetch("/api/send-mail-vacancy", {
        method: "POST",
        body: formDataToSend, // 👈 NO usar JSON.stringify aquí
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.message || "Error al enviar la solicitud");

      toast.success("¡Tu solicitud fue enviada con éxito!");

      setTimeout(() => {
        // router.push("/careers/thanks");
      }, 2000);
    } catch (error: any) {
      toast.error(error.message || "Hubo un problema al enviar tu solicitud.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.phone)) {
      toast.error("Por favor completa todos los campos en esta sección");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl p-8"
    >
      {vacante.title && (
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            {vacante.title}
          </h3>
          <p className="text-slate-600">{vacante.description}</p>
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${
                    step === s
                      ? "bg-green-600 text-white"
                      : step > s
                      ? "bg-green-200 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
              >
                {s}
              </div>
              <span className="text-xs mt-1 text-gray-500">
                {s === 1
                  ? "Información personal"
                  : s === 2
                  ? "Experiencia"
                  : "Finalizar"}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 h-1 mt-4 relative">
          <div
            className="absolute top-0 left-0 h-1 bg-green-600 transition-all duration-300"
            style={{ width: `${(step - 1) * 50}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Tu nombre y apellidos"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="+34 600 000 000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Puesto al que aplicas{" "}
                {!vacante.title && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Ej: Desarrollador Frontend"
                required={!vacante.title}
                disabled={!!vacante.title}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Perfil de LinkedIn
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="https://linkedin.com/in/tuusuario"
              />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experiencia profesional <span className="text-red-500">*</span>
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              >
                <option value="">Selecciona tu nivel de experiencia</option>
                <option value="0-1">Menos de 1 año</option>
                <option value="1-3">1-3 años</option>
                <option value="3-5">3-5 años</option>
                <option value="5+">Más de 5 años</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CV / Curriculum <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <label className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="text-sm text-gray-600 truncate">
                    {fileLabel}
                  </span>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Formatos aceptados: PDF, DOC, DOCX. Máximo 5MB.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Carta de presentación
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Cuéntanos por qué te gustaría unirte a nuestro equipo y qué puedes aportar"
              />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-medium text-lg mb-4">
                Resumen de tu solicitud
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Nombre</p>
                  <p className="text-slate-800">{formData.name}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-slate-800">{formData.email}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Teléfono</p>
                  <p className="text-slate-800">{formData.phone}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Puesto</p>
                  <p className="text-slate-800">{formData.position}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Experiencia
                  </p>
                  <p className="text-slate-800">{formData.experience}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">CV</p>
                  <p className="text-slate-800">
                    {formData.resume
                      ? (formData.resume as File).name
                      : "No adjuntado"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label className="ml-3 text-sm text-gray-600">
                Acepto la{" "}
                <a
                  href="/privacy-policy"
                  className="text-green-600 hover:underline"
                  target="_blank"
                >
                  política de privacidad
                </a>{" "}
                y doy mi consentimiento para el tratamiento de mis datos
                personales. <span className="text-red-500">*</span>
              </label>
            </div>
          </motion.div>
        )}

        <div className="flex justify-between pt-4 border-t border-gray-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700"
            >
              Atrás
            </button>
          ) : (
            <div></div>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="py-2 px-6 rounded-lg bg-green-600 hover:bg-green-700 text-white"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              className={`py-2 px-6 rounded-lg ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              } text-white`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando solicitud...
                </div>
              ) : (
                "Enviar solicitud"
              )}
            </button>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default JobForm;
