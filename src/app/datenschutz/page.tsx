import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten beim GeräteProfi Haushaltsgeräte Kundendienst.",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-6 md:pb-12 md:pt-14 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">Datenschutz</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
            gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser
            Datenschutzerklärung.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12 lg:px-8">
        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              1. Allgemeine Hinweise
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir
              erheben, wie wir sie verwenden und welche Rechte Sie als betroffene
              Person haben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              2. Verantwortlicher
            </h2>
            <div className="mt-3 space-y-1 text-sm leading-relaxed text-slate-600">
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="font-medium text-slate-900">GeräteProfi Kundendienst</p>
              <p>
                Telefon:{" "}
                <Link
                  href="tel:+4940573095223"
                  className="font-medium text-brand-dark hover:text-brand"
                >
                  +49 405 73095223
                </Link>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:office@repairexpert.at"
                  className="font-medium text-brand-dark hover:text-brand"
                >
                  office@repairexpert.at
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              3. Datenerhebung
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Wir erheben personenbezogene Daten grundsätzlich nur, wenn Sie uns
              diese freiwillig mitteilen, zum Beispiel im Rahmen einer
              Reparaturanfrage, per E-Mail, telefonisch oder über unser
              Kontaktformular.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Typische verarbeitete Daten sind insbesondere:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-600">
              <li>Kontaktdaten (Name, Adresse, Telefon, E-Mail)</li>
              <li>Angaben zum Gerät (Typ, Marke, Modell)</li>
              <li>Fehlerbeschreibung und sonstige Angaben zur Anfrage</li>
              <li>ggf. hochgeladene Dateien (z.&nbsp;B. Fotos vom Typenschild)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              4. Zwecke der Verarbeitung
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Ihre Daten werden ausschließlich zu folgenden Zwecken verarbeitet:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-600">
              <li>Kontaktaufnahme zur Beantwortung Ihrer Anfrage</li>
              <li>Terminvereinbarung und Einsatzplanung für Reparaturen</li>
              <li>Durchführung vorvertraglicher Maßnahmen und Erfüllung von Verträgen</li>
              <li>Erfüllung gesetzlicher Aufbewahrungspflichten</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur
              Vertragserfüllung erforderlich ist (z.&nbsp;B. an eingesetzte
              Techniker) oder wir hierzu gesetzlich verpflichtet sind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              5. Speicherdauer
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Wir speichern personenbezogene Daten nur so lange, wie dies für die
              Bearbeitung Ihrer Anfrage, die Durchführung des Auftrags oder zur
              Einhaltung gesetzlicher Aufbewahrungsfristen erforderlich ist.
              Danach werden die Daten gelöscht oder anonymisiert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              6. Kontaktformular
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden
              Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten bei uns
              gespeichert, um die Anfrage zu bearbeiten und für den Fall von
              Anschlussfragen.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter,
              soweit dies nicht zur Abwicklung des Auftrags erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              7. Ihre Rechte
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
              das Recht auf:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-600">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
              <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten</li>
              <li>Löschung Ihrer Daten, soweit keine gesetzlichen Pflichten entgegenstehen</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Zur Ausübung dieser Rechte sowie zu weiteren Fragen zum Thema
              Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              8. Widerruf von Einwilligungen
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Eine bereits erteilte Einwilligung in die Verarbeitung Ihrer
              personenbezogenen Daten können Sie jederzeit mit Wirkung für die
              Zukunft widerrufen. Senden Sie uns hierzu einfach eine formlose
              E-Mail an{" "}
              <a
                href="mailto:office@repairexpert.at"
                className="font-medium text-brand-dark hover:text-brand"
              >
                office@repairexpert.at
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              9. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. In
              Hamburg ist dies in der Regel die{" "}
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-dark hover:text-brand"
              >
                Hamburgische Datenschutzbehörde
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              10. SSL-/TLS-Verschlüsselung
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen über
              das Kontaktformular, eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
              Ihres Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt
              und an dem Schloss-Symbol in der Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              11. Cookies
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Unsere Website verwendet nur technisch notwendige Cookies, um die
              Darstellung und grundlegende Funktionen (z.&nbsp;B. Sprachauswahl,
              Session) sicherzustellen. Diese Cookies enthalten keine
              personenbezogenen Profile und werden in der Regel mit Schließen des
              Browsers oder nach kurzer Zeit automatisch gelöscht.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einem sicheren und funktionsfähigen Betrieb der
              Website). Analytische oder Marketing-Cookies werden derzeit nicht
              eingesetzt. Sollte sich dies in Zukunft ändern, holen wir vorab Ihre
              Einwilligung über einen Cookie-Hinweis ein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              12. Server-Logfiles &amp; Hosting
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Beim Aufruf unserer Website werden durch den Hosting-Provider
              automatisch sogenannte Server-Logfiles erhoben. Dabei kann es sich
              insbesondere um folgende Daten handeln:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-600">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seiten/Dateien</li>
              <li>übertragene Datenmenge</li>
              <li>Meldung über erfolgreichen Abruf (HTTP-Statuscode)</li>
              <li>Browsertyp, Browserversion und Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Diese Daten sind technisch erforderlich, um die Website stabil und
              sicher bereitzustellen, und werden ausschließlich zu diesem Zweck
              ausgewertet. Logfiles werden in der Regel nach kurzer Zeit
              automatisch gelöscht, sofern keine längere Aufbewahrung zu
              Beweiszwecken (z.&nbsp;B. bei Sicherheitsvorfällen) erforderlich ist.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der sicheren Bereitstellung der Website).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              13. Zahlungsabwicklung
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Erfolgt die Bezahlung unserer Leistungen elektronisch (z.&nbsp;B.
              Kartenzahlung beim Techniker oder per Überweisung), werden die
              hierfür erforderlichen Zahlungsdaten ausschließlich zum Zweck der
              Zahlungsabwicklung verarbeitet und, soweit nötig, an das jeweils
              beteiligte Zahlungsinstitut weitergegeben.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO
              (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. c DSGVO (gesetzliche
              Aufbewahrungspflichten, insbesondere steuer- und abgabenrechtliche
              Vorschriften).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              14. Datensicherheit &amp; Änderungen dieser Erklärung
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Wir setzen geeignete technische und organisatorische Maßnahmen ein,
              um Ihre personenbezogenen Daten vor Verlust, Missbrauch,
              unbefugtem Zugriff und sonstigen Risiken zu schützen. Diese
              Maßnahmen werden regelmäßig überprüft und dem Stand der Technik
              angepasst.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren,
              wenn dies aufgrund rechtlicher Vorgaben oder technischer
              Entwicklungen erforderlich ist. Es gilt jeweils die auf dieser
              Website veröffentlichte aktuelle Fassung.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

