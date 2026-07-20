"use client"

import { useCookieConsent } from "@/lib/cookie-consent"

export function CookieSettingsLink({ className }: { className?: string }) {
  const { openSettings } = useCookieConsent()
  return (
    <button
      type="button"
      onClick={openSettings}
      className={className ?? "transition-colors hover:text-accent"}
    >
      Cookie-Einstellungen
    </button>
  )
}
