import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

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

    await transporter.sendMail({
      from: `"Repair Expert Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "New Lead from Website 🚀",
      html: `
        <h2>New Lead Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}

