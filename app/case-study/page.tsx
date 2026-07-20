import type { Metadata } from "next"
import { Download } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { caseStudy } from "@/content/source-content"

export const metadata: Metadata = {
  title: "Case Study",
  description: "Bürobestand 10.000 m², NRW — beispielhafte Projektlogik von der Ausgangslage bis zur Entscheidung.",
}

export default function CaseStudyPage() {
  const { headline, subtitle, rows, cta, ctaHref, image, imageAlt } = caseStudy
  return (
    <PageShell>
      <PageHero headline={headline} sub={subtitle} image={image} imageAlt={imageAlt} />

      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="overflow-hidden rounded-2xl border border-border">
          {rows.map((row, i) => (
            <Reveal key={row.label} delay={0.04 * i}>
              <div
                className={`grid gap-2 p-6 sm:grid-cols-[220px_1fr] sm:gap-6 sm:p-8 ${
                  i % 2 === 1 ? "bg-card" : "bg-secondary"
                }`}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">{row.label}</span>
                <p className="text-pretty leading-relaxed text-foreground">{row.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <a
              href={ctaHref}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" />
              {cta}
            </a>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </PageShell>
  )
}
