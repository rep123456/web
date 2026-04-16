import type { Metadata } from "next";
import Link from "next/link";
import EmergencyCTA from "@/components/common/EmergencyCTA";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Waschmaschinen Reparatur",
  description:
    "Waschmaschinen Reparatur in Hamburg – Diagnose, Trommel- und Pumpenreparatur, Austausch defekter Bauteile. Transparente Fixpreise und erfahrene Techniker.",
};

const issues = [
  "Die Waschmaschine pumpt nicht mehr ab oder bleibt mit Wasser stehen.",
  "Starke Geräusche beim Schleudern, vibrierende oder „wandernde“ Maschine.",
  "Fehlercodes im Display, Programmabbruch oder Startprobleme.",
  "Trommel dreht nicht mehr oder bleibt an einer Stelle hängen.",
  "Wasser läuft aus der Maschine oder es entsteht Schaum im Geräteumfeld.",
];

export default function WaschmaschinenReparaturPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Haushaltsgeräte Reparatur
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Waschmaschinen Reparatur bei Ihnen zu Hause
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Ihre Waschmaschine schleudert nicht mehr, zeigt Fehlercodes oder
            verliert Wasser? Unsere Techniker kommen zu Ihnen, prüfen das Gerät
            vor Ort und führen eine fachgerechte Waschmaschinen Reparatur mit
            klaren Fixpreisen durch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Typische Probleme mit Waschmaschinen
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Egal ob Frontlader oder Toplader – wir sind auf die Reparatur
                gängiger Marken wie AEG, Bosch, Miele, Siemens, Bauknecht und
                viele mehr spezialisiert.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Je genauer Sie uns das Fehlerbild schildern, desto gezielter
                können wir Ersatzteile bereits zum ersten Termin mitbringen.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                So läuft die Waschmaschinen Reparatur ab
              </h2>
              <ol className="mt-3 space-y-3 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-900">
                    1. Kontakt & Fehlerbeschreibung
                  </span>
                  <p className="mt-1">
                    Sie melden sich telefonisch oder über das Kontaktformular
                    und beschreiben kurz das Problem sowie Marke und Modell.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    2. Diagnose vor Ort zum Fixpreis
                  </span>
                  <p className="mt-1">
                    Unser Techniker prüft die Waschmaschine bei Ihnen zu Hause.
                    Anfahrt und Diagnose werden als Pauschale verrechnet.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    3. Kostenvoranschlag & Reparatur
                  </span>
                  <p className="mt-1">
                    Nach der Diagnose erhalten Sie einen verbindlichen
                    Kostenvoranschlag. Erst nach Ihrer Zustimmung führen wir die
                    Reparatur mit passenden Ersatzteilen durch.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Jetzt Termin für Waschmaschinen Reparatur anfragen
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Nutzen Sie das Formular, um uns Gerät, Fehlerbild und Ihren
                Wunschtermin zu senden – wir melden uns mit einer ersten
                Einschätzung und einem Terminvorschlag.
              </p>
              <div className="mt-6">
                <ContactForm lang="de" defaultApplianceKey="washer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

