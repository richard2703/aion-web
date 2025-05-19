"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Pill,
  Microscope,
  Factory,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { testimonial } from "@/src/constants/testimonials";

export default function Page() {
  const t = useTranslations("HomePage");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const fullText = t("purpose");

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
            {t("title")}
          </h1>
          <p className="mt-6 w-full mx-auto text-xl text-indigo-100 h-full">
            {text}
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              {t("get_started")}
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("why_us")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              t("point_one"),
              t("point_two"),
              t("point_three"),
              t("point_four"),
              t("point_five"),
              t("point_six"),
              t("point_seven"),
              t("point_eight"),
              t("point_nine"),
              t("point_ten"),
              t("point_eleven"),
            ].map((reason, index) => (
              <div key={index} className="flex items-center ">
                <CheckCircle className="text-green-500 mr-4" size={24} />
                <p className="text-lg font-semibold">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            {t("features")}
          </h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              {
                id: 1,
                icon: "/home/cicon1.png",
                description: t("feature_one"),
                image: "/home/caracteristicas1.JPG",
              },
              {
                id: 2,
                icon: "/home/cicon2.png",
                description: t("feature_two"),
                image: "/home/caractericas2.jpg",
              },
              {
                id: 3,
                icon: "/home/cicon3.png",
                description: t("feature_three"),
                image: "/home/caracteristica3.jpg",
              },
            ].map((feature) => (
              <div key={feature.id} className="flip-card">
                {/* Card Inner - both front and back are within this wrapper */}
                <div className="flip-card-inner">
                  {/* Front Side of the Card */}
                  <div className="flip-card-front text-white flex items-center justify-center rounded-lg shadow-lg">
                    <div>
                      <Image
                        src={feature.image}
                        alt="Card Image"
                        width={600}
                        height={800}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Back Side of the Card */}
                  <div className="flip-card-back text-white flex items-center justify-center rounded-lg shadow-lg">
                    <div className="p-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-100 mb-4">
                        <Image
                          src={feature.icon}
                          alt="Card Image"
                          width={32}
                          height={32}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                      <p className="text-lg text-gray-600 font-semibold ">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section>
        <div className="flex justify-center items-center bg-gray-200"></div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
            {t("testimonials")}
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonial.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow">
                <p className="text-gray-600 mb-4 font-semibold">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-800 font-semibold">
                      {testimonial.job}
                    </p>
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
            {t("ready_to_start")}
          </h2>
          <p className="text-xl text-blue-100 text-center mb-8">
            {t("join_us")}
            &nbsp;
            <span className="font-bold">{t("aion")}</span>.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              {t("get_quote")}
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
