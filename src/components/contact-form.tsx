// TODO: Make this functional and reusable
import { useState, ChangeEvent, FormEvent } from "react";
interface FormData {
  name: string;
  email: string;
  phone: string;
  comments: string;
  privacyConsent: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    comments: "",
    privacyConsent: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      "checked" in e.target ? (e.target as HTMLInputElement).checked : false;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission logic here, such as sending the form data to a server
    console.log(formData);
  };

  return (
    <section className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="block ">
            Tu nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="block ">
            Tu correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="Tu correo electrónico"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block ">
            Teléfono
          </label>
          <div className="flex items-center">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Teléfono"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block ">
            Aque te dedicas
          </label>
          <select
            name="phone"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            <option value="">Seleccione una opci&oacute;n</option>
            <option value="asesor">Asesor</option>
            <option value="negocio">Dueño de negocio</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments" className="block ">
            ¿Quieres comentarnos algo?
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            rows={4}
            placeholder="Escribe tus comentarios aquí..."
          />
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <span>
              He leído y acepto el{" "}
              <a href="#" className="text-purple-600 underline">
                Aviso de privacidad
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition ease-in-out duration-300"
        >
          ENVIAR SOLICITUD
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
