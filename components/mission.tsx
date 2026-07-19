'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from '@/components/reveal'

export function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="mission" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            Our Mission
          </p>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                We treat every property as a living asset — engineered to perform
                better, last longer, and tread lighter on the planet.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                SustainEstates blends construction expertise with data-led financial
                strategy. From renovation roadmaps to ESG positioning, we turn aging
                buildings into resilient, high-value assets that meet the standards of
                tomorrow&apos;s market.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div ref={ref} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <motion.img
                style={{ y }}
                src="/mission-interior.png"
                alt="Elegant building interior under renovation with natural light"
                className="absolute inset-0 h-[116%] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
