import React from "react";
import Image from "next/image";
import { Clock, Users, Globe, Award, PillBottle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("AboutPage");
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-purple-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl">{t("description")}</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg text-justify">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="/about/our_team.jpeg"
                alt="Vista general de la fábrica"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">{t("our_history")}</h2>
              <p className="font-bold text-slate-700 mb-4">
                {t("paragraph_1")}
              </p>
            </div>
          </div>
          <br />
          <p className="font-bold text-slate-700 mb-4">{t("paragraph_2")}</p>
          <p className="font-bold text-slate-700 mb-4">{t("paragraph_3")}</p>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto max-w-screen-lg">
          <div className=" gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-center text-2xl font-bold mb-4 text-purple-600">
                {t("our_purpose")}
              </h3>
              <p className="font-bold text-2xl text-slate-700 text-center">
                {t("purpose")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg"></div>
      </section>

      <section className="bg-gray-200 py-20">
        <div className="container mx-auto max-w-screen-lg">
          <div className=" gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-center text-2xl font-bold mb-4 text-purple-600">
                {t("quality_policies")}
              </h3>
              <p className="text-xl mt-2 text-black text-justify">
                {t("quality_policies_paragraph_1")}
              </p>
              <ul className="list-inside mt-4 text-xl mt-2 text-black text-justify gap-2">
                <li className="my-1">
                  <span className="font-bold">{t("principle_head_1")}</span>
                  {t("quality_policies_principle_1")}
                </li>
                <li className="my-1">
                  <span className="font-bold">{t("principle_head_2")}</span>
                  {t("quality_policies_principle_2")}
                </li>
                <li className="my-1">
                  <span className="font-bold">{t("principle_head_3")}</span>
                  {t("quality_policies_principle_3")}
                </li>
                <li className="my-1">
                  <span className="font-bold">{t("principle_head_4")}</span>
                  {t("quality_policies_principle_4")}
                </li>
                <li className="my-1">
                  <span className="font-bold">{t("principle_head_5")}</span>
                  {t("quality_policies_principle_5")}
                </li>
              </ul>
              <p className="text-xl mt-2 text-black text-justify">
                {t("quality_policies_paragraph_2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("our_impact")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock size={40} />,
                stat: "30",
                description: t("experience"),
              },
              {
                icon: <PillBottle size={40} />,
                stat: "400+",
                description: t("products"),
              },
              {
                icon: <Globe size={40} />,
                stat: "50+",
                description: t("partnerships"),
              },
              {
                icon: <Users size={40} />,
                stat: "150+",
                description: t("collaborators"),
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

      {/* Principles for action */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("principles")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("integrity"),
                description: t("integrity_description"),
              },
              {
                title: t("responsibility"),
                description: t("responsibility_description"),
              },
              {
                title: t("respect"),
                description: t("respect_description"),
              },
              {
                title: t("sense_of_urgency"),
                description: t("sense_of_urgency_description"),
              },
              {
                title: t("excellence"),
                description: t("excellence_description"),
              },
              {
                title: t("common_good"),
                description: t("common_good_description"),
              },
              {
                title: t("communication"),
                description: t("communication_description"),
              },
              {
                title: t("teamwork"),
                description: t("teamwork_description"),
              },
              {
                title: t("client_driven"),
                description: t("client_driven_description"),
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
        <div className="container mx-auto px-6 max-w-screen-lg text-justify">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("core_team")}
          </h2>

          <Image
            src="/about/staff.jpg"
            alt="Vista general de la fábrica"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <br />
          <p className="font-bold text-slate-700 mb-4">
            {t("team_paragraph_1")}
          </p>
          <p className="font-bold text-slate-700 mb-4">
            {t("team_paragraph_2")}
          </p>
          <p className="font-bold text-slate-700 mb-4">
            {t("team_paragraph_3")}
          </p>
        </div>
      </section>
    </div>
  );
}
