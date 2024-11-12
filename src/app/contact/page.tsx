"use client";

import React from "react";
import ContactForm from "../../components/contact-form";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 from-70%  to-green-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl">
            ¿Listo para iniciar esta aventura? <br />
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Aun tienes mas dudas?
          </h2>
          <h3 className="text-2xl text-center mb-8">¡Queremos conocerte!</h3>
          <ContactForm />
        </div>
      </section>

      {/* Mission and Vision */}

      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6 max-w-screen-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1662427401993!2d-103.40689861492446!3d20.662814551006026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae7f7b0e676b%3A0xb4ceb55da7f61d2b!2sC.%20de%20la%20Tilma%20294%2C%20Chapalita%20Sur%2C%2045040%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1730842784837!5m2!1ses-419!2smx"
            width="600"
            height="450"
            style={{ width: "100%", height: "100%", border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
