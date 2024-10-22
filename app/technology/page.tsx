import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-screen p-6 mx-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
        <div>
          <h1 className="text-4xl font-bold text-primary underline decoration-solid decoration-1 z-10">
            Tecnología
          </h1>
          <h2 className="text-2xl mt-3 font-bold text-primary z-10">
            Cuando decimos que nuestros procesos tienen tecnologia en el ADN, es
            por que nos lo tomamos en serio
          </h2>
        </div>

        <div className="row-span-6 w-full h-full relative">
          <Image
            src="/Münster.jpg"
            alt="logo"
            layout="fill" // Fills the parent container
            objectFit="cover" // Ensures the image covers the entire container
          />
        </div>

        <div className="flex items-center max-w-lg rounded-xl p-4 text-primary col-start-1">
          <div className="w-1/3 ">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h3 className="font-bold">Tecnologia de punta en la producción:</h3>
            <p>Maquinaria de ultima generación</p>
          </div>
        </div>

        <div className="flex items-center max-w-lg rounded-xl p-4 text-primary col-start-1">
          <div className="w-1/3">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h3 className="font-bold">Trazabilidad:</h3>
            <p>
              Un sistema que siempre permitira conocer todas las variables de
              tus productos
            </p>
          </div>
        </div>
        <div className="flex items-center max-w-lg rounded-xl p-4 text-primary col-start-1">
          <div className="w-1/3">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h3 className="font-bold">Sistemas de informacion:</h3>
            <p>Conoce el proceso de tus productos en tiempo real</p>
          </div>
        </div>
        <div className="flex items-center max-w-lg rounded-xl p-4 text-primary col-start-1">
          <div className="w-1/3">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h3 className="font-bold">
              Cumplimiento a la regulacion de la industria:
            </h3>
            <p>Cumplimos con todo 10 que requiere la autoridad y más</p>
          </div>
        </div>
        <div className="flex items-center max-w-lg rounded-xl p-4 text-primary col-start-1">
          <div className="w-1/3">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h3 className="font-bold">Personal calificado:</h3>
            <p>Todo el personal cuenta con certificacion en su proceso.</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1">
        <div className="content-center flex justify-center p-4 bg-primary rounded-full">
          <Image
            src="/certifications.png"
            alt="logo"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
      </div>

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
          <h3 className="mt-3 font-bold text-primary z-10">
            CONOCE NUESTRA TECNOLOGÍA
          </h3>
          <p className="text-primary mt-3 z-10 text-right">
            Te invitamos a conocer nuestro moderno centro de ingeniería, nuestro
            equipo de especialistas trabajan arduamente para crear formulaciones
            y prototipos, asegurando que recibas tus dummies en un plazo de 5 a
            20 días, dependiendo del tipo de producto.
            <br />
            Si deseas contar con un socio que conoce el mercado y que pone a tu
            disposición toda la experiencia para crear tu producto contáctanos.
            Permítenos proporcionarte todo 10 necesario para hacer de tu idea
            una empresa rentable.
          </p>
        </div>
      </div>
      <br />
      <br />

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
