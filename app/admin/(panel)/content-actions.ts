"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

async function requireAdmin() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user || user.user_metadata?.is_admin !== true) {
    throw new Error("Nicht autorisiert.")
  }
  return supabase
}

/* ---------- Case studies ---------- */
export async function saveCaseStudy(formData: FormData) {
  const supabase = await requireAdmin()
  const id = String(formData.get("id") ?? "")
  const metricsRaw = String(formData.get("metrics") ?? "").trim()

  let metrics: unknown = []
  if (metricsRaw) {
    try {
      metrics = JSON.parse(metricsRaw)
    } catch {
      metrics = metricsRaw
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          const [label, value] = line.split("|").map((p) => p.trim())
          return { label: label ?? line, value: value ?? "" }
        })
    }
  }

  const row = {
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim() || null,
    summary: String(formData.get("summary") ?? "").trim() || null,
    challenge: String(formData.get("challenge") ?? "").trim() || null,
    approach: String(formData.get("approach") ?? "").trim() || null,
    result: String(formData.get("result") ?? "").trim() || null,
    cover_image: String(formData.get("cover_image") ?? "").trim() || null,
    metrics,
    published: formData.get("published") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0),
    updated_at: new Date().toISOString(),
  }

  if (id) {
    await supabase.from("case_studies").update(row).eq("id", id)
  } else {
    await supabase.from("case_studies").insert(row)
  }
  revalidatePath("/admin/case-studies")
}

export async function deleteCaseStudy(id: string) {
  const supabase = await requireAdmin()
  await supabase.from("case_studies").delete().eq("id", id)
  revalidatePath("/admin/case-studies")
}

/* ---------- Media ---------- */
export async function saveMedia(formData: FormData) {
  const supabase = await requireAdmin()
  await supabase.from("media_assets").insert({
    label: String(formData.get("label") ?? "").trim(),
    url: String(formData.get("url") ?? "").trim(),
    alt: String(formData.get("alt") ?? "").trim() || null,
    category: String(formData.get("category") ?? "").trim() || null,
  })
  revalidatePath("/admin/medien")
}

export async function deleteMedia(id: string) {
  const supabase = await requireAdmin()
  await supabase.from("media_assets").delete().eq("id", id)
  revalidatePath("/admin/medien")
}

/* ---------- SEO ---------- */
export async function saveSeo(formData: FormData) {
  const supabase = await requireAdmin()
  await supabase.from("seo_settings").upsert({
    route: String(formData.get("route") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim() || null,
    description: String(formData.get("description") ?? "").trim() || null,
    og_image: String(formData.get("og_image") ?? "").trim() || null,
    updated_at: new Date().toISOString(),
  })
  revalidatePath("/admin/seo")
}

/* ---------- Content blocks ---------- */
export async function saveContentBlock(formData: FormData) {
  const supabase = await requireAdmin()
  await supabase.from("content_blocks").upsert({
    key: String(formData.get("key") ?? "").trim(),
    value: String(formData.get("value") ?? ""),
    updated_at: new Date().toISOString(),
  })
  revalidatePath("/admin/inhalte")
}
