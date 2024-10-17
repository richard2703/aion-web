"use client";

import React from "react";
import ContactForm from "../ui/contact-form";

export default function page() {
  return (
    <main className="min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div>
          <h1 className="text-8xl font-bold text-primary underline decoration-solid decoration-1 z-10">
            Contacto
          </h1>
          <h2 className="text-4xl mt-3 font-bold text-primary z-10">
            ¿Listo para iniciar esta aventura?
          </h2>
          <h3 className="text-2xl mt-3 font-bold text-primary z-10">
            ¿Aun tienes mas dudas?
          </h3>
          <p className="text-primary mt-3 z-10">¡Queremos conocerte!</p>
          <div className="mt-3">
            <ContactForm />
          </div>
        </div>
        <div>
          <iframe
            src={`https://maps.app.goo.gl/YNUnv72k6vJF2XiB7?key=YOUR_API_KEY`}
            style={{ width: "100%", height: "100%", border: "0" }}
          ></iframe>
        </div>
      </div>
    </main>
  );
}
