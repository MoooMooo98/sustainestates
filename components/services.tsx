'use client'

import { BarChart3, Hammer, Leaf, Building2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: BarChart3,
    title: 'Property Analysis',
    description:
      'Deep due-diligence on condition, cash flow, and market position to reveal where hidden value lives.',
  },
  {
    icon: Hammer,
    title: 'Renovation & CapEx Planning',
    description:
      'Prioritized capital plans that sequence construction and upgrades for maximum return on every dollar.',
  },
  {
    icon: Leaf,
    title: 'ESG & Sustainability Strategy',
    description:
      'Energy retrofits, certifications, and carbon roadmaps that future-proof assets and cut operating costs.',
  },
  {
    icon: Building2,
    title: 'Asset Management',
    description:
      'Ongoing performance optimization and reporting to keep your portfolio compounding value over time.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-primary py-24 text-primary-foreground lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/60">
            <span className="h-px w-10 bg-accent" />
            What We Do
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            A full-cycle approach to sustainable asset optimization.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="group h-full bg-primary p-8 transition-colors hover:bg-background/5 lg:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-background/70">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
