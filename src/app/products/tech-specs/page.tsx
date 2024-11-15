import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { products } from "@/src/constants/products";

export default function page() {
  const t = useTranslations("products");

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-green-800 text-white py-20">
        <div className="container mx-auto px-6 ">
          <h1 className="text-4xl font-bold mb-4">Catálogo de Productos</h1>
          <p className="text-xl">
            Explora nuestra variedad de productos diseñados para mejorar tu
            salud y bienestar.
          </p>
        </div>
      </section>

      {/* Product Filter and Sort Options */}
      {/* <section className="py-8 bg-white">
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
      </section> */}

      {/* Product Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-slate-950 shadow-2xl rounded-lg p-6 text-center bg-clip-padding bg-opacity-5 border border-gray-200"
                style={{
                  backdropFilter: "blur(20px)",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-green-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="mt-4">
                  <a
                    href={product.file}
                    download={product.alt}
                    className="bg-green-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    Saber Mas
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
