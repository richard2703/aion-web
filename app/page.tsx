"use client";
import React, { useState, useEffect, use } from "react";
import {
  ArrowRight,
  Check,
  Users,
  BarChart,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function Page() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const fullText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, neque provident quae, illo impedit sint aliquam amet deleniti pariatur adipisci excepturi dolore. Voluptates consequatur ab rem recusandae libero excepturi sapiente!";

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setFinished(true);
      }, 2000);
    }
  }, [index, fullText]);

  useEffect(() => {
    if (finished) {
      setText("");
      setIndex(0);
      setFinished(false);
    }
  }, [finished]);

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-50% via-green-800 via-90% to-purple-800 to-100%">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Transforma tu Negocio
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100 h-20">
            {text}
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              Comienza Ahora
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ].map((reason, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="text-green-500 mr-4" size={24} />
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            Características Principales
          </h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              },
              {
                icon: <BarChart className="h-8 w-8 text-blue-600" />,
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Seguridad Robusta",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "María García",
                role: "CEO, TechStart",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                name: "Carlos Rodríguez",
                role: "Director de Marketing, GrowthCo",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                name: "Ana Martínez",
                role: "Freelancer",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow">
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={`https://i.pravatar.cc/150?img=${index + 1}`}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-blue-100 text-center mb-8">
            Únete a miles de empresas que ya están transformando su negocio con
            &nbsp;
            <span className="font-bold">aion®</span>.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Solicita una Cotizacion
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
