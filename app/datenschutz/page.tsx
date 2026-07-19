import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Datenschutz — SustainEstates GmbH',
  description: 'Datenschutzerklärung der SustainEstates GmbH.',
}

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="Stand: 01.10.2025">
      <div className="space-y-12">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">1. Verantwortlicher</h2>
          <p className="text-pretty">
            Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser
            Webseite ist:
          </p>
          <address className="not-italic leading-relaxed text-foreground">
            SustainEstates GmbH
            <br />
            Breite Straße 3<br />
            40213 Düsseldorf
            <br />
            Deutschland
          </address>
          <p className="leading-relaxed">
            Handelsregister B des Amtsgerichts Düsseldorf HRB 110966
            <br />
            USt-IdNr.: DE 458530294
            <br />
            Steuernummer: 133/5872/2839
            <br />
            Telefon:{' '}
            <a href="tel:+49211540596009" className="text-accent hover:underline">
              +49 211 5405 96009
            </a>
            <br />
            E-Mail:{' '}
            <a
              href="mailto:info@sustainestates.com"
              className="text-accent hover:underline"
            >
              info@sustainestates.com
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            2. Allgemeine Hinweise zur Datenverarbeitung
          </h2>
          <p className="text-pretty">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
            Personenbezogene Daten werden von uns vertraulich und entsprechend den
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung
            behandelt.
          </p>
          <p className="text-pretty">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (z. B. Name, Anschrift, E-Mail-Adresse) erhoben
            werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck
            von deren Verwendung
          </h2>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">a) Beim Besuch der Webseite</h3>
            <p className="text-pretty">
              Beim Aufrufen unserer Webseite werden durch den auf Ihrem Endgerät zum
              Einsatz kommenden Browser automatisch Informationen an den Server
              unserer Webseite gesendet. Diese Informationen werden temporär in
              sogenannten Logfiles gespeichert. Folgende Informationen werden dabei
              ohne Ihr Zutun erfasst:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Referrer-URL</li>
              <li>verwendeter Browser und Betriebssystem</li>
            </ul>
            <p className="text-pretty">
              Diese Daten werden zu folgenden Zwecken verarbeitet: Gewährleistung der
              Systemsicherheit, komfortable Nutzung der Webseite, administrative
              Zwecke. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">
              b) Bei Nutzung des Kontaktformulars
            </h3>
            <p className="text-pretty">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten
              zwecks Bearbeitung und für den Fall von Anschlussfragen bei uns
              gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. b DSGVO.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">
              c) Bei Anmeldung zu einem Newsletter (falls eingesetzt)
            </h3>
            <p className="text-pretty">
              Bei Anmeldung speichern wir Ihre E-Mail-Adresse und weitere Daten, um
              Ihnen regelmäßig Informationen zuzusenden. Rechtsgrundlage: Art. 6 Abs. 1
              S. 1 lit. a DSGVO. Die Einwilligung kann jederzeit widerrufen werden.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            4. Weitergabe von Daten
          </h2>
          <p className="text-pretty">
            Eine Übermittlung Ihrer persönlichen Daten an Dritte findet nur statt,
            wenn:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Sie Ihre Einwilligung erteilt haben (Art. 6 Abs. 1 lit. a DSGVO),</li>
            <li>
              die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen erforderlich ist (Art. 6 Abs. 1 lit. f DSGVO),
            </li>
            <li>eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO), oder</li>
            <li>
              dies gesetzlich zulässig und für Vertragsabwicklung erforderlich ist
              (Art. 6 Abs. 1 lit. b DSGVO).
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">5. Cookies</h2>
          <p className="text-pretty">
            Unsere Webseite verwendet Cookies. Diese dienen dazu, unser Angebot
            nutzerfreundlicher, effektiver und sicherer zu machen. Die meisten Cookies
            sind sogenannte „Session-Cookies“ und werden nach Ende Ihres Besuchs
            gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            6. Analyse-Tools und Tracking (falls eingesetzt)
          </h2>
          <p className="text-pretty">
            Sofern Analyse-Tools (z. B. Google Analytics, Matomo) eingesetzt werden,
            muss hier eine gesonderte Information mit Opt-out-Möglichkeiten ergänzt
            werden.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            7. Social Media Plugins (falls eingesetzt)
          </h2>
          <p className="text-pretty">
            Bei Einbindung von Social-Media-Plugins (Facebook, LinkedIn, Instagram)
            sind zusätzliche Hinweise zu deren Datennutzung erforderlich.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">8. Betroffenenrechte</h2>
          <p className="text-pretty">Sie haben das Recht auf:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Auskunft (Art. 15 DSGVO),</li>
            <li>Berichtigung (Art. 16 DSGVO),</li>
            <li>Löschung (Art. 17 DSGVO),</li>
            <li>Einschränkung (Art. 18 DSGVO),</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
            <li>Widerruf von Einwilligungen (Art. 7 Abs. 3 DSGVO),</li>
            <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">9. Datensicherheit</h2>
          <p className="text-pretty">
            Wir verwenden innerhalb des Webseiten-Besuchs SSL-Verschlüsselung (Secure
            Socket Layer) mit der jeweils höchsten vom Browser unterstützten Stufe.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            10. Aktualität und Änderung dieser Datenschutzerklärung
          </h2>
          <p className="text-pretty">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
            01.10.2025. Durch Weiterentwicklung unserer Webseite oder gesetzliche
            Änderungen kann es notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>
          <p className="text-sm text-muted-foreground">Dezember 2025</p>
        </section>
      </div>
    </LegalPage>
  )
}
