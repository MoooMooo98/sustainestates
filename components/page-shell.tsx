import type { ReactNode } from "react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-background">{children}</main>
      <SiteFooter />
    </>
  )
}
