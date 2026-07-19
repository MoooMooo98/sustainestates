'use client'

import { Counter } from '@/components/counter'
import { Reveal } from '@/components/reveal'

const stats = [
  { to: 30, suffix: '%', label: 'Average asset value increase' },
  { to: 50, suffix: '+', label: 'Projects completed' },
  { to: 42, suffix: '%', label: 'Reduction in energy costs' },
  { to: 1.8, prefix: '$', suffix: 'B', decimals: 1, label: 'Assets optimized' },
]

const cases = [
  { img: '/case-1.png', tag: 'Mixed-Use', title: 'Rooftop energy retrofit lifts NOI by 24%' },
  { img: '/case-2.png', tag: 'Residential', title: 'Heritage renovation, LEED Gold certified' },
  { img: '/case-3.png', tag: 'Commercial', title: 'Smart facade cuts emissions by half' },
]

export function Results() {
  return (
    <section id="results" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            Proven Results
          </p>
        </Reveal>

        <div className="grid gap-y-12 border-y border-border py-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="px-2">
                <div className="text-5xl font-semibold tracking-tight text-foreground lg:text-6xl">
                  <Counter
                    to={stat.to}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-2xl bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img || '/placeholder.svg'}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">{c.tag}</span>
                  <h3 className="mt-3 text-lg font-medium leading-snug tracking-tight text-foreground">
                    {c.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
