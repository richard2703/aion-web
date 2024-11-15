"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { faqs } from "@/src/constants/faqs";

export default function page() {
  const t = useTranslations("FaqPage");
  const [activeIndex, setActiveIndex] = useState(null);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const fullText = t("description");

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

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-50% via-green-800 via-90% to-purple-800 to-100%">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100 h-20">
            {text}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">{t("faq")}</h2>
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
