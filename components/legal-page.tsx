import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SustainLogo } from '@/components/sustain-logo'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated?: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 lg:px-8">
          <Link href="/" className="flex items-center text-foreground">
            <SustainLogo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Zur Startseite
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {updated ? (
          <p className="mt-4 text-sm text-muted-foreground">{updated}</p>
        ) : null}
        <div className="mt-10 leading-relaxed text-muted-foreground">{children}</div>
      </article>

      <SiteFooter />
    </main>
  )
}
