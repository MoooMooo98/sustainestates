import type { Metadata } from "next"
import Image from "next/image"
import { PageShell } from "@/components/page-shell"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { FileText } from "lucide-react"
import { deliverables } from "@/content/source-content"

export const metadata: Metadata = {
  title: "Deliverables",
  description: "Was Sie nach dem Feasibility Sprint erhalten — von der Executive Summary bis zur Handlungsempfehlung.",
}

export default function DeliverablesPage() {
  const { kicker, headline, items, images } = deliverables
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 text-background lg:pt-40 lg:pb-28">
        <Image src={images[0] || "/placeholder.svg"} alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-background/70">
            <span className="h-px w-10 bg-accent" />
            {kicker}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-4">
            {items.map((item, i) => (
              <Reveal key={item} delay={0.04 * i}>
                <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <FileText className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <p className="text-pretty leading-relaxed text-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="sticky top-28 space-y-4">
              {images.map((src) => (
                <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image src={src || "/placeholder.svg"} alt="" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
