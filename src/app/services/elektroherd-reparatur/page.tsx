import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Elektroherd Reparatur",
  description:
    "Elektroherd Reparatur in Hamburg – Behebung von Heizproblemen, defekten Kochplatten und Temperaturfehlern. Fachgerechte Diagnose und Reparatur vor Ort.",
};

const issues = [
  "Eine oder mehrere Kochplatten werden nicht mehr heiß oder nur noch teilweise.",
  "Der Herd heizt ungleichmäßig oder schaltet sich von selbst ab.",
  "Die Restwärmeanzeige oder Kontrollleuchten funktionieren nicht mehr korrekt.",
  "Sicherungen lösen beim Einschalten des Elektroherds aus.",
  "Ungewöhnliche Gerüche, Geräusche oder Verfärbungen an Kochfeld oder Anschlüssen.",
];

export default function ElektroherdReparaturPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Haushaltsgeräte Reparatur
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Elektroherd Reparatur für Ihre Küche
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Wenn Kochplatten nicht mehr richtig heizen, Sicherungen fliegen oder
            der Elektroherd sich ungewöhnlich verhält, prüfen wir Heizspiralen,
            Regelung und Anschlüsse direkt bei Ihnen vor Ort.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Häufige Defekte am Elektroherd
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Unsere Techniker reparieren Elektroherde und Kochfelder vieler
                Hersteller – von klassischen Standherden bis zu modernen
                Glaskeramik- und Induktionsfeldern.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Aus Sicherheitsgründen sollten Sie bei Kurzschlüssen oder
                brennendem Geruch den Herd vom Stromnetz trennen und nicht mehr
                benutzen.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Termin für Elektroherd Reparatur vereinbaren
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Beschreiben Sie uns kurz den Defekt – zum Beispiel welche Platte
                betroffen ist oder welche Fehlermeldung erscheint. Wir melden
                uns mit einer ersten Einschätzung und einem Terminvorschlag.
              </p>
              <div className="mt-6">
                <ContactForm lang="de" defaultApplianceKey="electricCooker" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

