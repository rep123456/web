import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notdienst",
  description:
    "Notdienst für Haushaltsgeräte in Hamburg – Kühlschrank ausgefallen, Waschmaschine leckt? Schnelle Hilfe auch abends und am Wochenende. Transparente Notdienst-Zuschläge.",
};

const urgentCases = [
  {
    title: "Kühlschrank oder Gefrierschrank ausgefallen",
    description: "Lebensmittel sind gefährdet – wir versuchen, schnell zu kommen.",
  },
  {
    title: "Waschmaschine leckt oder pumpt nicht ab",
    description: "Wasserschaden vermeiden – bei Undichtigkeit handeln wir priorisiert.",
  },
  {
    title: "Geschirrspüler leckt",
    description: "Wasser im Gerät oder auf dem Boden – wir prüfen und sichern.",
  },
  {
    title: "Andere dringende Ausfälle",
    description: "Wenn Sie ohne das Gerät nicht auskommen, können Sie den Notdienst nutzen.",
  },
];

const steps = [
  {
    step: 1,
    title: "Anruf",
    text: "Rufen Sie unsere Notdienst-Nummer an. Sie erreichen uns ohne Callcenter – wir klären kurz das Problem und vereinbaren einen Zeitrahmen.",
  },
  {
    step: 2,
    title: "Anfahrt & Diagnose",
    text: "Ein Techniker kommt zu Ihnen. Anfahrt und Diagnose werden als Notdienst-Pauschale berechnet – die Höhe nennen wir Ihnen am Telefon.",
  },
  {
    step: 3,
    title: "Kostenvoranschlag & Reparatur",
    text: "Nach der Prüfung erhalten Sie einen transparenten Kostenvoranschlag. Erst nach Ihrer Zustimmung führen wir die Reparatur durch.",
  },
];

export default function NotdienstPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero with phone CTA */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-brand-dark to-brand text-brand-light">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-light/90">
            Notdienst Haushaltsgeräte
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.5rem]">
            Dringender Ausfall? Wir kommen schnell.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-light/90 sm:text-lg">
            Der Notdienst wird derzeit nicht angeboten. Für dringende Ausfälle
            senden Sie uns bitte eine Anfrage über das Kontaktformular – wir
            versuchen, möglichst zeitnah einen Termin zu finden.
          </p>
          <div className="mt-8" />
        </div>
      </section>

      {/* When to use emergency */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Wann ist der Notdienst sinnvoll?
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Bei diesen Fällen lohnt sich ein Anruf beim Notdienst – wir priorisieren
          Sie und versuchen, zeitnah zu kommen.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {urgentCases.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-sm font-semibold text-brand-dark">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Ablauf des Notdienstes
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Drei Schritte von Ihrem Anruf bis zur fertigen Reparatur.
          </p>
          <ol className="mt-8 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
            {steps.map((s) => (
              <li
                key={s.step}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-bold text-white">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Availability & costs */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Erreichbarkeit & Einsatzgebiete
            </h2>
            <p className="mt-3 text-slate-600">
              Unser Notdienst ist an Werktagen abends und am Wochenende erreichbar.
              Wir kommen in Hamburg und vielen Regionen Hamburgs zu Ihnen. Ob wir
              zu Ihrem Standort fahren können und in welchem Zeitrahmen, klären
              wir am Telefon.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Bitte rufen Sie an – per E-Mail oder Formular können wir keine
              zeitkritischen Einsätze koordinieren.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Notdienst-Zuschlag & Transparenz
            </h2>
            <p className="mt-3 text-slate-600">
              Für den Notdienst berechnen wir einen Zuschlag auf Anfahrt und
              Diagnose. Die genaue Höhe nennen wir Ihnen am Telefon, bevor wir
              einen Termin vereinbaren. So wissen Sie von Anfang an, was auf Sie
              zukommt.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Die Reparatur selbst wird wie gewohnt nach Kostenvoranschlag
              durchgeführt – Sie entscheiden in Ruhe, ob Sie zustimmen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Notdienst aktuell nicht verfügbar
          </h2>
          <p className="mt-3 text-slate-600">
            Für alle Anfragen – auch dringende – verwenden Sie bitte unsere{" "}
            <Link href="/kontakt" className="font-medium text-brand-dark hover:text-brand">
              Kontaktseite
            </Link>{" "}
            oder das{" "}
            <Link href="/#kontaktformular" className="font-medium text-brand-dark hover:text-brand">
              Kontaktformular
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
