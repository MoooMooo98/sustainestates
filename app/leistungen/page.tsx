import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { CheckCircle2 } from "lucide-react"
import { leistungen } from "@/content/source-content"

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Boardfähige Entscheidungsvorlage: ROI, CapEx- & ESG-Roadmap. Investmenttaugliche Feasibility-Analyse in 10–15 Tagen.",
}

export default function LeistungenPage() {
  const { hero, highlights, metrics, sprintHeadline, sprintSub, description, conversion } = leistungen
  return (
    <PageShell>
      <PageHero headline={hero.headline} sub={hero.subheadline} image={hero.image} imageAlt={hero.imageAlt} />

      {/* Metrics */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-px sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="px-6 py-10 text-center lg:px-10">
              <p className="text-4xl font-semibold tracking-tight text-accent lg:text-5xl">{m.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="space-y-4">
          {highlights.map((h, i) => (
            <Reveal key={h} delay={0.05 * i}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.75} />
                <p className="text-pretty text-lg font-medium leading-relaxed text-foreground">{h}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sprint + description */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {sprintHeadline}
            </h2>
            <p className="mt-4 text-lg text-accent">{sprintSub}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-border bg-card p-8 lg:p-10">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{description.headline}</h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Conversion */}
      <section className="bg-primary py-20 text-background lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{conversion.headline}</h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-background/75">{conversion.body}</p>
          <p className="mt-3 text-pretty text-lg font-medium text-accent">{conversion.accent}</p>
          <a
            href="/kontakt"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
          >
            {conversion.cta}
          </a>
        </div>
      </section>
    </PageShell>
  )
}
