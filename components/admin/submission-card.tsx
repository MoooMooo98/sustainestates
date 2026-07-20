"use client"

import { useTransition } from "react"
import { updateSubmissionStatus, deleteSubmission } from "@/app/admin/(panel)/submissions-actions"

type Submission = {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  role: string | null
  topic: string | null
  message: string
  source_page: string | null
  status: string
  created_at: string
}

const STATUSES = [
  { value: "new", label: "Neu" },
  { value: "in_progress", label: "In Bearbeitung" },
  { value: "done", label: "Erledigt" },
  { value: "archived", label: "Archiviert" },
]

const statusColor: Record<string, string> = {
  new: "bg-accent text-accent-foreground",
  in_progress: "bg-primary text-primary-foreground",
  done: "bg-secondary text-secondary-foreground",
  archived: "bg-muted text-muted-foreground",
}

export function SubmissionCard({ submission: s }: { submission: Submission }) {
  const [pending, startTransition] = useTransition()

  const created = new Date(s.created_at).toLocaleString("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
  })

  return (
    <article className="rounded-2xl border border-border bg-background p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">{s.name}</h2>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                statusColor[s.status] ?? "bg-muted text-muted-foreground"
              }`}
            >
              {STATUSES.find((x) => x.value === s.status)?.label ?? s.status}
            </span>
          </div>
          <p className="mt-0.5 text-sm text-muted-foreground">
            <a href={`mailto:${s.email}`} className="hover:text-accent">
              {s.email}
            </a>
            {s.phone ? ` · ${s.phone}` : ""}
          </p>
        </div>
        <time className="text-xs text-muted-foreground">{created}</time>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
        {s.company ? (
          <span>
            <span className="text-foreground/50">Unternehmen:</span> {s.company}
          </span>
        ) : null}
        {s.role ? (
          <span>
            <span className="text-foreground/50">Rolle:</span> {s.role}
          </span>
        ) : null}
        {s.topic ? (
          <span>
            <span className="text-foreground/50">Anliegen:</span> {s.topic}
          </span>
        ) : null}
        {s.source_page ? (
          <span>
            <span className="text-foreground/50">Seite:</span> {s.source_page}
          </span>
        ) : null}
      </div>

      <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-foreground">{s.message}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
        <label className="text-xs text-muted-foreground" htmlFor={`status-${s.id}`}>
          Status
        </label>
        <select
          id={`status-${s.id}`}
          defaultValue={s.status}
          disabled={pending}
          onChange={(e) =>
            startTransition(() => updateSubmissionStatus(s.id, e.target.value))
          }
          className="rounded-lg border border-input bg-background px-2 py-1.5 text-sm outline-none focus:border-accent"
        >
          {STATUSES.map((st) => (
            <option key={st.value} value={st.value}>
              {st.label}
            </option>
          ))}
        </select>

        <button
          type="button"
          disabled={pending}
          onClick={() => {
            if (confirm("Diese Anfrage endgültig löschen?")) {
              startTransition(() => deleteSubmission(s.id))
            }
          }}
          className="ml-auto rounded-lg px-3 py-1.5 text-sm text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-50"
        >
          Löschen
        </button>
      </div>
    </article>
  )
}
