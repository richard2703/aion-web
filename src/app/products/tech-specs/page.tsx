import React from "react";
import Image from "next/image";

export default function page() {
  const products = [
    {
      name: "Proteína Premium",
      description:
        "Suplemento de proteína de alta calidad para recuperación muscular.",
      price: "$29.99",
      // image: "/proteina-premium.jpg",
    },
    {
      name: "Vitaminas Complejo B",
      description:
        "Complejo vitamínico para apoyar el sistema inmunológico y la energía.",
      price: "$19.99",
      // image: "/vitaminas-b.jpg",
    },
    {
      name: "Omega 3",
      description:
        "Suplemento de ácidos grasos Omega 3 para salud cardiovascular.",
      price: "$24.99",
      // image: "/omega-3.jpg",
    },
    {
      name: "Colágeno Hidrolizado",
      description: "Mejora la salud de la piel, cabello y articulaciones.",
      price: "$34.99",
      // image: "/colageno.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">Catálogo de Productos</h1>
          <p className="text-xl">
            Explora nuestra variedad de productos diseñados para mejorar tu
            salud y bienestar.
          </p>
        </div>
      </section>

      {/* Product Filter and Sort Options */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0">
              <select className="p-2 rounded border border-gray-300">
                <option>Filtrar por categoría</option>
                <option>Proteínas</option>
                <option>Vitaminas</option>
                <option>Ácidos grasos</option>
                <option>Colágeno</option>
              </select>
            </div>
            <div>
              <select className="p-2 rounded border border-gray-300">
                <option>Ordenar por</option>
                <option>Precio: Bajo a Alto</option>
                <option>Precio: Alto a Bajo</option>
                <option>Popularidad</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                {/* <Image
                  // src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto mb-4"
                /> */}
                <h3 className="text-2xl font-bold mb-2 text-blue-600">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <span className="text-xl font-bold text-blue-700">
                  {product.price}
                </span>
                <div className="mt-4">
                  <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Interesado en Nuestros Productos?
          </h2>
          <p className="text-xl mb-8">
            Explora nuestra línea completa de suplementos o contacta a nuestro
            equipo para recomendaciones personalizadas.
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
          >
            Ver Todos los Productos
          </a>
        </div>
      </section>
    </div>
  );
}
