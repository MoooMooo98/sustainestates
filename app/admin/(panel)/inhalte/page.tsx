import { createClient } from "@/lib/supabase/server"
import { saveContentBlock } from "@/app/admin/(panel)/content-actions"

export const dynamic = "force-dynamic"

type Block = { key: string; value: string; updated_at: string }

export default async function AdminContentPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("content_blocks")
    .select("*")
    .order("key", { ascending: true })
  const blocks = (data ?? []) as Block[]

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Inhalte</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Text-Bausteine als Schlüssel/Wert-Paare pflegen. Diese überschreiben die
          Standardtexte der Website.
        </p>
      </header>

      <form
        action={saveContentBlock}
        className="mb-8 rounded-2xl border border-border bg-background p-5"
      >
        <h2 className="mb-3 font-semibold">Neuen Baustein anlegen / überschreiben</h2>
        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted-foreground">Schlüssel (z. B. home.hero.subtitle)</span>
            <input
              name="key"
              required
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted-foreground">Wert</span>
            <textarea
              name="value"
              rows={3}
              required
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </label>
          <button
            type="submit"
            className="self-start rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Speichern
          </button>
        </div>
      </form>

      {blocks.length === 0 ? (
        <p className="text-sm text-muted-foreground">Noch keine Inhalts-Bausteine gepflegt.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {blocks.map((b) => (
            <form
              key={b.key}
              action={saveContentBlock}
              className="rounded-2xl border border-border bg-background p-5"
            >
              <input type="hidden" name="key" value={b.key} />
              <div className="mb-2 flex items-center justify-between">
                <code className="text-sm font-semibold text-accent">{b.key}</code>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Aktualisieren
                </button>
              </div>
              <textarea
                name="value"
                rows={3}
                defaultValue={b.value}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </form>
          ))}
        </div>
      )}
    </div>
  )
}
