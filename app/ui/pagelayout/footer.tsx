import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Sobre Nosotros */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Nuestra Empresa</h2>
            <p className="text-gray-300">
              Somos una empresa dedicada a proporcionar soluciones innovadoras
              para tu negocio. Nuestro compromiso es ayudarte a alcanzar tus
              metas.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Mapa del Sitio</h2>
            <ul className="space-y-2">
              {[
                "Inicio",
                "Desarrollo",
                "Tecnologias",
                "Contacto",
                "Noticias",
                "FAQ'S",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a
                  href="mailto:info@tuempresa.com"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  info@aion.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a
                  href="tel:+520000000000"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  +52 (000) 000-0000
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span className="text-gray-300">
                  Calle de la tilma, 294, Chapalita Sur, 45040 Zapopan, Jal.
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Síguenos</h2>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://x.com/" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-8 border-gray-700" />

        {/* Copyright y Política de Privacidad */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} aion. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              href="/politica-de-privacidad"
              className="text-gray-300 hover:text-white text-sm mr-4 transition duration-300"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos-y-condiciones"
              className="text-gray-300 hover:text-white text-sm transition duration-300"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
