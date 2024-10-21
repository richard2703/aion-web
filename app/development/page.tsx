import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-screen p-6 mx-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-primary underline decoration-solid decoration-1 z-10">
            Desarrollo
          </h1>
          <h2 className="text-2xl mt-3 font-bold text-primary z-10">
            En AION reinventamos el desarrollo del prototipo de tu producto,
            Descubrelo!
          </h2>
        </div>

        <div className="row-span-2 w-full h-full relative">
          <Image
            src="/Münster.jpg"
            alt="logo"
            layout="fill" // Fills the parent container
            objectFit="cover" // Ensures the image covers the entire container
          />
        </div>

        <div className="mt-3">
          <h3 className="text-xl mt-3 font-bold text-primary z-10">
            Aliados de tu proyecto:
          </h3>

          <ul className="text-primary list-disc list-inside mt-3 z-10">
            <li>
              Levantamiento, elige entre mas de nuestras 200 formulas o
              desarrollamos una exclusiva para ti.
            </li>
            <li>Desarrollo de producto</li>
            <li>
              Presentación de un prototipo + costo + ficha tecnica +
              lineamientos regulatorios COFEPRIS
            </li>
            <li>Aprobación de la primera producción</li>
            <li>Entrega de tu primer lote + reporte de manofactura</li>
            <li>
              Retroalimentacio del desempeño de tu producto en el mercado.
            </li>
            <li>Preparación de un segundo pedido basado en resultados.</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2:bg-gray-100">
        <div className="content-center flex justify-center p-4">
          <Image
            src="/Münster.jpg"
            alt="logo"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-xl mt-3 font-bold text-primary z-10">
            Oferta de valor con AION unica en Mexico SIN COSTO EXTRA:
          </h3>
          <ul className="text-primary list-disc list-inside mt-3 z-10">
            <li>El mejor precio desde tu primer pedido</li>
            <li>Desarrollo de formulas exclusivas</li>
            <li>
              Ofrecemos diferentes opciones para el envasado y etiquetado de tu
              producto
            </li>
            <li>Laboratorio de desarrollo de prototipos</li>
            <li>Sesión a la introducción a la venta digital</li>
            <li>Vende en Amazon y mercado libre</li>
            <li>Estrategías antipirateria</li>
            <li>Analisis de mercado para tu producto</li>
            <li>
              Portal intranet para consulta del estatus de tus pedidos 24/7
            </li>
            <li>Reporte de manofactura: Data de cada lote</li>
            <li>Propuestas de empaque diferencias del mercado</li>
            <li>Contratos de confidencialidad</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-wrap justify-end">
        <h3 className="text-primary mt-3 z-10">
          ¿Listo contarnos de tu proyecto?
        </h3>
      </div>
      <div className="flex flex-wrap justify-end">
        <button className="rounded-md border text-primary p-2 hover:bg-gray-100 hover:text-background">
          <Link key={"CONTÁCTO"} href={"/contact"}>
            <p className="hidden md:block">{"CONTÁCTO"}</p>
          </Link>
        </button>
      </div>
    </main>
  );
}
