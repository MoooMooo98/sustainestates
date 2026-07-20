import Image from "next/image"
import { Leaf, TrendingUp, Cpu } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { homepage } from "@/content/source-content"

/* Why SustainEstates ------------------------------------------------ */
export function WhySection() {
  const { why } = homepage
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={why.image || "/placeholder.svg"} alt={why.imageAlt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-10 bg-accent" />
            {why.kicker}
          </p>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {why.headline}
          </h2>
          <div className="mt-6 space-y-5">
            {why.body.map((p) => (
              <p key={p} className="text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* Stability --------------------------------------------------------- */
export function StabilitySection() {
  const { stability } = homepage
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {stability.headline}
            </h2>
            <p className="mt-6 border-l-2 border-accent pl-5 text-pretty text-lg font-medium leading-relaxed text-foreground">
              {stability.lead}
            </p>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{stability.body}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={stability.image || "/placeholder.svg"} alt={stability.imageAlt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* Value ------------------------------------------------------------- */
export function ValueSection() {
  const { value } = homepage
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={value.image || "/placeholder.svg"} alt={value.imageAlt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {value.headline}
          </h2>
          <div className="mt-6 space-y-5">
            {value.body.map((p) => (
              <p key={p} className="text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* Digital pillars --------------------------------------------------- */
const PILLAR_ICONS = [Leaf, TrendingUp, Cpu]

export function DigitalSection() {
  const { digital } = homepage
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-background lg:py-32">
      <Image src={digital.image || "/placeholder.svg"} alt={digital.imageAlt} fill sizes="100vw" className="object-cover opacity-20" />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {digital.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-background/75">
            {digital.body}
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {digital.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? Leaf
            return (
              <Reveal key={pillar} delay={0.1 * i}>
                <div className="rounded-2xl border border-background/15 bg-background/5 p-8 backdrop-blur-sm">
                  <Icon className="mx-auto h-8 w-8 text-accent" strokeWidth={1.5} />
                  <p className="mt-4 text-lg font-medium">{pillar}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
