import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Kontakt — SustainEstates GmbH',
  description:
    'Vereinbaren Sie ein Erstgespräch mit SustainEstates. Investment-Grade Feasibility für Bestandsimmobilien.',
}

export default function KontaktPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-background">
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-10 lg:pt-40">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Kontakt
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Erstgespräch vereinbaren
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Sie erwägen eine Investitions-, Sanierungs- oder Repositionierungsentscheidung
              für eine Bestandsimmobilie? Schildern Sie uns Ihr Objekt und Ihre Fragestellung —
              wir melden uns persönlich.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="text-lg font-semibold text-foreground">Direkter Kontakt</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <a
                      href="tel:+49211540596009"
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      +49 211 5405 96009
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <a
                      href="mailto:info@sustainestates.com"
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      info@sustainestates.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="not-italic text-muted-foreground">
                      SustainEstates GmbH
                      <br />
                      Breite Straße 3<br />
                      40213 Düsseldorf
                      <br />
                      Deutschland
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
