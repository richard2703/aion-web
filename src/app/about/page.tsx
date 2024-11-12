import React from "react";
import Image from "next/image";
import { Clock, Users, Globe, Award } from "lucide-react";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-purple-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-xl">
            Más de dos décadas de excelencia en servicios de maquila
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="/Münster.jpg"
                alt="Vista general de la fábrica"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">Quiénes Somos</h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lacinia dui neque, eu blandit augue fermentum eget.
                Suspendisse lacus ipsum, condimentum ut hendrerit et, tincidunt
                id augue.
              </p>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lacinia dui neque, eu blandit augue fermentum eget.
                Suspendisse lacus ipsum, condimentum ut hendrerit et, tincidunt
                id augue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                Nuestra Misión
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lacinia dui neque, eu blandit augue fermentum eget.
                Suspendisse lacus ipsum, condimentum ut hendrerit et, tincidunt
                id augue.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                Nuestra Visión
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lacinia dui neque, eu blandit augue fermentum eget.
                Suspendisse lacus ipsum, condimentum ut hendrerit et, tincidunt
                id augue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestro Impacto en Números
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock size={40} />,
                stat: "20+",
                description: "Años de Experiencia",
              },
              {
                icon: <Users size={40} />,
                stat: "500+",
                description: "Empleados",
              },
              {
                icon: <Globe size={40} />,
                stat: "30+",
                description: "Países Atendidos",
              },
              {
                icon: <Award size={40} />,
                stat: "50+",
                description: "Premios de la Industria",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integridad",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Responsabilidad",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Respeto",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Sentido de urgencia",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Excelencia",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "comunicación",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Trabajo",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Orientación al cliente",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestro Equipo Directivo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María Rodríguez",
                position: "CEO",
                image: "/customers/evil-rabbit.png",
              },
              {
                name: "Carlos Gómez",
                position: "Director de Operaciones",
                image: "/customers/balazs-orban.png",
              },
              {
                name: "Ana Martínez",
                position: "Directora de Innovación",
                image: "/customers/delba-de-oliveira.png",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
