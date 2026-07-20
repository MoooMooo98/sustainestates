"use client"

import { useActionState } from "react"
import { login, type LoginState } from "@/app/admin/auth-actions"
import { SustainLogo } from "@/components/sustain-logo"

const initialState: LoginState = {}

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState)

  return (
    <main className="flex min-h-screen items-center justify-center bg-primary px-6 py-16 text-primary-foreground">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex justify-center">
          <SustainLogo className="text-primary-foreground" />
        </div>

        <div className="rounded-2xl bg-background p-8 text-foreground shadow-2xl">
          <h1 className="text-xl font-semibold tracking-tight">Admin-Anmeldung</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Nur für autorisierte Mitarbeitende von SustainEstates.
          </p>

          <form action={formAction} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-accent/40 focus:border-accent focus:ring-2"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium">
                Passwort
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-accent/40 focus:border-accent focus:ring-2"
              />
            </div>

            {state.error ? (
              <p role="alert" className="text-sm text-destructive">
                {state.error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={pending}
              className="mt-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {pending ? "Anmelden…" : "Anmelden"}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
