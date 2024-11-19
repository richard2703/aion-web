import { useTranslations } from "next-intl";
import React from "react";

export default function page() {
  const t = useTranslations("PrivacyPage");
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-green-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          {/* <h2 className="text-xl font-bold mb-6">{t("title")}</h2> */}
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_1")}
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-xl font-bold mb-12">{t("subtitle_1")}</h2>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_2")}
          </p>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_3")}
          </p>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_4")}
            <span>
              <a
                href={t("aion_website")}
                className="text-blue-500"
                target="_blank"
              >
                {t("aion_website")}
              </a>
            </span>
          </p>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_5")}{" "}
            <span>
              <a
                href={t("aion_website")}
                className="text-blue-500"
                target="_blank"
              >
                {t("aion_website")}
              </a>
            </span>
          </p>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_6")}
          </p>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_7")}
          </p>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_8")}
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-xl font-bold mb-12">{t("subtitle_2")}</h2>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_9")}
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-xl font-bold mb-12">{t("subtitle_3")}</h2>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_10")}
          </p>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_11")}
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-xl font-bold mb-12">{t("subtitle_4")}</h2>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_12")}
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-xl font-bold mb-12">{t("subtitle_5")}</h2>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_13")}{" "}
            <span>
              <a
                href={t("aion_website")}
                className="text-blue-500"
                target="_blank"
              >
                {t("aion_website")}
              </a>
            </span>
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-xl font-bold mb-12">{t("subtitle_6")}</h2>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_14")}
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-xl font-bold mb-12">{t("subtitle_7")}</h2>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_15")}
          </p>
          <p className="font-bold text-slate-700 mb-4 text-justify">
            {t("paragraph_16")}{" "}
            <span>
              <a
                href={t("inai_website")}
                className="text-blue-500"
                target="_blank"
              >
                {t("inai_website")}
              </a>
            </span>
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <p className="font-bolder text-slate-700 mb-4 text-right ">
            {t("update_date")}
          </p>
        </div>
      </section>
    </div>
  );
}
