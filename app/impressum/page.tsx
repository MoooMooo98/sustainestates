import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Impressum — SustainEstates GmbH',
  description: 'Impressum und rechtliche Angaben der SustainEstates GmbH.',
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:gap-6">
      <dt className="text-sm font-medium text-foreground sm:w-64 sm:shrink-0">{label}</dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  )
}

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <dl className="border-t border-border">
        <Row label="Name des Unternehmens">SustainEstates GmbH</Row>
        <Row label="Eingetragener Firmensitz">Düsseldorf</Row>
        <Row label="Kontaktinformationen">
          <address className="not-italic leading-relaxed">
            Reza Keschawarz
            <br />
            Telefon:{' '}
            <a href="tel:+49211540596009" className="text-accent hover:underline">
              +49 211 5405 96009
            </a>
            <br />
            E-Mail:{' '}
            <a href="mailto:info@sustainestates.com" className="text-accent hover:underline">
              info@sustainestates.com
            </a>
            <br />
            Breite Straße 3, 40213 Düsseldorf, Deutschland
          </address>
        </Row>
        <Row label="Handelsregister">HRB 110966 Amtsgericht Düsseldorf</Row>
        <Row label="Umsatzsteuer-ID (USt-IdNr.)">DE 458530294</Row>
        <Row label="Steuernummer">133/5872/2839</Row>
      </dl>
    </LegalPage>
  )
}
