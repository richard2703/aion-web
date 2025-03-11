"use client";
import React, { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import JobForm from "@/src/components/job-form";
import { motion } from "framer-motion";
import Link from "next/link";

// Fade-in animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Section component for consistent styling and animations
const Section = ({
  children,
  className = "",
  bgColor = "bg-white",
}: {
  children: ReactNode;
  className?: string;
  bgColor?: string;
}) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    variants={fadeIn}
    className={`py-20 ${bgColor} ${className}`}
  >
    <div className="container mx-auto px-6 max-w-screen-lg">{children}</div>
  </motion.section>
);

// Benefit card component
const BenefitCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => (
  <motion.div
    className="p-6 bg-white rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center justify-center mb-4 text-green-600">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </motion.div>
);

export default function Page() {
  // For handling form visibility
  const [showForm, setShowForm] = useState(false);

  // Use effect for initial animations
  useEffect(() => {
    // Any client-side initialization can go here
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient Section */}
      <section className="relative bg-gradient-to-r from-slate-950 from-70% to-green-800 text-white py-28">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trabaja con nosotros
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Únete a nuestro equipo y sé parte de una empresa que valora el
              talento y la innovación
            </p>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Aplica ahora
            </button>
          </motion.div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Team Section */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full z-0"></div>
            <Image
              src="/core_team/staff.jpg"
              alt="Equipo de Aion"
              width={600}
              height={600}
              priority
              className="rounded-lg shadow-xl z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-full z-0"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Nuestro Equipo
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              El equipo de Aion se distingue por su pasión, compromiso y
              espíritu de colaboración. Somos un grupo de profesionales
              dedicados, que trabajamos con determinación y creatividad para
              alcanzar nuestros objetivos.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nos impulsamos mutuamente, valorando la diversidad de talentos y
              fomentando un ambiente de apoyo y aprendizaje continuo. Juntos,
              enfrentamos cada desafío con una mentalidad proactiva, siempre
              guiados por la excelencia, la innovación y los valores que nos
              representan.
            </p>
          </div>
        </div>
      </Section>

      {/* Culture Section */}
      <Section bgColor="bg-slate-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-800 relative inline-block">
            Nuestra cultura
            <div className="h-1 w-24 bg-green-600 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            En Aion, fomentamos una cultura laboral basada en la integridad, el
            respeto y la colaboración. Creemos en el crecimiento personal y
            profesional de nuestro equipo, promoviendo un ambiente donde la
            transparencia, la comunicación abierta y la confianza son
            fundamentales.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Valoramos la diversidad de ideas y el trabajo en equipo como pilares
            para la innovación y el éxito. Nuestro compromiso es crear un
            espacio donde cada persona se sienta escuchada, apoyada y motivada
            para alcanzar su máximo potencial, siempre con ética y
            responsabilidad en cada acción.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section bgColor="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">
            Beneficios de trabajar con nosotros
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="Crecimiento Profesional"
            description="Acceso a capacitaciones y programas de desarrollo continuo para potenciar tu carrera."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            }
          />
          <BenefitCard
            title="Ambiente Colaborativo"
            description="Fomentamos el trabajo en equipo y la innovación constante en un entorno de respeto mutuo."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
          />
          <BenefitCard
            title="Flexibilidad"
            description="Opciones de trabajo remoto y horarios adaptables para un mejor equilibrio entre vida personal y profesional."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            }
          />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section bgColor="bg-slate-50">
        <h2 className="text-3xl font-bold mb-12 text-slate-800 text-center">
          Lo que dice nuestro equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mr-4">
                <span className="text-slate-600 font-bold">MR</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">María Rodríguez</h4>
                <p className="text-slate-500 text-sm">Desarrolladora Senior</p>
              </div>
            </div>
            <p className="text-slate-600 italic">
              "Trabajar en Aion ha sido una experiencia transformadora. El
              ambiente colaborativo y las oportunidades de crecimiento son
              incomparables."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mr-4">
                <span className="text-slate-600 font-bold">JL</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Juan López</h4>
                <p className="text-slate-500 text-sm">Gerente de Proyectos</p>
              </div>
            </div>
            <p className="text-slate-600 italic">
              "El equilibrio entre vida personal y profesional que Aion ofrece
              es excepcional. Me siento valorado y apoyado en cada nuevo
              desafío."
            </p>
          </div>
        </div>
      </Section>

      {/* Application Form Section */}
      <Section bgColor="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">
            ¿Listo para unirte a nuestro equipo?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Completa el siguiente formulario y nos pondremos en contacto contigo
            pronto.
          </p>
        </div>

        {showForm ? (
          <JobForm
            vacante={{
              id: 0,
              title: "",
              description: "",
              requirements: [],
            }}
          />
        ) : (
          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Aplica ahora
            </button>
          </div>
        )}
      </Section>
    </div>
  );
}
