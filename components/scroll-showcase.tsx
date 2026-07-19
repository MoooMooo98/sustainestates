'use client'

import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence, motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion'

const ShowcaseBuilding = dynamic(
  () => import('@/components/showcase-building').then((m) => m.ShowcaseBuilding),
  { ssr: false },
)

const phases = [
  {
    tag: '01 — Assess',
    title: 'Strategic Analysis',
    body: 'We map every asset in three dimensions — financial, structural, and environmental — to reveal where hidden value lives.',
  },
  {
    tag: '02 — Transform',
    title: 'Sustainable Renovation',
    body: 'Targeted retrofits and material choices cut energy demand while elevating the experience of every occupant.',
  },
  {
    tag: '03 — Compound',
    title: 'Long-Term Value',
    body: 'Optimized, future-proofed buildings that keep appreciating — for owners, tenants, and the planet alike.',
  },
]

export function ScrollShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(phases.length - 1, Math.max(0, Math.floor(v * phases.length)))
    setActive((prev) => (prev === next ? prev : next))
  })

  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const phase = phases[active]

  return (
    <section ref={sectionRef} id="showcase" className="relative h-[320vh] bg-primary">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-4 px-6 lg:grid-cols-2 lg:px-10">
          {/* text column */}
          <div className="relative order-2 h-64 lg:order-1 lg:h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                  {phase.tag}
                </span>
                <h3 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-background md:text-5xl">
                  {phase.title}
                </h3>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-background/60">
                  {phase.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* phase dots */}
            <div className="absolute bottom-0 left-0 flex gap-2 lg:bottom-4">
              {phases.map((p, i) => (
                <span
                  key={p.title}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? 'w-8 bg-accent' : 'w-1.5 bg-background/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 3D canvas column */}
          <div className="order-1 h-[45vh] w-full lg:order-2 lg:h-[80vh]">
            <ShowcaseBuilding progress={scrollYProgress} />
          </div>
        </div>

        {/* section label */}
        <div className="absolute inset-x-0 top-24 mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-background/40">
            The SustainEstates Method
          </span>
        </div>

        {/* progress bar */}
        <div className="absolute inset-x-0 bottom-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="h-px w-full overflow-hidden bg-background/15">
            <motion.div
              style={{ scaleX: barScale }}
              className="h-full w-full origin-left bg-accent"
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-background/40">
            Scroll to rotate
          </p>
        </div>
      </div>
    </section>
  )
}
