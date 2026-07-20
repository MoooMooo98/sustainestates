'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/kontakt/actions'

const TOPICS = [
  'Feasibility-Analyse',
  'Feasibility as a Service (FaaS)',
  'Portfolio / mehrere Objekte',
  'Allgemeine Anfrage',
] as const

const initialState: ContactState = { ok: false }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-medium text-accent-foreground transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? 'Wird gesendet …' : 'Erstgespräch vereinbaren'}
      {!pending && <ArrowRight className="h-4 w-4" />}
    </button>
  )
}

const fieldClass =
  'w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/30'

export function ContactForm({ sourcePage = '/kontakt' }: { sourcePage?: string }) {
  const [state, formAction] = useActionState(submitContact, initialState)

  if (state.ok) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-8">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          Vielen Dank für Ihre Anfrage.
        </h3>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          Wir haben Ihre Nachricht erhalten und melden uns zeitnah persönlich bei Ihnen,
          um ein Erstgespräch zu vereinbaren.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="source_page" value={sourcePage} />
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {state.error && (
        <p className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {state.error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name*
          </label>
          <input id="name" name="name" className={fieldClass} placeholder="Vor- und Nachname" />
          {state.fieldErrors?.name && (
            <span className="text-sm text-destructive">{state.fieldErrors.name}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-Mail*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            placeholder="name@unternehmen.de"
          />
          {state.fieldErrors?.email && (
            <span className="text-sm text-destructive">{state.fieldErrors.email}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Telefon
          </label>
          <input id="phone" name="phone" className={fieldClass} placeholder="Optional" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Unternehmen
          </label>
          <input id="company" name="company" className={fieldClass} placeholder="Optional" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-sm font-medium text-foreground">
            Rolle
          </label>
          <input
            id="role"
            name="role"
            className={fieldClass}
            placeholder="z. B. Asset Manager, Investor"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="topic" className="text-sm font-medium text-foreground">
            Thema
          </label>
          <select id="topic" name="topic" className={fieldClass} defaultValue={TOPICS[0]}>
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Ihr Anliegen*
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={fieldClass}
          placeholder="Beschreiben Sie kurz Ihr Objekt und Ihre Fragestellung."
        />
        {state.fieldErrors?.message && (
          <span className="text-sm text-destructive">{state.fieldErrors.message}</span>
        )}
      </div>

      <div className="pt-2">
        <SubmitButton />
        <p className="mt-3 text-xs text-muted-foreground">
          Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß unserer{' '}
          <a href="/datenschutz" className="underline hover:text-accent">
            Datenschutzerklärung
          </a>{' '}
          zu.
        </p>
      </div>
    </form>
  )
}
