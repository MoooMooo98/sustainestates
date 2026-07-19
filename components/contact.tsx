'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/60">
                <span className="h-px w-10 bg-accent" />
                Get Started
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s optimize your property.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-background/70">
                Tell us about your asset and goals. We&apos;ll follow up within one business
                day with an initial perspective and next steps.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border border-background/10 bg-background/5 p-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Thank you.</h3>
                <p className="mt-2 text-background/70">
                  Your request is in. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="grid gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" type="text" placeholder="Jane Doe" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                  />
                </div>
                <Field
                  label="Property type"
                  name="property"
                  type="text"
                  placeholder="Commercial, residential, mixed-use…"
                />
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm text-background/70">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your asset and goals…"
                    className="rounded-xl border border-background/15 bg-background/5 px-4 py-3 text-background placeholder:text-background/40 outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string
  name: string
  type: string
  placeholder: string
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm text-background/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-background/15 bg-background/5 px-4 py-3 text-background placeholder:text-background/40 outline-none transition-colors focus:border-accent"
      />
    </div>
  )
}
