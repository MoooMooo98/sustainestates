"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"
import { useCookieConsent } from "@/lib/cookie-consent"

const CATEGORIES = [
  {
    key: "necessary" as const,
    title: "Notwendig",
    description:
      "Für den Betrieb der Website unverzichtbar (z. B. Sicherheit, Sitzungsverwaltung). Diese Cookies sind immer aktiv.",
    locked: true,
  },
  {
    key: "statistics" as const,
    title: "Statistik",
    description:
      "Helfen uns zu verstehen, wie Besucher die Website nutzen, indem Informationen anonym erfasst und gemeldet werden.",
    locked: false,
  },
  {
    key: "marketing" as const,
    title: "Marketing",
    description:
      "Werden verwendet, um Besuchern relevante Inhalte und Kampagnen anzuzeigen und deren Wirksamkeit zu messen.",
    locked: false,
  },
]

export function CookieConsentBanner() {
  const { consent, ready, settingsOpen, openSettings, closeSettings, acceptAll, denyAll, savePreferences } =
    useCookieConsent()

  const [statistics, setStatistics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  // Sync the dialog toggles with the stored choice whenever it opens.
  useEffect(() => {
    if (settingsOpen) {
      setStatistics(consent?.statistics ?? false)
      setMarketing(consent?.marketing ?? false)
    }
  }, [settingsOpen, consent])

  if (!ready) return null

  const showBanner = consent === null && !settingsOpen

  return (
    <>
      {/* Bottom banner — shown until the visitor makes a choice */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie-Hinweis"
          aria-live="polite"
          className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-background/95 p-6 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Cookie className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h2 className="text-base font-semibold text-foreground">Wir respektieren Ihre Privatsphäre</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Wir verwenden Cookies, um die Website bereitzustellen und – mit Ihrer Einwilligung – Nutzung zu
                  analysieren und Inhalte zu personalisieren. Notwendige Cookies sind immer aktiv. Details finden Sie in
                  unserer{" "}
                  <Link href="/datenschutz" className="font-medium text-accent underline-offset-4 hover:underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    onClick={acceptAll}
                    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={denyAll}
                    className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={openSettings}
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Einstellungen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings dialog */}
      {settingsOpen && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center">
          <button
            aria-hidden="true"
            tabIndex={-1}
            onClick={closeSettings}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Cookie-Einstellungen"
            className="relative w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Cookie-Einstellungen</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Wählen Sie, welche Kategorien Sie zulassen möchten.
                </p>
              </div>
              <button
                onClick={closeSettings}
                aria-label="Schließen"
                className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {CATEGORIES.map((cat) => {
                const checked =
                  cat.key === "necessary" ? true : cat.key === "statistics" ? statistics : marketing
                const toggle = () => {
                  if (cat.key === "statistics") setStatistics((v) => !v)
                  if (cat.key === "marketing") setMarketing((v) => !v)
                }
                return (
                  <div key={cat.key} className="rounded-xl border border-border p-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-sm font-medium text-foreground">{cat.title}</h3>
                      <button
                        role="switch"
                        aria-checked={checked}
                        aria-label={`${cat.title} ${checked ? "deaktivieren" : "aktivieren"}`}
                        disabled={cat.locked}
                        onClick={toggle}
                        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                          checked ? "bg-accent" : "bg-muted-foreground/30"
                        } ${cat.locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                      >
                        <span
                          className={`absolute top-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform ${
                            checked ? "translate-x-[22px]" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{cat.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => savePreferences({ statistics, marketing })}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Alle akzeptieren
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Mehr Informationen in unserer{" "}
              <Link href="/datenschutz" className="text-accent underline-offset-4 hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </>
  )
}
