import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/common/ServiceCard";
import EmergencyCTA from "@/components/common/EmergencyCTA";
import ContactForm from "@/components/contact/ContactForm";
import CallLink from "@/components/CallLink";
import { SERVICE_EMAIL, SERVICE_PHONE, SERVICE_PHONE_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Haushaltsgeräte Reparatur in Hamburg",
  description:
    "Haushaltsgeräte Reparatur in Hamburg – Waschmaschinen Reparatur, Geschirrspüler Reparatur, Kühlschrank Reparatur und Herd Reparatur durch erfahrene Techniker mit transparenten Fixpreisen.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie schnell kommt ein Techniker zu mir nach Hause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel können wir Termine innerhalb von 24 Stunden anbieten. In Notfällen – etwa bei Kühlgeräten – versuchen wir, noch am selben Tag zu kommen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel kostet eine Haushaltsgeräte Reparatur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir arbeiten mit transparenten Pauschalen für Anfahrt und Diagnose. Vor jeder Reparatur erhalten Sie einen verbindlichen Kostenvoranschlag, den Sie in Ruhe entscheiden können.",
      },
    },
    {
      "@type": "Question",
      name: "Reparieren Sie Geräte aller Marken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, unsere Techniker sind auf alle gängigen Marken spezialisiert – von AEG, Bosch, Miele, Siemens und Bauknecht bis hin zu vielen weiteren Herstellern.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es Garantie auf die Reparatur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, auf die von uns verbauten Ersatzteile und die ausgeführten Arbeiten erhalten Sie eine Gewährleistung. Details erläutert Ihnen Ihr Techniker vor Ort.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // FAQ schema for SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-slate-50">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
            <div className="mx-auto max-w-xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-light/40 px-3 py-1 text-xs font-semibold text-brand-dark ring-1 ring-brand/20">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[0.65rem] text-white">
                  ✓
                </span>
                <span>GeräteProfi Haushaltsgeräte Kundendienst</span>
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Haushaltsgeräte
                <br />
                <span className="text-brand">Reparatur</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Spezialisierte Techniker für Waschmaschinen, Geschirrspüler, Kühlschränke, Backöfen und Trockner – mit klaren Fixpreisen und ehrlicher Beratung.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CallLink
                  href={SERVICE_PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
                >
                  <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.75 3.5L6.5 3.25L8 6.75L6.25 7.75C6.83282 9.17223 7.82777 10.4172 9.25 11L10.25 9.25L13.75 10.75L13.5 12.5C13.3895 13.2312 12.7688 13.8105 12.0376 13.921L11.25 14C8.35051 13.8421 6.1579 12.6495 4.75 11.25C3.35051 9.8421 2.1579 7.64949 2 4.75L2.07902 3.96236C2.18949 3.23116 2.76884 2.61051 3.5 2.5L4.75 3.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Jetzt anrufen: {SERVICE_PHONE}
                </CallLink>
                <Link
                  href="#kontaktformular"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Jetzt Online-Anfrage senden
                </Link>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Mo–Fr 08:00–18:00 Uhr · Hamburgweiter Kundendienst
              </p>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section
          id="kontaktformular"
          className="mx-auto -mt-4 max-w-5xl px-4 pb-8 md:-mt-8 md:px-8 lg:px-10"
        >
          <ContactForm />
        </section>

        {/* Services grid */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Haushaltsgeräte Reparatur für Ihr Zuhause
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Wir übernehmen Waschmaschinen Reparatur, Geschirrspüler Reparatur, Kühlschrank Reparatur, Herd Reparatur und weitere Hausgeräte – markenübergreifend mit Original- oder Qualitätsersatzteilen.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-2 text-sm font-semibold text-brand-dark hover:text-brand"
            >
              Alle Leistungen im Überblick
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Herd & Backofen Reparatur"
              description="Ob Herd oder Backofen: heizt nicht mehr richtig, brennt einseitig an oder zeigt Fehlercodes – wir reparieren Elektronik, Heizelemente und Sensoren fachgerecht."
              href="/services/backofen-reparatur"
              imageSrc="/Oven.jpg"
              imageAlt="Herd und Backofen Reparatur"
            />
            <ServiceCard
              title="Waschmaschinen Reparatur"
              description="Professionelle Waschmaschinen Reparatur, wenn die Maschine nicht mehr abpumpt, laute Geräusche macht oder Fehlercodes anzeigt – wir finden die Ursache und beheben den Defekt."
              href="/services/waschmaschinen-reparatur"
              imageSrc="/washaingmachine.jpg"
              imageAlt="Waschmaschine in der Haushaltsgeräte Reparatur"
            />
            <ServiceCard
              title="Trockner Reparatur"
              description="Trockner Reparatur, wenn das Gerät nicht mehr warm wird, Programme abbricht oder ewig läuft – unsere Techniker prüfen Heizung, Sensorik und Luftwege."
              href="/services/trockner-reparatur"
              imageSrc="/dryperrepair.jpeg"
              imageAlt="Trockner Reparatur"
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
              title="Altgeräte Entsorgen"
              description="Fachgerechte Entsorgung von Altgeräten und Elektrogeräten. Wir holen Ihr defektes oder nicht mehr benötigtes Gerät ab und entsorgen es umweltgerecht nach gesetzlichen Vorschriften."
              href="/services/altgeraete-entsorgen"
              imageSrc="/altgeräte.png"
              imageAlt="Altgeräte Entsorgen"
            />
            <ServiceCard
              title="Geschirrspüler Reparatur"
              description="Geschirrspüler Reparatur bei schlechtem Spülergebnis, Programmabbrüchen oder Überlaufen – wir sorgen wieder für strahlend sauberes Geschirr ohne Wasserlacken in der Küche."
              href="/services/geschirrspueler-reparatur"
              imageSrc="/dishwasher.jpg"
              imageAlt="Geschirrspüler in der Haushaltsgeräte Reparatur"
            />
            <ServiceCard
              title="Kühlschrank Reparatur"
              description="Kühlschrank Reparatur bei Temperaturproblemen, starker Eisbildung oder lauten Kompressoren – wir handeln schnell, damit Ihre Lebensmittel frisch bleiben."
              href="/services/kuehlschrank-reparatur"
              imageSrc="/Refrigerator.jpg"
              imageAlt="Kühlschrank Reparatur vor Ort"
            />
          </div>
        </section>

        {/* Why choose us */}
        <section className="border-y border-slate-200 bg-slate-50/60">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Warum GeräteProfi Kundendienst?
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                  Wir kombinieren die Vorteile eines regionalen Kundendienstes
                  mit professionellen Strukturen: kurze Wege, direkte
                  Ansprechpartner und klare Abläufe – von der Terminvereinbarung
                  bis zur fertigen Reparatur.
                </p>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <dt className="text-sm font-semibold text-slate-900">
                      Persönlicher Ansprechpartner
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">
                      Keine anonymen Hotlines – Sie sprechen direkt mit unserem
                      Service-Team in Hamburg, das Ihre Situation versteht.
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <dt className="text-sm font-semibold text-slate-900">
                      Klare Preisstruktur
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">
                      Fixe Kosten für Anfahrt & Diagnose, erst danach entscheiden
                      Sie, ob repariert werden soll. Keine versteckten Gebühren.
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <dt className="text-sm font-semibold text-slate-900">
                      Qualifizierte Techniker
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">
                      Regelmäßige Schulungen, moderne Messgeräte und Zugriff auf
                      Herstellerinformationen sorgen für präzise Diagnosen.
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <dt className="text-sm font-semibold text-slate-900">
                      Nachhaltige Lösung
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">
                      Eine Reparatur verlängert die Lebensdauer Ihres Geräts und
                      schont Ressourcen – oft wirtschaftlicher als ein Neukauf.
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Process steps */}
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  So läuft Ihre Reparatur ab
                </h3>
                <ol className="mt-4 space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-light text-xs font-semibold text-brand-dark">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">Anruf</p>
                      <p className="mt-1">
                        Sie rufen uns an oder senden eine Online-Anfrage mit
                        einer kurzen Fehlerbeschreibung und Fotos, wenn möglich.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-light text-xs font-semibold text-brand-dark">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Diagnose vor Ort
                      </p>
                      <p className="mt-1">
                        Ein Techniker kommt zum vereinbarten Termin zu Ihnen,
                        prüft das Gerät und erstellt einen Kostenvoranschlag.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-light text-xs font-semibold text-brand-dark">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">Reparatur</p>
                      <p className="mt-1">
                        Nach Ihrer Freigabe führen wir die Reparatur sofort durch
                        – falls nötig mit hochwertigen Ersatzteilen.
                      </p>
                    </div>
                  </li>
                </ol>
                <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-600">
                  <p>
                    Für dringende Fälle vermerken Sie dies bitte direkt in Ihrer
                    Anfrage – wir versuchen, möglichst zeitnahe Termine zu
                    ermöglichen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Häufige Fragen zur Geräte-Reparatur
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Hier finden Sie Antworten auf die häufigsten Fragen rund um
                Ablauf, Kosten und Garantie. Weitere Details klären wir gerne im
                persönlichen Gespräch.
              </p>
              <div className="mt-6 space-y-4">
                <details className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-slate-900">
                    <span>Wie schnell bekomme ich einen Termin?</span>
                    <span className="text-slate-400 group-open:hidden">+</span>
                    <span className="hidden text-slate-400 group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    In Ballungsräumen wie Hamburg sind Termine meist innerhalb
                    von 24 Stunden möglich. In ländlichen
                    Regionen planen wir so, dass wir mehrere Einsätze bündeln –
                    dadurch bleiben die Anfahrtskosten fair.
                  </p>
                </details>
                <details className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-slate-900">
                    <span>Was passiert, wenn sich die Reparatur nicht lohnt?</span>
                    <span className="text-slate-400 group-open:hidden">+</span>
                    <span className="hidden text-slate-400 group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Sollte die Reparatur im Vergleich zu einem Neugerät nicht
                    wirtschaftlich sein, erklären wir Ihnen transparent die
                    Gründe. Sie zahlen in diesem Fall nur Anfahrt und Diagnose –
                    keine versteckten Zusatzkosten.
                  </p>
                </details>
                <details className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-slate-900">
                    <span>Welche Zahlungsarten akzeptieren Sie?</span>
                    <span className="text-slate-400 group-open:hidden">+</span>
                    <span className="hidden text-slate-400 group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Sie können bequem per Bankomatkarte, Kreditkarte oder in Bar
                    direkt beim Techniker bezahlen. Für gewerbliche Kunden sind
                    nach Vereinbarung auch Sammelrechnungen möglich.
                  </p>
                </details>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Noch Fragen offen?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Unser Service-Team hilft Ihnen gerne weiter und berät Sie, ob
                eine Reparatur in Ihrem Fall sinnvoll ist.
              </p>
              <div className="mt-4 space-y-1.5 text-sm text-slate-700">
                <p>
                  <span className="font-medium text-slate-900">Telefon:</span>{" "}
                  <CallLink
                    href={SERVICE_PHONE_HREF}
                    className="font-medium text-brand-dark hover:text-brand"
                  >
                    {SERVICE_PHONE}
                  </CallLink>
                </p>
                <p>
                  <span className="font-medium text-slate-900">E-Mail:</span>{" "}
                  <a
                    href={`mailto:${SERVICE_EMAIL}`}
                    className="font-medium text-brand-dark hover:text-brand"
                  >
                    {SERVICE_EMAIL}
                  </a>
                </p>
                <p>
                  Oder nutzen Sie unser{" "}
                  <Link
                    href="/kontakt"
                    className="font-semibold text-brand-dark hover:text-brand"
                  >
                    Kontaktformular
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

