import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Datenschutz — SustainEstates GmbH',
  description: 'Datenschutzerklärung der SustainEstates GmbH.',
}

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <div className="space-y-6">
        <p className="text-pretty">
          Hier finden Sie in Kürze unsere vollständige Datenschutzerklärung. Der
          Inhalt wird derzeit vorbereitet und an dieser Stelle eingefügt.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Verantwortliche Stelle
          </h2>
          <address className="not-italic leading-relaxed">
            SustainEstates GmbH
            <br />
            Breite Straße 3, 40213 Düsseldorf, Deutschland
            <br />
            E-Mail:{' '}
            <a href="mailto:info@sustainestates.com" className="text-accent hover:underline">
              info@sustainestates.com
            </a>
          </address>
        </section>

        {/* Weitere Abschnitte der Datenschutzerklärung hier einfügen */}
      </div>
    </LegalPage>
  )
}
