"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"

export type ConsentCategory = "necessary" | "statistics" | "marketing"

export type ConsentState = {
  necessary: true
  statistics: boolean
  marketing: boolean
}

export type StoredConsent = ConsentState & {
  version: number
  updatedAt: string
}

const STORAGE_KEY = "se-cookie-consent"
const CONSENT_VERSION = 1

const DENY_ALL: ConsentState = { necessary: true, statistics: false, marketing: false }
const ACCEPT_ALL: ConsentState = { necessary: true, statistics: true, marketing: true }

type ConsentContextValue = {
  /** null until the visitor has actively made a choice */
  consent: StoredConsent | null
  /** true once we've read localStorage on the client (avoids hydration flashes) */
  ready: boolean
  /** whether the settings dialog is open */
  settingsOpen: boolean
  openSettings: () => void
  closeSettings: () => void
  acceptAll: () => void
  denyAll: () => void
  savePreferences: (choice: Omit<ConsentState, "necessary">) => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

function readStored(): StoredConsent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredConsent
    if (parsed.version !== CONSENT_VERSION) return null
    return { ...parsed, necessary: true }
  } catch {
    return null
  }
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<StoredConsent | null>(null)
  const [ready, setReady] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    setConsent(readStored())
    setReady(true)
  }, [])

  const persist = useCallback((state: ConsentState) => {
    const stored: StoredConsent = {
      ...state,
      necessary: true,
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
    } catch {
      // ignore storage errors (private mode etc.)
    }
    setConsent(stored)
    setSettingsOpen(false)
  }, [])

  const acceptAll = useCallback(() => persist(ACCEPT_ALL), [persist])
  const denyAll = useCallback(() => persist(DENY_ALL), [persist])
  const savePreferences = useCallback(
    (choice: Omit<ConsentState, "necessary">) => persist({ necessary: true, ...choice }),
    [persist],
  )

  return (
    <ConsentContext.Provider
      value={{
        consent,
        ready,
        settingsOpen,
        openSettings: () => setSettingsOpen(true),
        closeSettings: () => setSettingsOpen(false),
        acceptAll,
        denyAll,
        savePreferences,
      }}
    >
      {children}
    </ConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return ctx
}
