'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { homepage, brand } from '@/content/source-content'

export function Hero() {
  const { hero } = homepage

  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-primary">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={hero.image || '/placeholder.svg'}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/20" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70"
        >
          <span className="h-px w-10 bg-accent" />
          {brand.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl text-balance text-4xl font-semibold leading-[1.0] tracking-tight text-background sm:text-6xl lg:text-7xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-background/80"
        >
          {hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href={brand.primaryCta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
          >
            {brand.primaryCta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-7 py-4 text-sm font-medium text-background transition-colors hover:bg-background/10"
          >
            Leistungen entdecken
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
