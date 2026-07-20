import type { Metadata } from "next"
import Image from "next/image"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { zielgruppen } from "@/content/source-content"

export const metadata: Metadata = {
  title: "Zielgruppen",
  description:
    "Für Eigentümer, Asset Manager und Investoren, die vor einer Kapitalentscheidung stehen.",
}

export default function ZielgruppenPage() {
  const { hero, groups, resources } = zielgruppen
  return (
    <PageShell>
      <PageHero headline={hero.headline} sub={hero.subheadline} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.name} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{g.name}</h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {resources.headline}
              </h2>
              <ul className="mt-8 space-y-5">
                {resources.items.map((item) => (
                  <li key={item} className="flex gap-4 text-pretty leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex gap-4">
                <div className="relative w-1/2 overflow-hidden rounded-2xl aspect-[3/4]">
                  <Image
                    src={resources.images[2] || "/placeholder.svg"}
                    alt="Gründer von SustainEstates"
                    fill
                    sizes="(max-width:1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex w-1/2 flex-col gap-4">
                  {[resources.images[0], resources.images[1]].map((src) => (
                    <div key={src} className="relative flex-1 overflow-hidden rounded-2xl">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt=""
                        fill
                        sizes="(max-width:1024px) 25vw, 12vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
