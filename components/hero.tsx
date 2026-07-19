'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-primary">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/hero-building.png"
          alt="Modern sustainable building facade at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/20" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70"
        >
          <span className="h-px w-10 bg-accent" />
          Sustainable Real Estate Strategy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-background sm:text-6xl lg:text-8xl"
        >
          Building Value. Sustainably.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-background/80"
        >
          We help owners and investors optimize property performance through smart
          construction, renovation, and ESG-driven strategy — growing long-term asset value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
          >
            Get a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-7 py-4 text-sm font-medium text-background transition-colors hover:bg-background/10"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}
