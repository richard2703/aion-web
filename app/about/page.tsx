import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-screen p-6 mx-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-primary underline decoration-solid decoration-1 z-10">
            Nosotros
          </h1>
          <h2 className="text-2xl mt-3 font-bold text-primary z-10">
            Nuestra misión es ser tu socio de negocio con productos rentables,
            en tendencia con el mercado y de alta calidad
          </h2>
        </div>

        <div className="row-span-2">
          <Image src="/Münster.jpg" alt="logo" width={800} height={400} />
        </div>

        <div className="mt-3">
          <h3 className="text-xl mt-3 font-bold text-primary z-10">
            Aliados de tu proyecto:
          </h3>
          <p className="text-primary mt-3 z-10">
            Con mas de 40 años en el mercado estamos listos para acompañarte en
            cada paso, desde tus primeras ideas hasta la producción de cápsulas,
            capletas, polvos, cremas, líquidos y geles, tanto en suplementos
            como productos cosmeticos.
            <br />
            <br />
            <em className="my-4">
              Materia prima de primera, contamos con proveedores certificados
            </em>
            <br />
            <br />
            Gran poder de manofactura capacidad instalada que permite entregar
            productos en tiempo record.
          </p>
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
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-xl mt-3 font-bold text-primary z-10">
            Congruentes con un entorno mejor:
          </h3>
          <p className="text-primary mt-3 z-10">
            Nos tomamos muy en serio nuestra responsabilidad con el entorno y la
            comunidad, así que puedes estar seguro de que tus productos estarán
            alineados con prácticas sostenibles.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2:bg-gray-100">
        <div>
          <h3 className="text-xl mt-3 font-bold text-primary z-10">
            Con un gran espiritu que nos impulsa:
          </h3>
          <p className="text-primary mt-3 z-10">
            En AION, nos regimos por principios fundamentales como la
            integridad, responsabilidad, respeto, sentido de urgencia,
            excelencia, bien común, comunicación, trabajo en equipo y
            orientación al cliente.
          </p>
        </div>
        <div className="content-center flex justify-center p-4">
          <Image
            src="/Münster.jpg"
            alt="logo"
            width={250}
            height={250}
            className="rounded-full"
          />
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
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-xl mt-3 font-bold text-primary z-10">
            Comprometidos con el consumidor:
          </h3>
          <p className="text-primary mt-3 z-10">
            La calidad es nuestra prioridad. Estamos certificados en Buenas
            Prácticas de Manufactura (BPM) e ISO, 10 que garantiza que seguimos
            estándares rigurosos para asegurar que nuestros suplementos sean
            seguros y de alta calidad. Estas certificaciones son nuestra promesa
            de que cada producto que fabricamos cumple con las mejores prácticas
            del sector, asegurando que 10 que ofreces a tus clientes sea lo
            mejor.
          </p>
        </div>
      </div>
      <span className="text-primary mt-3 z-10">
        ¿Listo contarnos de tu proyecto?
      </span>
      <br />
      <button className="rounded-md border text-primary p-2 hover:bg-gray-100 hover:text-background">
        <Link key={"CONTÁCTO"} href={"/contact"}>
          <p className="hidden md:block">{"CONTÁCTO"}</p>
        </Link>
      </button>
    </main>
  );
}