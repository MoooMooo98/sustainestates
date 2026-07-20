import type React from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { logout } from "@/app/admin/auth-actions"
import { SustainLogo } from "@/components/sustain-logo"
import { AdminNavLink } from "@/components/admin/admin-nav-link"

const navItems = [
  { href: "/admin", label: "Anfragen" },
  { href: "/admin/case-studies", label: "Case Studies" },
  { href: "/admin/inhalte", label: "Inhalte" },
  { href: "/admin/medien", label: "Medien" },
  { href: "/admin/seo", label: "SEO" },
]

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.user_metadata?.is_admin !== true) {
    redirect("/admin/login")
  }

  return (
    <div className="flex min-h-screen bg-secondary text-foreground">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-primary px-5 py-6 text-primary-foreground lg:flex">
        <Link href="/admin" className="mb-8">
          <SustainLogo className="text-primary-foreground" />
        </Link>
        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map((item) => (
            <AdminNavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <div className="mt-6 border-t border-primary-foreground/15 pt-4">
          <p className="mb-3 truncate text-xs text-primary-foreground/60">{user.email}</p>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="rounded-lg border border-primary-foreground/20 px-3 py-2 text-center text-sm transition-colors hover:bg-primary-foreground/10"
            >
              Zur Website
            </Link>
            <form action={logout}>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-foreground/10 px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/20"
              >
                Abmelden
              </button>
            </form>
          </div>
        </div>
      </aside>

      <main className="flex-1 px-6 py-8 lg:px-10">
        {/* Mobile top bar */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <SustainLogo className="text-foreground" />
          <form action={logout}>
            <button type="submit" className="text-sm text-muted-foreground underline">
              Abmelden
            </button>
          </form>
        </div>
        <nav className="mb-8 flex flex-wrap gap-2 lg:hidden">
          {navItems.map((item) => (
            <AdminNavLink key={item.href} href={item.href} label={item.label} variant="pill" />
          ))}
        </nav>
        {children}
      </main>
    </div>
  )
}
