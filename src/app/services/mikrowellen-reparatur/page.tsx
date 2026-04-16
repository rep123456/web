import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Mikrowellen Reparatur",
  description:
    "Mikrowellen Reparatur in Hamburg – Behebung von Heizproblemen, Drehteller- und Elektronikfehlern. Fachgerechte Diagnose und Reparatur vor Ort.",
};

const issues = [
  "Die Mikrowelle heizt nicht mehr oder nur sehr ungleichmäßig.",
  "Der Drehteller dreht sich nicht oder ruckelt stark.",
  "Ungewöhnliche Geräusche oder Funkenbildung im Garraum.",
  "Türkontaktfehler: Gerät startet nicht oder bricht sofort ab.",
  "Fehlercodes im Display oder Probleme mit den Bedienelementen.",
];

export default function MikrowellenReparaturPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Haushaltsgeräte Reparatur
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Mikrowellen Reparatur für Haushalt & Büro
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Wenn Ihre Mikrowelle nicht mehr zuverlässig erwärmt, der Drehteller
            stehen bleibt oder Fehlermeldungen erscheinen, prüfen wir Elektronik,
            Türkontakte und Magnetron direkt bei Ihnen vor Ort.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Häufige Probleme mit Mikrowellen
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Wir reparieren viele gängige Mikrowellen-Modelle – vom einfachen
                Solo-Gerät bis zur Kombimikrowelle mit Grill- oder Heißluftfunktion.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Bitte verwenden Sie defekte Mikrowellen nicht weiter – vor allem
                bei Funkenbildung oder Verfärbungen im Garraum. Sicherheit geht vor.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Termin für Mikrowellen Reparatur vereinbaren
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Beschreiben Sie kurz das Fehlerbild und das Modell Ihrer
                Mikrowelle – wir melden uns mit einer ersten Einschätzung und
                einem passenden Terminvorschlag.
              </p>
              <div className="mt-6">
                <ContactForm lang="de" defaultApplianceKey="microwave" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

