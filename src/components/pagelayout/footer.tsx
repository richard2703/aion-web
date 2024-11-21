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
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("products"), href: "/products" },
    { name: t("technology"), href: "/technology" },
    { name: t("contact"), href: "/contact" },
    // { name: t("news"), href: "/news" },
    { name: t("faq"), href: "/faq" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Sobre Nosotros */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("our_company")}</h2>
            <p className="text-gray-300">{t("about_us")}</p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("quick_links")}</h2>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("contact_info")}</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a
                  href="mailto:maquilas@aionsuplementos.com"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {t("email")}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a
                  href="tel:+523312938626"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {t("phone")}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span className="text-gray-300">{t("address")}</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("follow_us")}</h2>
            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/18eGUAMMTC/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/aionsuplementos/?igsh=bDg4aHhuanhtZDJ3",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/aion-suplementos-alimenticios/about/?viewAsMember=true",
                },
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
            {t("copyright")} {currentYear}
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white text-sm mr-4 transition duration-300"
            >
              {t("policy")}
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white text-sm transition duration-300"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
