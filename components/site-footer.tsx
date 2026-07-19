import { Leaf } from 'lucide-react'

const groups = [
  {
    heading: 'Company',
    links: ['Mission', 'Services', 'Process', 'Results'],
  },
  {
    heading: 'Services',
    links: ['Property Analysis', 'Renovation Planning', 'ESG Strategy', 'Asset Management'],
  },
  {
    heading: 'Connect',
    links: ['LinkedIn', 'Instagram', 'Contact', 'Careers'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Leaf className="h-4 w-4" />
              </span>
              SustainEstates
            </div>
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Real estate consulting and asset optimization for a more sustainable,
              higher-performing built environment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {groups.map((group) => (
              <div key={group.heading}>
                <h4 className="text-sm font-medium text-foreground">{group.heading}</h4>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} SustainEstates. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/impressum" className="transition-colors hover:text-accent">
              Impressum
            </a>
            <a href="/datenschutz" className="transition-colors hover:text-accent">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
