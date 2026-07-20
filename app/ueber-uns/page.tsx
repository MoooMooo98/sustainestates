import type { Metadata } from "next"
import Image from "next/image"
import { PageShell } from "@/components/page-shell"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { Award } from "lucide-react"
import { ueberUns } from "@/content/source-content"

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "SustainEstates GmbH — innovatives Beratungs- und Dienstleistungsunternehmen für die Immobilienwirtschaft. Gegründet von Reza Keschawarz.",
}

export default function UeberUnsPage() {
  const { kicker, headline, founder, memberships, closing, images, cta } = ueberUns
  return (
    <PageShell>
      <section className="bg-primary pt-32 pb-16 text-background lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-background/70">
            <span className="h-px w-10 bg-accent" />
            {kicker}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={founder.portrait || "/placeholder.svg"}
                alt={`${founder.name}, Gründer von SustainEstates`}
                fill
                sizes="(max-width:1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">{founder.heading}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">{founder.name}</h2>
            <div className="mt-6 space-y-5">
              {founder.paragraphs.map((p) => (
                <p key={p} className="text-pretty leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {memberships.heading}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {memberships.items.map((item, i) => (
              <Reveal key={item} delay={0.04 * i}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                  <Award className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.75} />
                  <p className="text-pretty font-medium leading-relaxed text-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing + images */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-balance text-2xl font-medium leading-relaxed text-foreground">{closing}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {images.map((src) => (
                <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image src={src || "/placeholder.svg"} alt="" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand headline={cta} sub="Sprechen Sie mit uns über Ihr Bestandsobjekt." />
    </PageShell>
  )
}
