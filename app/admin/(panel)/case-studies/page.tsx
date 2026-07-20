import { createClient } from "@/lib/supabase/server"
import { CaseStudyEditor } from "@/components/admin/case-study-editor"

export const dynamic = "force-dynamic"

export type CaseStudy = {
  id: string
  slug: string
  title: string
  location: string | null
  summary: string | null
  challenge: string | null
  approach: string | null
  result: string | null
  cover_image: string | null
  metrics: { label: string; value: string }[] | string
  published: boolean
  sort_order: number
}

export default async function AdminCaseStudiesPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("case_studies")
    .select("*")
    .order("sort_order", { ascending: true })
  const studies = (data ?? []) as CaseStudy[]

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Case Studies</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Referenzprojekte anlegen und verwalten. Nur veröffentlichte Case Studies erscheinen
          auf der Website.
        </p>
      </header>

      <div className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Neue Case Study
        </h2>
        <CaseStudyEditor />
      </div>

      {studies.length > 0 ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Bestehende Case Studies ({studies.length})
          </h2>
          {studies.map((cs) => (
            <CaseStudyEditor key={cs.id} study={cs} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Noch keine Case Studies angelegt.</p>
      )}
    </div>
  )
}
