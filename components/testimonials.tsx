'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const quotes = [
  {
    quote:
      'SustainEstates turned a tired portfolio into our best-performing asset class. The renovation strategy paid for itself within two years.',
    name: 'Elena Marchetti',
    role: 'Managing Partner, Aldergrove Capital',
  },
  {
    quote:
      'Their ESG roadmap unlocked green financing we didn&apos;t know we qualified for. Rigorous, transparent, and genuinely strategic.',
    name: 'David Okoro',
    role: 'Head of Real Assets, Northbridge',
  },
  {
    quote:
      'From audit to execution, every decision was backed by data. Our building now costs less to run and is worth substantially more.',
    name: 'Sofia Reyes',
    role: 'Owner, Reyes Property Group',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % quotes.length), [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="testimonials" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="mb-10 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            Client Voices
          </p>
        </Reveal>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
                &ldquo;{quotes[index].quote.replace(/&apos;/g, '\u2019')}&rdquo;
              </p>
              <footer className="mt-8">
                <div className="font-medium text-foreground">{quotes[index].name}</div>
                <div className="text-sm text-muted-foreground">{quotes[index].role}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {quotes.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
