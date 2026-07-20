import { createClient } from "@/lib/supabase/server"
import { saveMedia } from "@/app/admin/(panel)/content-actions"
import { MediaCard } from "@/components/admin/media-card"

export const dynamic = "force-dynamic"

type Media = {
  id: string
  label: string
  url: string
  alt: string | null
  category: string | null
}

export default async function AdminMediaPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("media_assets")
    .select("*")
    .order("created_at", { ascending: false })
  const media = (data ?? []) as Media[]

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Medien</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Bild-Bibliothek für die Website. URLs verweisen auf Assets im Projekt oder Blob-Storage.
        </p>
      </header>

      <form
        action={saveMedia}
        className="mb-8 grid gap-3 rounded-2xl border border-border bg-background p-5 md:grid-cols-2"
      >
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-muted-foreground">Bezeichnung</span>
          <input
            name="label"
            required
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-muted-foreground">Kategorie</span>
          <input
            name="category"
            placeholder="z. B. hero, case-study, team"
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm md:col-span-2">
          <span className="text-muted-foreground">Bild-URL</span>
          <input
            name="url"
            required
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm md:col-span-2">
          <span className="text-muted-foreground">Alt-Text</span>
          <input
            name="alt"
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>
        <button
          type="submit"
          className="self-start rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 md:col-span-2"
        >
          Medium hinzufügen
        </button>
      </form>

      {media.length === 0 ? (
        <p className="text-sm text-muted-foreground">Noch keine Medien in der Bibliothek.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((m) => (
            <MediaCard key={m.id} media={m} />
          ))}
        </div>
      )}
    </div>
  )
}
