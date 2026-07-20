import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { HelpCircle } from "lucide-react"
import { herausforderung } from "@/content/source-content"

export const metadata: Metadata = {
  title: "Herausforderung",
  description:
    "Wir machen aus Bestandsimmobilien entscheidungsfähige Investment Cases — die wirtschaftlich beste Handlungsoption für Ihr Bestandsobjekt.",
}

export default function HerausforderungPage() {
  const { hero, body } = herausforderung
  return (
    <PageShell>
      <PageHero
        kicker={hero.kicker}
        headline={hero.headline}
        sub={hero.tag}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />

      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {body.headline}
          </h2>
          <div className="mt-6 space-y-5">
            {body.paragraphs.map((p) => (
              <p key={p} className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 space-y-4">
          {body.questions.map((q, i) => (
            <Reveal key={q} delay={0.05 * i}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.75} />
                <p className="text-pretty font-medium leading-relaxed text-foreground">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
