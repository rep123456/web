import type { Metadata } from "next";
import CallLink from "@/components/CallLink";
import { SERVICE_EMAIL, SERVICE_PHONE, SERVICE_PHONE_HREF } from "@/lib/contact";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie GeräteProfi für Reparaturen von Haushaltsgeräten in Hamburg. Telefon, E-Mail oder Schnellanfrage – wir melden uns zeitnah.",
};

export default function KontaktPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-6 md:pb-12 md:pt-12 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">Kontakt</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            So erreichen Sie uns
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Haben Sie eine defekte Waschmaschine, einen streikenden Geschirrspüler
            oder ein anderes Problem mit Ihrem Haushaltsgerät? Rufen Sie uns an,
            schreiben Sie eine E-Mail oder nutzen Sie das Kontaktformular – wir
            melden uns zeitnah bei Ihnen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Telefon & E-Mail
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Unser Service-Team ist für Sie da. Für dringende Fälle empfehlen
                wir einen Anruf.
              </p>
              <div className="mt-5 space-y-4 text-sm">
                <p>
                  <span className="font-medium text-slate-700">Telefon:</span>{" "}
                  <CallLink
                    href={SERVICE_PHONE_HREF}
                    className="font-medium text-brand-dark hover:text-brand"
                  >
                    {SERVICE_PHONE}
                  </CallLink>
                </p>
                <p>
                  <span className="font-medium text-slate-700">E-Mail:</span>{" "}
                  <a
                    href={`mailto:${SERVICE_EMAIL}`}
                    className="font-medium text-brand-dark hover:text-brand"
                  >
                    {SERVICE_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Hinweis zum Kontaktformular
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Bitte geben Sie so viele Details wie möglich an – Gerätetyp,
                Marke, Modell und eine kurze Fehlerbeschreibung. So können wir
                Sie schneller zurückrufen und den Termin vorbereiten.
              </p>
            </div>
          </div>

          <div id="kontaktformular">
            <ContactFormClient />
          </div>
        </div>
      </section>
    </div>
  );
}
