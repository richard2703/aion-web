import React from "react";
import Image from "next/image";

export default function page() {
  const developmentSteps = [
    {
      title: "Investigación de Ingredientes",
      description:
        "Analizamos las últimas investigaciones científicas para seleccionar ingredientes de alta calidad y efectividad comprobada, asegurando la seguridad y los beneficios de cada suplemento.",
      image: "/Münster.jpg",
    },
    {
      title: "Formulación Precisa",
      description:
        "Nuestros expertos en nutrición y salud formulan cuidadosamente cada suplemento, equilibrando dosis y combinaciones para maximizar los efectos deseados.",
      image: "/Münster.jpg",
    },
    {
      title: "Pruebas de Calidad",
      description:
        "Realizamos pruebas rigurosas en cada lote para verificar la pureza, potencia y seguridad de los ingredientes, asegurando la calidad de nuestros productos.",
      image: "/Münster.jpg",
    },
    {
      title: "Producción y Empaque",
      description:
        "Nuestros suplementos se producen en instalaciones de última generación, siguiendo estrictos estándares de seguridad y control para garantizar su integridad y eficacia.",
      image: "/Münster.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-green-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">
            Desarrollo de Suplementación
          </h1>
          <p className="text-xl">
            Un enfoque científico y riguroso para desarrollar suplementos de
            alta calidad.
          </p>
        </div>
      </section>

      {/* Supplement Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestro Proceso de Desarrollo
          </h2>
          <div className="space-y-12">
            {developmentSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 md:pl-10">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">
                    {step.title}
                  </h3>
                  <p className="text-slate-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies and Team Expertise */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tecnología y Equipo Dedicado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                Laboratorios de Calidad
              </h3>
              <p className="text-slate-700">
                Nuestras instalaciones están equipadas con la última tecnología
                para el análisis de ingredientes, asegurando la pureza y
                eficacia de cada suplemento.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                Equipo Experto
              </h3>
              <p className="text-slate-700">
                Contamos con un equipo de expertos en salud y nutrición que
                supervisan cada etapa del proceso, comprometidos con el
                desarrollo de suplementos efectivos y seguros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Interesado en Nuestros Suplementos?
          </h2>
          <p className="text-xl mb-8">
            Conoce más sobre nuestros productos o consulta a nuestros expertos
            para saber cuál suplemento es adecuado para ti.
          </p>
          <a
            href="#"
            className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
          >
            Ver Productos
          </a>
        </div>
      </section>
    </div>
  );
}
