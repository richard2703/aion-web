"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("ProductPage");
  const developmentSteps = [
    {
      title: t("survey"),
      description: t("survey_description"),
      image: "/products/desarrollo 1.jpg",
    },
    {
      title: t("formulation"),
      description: t("formulation_description"),
      image: "/products/desarrollo 3.jpg",
    },
    {
      title: t("planning"),
      description: t("planning_description"),
      image: "/products/desarrollo 2.jpg",
    },
    {
      title: t("delivery"),
      description: t("delivery_description"),
      image: "/products/desarrollo 4.jpg",
    },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-green-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl">{t("description")}</p>
        </div>
      </section>
      <section className="bg-gray-200 py-6">
        <div className="container mx-auto px-6 max-w-screen-lg items-center">
          {/* Toggle Button */}
          <button
            onClick={toggleSection}
            className="w-full text-left bg-gray-200 py-3 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center"
          >
            <span className="text-lg font-bold">
              {isOpen ? `▼ ${t("hide")}` : `▶ ${t("show")}`}
            </span>
          </button>

          {/* Collapsible Content */}
          {isOpen && (
            <div className="mt-6">
              <video
                width="800"
                height="500"
                controls
                className="mx-auto relative top-0 right-0"
              >
                <source
                  src="/technologies/AION_PRESENTACION.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          )}
        </div>
      </section>

      {/* Supplement Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("subtitle")}
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
                  <p className="font-bold text-slate-800">{step.description}</p>
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
            {t("technology_and_equipment")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                {t("creative_lab")}
              </h3>
              <p className="font-bold text-slate-800">
                {t("creative_lab_description")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                {t("team")}
              </h3>
              <p className="font-bold text-slate-800">
                {t("team_description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#101566] text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg text-center">
          <h2 className="text-3xl font-bold mb-6">{t("discover")}</h2>
          <p className="text-xl mb-8">{t("discover_description")}</p>
          <a
            href="/products/tech-specs"
            className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
          >
            {t("discover_button")}
          </a>
        </div>
      </section>
    </div>
  );
}
