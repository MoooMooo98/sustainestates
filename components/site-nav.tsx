'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

const links = [
  { label: 'Mission', href: '#mission' },
  { label: 'Method', href: '#showcase' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Voices', href: '#testimonials' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Leaf className="h-4 w-4" />
          </span>
          <span className={scrolled ? 'text-foreground' : 'text-background'}>SustainEstates</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-accent ${
                scrolled ? 'text-muted-foreground' : 'text-background/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
          >
            Get a Consultation
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? 'text-foreground' : 'text-background'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground"
            >
              Get a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
