import type { Metadata } from "next";
import Link from "next/link";
import EmergencyCTA from "@/components/common/EmergencyCTA";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Geschirrspüler Reparatur",
  description:
    "Geschirrspüler Reparatur in Hamburg – Diagnose bei Pumpenproblemen, Undichtigkeiten und Elektronikfehlern. Transparente Fixpreise und professionelle Reparatur vor Ort.",
};

const issues = [
  "Das Geschirr wird nicht mehr richtig sauber oder bleibt nass.",
  "Programme brechen ab oder laufen endlos weiter.",
  "Fehlercodes im Display, meist in Kombination mit Pieptönen.",
  "Wasser im Gerät, in der Türdichtung oder auf dem Boden.",
  "Ungewöhnliche Geräusche von Pumpe, Sprüharmen oder Lüfter.",
];

export default function GeschirrspuelerReparaturPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Haushaltsgeräte Reparatur
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Geschirrspüler Reparatur für alle gängigen Marken
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Ihr Geschirrspüler reinigt nicht mehr richtig, bricht Programme ab
            oder verliert Wasser? Wir übernehmen die professionelle
            Geschirrspüler Reparatur bei Ihnen vor Ort – markenübergreifend und
            mit klarer Kostenübersicht.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Häufige Probleme mit Geschirrspülern
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Wir reparieren Einbau- und Standgeschirrspüler vieler Hersteller
                – etwa AEG, Bosch, Siemens, Miele, Bauknecht und weitere Marken.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Bilder vom Display oder Fehlercode helfen uns, die
                Geschirrspüler Reparatur besser vorzubereiten – gerne per E-Mail
                mitsenden.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Unser Ablauf bei der Geschirrspüler Reparatur
              </h2>
              <ol className="mt-3 space-y-3 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-900">
                    1. Kontakt & Fehlerbeschreibung
                  </span>
                  <p className="mt-1">
                    Sie beschreiben uns die Störung – zum Beispiel
                    Reinigungsleistung, Geräusch, Fehlercode oder Leckage.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    2. Diagnose bei Ihnen zu Hause
                  </span>
                  <p className="mt-1">
                    Wir prüfen Sprüharme, Siebe, Pumpe, Elektronik und
                    Wasserzulauf. Anfahrt und Diagnose werden als Pauschale
                    verrechnet.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    3. Kostenvoranschlag & Reparatur
                  </span>
                  <p className="mt-1">
                    Auf Basis der Diagnose erstellen wir einen schriftlichen
                    Kostenvoranschlag. Nach Ihrer Zustimmung reparieren wir
                    Pumpe, Ventile, Sensoren oder Elektronikbauteile.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Termin für Geschirrspüler Reparatur vereinbaren
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Beschreiben Sie kurz Störung, Marke und Modell – wir prüfen,
                ob eine Reparatur wirtschaftlich sinnvoll ist und melden uns
                mit einem Terminvorschlag.
              </p>
              <div className="mt-6">
                <ContactForm lang="de" defaultApplianceKey="dishwasher" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

