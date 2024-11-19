import { useTranslations } from "next-intl";
import React from "react";

export default function page() {
  const t = useTranslations("TermsPage");
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-purple-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-xl font-bold mb-6">{t("title")}</h2>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_1")}
            <span>
              <a
                href={t("aion_website")}
                className="text-blue-500"
                target="_blank"
              >
                {t("aion_website")}
              </a>
            </span>
            {t("paragraph_1_1")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_2")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_3")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_4")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_1")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_5")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_6")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_2")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_7")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_8")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_3")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {" "}
            {t("paragraph_9")}{" "}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_4")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_10")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_11")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_12")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_5")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_13")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_14")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_15")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_16")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_17")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_18")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_19")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_20")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_21")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_6")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_22")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_23")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_24")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_25")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_7")}</h3>
          <h3 className="text-xl font-bold mb-6">{t("subtitle_8")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_26")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_9")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_27")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_10")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_28")}
          </p>
          <br />
          <ol className="list-decimal list-inside font-bold text-slate-700 text-justify">
            <li className="font-bold text-slate-700 text-justify">
              {t("paragraph_29")}
            </li>
            <li className="font-bold text-slate-700 text-justify">
              {t("paragraph_30")}
            </li>
            <li className="font-bold text-slate-700 text-justify">
              {t("paragraph_31")}
            </li>
          </ol>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_32")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_33")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_34")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h3 className="text-xl font-bold mb-6">{t("subtitle_11")}</h3>
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_35")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_36")}
          </p>
          <br />
          <p className="font-bold text-slate-700 text-justify">
            {t("paragraph_37")}
          </p>
          <br />
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <p className="font-bolder text-slate-700 mb-4 text-right ">
            {t("update_date")}
          </p>
          <br />
        </div>
      </section>
    </div>
  );
}
