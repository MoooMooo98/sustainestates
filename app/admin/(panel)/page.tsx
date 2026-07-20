import { createClient } from "@/lib/supabase/server"
import { SubmissionCard } from "@/components/admin/submission-card"

export const dynamic = "force-dynamic"

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

export default async function AdminSubmissionsPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })

  const submissions = (data ?? []) as Submission[]
  const newCount = submissions.filter((s) => s.status === "new").length

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Kontaktanfragen</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {submissions.length} Anfragen insgesamt · {newCount} neu
        </p>
      </header>

      {submissions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-background p-12 text-center">
          <p className="text-muted-foreground">Noch keine Anfragen eingegangen.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {submissions.map((s) => (
            <SubmissionCard key={s.id} submission={s} />
          ))}
        </div>
      )}
    </div>
  )
}
