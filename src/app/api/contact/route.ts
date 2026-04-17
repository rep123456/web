import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const firstName = String(body?.vorname ?? "").trim();
    const lastName = String(body?.nachname ?? "").trim();
    const fullName = String(body?.name ?? `${firstName} ${lastName}`).trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.telefon ?? body?.phone ?? "").trim();
    const location = String(body?.plz ?? body?.location ?? "").trim();
    const applianceType = String(body?.geraetetyp ?? body?.deviceType ?? "").trim();
    const message = String(body?.message ?? "").trim();

    const detailRows = [
      { label: "Name", value: fullName },
      { label: "E-Mail", value: email },
      { label: "Telefon", value: phone },
      { label: "Standort / PLZ", value: location },
      { label: "Geraetetyp", value: applianceType },
      { label: "Nachricht", value: message },
    ];

    const htmlDetails = detailRows
      .filter((row) => row.value.length > 0)
      .map(
        (row) =>
          `<p><b>${row.label}:</b> ${row.value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\n/g, "<br/>")}</p>`
      )
      .join("");

    const textDetails = detailRows
      .filter((row) => row.value.length > 0)
      .map((row) => `${row.label}: ${row.value}`)
      .join("\n");

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
        ${htmlDetails || "<p>Keine Details uebermittelt.</p>"}
      `,
      text: `Neue Anfrage\n\n${textDetails || "Keine Details uebermittelt."}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
