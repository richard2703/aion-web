"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { faqs } from "@/src/constants/faqs";

export default function page() {
  const t = useTranslations("FaqPage");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-50% via-green-800 via-90% to-purple-800 to-100% text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">{t("description")}</h1>
          {/* <p className="text-xl">{t("description")}</p> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-purple-800">
                    {t(faq.question)}
                  </h3>
                  <span className="text-purple-800">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="text-xl font-bold text-slate-800 mt-4">
                    {t(faq.answer)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
