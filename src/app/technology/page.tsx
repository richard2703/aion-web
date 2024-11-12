import React from "react";
import Image from "next/image";
import { Cpu } from "lucide-react";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-[#101566] text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">Nuestras Tecnologías</h1>
          <p className="text-xl">
            Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.
          </p>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tecnologías Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Cpu size={40} />,
                title: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                icon: <Cpu size={40} />,
                title: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                icon: <Cpu size={40} />,
                title: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                icon: <Cpu size={40} />,
                title: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
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

      {/* Tools and Frameworks */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Herramientas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
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
            Software y Servicios Utilizados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
              {
                name: "Lorem ipsum",
                description:
                  "Suspendisse dui mi, eleifend vel mauris in, mattis sagittis lorem.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
