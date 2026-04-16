import type { Metadata } from "next";
import Link from "next/link";
import EmergencyCTA from "@/components/common/EmergencyCTA";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Herd & Backofen Reparatur",
  description:
    "Herd und Backofen Reparatur in Hamburg – Behebung von Heizproblemen, ungleichmäßiger Hitze und Elektronikfehlern. Fachgerechte Diagnose und Reparatur vor Ort.",
};

const issues = [
  "Backofen heizt nicht mehr oder erreicht die eingestellte Temperatur nicht.",
  "Gerichte brennen einseitig an oder werden ungleichmäßig gebacken.",
  "Kochfelder funktionieren nicht mehr oder schalten sich selbst ab.",
  "Fehlercodes im Display, Probleme mit Bedienelementen oder Uhr.",
  "Sicherungen fliegen beim Einschalten des Geräts heraus.",
];

export default function BackofenReparaturPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Haushaltsgeräte Reparatur
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Herd & Backofen Reparatur für Ihre Küche
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Ob klassischer Backofen, Ceranfeld oder Induktionskochfeld – wir
            kümmern uns um Herd Reparatur und Backofen Reparatur und sorgen
            dafür, dass Sie wieder zuverlässig kochen und backen können.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Typische Defekte bei Herd & Backofen
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Unsere Techniker reparieren Elektroherde und Backöfen vieler
                Hersteller – von klassischen Standherden bis zu modernen
                Einbaugeräten.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Aus Sicherheitsgründen sollten Sie bei brennendem Geruch oder
                Kurzschlüssen den Herd vom Stromnetz trennen und uns rasch
                kontaktieren.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                So unterstützen wir Sie bei der Herd Reparatur
              </h2>
              <ol className="mt-3 space-y-3 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-900">
                    1. Fehlerbeschreibung & Sicherheitshinweis
                  </span>
                  <p className="mt-1">
                    Sie schildern uns das Verhalten von Herd oder Backofen.
                    Falls notwendig, erhalten Sie direkte Hinweise zum sicheren
                    Abschalten.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    2. Diagnose vor Ort
                  </span>
                  <p className="mt-1">
                    Wir prüfen Heizelemente, Temperaturfühler, Steuerung und
                    Anschlüsse. Die Diagnose erfolgt zum klaren Fixpreis.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    3. Reparatur mit passenden Ersatzteilen
                  </span>
                  <p className="mt-1">
                    Nach Ihrer Freigabe tauschen wir defekte Bauteile und testen
                    alle Funktionen – inklusive Aufheizverhalten und
                    Sicherheitsfunktionen.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Termin für Herd & Backofen Reparatur
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Beschreiben Sie kurz den Defekt an Herd oder Backofen – wir
                melden uns mit einer ersten Einschätzung und einem
                Terminvorschlag.
              </p>
              <div className="mt-6">
                <ContactForm lang="de" defaultApplianceKey="oven" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

