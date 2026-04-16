import type { Metadata } from "next";
import Link from "next/link";
import EmergencyCTA from "@/components/common/EmergencyCTA";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Trockner Reparatur",
  description:
    "Trockner Reparatur in Hamburg – Behebung von Heizproblemen, langen Laufzeiten und Programmabbrüchen. Fachgerechte Diagnose und Reinigung von Luftwegen und Sensoren.",
};

const issues = [
  "Trockner wird nicht mehr warm oder die Wäsche bleibt feucht.",
  "Programme brechen ab oder laufen deutlich länger als gewohnt.",
  "Der Trockner meldet volle Kondensatbehälter oder verstopfte Filter, obwohl gereinigt wurde.",
  "Ungewöhnliche Geräusche oder Vibrationen beim Betrieb.",
  "Fehlercodes im Display, insbesondere bei Wärmepumpen- und Kondensationstrocknern.",
];

export default function TrocknerReparaturPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Haushaltsgeräte Reparatur
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Trockner Reparatur für Kondens- und Wärmepumpentrockner
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Ihr Trockner braucht ewig, wird nicht mehr warm oder bricht Programme
            ab? Wir übernehmen die Trockner Reparatur direkt bei Ihnen vor Ort
            und prüfen Heizung, Sensorik und Luftwege gründlich.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Häufige Probleme mit Trocknern
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Wir reparieren Kondens- und Wärmepumpentrockner vieler Marken –
                etwa AEG, Bosch, Siemens, Miele, Beko und weitere Hersteller.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Reinigen Sie vor dem Termin bitte Flusensiebe und leicht
                zugängliche Filter – so können wir uns vor Ort besser auf die
                eigentliche Trockner Reparatur konzentrieren.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                So gehen wir bei der Trockner Reparatur vor
              </h2>
              <ol className="mt-3 space-y-3 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-900">
                    1. Fehleranalyse
                  </span>
                  <p className="mt-1">
                    Wir prüfen Sensoren, Temperaturfühler, Elektronik und
                    Luftwege, um die Ursache für schwache Trocknungsleistung zu
                    finden.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    2. Reinigung & Funktionsprüfung
                  </span>
                  <p className="mt-1">
                    Verstopfte Wärmetauscher oder Luftkanäle werden gereinigt.
                    Anschließend testen wir den Trockner im Probelauf.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    3. Austausch defekter Bauteile
                  </span>
                  <p className="mt-1">
                    Falls nötig tauschen wir Heizelemente, Lüfter oder
                    Elektronikkomponenten – immer nach vorherigem
                    Kostenvoranschlag.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Termin für Trockner Reparatur vereinbaren
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Senden Sie uns Ihre Anfrage bequem online – wir beraten Sie,
                ob eine Reparatur wirtschaftlich sinnvoll ist und planen den
                nächsten freien Termin.
              </p>
              <div className="mt-6">
                <ContactForm lang="de" defaultApplianceKey="dryer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

