import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // 🔹 Obtener los datos como FormData
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | null;
    const position = formData.get("position") as string | null;
    const linkedin = formData.get("linkedin") as string | null;
    const experience = formData.get("experience") as string | null;
    const privacyConsent = formData.get("privacyConsent") === "true"; // FormData envía todo como string
    const resume = formData.get("resume") as File | null; // ⬅️ Obtener el archivo correctamente

    if (!name || !email || !privacyConsent) {
      return NextResponse.json(
        {
          message: "Nombre, correo y aceptación de privacidad son obligatorios",
        },
        { status: 400 }
      );
    }

    if (!resume) {
      return NextResponse.json(
        { message: "El archivo de CV es obligatorio" },
        { status: 400 }
      );
    }

    // 🔹 Convertir el archivo en Buffer para adjuntarlo
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 🔹 Configurar nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔹 Enviar correo con archivo adjunto
    await transporter.sendMail({
      from: `"Vacantes" <${process.env.EMAIL_USER}>`,
      to: "r.rios@aionsuplementos.com",
      subject: `Nuevo contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone || "No proporcionado"}</p>
        <p><b>Posición:</b> ${position || "No proporcionada"}</p>
        <p><b>Linkedin:</b> ${linkedin || "No proporcionado"}</p>
        <p><b>Experiencia:</b> ${experience || "No proporcionada"}</p>
        <p><b>Aceptó privacidad:</b> ${privacyConsent ? "Sí" : "No"}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
          contentType: resume.type,
        },
      ],
    });

    return NextResponse.json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("❌ Error enviando correo:", error);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
