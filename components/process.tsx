'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    n: '01',
    title: 'Discovery & Audit',
    description:
      'We assess the asset — structure, systems, financials, and market context — to establish a clear baseline.',
  },
  {
    n: '02',
    title: 'Strategy & Modeling',
    description:
      'A tailored optimization plan with financial modeling, renovation scope, and sustainability targets.',
  },
  {
    n: '03',
    title: 'Execution',
    description:
      'We manage construction, retrofits, and capital deployment with rigorous quality and cost control.',
  },
  {
    n: '04',
    title: 'Optimize & Report',
    description:
      'Continuous performance tracking and transparent reporting to keep value compounding.',
  },
]

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="process" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            How It Works
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A disciplined process, from first look to lasting returns.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-10 sm:pl-16">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-[15px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-accent sm:left-[15px]"
          />

          <div className="flex flex-col gap-14">
            {steps.map((step) => (
              <Reveal key={step.n}>
                <div className="relative">
                  <span className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:-left-16">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
                    <span className="text-sm font-medium text-accent">{step.n}</span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
