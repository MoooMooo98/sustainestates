import Link from 'next/link'
import { SustainLogo } from '@/components/sustain-logo'
import { navItems, legalNavItems, brand } from '@/content/source-content'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SustainLogo showTagline className="text-foreground" />
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              {brand.legalName} — Investment-Grade Feasibility für Bestandsimmobilien.
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-muted-foreground">
              Breite Straße 3, 40213 Düsseldorf, Deutschland
              <br />
              <a href="tel:+49211540596009" className="transition-colors hover:text-accent">
                +49 211 5405 96009
              </a>
              <br />
              <a
                href="mailto:info@sustainestates.com"
                className="transition-colors hover:text-accent"
              >
                info@sustainestates.com
              </a>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div className="col-span-2 sm:col-span-2">
              <h4 className="text-sm font-medium text-foreground">Navigation</h4>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground">Rechtliches</h4>
              <ul className="mt-4 space-y-3">
                {legalNavItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {brand.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {legalNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
