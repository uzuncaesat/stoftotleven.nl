import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_TOTAL_ATTACHMENT_BYTES = 4 * 1024 * 1024; // Vercel-vriendelijke limiet
const MAX_FILES = 5;

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@stoftotleven.nl";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Stof tot Leven <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Mailservice niet geconfigureerd (RESEND_API_KEY ontbreekt)." },
      { status: 500 },
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Ongeldige verzending." }, { status: 400 });
  }

  const naam = String(form.get("naam") || "").trim();
  const email = String(form.get("email") || "").trim();
  const onderwerp = String(form.get("onderwerp") || "").trim();
  const bericht = String(form.get("bericht") || "").trim();
  // Honeypot: bot-veld dat een mens leeg laat.
  const honeypot = String(form.get("website") || "").trim();

  if (honeypot) {
    // Doe alsof het is gelukt zodat bots geen feedback krijgen.
    return NextResponse.json({ ok: true });
  }

  if (!naam || !email || !onderwerp || !bericht) {
    return NextResponse.json(
      { ok: false, error: "Vul alle verplichte velden in." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Ongeldig e-mailadres." }, { status: 400 });
  }
  if (bericht.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Bericht is te kort." },
      { status: 400 },
    );
  }

  // Bijlagen verzamelen.
  const rawFiles = form.getAll("bijlagen").filter((v): v is File => v instanceof File && v.size > 0);
  if (rawFiles.length > MAX_FILES) {
    return NextResponse.json(
      { ok: false, error: `Maximaal ${MAX_FILES} bijlagen.` },
      { status: 400 },
    );
  }

  let totalSize = 0;
  const attachments: { filename: string; content: Buffer }[] = [];
  for (const file of rawFiles) {
    totalSize += file.size;
    if (totalSize > MAX_TOTAL_ATTACHMENT_BYTES) {
      return NextResponse.json(
        {
          ok: false,
          error: `Gezamenlijke bijlagen zijn te groot (max ${(
            MAX_TOTAL_ATTACHMENT_BYTES /
            1024 /
            1024
          ).toFixed(0)} MB).`,
        },
        { status: 413 },
      );
    }
    const buf = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name || "bijlage", content: buf });
  }

  const safeNaam = escapeHtml(naam);
  const safeEmail = escapeHtml(email);
  const safeOnderwerp = escapeHtml(onderwerp);
  const safeBericht = escapeHtml(bericht).replace(/\n/g, "<br/>");

  const html = `
    <div style="font-family: Helvetica, Arial, sans-serif; color:#2F4C48; max-width:560px;">
      <h2 style="font-family: Georgia, serif; color:#2F4C48; margin:0 0 12px;">
        Nieuwe aanvraag via stoftotleven.nl
      </h2>
      <p style="margin:0 0 18px; color:#748281;">Onderwerp: ${safeOnderwerp}</p>
      <table style="width:100%; border-collapse:collapse; font-size:14px;">
        <tr>
          <td style="padding:8px 10px; background:#E9D9C3; width:140px;">Naam</td>
          <td style="padding:8px 10px; background:#FAFAFA;">${safeNaam}</td>
        </tr>
        <tr>
          <td style="padding:8px 10px; background:#E9D9C3;">E-mail</td>
          <td style="padding:8px 10px; background:#FAFAFA;">
            <a href="mailto:${safeEmail}" style="color:#2F4C48;">${safeEmail}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 10px; background:#E9D9C3; vertical-align:top;">Bericht</td>
          <td style="padding:8px 10px; background:#FAFAFA;">${safeBericht}</td>
        </tr>
        ${
          attachments.length
            ? `<tr>
                 <td style="padding:8px 10px; background:#E9D9C3;">Bijlagen</td>
                 <td style="padding:8px 10px; background:#FAFAFA;">${attachments.length} bestand(en) bijgevoegd</td>
               </tr>`
            : ""
        }
      </table>
      <p style="margin:20px 0 0; font-size:12px; color:#91A2A1;">
        Verzonden via het contactformulier op stoftotleven.nl
      </p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Stof tot Leven] ${onderwerp} — ${naam}`,
      html,
      attachments: attachments.length
        ? attachments.map((a) => ({ filename: a.filename, content: a.content }))
        : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Mail kon niet verzonden worden." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API exception:", err);
    return NextResponse.json(
      { ok: false, error: "Er ging iets mis bij het versturen." },
      { status: 500 },
    );
  }
}
