import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const port = Number(process.env.SMTP_PORT ?? 0);
    // Decide TLS mode by port:
    // - 465 -> implicit TLS (secure=true)
    // - 587 -> STARTTLS (secure=false)
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      // port 465 uses implicit TLS, port 587 typically uses STARTTLS (secure=false)
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Repair Expert" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "Neue Anfrage von Website",
      html: `
        <h2>Neue Anfrage</h2>
        <p>${body?.message ?? ""}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
