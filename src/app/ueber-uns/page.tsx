import type { Metadata } from "next";
import Link from "next/link";
import EmergencyCTA from "@/components/common/EmergencyCTA";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "GeräteProfi – Ihr Partner für Reparaturen von Haushaltsgeräten in Hamburg. Erfahrene Techniker, faire Preise, schneller Service. Erfahren Sie mehr über uns.",
};

const values = [
  {
    title: "Schnelligkeit",
    description:
      "Termine meist innerhalb von 24 Stunden. Bei dringenden Fällen – z. B. Kühlgeräten – bemühen wir uns um denselben Tag.",
    icon: "⚡",
  },
  {
    title: "Transparenz",
    description:
      "Feste Pauschalen für Anfahrt und Diagnose. Vor jeder Reparatur erhalten Sie einen verbindlichen Kostenvoranschlag – keine Überraschungen.",
    icon: "€",
  },
  {
    title: "Qualität",
    description:
      "Erfahrene Techniker, hochwertige Ersatzteile und Gewährleistung auf unsere Arbeiten. Wir reparieren nachhaltig, nicht nur schnell.",
    icon: "✓",
  },
  {
    title: "Kundennähe",
    description:
      "Wir kommen zu Ihnen nach Hause. Persönliche Beratung, klare Kommunikation und ein Ansprechpartner, der Sie ernst nimmt.",
    icon: "👤",
  },
];

const highlights = [
  "Reparatur aller gängigen Marken – AEG, Bosch, Miele, Siemens, Bauknecht und viele mehr",
  "Festpreis für Anfahrt und Diagnose, danach entscheiden Sie in Ruhe",
  "Notdienst für dringende Fälle – auch abends und am Wochenende",
  "Gewährleistung auf Ersatzteile und ausgeführte Arbeiten",
];

export default function AboutUsPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 md:px-6 md:pb-16 md:pt-14 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">Über uns</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]">
            Wer wir sind – und warum Sie uns vertrauen können
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            GeräteProfi steht für schnelle, faire und transparente Reparaturen von
            Haushaltsgeräten in Hamburg. Wir kommen zu Ihnen – mit erfahrenen
            Technikern, klaren Preisen und dem Anspruch, Ihr Gerät wieder
            zuverlässig zum Laufen zu bringen.
          </p>
        </div>
      </section>

      {/* Mission / Wer wir sind */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Unser Auftrag
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Wenn die Waschmaschine streikt, der Geschirrspüler nicht mehr
              spült oder der Kühlschrank warm wird, sind Sie auf zuverlässige
              Hilfe angewiesen. Genau dafür sind wir da: Wir reparieren
              Haushaltsgeräte aller gängigen Marken – vor Ort bei Ihnen, mit
              fairen Preisen und ohne versteckte Kosten.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Unser Ziel ist einfach: Ihr Gerät soll wieder zuverlässig
              funktionieren. Dafür setzen wir auf qualifizierte Techniker,
              hochwertige Ersatzteile und eine ehrliche Beratung. Wenn eine
              Reparatur wirtschaftlich nicht sinnvoll ist, sagen wir es Ihnen
              offen – und helfen Ihnen bei der Entscheidung.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Das bieten wir Ihnen
            </h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {highlights.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Was uns ausmacht
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Vier Prinzipien, an die wir uns bei jeder Reparatur halten.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-brand/30 hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-xl text-brand-dark">
                  {v.icon}
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us / Vertrauen */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Warum Kunden uns wählen
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Wir wissen, dass defekte Geräte Stress bedeuten. Deshalb legen wir
            Wert auf klare Abläufe, verständliche Kommunikation und ein
            faires Preis-Leistungs-Verhältnis.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Klare Kommunikation
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Sie erfahren vor der Reparatur, was ansteht und was es kostet.
                  Kein Kleingedrucktes, keine versteckten Posten.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Faire Preise
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Feste Pauschale für Anfahrt und Diagnose. Der Kostenvoranschlag
                  für die Reparatur ist verbindlich – Sie entscheiden in Ruhe.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Qualität & Gewährleistung
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Ersatzteile und Arbeiten sind abgesichert. Wir reparieren so,
                  dass Ihr Gerät wieder lange zuverlässig läuft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-10">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Haben Sie Fragen oder einen Reparaturwunsch?
          </h2>
          <p className="mt-3 text-slate-600">
            Rufen Sie uns an oder senden Sie eine Online-Anfrage – wir melden
            uns zeitnah bei Ihnen.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#kontaktformular"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Online Anfrage
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6 lg:px-8">
        <EmergencyCTA />
      </section>
    </div>
  );
}
