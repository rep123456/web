import type { Metadata } from "next";
import Link from "next/link";
import EmergencyCTA from "@/components/common/EmergencyCTA";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kühlschrank Reparatur",
  description:
    "Kühlschrank Reparatur in Hamburg – schnelle Hilfe bei Temperaturproblemen, starker Eisbildung und lauten Kompressoren. Fachgerechte Diagnose und Reparatur vor Ort.",
};

const issues = [
  "Der Kühlschrank wird nicht mehr richtig kalt oder kühlt ungleichmäßig.",
  "Starke Eisbildung im Innenraum oder im Gefrierteil.",
  "Der Kompressor läuft dauerhaft oder ist ungewöhnlich laut.",
  "Wasser sammelt sich im Innenraum oder unter dem Gerät.",
  "Fehlercodes im Display oder Probleme mit No-Frost-Systemen.",
];

export default function KuehlschrankReparaturPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Haushaltsgeräte Reparatur
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Kühlschrank Reparatur – damit Ihre Lebensmittel geschützt bleiben
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Ein defekter Kühlschrank ist immer dringend. Wir übernehmen
            Kühlschrank Reparatur für Standgeräte, Einbaukühlschränke und
            Kühl-Gefrier-Kombinationen und sorgen dafür, dass Ihre Lebensmittel
            wieder sicher gelagert sind.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Häufige Störungen bei Kühlschränken
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Wir reparieren Geräte vieler Marken – von AEG, Bosch, Siemens
                und Miele bis hin zu Side-by-Side- und No-Frost-Geräten anderer
                Hersteller.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Bei Kühlschrank Problemen empfehlen wir eine rasche Anmeldung –
                so können wir eine Kühlkette-Unterbrechung möglichst kurz
                halten.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Ablauf der Kühlschrank Reparatur
              </h2>
              <ol className="mt-3 space-y-3 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-900">
                    1. Kontakt & Fehlerbeschreibung
                  </span>
                  <p className="mt-1">
                    Sie beschreiben Temperatur, Geräusch und eventuelle
                    Warnanzeigen. Fotos vom Gerätetyp helfen bei der
                    Vorbereitung.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    2. Diagnose vor Ort
                  </span>
                  <p className="mt-1">
                    Wir prüfen Thermostate, Sensoren, Lüfter, Kompressor und
                    Dichtungen. Anfahrt und Diagnose werden als Fixpreis
                    abgerechnet.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    3. Kostenvoranschlag & Reparatur
                  </span>
                  <p className="mt-1">
                    Sie erhalten einen transparenten Kostenvoranschlag. Danach
                    reparieren wir das Gerät oder tauschen defekte Komponenten
                    aus.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Priorisierte Termine für Kühlschrank Reparatur
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Defekte Kühlgeräte behandeln wir möglichst als dringende Fälle.
                Übermitteln Sie uns Ihre Anfrage – wir melden uns mit den
                nächstmöglichen Terminen und sinnvollen Sofortmaßnahmen.
              </p>
              <div className="mt-6">
                <ContactForm lang="de" defaultApplianceKey="fridge" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

