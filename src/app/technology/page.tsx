import React, { useState } from "react";
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
        <div className="container mx-auto max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("key_technologies")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Cpu size={40} />,
                title: t("capsules"),
                description: t("capsules_description"),
                image: "/technologies/capsulas.png",
              },
              {
                icon: <Cpu size={40} />,
                title: t("tablets"),
                description: t("tablets_description"),
                image: "/technologies/capletas.png",
              },
              {
                icon: <Cpu size={40} />,
                title: t("powders"),
                description: t("powders_description"),
                image: "/technologies/polvos.png",
              },
              {
                icon: <Cpu size={40} />,
                title: t("liquids"),
                description: t("liquids_description"),
                image: "/technologies/liquidos.png",
              },
              {
                icon: <Cpu size={40} />,
                title: t("gels"),
                description: t("gels_description"),
                image: "/technologies/geles.png",
              },
              {
                icon: <Cpu size={40} />,
                title: t("ointments"),
                description: t("ointments_description"),
                image: "/technologies/cremas.png",
              },
            ].map((tech, index) => (
              <div
                key={tech.title}
                className="flip-card h-[350px] w-full md:w-[256px]"
              >
                {/* Card Inner - both front and back are within this wrapper */}
                <div className="flip-card-inner">
                  {/* Front Side of the Card */}
                  <div className="flip-card-front flex items-center justify-center rounded-lg shadow-lg h-full">
                    <div>
                      <Image
                        src={tech.image}
                        alt="Card Image"
                        width={256}
                        height={350}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Back Side of the Card */}
                  <div className="flip-card-back text-white flex items-center justify-center rounded-lg shadow-lg h-full">
                    <div className="p-6">
                      <p className="text-gray-600 text-lg font-bold">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
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
                <p className="font-bold text-slate-700">{tool.description}</p>
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
                description: t("management_system_description"),
                image: "/technologies/metro-map.png",
              },

              {
                name: t("software"),
                description: t("software_description"),
                image: "/technologies/odoo.jpeg",
              },
              {
                name: t("operational_capabilities"),
                description: t("operational_capabilities_description"),
                image: "/technologies/maquina-encapsuladora.jpeg",
              },
              {
                name: t("Operational_excellence"),
                description: t("Operational_excellence_description"),
                image: "/technologies/aion.png",
              },
            ].map((resource, index) => (
              <div className="container mx-auto my-5">
                <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
                  <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                    <div
                      className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
                      style={{
                        backgroundImage: `url(${resource.image})`,
                        backgroundBlendMode: "multiply",
                      }}
                    ></div>
                    <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                      <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
                        {resource.name}
                      </h3>
                    </div>
                    <svg
                      className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                  </div>

                  <div className="order-2 md:order-1 w-full h-full md:w-3/5 flex items-center ">
                    <div className="p-6  mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none overflow-y-auto">
                      <h3 className="hidden md:block font-bold text-2xl text-gray-800">
                        {resource.name}
                      </h3>
                      <p className="text-gray-600 text-justify font-bold  ">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
