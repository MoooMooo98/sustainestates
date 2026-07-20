"use client"

import { useState, useTransition } from "react"
import { saveCaseStudy, deleteCaseStudy } from "@/app/admin/(panel)/content-actions"
import type { CaseStudy } from "@/app/admin/(panel)/case-studies/page"

function metricsToText(metrics: CaseStudy["metrics"]): string {
  if (Array.isArray(metrics)) {
    return metrics.map((m) => `${m.label} | ${m.value}`).join("\n")
  }
  return typeof metrics === "string" ? metrics : ""
}

const field =
  "rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"

export function CaseStudyEditor({ study }: { study?: CaseStudy }) {
  const [open, setOpen] = useState(!study)
  const [pending, startTransition] = useTransition()
  const isNew = !study

  return (
    <div className="rounded-2xl border border-border bg-background p-5">
      {study ? (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between text-left"
        >
          <span className="font-semibold">
            {study.title}{" "}
            <span
              className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                study.published
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {study.published ? "veröffentlicht" : "Entwurf"}
            </span>
          </span>
          <span className="text-sm text-muted-foreground">{open ? "Schließen" : "Bearbeiten"}</span>
        </button>
      ) : null}

      {open ? (
        <form
          action={(fd) => startTransition(() => saveCaseStudy(fd))}
          className="mt-4 grid gap-3 md:grid-cols-2"
        >
          {study ? <input type="hidden" name="id" value={study.id} /> : null}
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted-foreground">Titel</span>
            <input name="title" required defaultValue={study?.title ?? ""} className={field} />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted-foreground">Slug</span>
            <input name="slug" required defaultValue={study?.slug ?? ""} className={field} />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted-foreground">Standort</span>
            <input name="location" defaultValue={study?.location ?? ""} className={field} />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted-foreground">Sortierung</span>
            <input
              name="sort_order"
              type="number"
              defaultValue={study?.sort_order ?? 0}
              className={field}
            />
          </label>
          <label className="flex flex-col gap-1 text-sm md:col-span-2">
            <span className="text-muted-foreground">Cover-Bild-URL</span>
            <input name="cover_image" defaultValue={study?.cover_image ?? ""} className={field} />
          </label>
          <label className="flex flex-col gap-1 text-sm md:col-span-2">
            <span className="text-muted-foreground">Kurzbeschreibung</span>
            <textarea name="summary" rows={2} defaultValue={study?.summary ?? ""} className={field} />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted-foreground">Herausforderung</span>
            <textarea name="challenge" rows={3} defaultValue={study?.challenge ?? ""} className={field} />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted-foreground">Vorgehen</span>
            <textarea name="approach" rows={3} defaultValue={study?.approach ?? ""} className={field} />
          </label>
          <label className="flex flex-col gap-1 text-sm md:col-span-2">
            <span className="text-muted-foreground">Ergebnis</span>
            <textarea name="result" rows={3} defaultValue={study?.result ?? ""} className={field} />
          </label>
          <label className="flex flex-col gap-1 text-sm md:col-span-2">
            <span className="text-muted-foreground">
              Kennzahlen (eine pro Zeile: {"Label | Wert"})
            </span>
            <textarea
              name="metrics"
              rows={3}
              defaultValue={study ? metricsToText(study.metrics) : ""}
              placeholder={"Wertsteigerung | +32%\nCO₂-Reduktion | 41%"}
              className={field}
            />
          </label>
          <label className="flex items-center gap-2 text-sm md:col-span-2">
            <input
              type="checkbox"
              name="published"
              defaultChecked={study?.published ?? false}
              className="h-4 w-4 accent-[var(--accent)]"
            />
            <span>Auf der Website veröffentlichen</span>
          </label>

          <div className="flex items-center gap-3 md:col-span-2">
            <button
              type="submit"
              disabled={pending}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-60"
            >
              {isNew ? "Case Study anlegen" : "Speichern"}
            </button>
            {study ? (
              <button
                type="button"
                disabled={pending}
                onClick={() => {
                  if (confirm("Diese Case Study löschen?")) {
                    startTransition(() => deleteCaseStudy(study.id))
                  }
                }}
                className="rounded-lg px-3 py-2 text-sm text-destructive hover:bg-destructive/10 disabled:opacity-50"
              >
                Löschen
              </button>
            ) : null}
          </div>
        </form>
      ) : null}
    </div>
  )
}
