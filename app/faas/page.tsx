import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { ScenarioExplorer } from "@/components/scenario-explorer"
import { faas } from "@/content/source-content"

export const metadata: Metadata = {
  title: "FaaS – Feasibility as a Service",
  description:
    "Strukturierte Machbarkeitsstudie für Bestandsimmobilien mit entscheidungsreifer Handlungsempfehlung: Proceed / Optimize / Hold / Exit.",
}

export default function FaasPage() {
  const { hero, scenariosHeadline, scenariosSub } = faas
  return (
    <PageShell>
      <PageHero headline={hero.headline} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{hero.body}</p>
          <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">{hero.resultLabel}</p>
            <p className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {hero.result}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {scenariosHeadline}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">{scenariosSub}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ScenarioExplorer />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
