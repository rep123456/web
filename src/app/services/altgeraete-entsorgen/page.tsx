import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Altgeräte Entsorgen | Fachgerechte Elektro-Entsorgung",
  description:
    "Wir entsorgen Ihre Altgeräte schnell, sicher und umweltgerecht. Abholung vor Ort inklusive. Jetzt unverbindlich anfragen.",
};

export default function AltgeraeteEntsorgenPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Haushaltsgeräte Reparatur
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Altgeräte Entsorgen
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Professionelle und umweltgerechte Entsorgung Ihrer alten
            Elektrogeräte – von der Abholung vor Ort bis zur gesetzeskonformen
            Übergabe an zertifizierte Entsorgungsbetriebe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:py-12">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Gesetzeskonforme Entsorgung
            </h2>
            <p className="text-sm text-slate-600">
              Elektroaltgeräte dürfen nicht über den Hausmüll entsorgt werden.
              Wir kümmern uns um die gesetzeskonforme Entsorgung gemäß
              Elektroaltgeräteverordnung und führen Ihre Geräte offiziellen
              Sammel- und Verwertungsstellen zu.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Abholung vor Ort
            </h2>
            <p className="text-sm text-slate-600">
              Auf Wunsch holen wir Ihre alten oder defekten Geräte direkt bei
              Ihnen zu Hause oder im Betrieb ab. So sparen Sie sich Transport,
              Schlepperei und Wartezeiten bei Sammelstellen.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Recycling & Umwelt
            </h2>
            <p className="text-sm text-slate-600">
              Wertstoffe wie Metalle, Kunststoffe und elektronische Komponenten
              werden recycelt, problematische Stoffe fachgerecht getrennt.
              Damit leisten Sie einen aktiven Beitrag zum Umweltschutz und zur
              Ressourcenschonung.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Transparente Kosten
            </h2>
            <p className="text-sm text-slate-600">
              Sie erhalten vorab eine klare Information zu Abhol- und
              Entsorgungskosten. Je nach Gerätegröße, Menge und Anfahrtsweg
              erstellen wir ein faires Pauschalangebot.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Jetzt Altgeräte fachgerecht entsorgen lassen
        </h2>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Beschreiben Sie kurz, welche Geräte entsorgt werden sollen und wo sie
          sich befinden. Wir melden uns mit einem unverbindlichen
          Kostenvoranschlag und Terminvorschlag.
        </p>
        <div className="mt-6">
          <ContactForm lang="de" defaultApplianceKey="other" />
        </div>
      </section>
    </div>
  );
}

