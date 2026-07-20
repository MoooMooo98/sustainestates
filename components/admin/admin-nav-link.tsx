"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function AdminNavLink({
  href,
  label,
  variant = "sidebar",
}: {
  href: string
  label: string
  variant?: "sidebar" | "pill"
}) {
  const pathname = usePathname()
  const active = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href)

  if (variant === "pill") {
    return (
      <Link
        href={href}
        className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
          active
            ? "bg-primary text-primary-foreground"
            : "bg-background text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`rounded-lg px-3 py-2 text-sm transition-colors ${
        active
          ? "bg-accent text-accent-foreground"
          : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
      }`}
    >
      {label}
    </Link>
  )
}
