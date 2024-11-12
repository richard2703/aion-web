import React from "react";
import Image from "next/image";
import { Cpu } from "lucide-react";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("TechPage");
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-[#101566] text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl">{t("description")}</p>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("key_technologies")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* TODO: Add the custom icons from identity manifest */}
            {[
              {
                icon: <Cpu size={40} />,
                title: t("capsules"),
                description: t("capsules_description"),
              },
              {
                icon: <Cpu size={40} />,
                title: t("tablets"),
                description: t("tablets_description"),
              },
              {
                icon: <Cpu size={40} />,
                title: t("powders"),
                description: t("powders_description"),
              },
              {
                icon: <Cpu size={40} />,
                title: t("liquids"),
                description: t("liquids_description"),
              },
              {
                icon: <Cpu size={40} />,
                title: t("gels"),
                description: t("gels_description"),
              },
              {
                icon: <Cpu size={40} />,
                title: t("ointments"),
                description: t("ointments_description"),
              },
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">{t("tools")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t("edge_technology"),
                description: t("edge_technology_description"),
              },
              {
                name: t("information_system"),
                description: t("information_system_description"),
              },
              {
                name: t("Traceability"),
                description: t("Traceability_description"),
              },
              {
                name: t("certifications"),
                description: t("certifications_description"),
              },
              {
                name: t("regulation"),
                description: t("regulation_description"),
              },
              {
                name: t("staff"),
                description: t("staff_description"),
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  {tool.name}
                </h3>
                <p className="text-gray-700">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software and Services */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("resources")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: t("management_system"),
              },
              {
                name: t("certifications"),
              },
              {
                name: t("software"),
              },
              {
                name: t("operational_capabilities"),
              },
              {
                name: t("Operational_excellence"),
              },
              {
                name: t("distribution_network"),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
