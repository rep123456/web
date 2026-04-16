import type { Metadata } from "next";
import ServiceCard from "@/components/common/ServiceCard";
import EmergencyCTA from "@/components/common/EmergencyCTA";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Reparatur: Waschmaschine, Geschirrspüler, Kühlschrank, Backofen, Trockner – alle Marken, transparente Preise.",
};

export default function ServicesOverviewPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Leistungen
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Egal ob defekte Waschmaschine, streikender Geschirrspüler oder
            Kühlschrank mit Temperaturproblemen – wir bieten spezialisierte
            Reparaturservices für alle wichtigen Haushaltsgeräte in Hamburg.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Waschmaschinen Reparatur"
            description="Wenn die Trommel blockiert, das Wasser nicht mehr abgepumpt wird oder der Motor streikt, sorgen wir wieder für zuverlässige Waschgänge."
            href="/services/waschmaschinen-reparatur"
            imageSrc="/washaingmachine.jpg"
            imageAlt="Waschmaschinen Reparatur"
          />
          <ServiceCard
            title="Geschirrspüler Reparatur"
            description="Reinigt das Geschirr nicht mehr richtig, bleibt das Programm stehen oder zeigt das Display Fehlercodes? Wir finden die Ursache."
            href="/services/geschirrspueler-reparatur"
            imageSrc="/dishwasher.jpg"
            imageAlt="Geschirrspüler Reparatur"
          />
          <ServiceCard
            title="Kühlschrank Reparatur"
            description="Ob Kühlschrank, Kühl-Gefrier-Kombination oder Side-by-Side – bei Kühlproblemen handeln wir schnell, damit Ihre Lebensmittel geschützt bleiben."
            href="/services/kuehlschrank-reparatur"
            imageSrc="/Refrigerator.jpg"
            imageAlt="Kühlschrank Reparatur"
          />
          <ServiceCard
            title="Backofen Reparatur"
            description="Heizt nicht mehr richtig, wird ungleichmäßig heiß oder schaltet sich selbstständig aus? Wir kümmern uns um Elektronik, Heizelemente & Sensoren."
            href="/services/backofen-reparatur"
            imageSrc="/Oven.jpg"
            imageAlt="Backofen Reparatur"
          />
          <ServiceCard
            title="Elektroherd Reparatur"
            description="Defekte Kochplatten, durchgebrannte Heizspiralen oder Probleme mit der Temperaturregelung – wir reparieren Ihren Elektroherd fachgerecht direkt vor Ort."
            href="/services/elektroherd-reparatur"
            imageSrc="/Elektroherd.png"
            imageAlt="Elektroherd Reparatur"
          />
          <ServiceCard
            title="Mikrowellen Reparatur"
            description="Wenn die Mikrowelle nicht mehr gleichmäßig erhitzt, der Drehteller streikt oder ungewöhnliche Geräusche auftreten – wir prüfen Elektronik, Türkontakte und Magnetron."
            href="/services/mikrowellen-reparatur"
            imageSrc="/microwave.jpg"
            imageAlt="Mikrowellen Reparatur"
          />
          <ServiceCard
            title="Trockner Reparatur"
            description="Trocknet nicht mehr, wird zu heiß oder bricht das Programm ab? Wir prüfen Luftwege, Sensoren und Heizeinheiten Ihres Trockners."
            href="/services/trockner-reparatur"
            imageSrc="/dryperrepair.jpeg"
            imageAlt="Trockner Reparatur"
          />
          <ServiceCard
            title="Altgeräte Entsorgen"
            description="Fachgerechte Entsorgung von Altgeräten und Elektrogeräten. Wir holen Ihr defektes oder nicht mehr benötigtes Gerät ab und entsorgen es umweltgerecht nach gesetzlichen Vorschriften."
            href="/services/altgeraete-entsorgen"
            imageSrc="/altgeräte.png"
            imageAlt="Altgeräte Entsorgen"
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Marken, mit denen wir täglich arbeiten
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Unsere Techniker sind mit den meisten in Hamburg verbreiteten
              Marken vertraut. Dazu gehören unter anderem:
            </p>
            <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "AEG",
                "Bauknecht",
                "Bosch",
                "Miele",
                "Siemens",
                "Electrolux",
                "Gorenje",
                "Neff",
                "Privileg",
              ].map((brand) => (
                <div
                  key={brand}
                  className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Ihre Marke ist nicht angeführt? Kontaktieren Sie uns – oft können
              wir dennoch Ersatzteile bestellen oder passende Lösungen finden.
            </p>
          </div>

          <EmergencyCTA compact />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Ablauf Ihrer Reparatur – von der Anfrage bis zur fertigen Lösung
          </h2>
          <ol className="mt-3 grid gap-4 text-sm text-slate-600 md:grid-cols-3">
            <li>
              <p className="font-semibold text-slate-900">
                1. Kontakt & Fehlerbeschreibung
              </p>
              <p className="mt-1">
                Sie schildern uns telefonisch oder per Formular das Problem, geben
                Marke und Modell an und senden, wenn möglich, ein Foto des
                Typenschilds.
              </p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">
                2. Termin & Anfahrt zum Fixpreis
              </p>
              <p className="mt-1">
                Wir vereinbaren einen konkreten Zeitrahmen und kommen zum
                vereinbarten Termin zu Ihnen. Anfahrt und Diagnose sind als
                Pauschale klar ausgewiesen.
              </p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">
                3. Kostenvoranschlag & Reparatur
              </p>
              <p className="mt-1">
                Nach der Diagnose erhalten Sie einen transparenten
                Kostenvoranschlag. Erst wenn Sie zustimmen, führen wir die
                Reparatur durch.
              </p>
            </li>
          </ol>
          <p className="mt-3 text-xs text-slate-500">
            Tipp: Je genauer Ihre Beschreibung, desto besser können wir
            Ersatzteile bereits vorab einplanen und eine Reparatur in nur einem
            Termin ermöglichen.
          </p>
        </div>
      </section>
    </div>
  );
}

