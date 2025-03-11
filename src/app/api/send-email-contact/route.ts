import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, profession, comments, privacyConsent } = body;

    if (!name || !email || !privacyConsent) {
      return NextResponse.json(
        {
          message: "Nombre, correo y aceptación de privacidad son obligatorios",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contacto" <${process.env.EMAIL_USER}>`,
      to: "maquilas@aionsuplementos.com",
      subject: `Nuevo contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone || "No proporcionado"}</p>
        <p><b>Profesión:</b> ${profession || "No especificado"}</p>
        <p><b>Comentarios:</b> ${comments || "Sin comentarios"}</p>
        <p><b>Aceptó privacidad:</b> ${privacyConsent ? "Sí" : "No"}</p>
      `,
    });

    return NextResponse.json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
