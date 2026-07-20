'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { SustainLogo } from '@/components/sustain-logo'
import { navItems, legalNavItems, brand } from '@/content/source-content'

type SiteNavProps = {
  /** When true, the bar is transparent at the very top (use over a dark hero). */
  overHero?: boolean
}

export function SiteNav({ overHero = false }: SiteNavProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the fullscreen menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const transparent = overHero && !scrolled && !open
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className={`flex items-center ${transparent ? 'text-background' : 'text-foreground'}`}
          aria-label={`${brand.name} Startseite`}
        >
          <SustainLogo />
        </Link>

        {/* Desktop: condensed primary links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.slice(1, 8).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-accent ${
                isActive(item.href)
                  ? 'text-accent'
                  : transparent
                    ? 'text-background/80'
                    : 'text-muted-foreground'
              }`}
            >
              {item.label === 'FaaS – Feasibility as a Service' ? 'FaaS' : item.label}
            </Link>
          ))}
          <Link
            href={brand.primaryCta.href}
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
          >
            {brand.primaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${transparent ? 'text-background' : 'text-foreground'}`}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      </header>

      {/* Cinematic fullscreen menu (sibling of header so `fixed` maps to the viewport,
          not the backdrop-filtered header which would clip it) */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-primary text-primary-foreground transition-all duration-500 lg:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <div className="h-16 shrink-0" />
        <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-10 pt-6">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className="border-b border-primary-foreground/10"
                style={{
                  transitionDelay: open ? `${100 + i * 40}ms` : '0ms',
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between py-4 text-2xl tracking-tight transition-colors ${
                    isActive(item.href)
                      ? 'text-accent'
                      : 'text-primary-foreground hover:text-accent'
                  }`}
                >
                  <span className="text-pretty">{item.label}</span>
                  <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={brand.primaryCta.href}
            onClick={() => setOpen(false)}
            className="mt-8 rounded-full bg-accent px-6 py-4 text-center text-base font-medium text-accent-foreground"
          >
            {brand.primaryCta.label}
          </Link>

          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-10 text-sm text-primary-foreground/60">
            {legalNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
