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
                      <p className="text-gray-600">{tech.description}</p>
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
              },

              {
                name: t("software"),
                description: t("software_description"),
              },
              {
                name: t("operational_capabilities"),
                description: t("operational_capabilities_description"),
              },
              {
                name: t("Operational_excellence"),
                description: t("Operational_excellence_description"),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {service.name}
                </h3>
                <p className="font-bold text-slate-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 
      <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <a href="#" className="block">
          <div className="h-28">
            <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
              <Image
                src="/Münster.jpg"
                alt="Card Image"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="p-6   z-10 w-full   ">
            <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
              Automotive
            </p>
          </div>
        </a>
      </div> */}
    </div>
  );
}
