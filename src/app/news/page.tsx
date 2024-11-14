import React from "react";
import Image from "next/image";

export default function page() {
  const featuredArticle = {
    title: "La Innovación es la nueva norma: Tendencias para 2024",
    summary: "Explora las últimas tendencias en la industria...",
    image: "/Münster.jpg",
  };

  const recentArticles = [
    {
      title: "Nuevas Instalaciones",
      summary: "Nos expandimos a nuevas ubicaciones para mejor servicio.",
      image: "/Münster.jpg",
      date: "Octubre 10, 2024",
    },
    {
      title: "Certificación de Calidad",
      summary:
        "Hemos obtenido una nueva certificación que garantiza la calidad de nuestros procesos.",
      image: "/Münster.jpg",
      date: "Septiembre 22, 2024",
    },
    {
      title: "Automatización en la Industria",
      summary:
        "Descubre cómo estamos implementando soluciones de automatización en nuestras operaciones.",
      image: "/Münster.jpg",
      date: "Agosto 15, 2024",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-purple-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">Noticias y Blogs</h1>
          <p className="text-xl">
            Mantente al día con las últimas novedades y artículos informativos
            sobre nuestra empresa y el sector.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6 text-purple-600">
                {featuredArticle.title}
              </h2>
              <p className="font-bold text-slate-700 mb-4">
                {featuredArticle.summary}
              </p>
              <a
                href="#"
                className="text-purple-600 font-semibold hover:underline"
              >
                Leer más →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Últimos Artículos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="rounded-t-lg"
                />
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">
                    {article.title}
                  </h3>
                  <p className="font-bold text-slate-700 mb-4">
                    {article.summary}
                  </p>
                  <a
                    href="#"
                    className="text-purple-600 font-semibold hover:underline"
                  >
                    Leer más →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
