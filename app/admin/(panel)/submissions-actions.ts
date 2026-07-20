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

export async function updateSubmissionStatus(id: string, status: string) {
  const supabase = await requireAdmin()
  await supabase.from("contact_submissions").update({ status }).eq("id", id)
  revalidatePath("/admin")
}

export async function deleteSubmission(id: string) {
  const supabase = await requireAdmin()
  await supabase.from("contact_submissions").delete().eq("id", id)
  revalidatePath("/admin")
}
