"use client"

import { useTransition } from "react"
import { deleteMedia } from "@/app/admin/(panel)/content-actions"

type Media = {
  id: string
  label: string
  url: string
  alt: string | null
  category: string | null
}

export function MediaCard({ media: m }: { media: Media }) {
  const [pending, startTransition] = useTransition()

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="aspect-video w-full overflow-hidden bg-secondary">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={m.url || "/placeholder.svg"}
          alt={m.alt ?? m.label}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="flex items-start justify-between gap-2 p-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{m.label}</p>
          {m.category ? (
            <p className="text-xs text-muted-foreground">{m.category}</p>
          ) : null}
        </div>
        <button
          type="button"
          disabled={pending}
          onClick={() => {
            if (confirm("Dieses Medium löschen?")) {
              startTransition(() => deleteMedia(m.id))
            }
          }}
          className="shrink-0 rounded-lg px-2 py-1 text-xs text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-50"
        >
          Löschen
        </button>
      </figcaption>
    </figure>
  )
}
