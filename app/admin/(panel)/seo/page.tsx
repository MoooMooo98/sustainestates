import { createClient } from "@/lib/supabase/server"
import { saveSeo } from "@/app/admin/(panel)/content-actions"
import { navItems as SITE_ROUTES } from "@/content/source-content"

export const dynamic = "force-dynamic"

type Seo = { route: string; title: string | null; description: string | null; og_image: string | null }

export default async function AdminSeoPage() {
  const supabase = await createClient()
  const { data } = await supabase.from("seo_settings").select("*")
  const byRoute = new Map((data ?? []).map((r: Seo) => [r.route, r]))

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">SEO-Einstellungen</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Meta-Titel, Beschreibung und Open-Graph-Bild pro Seite pflegen.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {SITE_ROUTES.map((route) => {
          const seo = byRoute.get(route.href)
          return (
            <form
              key={route.href}
              action={saveSeo}
              className="rounded-2xl border border-border bg-background p-5"
            >
              <input type="hidden" name="route" value={route.href} />
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">{route.label}</h2>
                  <p className="text-xs text-muted-foreground">{route.href}</p>
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground hover:opacity-90"
                >
                  Speichern
                </button>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <label className="flex flex-col gap-1 text-sm">
                  <span className="text-muted-foreground">Meta-Titel</span>
                  <input
                    name="title"
                    defaultValue={seo?.title ?? ""}
                    className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm">
                  <span className="text-muted-foreground">OG-Bild-URL</span>
                  <input
                    name="og_image"
                    defaultValue={seo?.og_image ?? ""}
                    className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm md:col-span-2">
                  <span className="text-muted-foreground">Meta-Beschreibung</span>
                  <textarea
                    name="description"
                    rows={2}
                    defaultValue={seo?.description ?? ""}
                    className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                </label>
              </div>
            </form>
          )
        })}
      </div>
    </div>
  )
}
