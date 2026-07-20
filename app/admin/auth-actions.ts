"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export type LoginState = { error?: string }

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim()
  const password = String(formData.get("password") ?? "")

  if (!email || !password) {
    return { error: "Bitte E-Mail und Passwort eingeben." }
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: "Anmeldung fehlgeschlagen. Bitte Zugangsdaten prüfen." }
  }

  const isAdmin = data.user?.user_metadata?.is_admin === true
  if (!isAdmin) {
    await supabase.auth.signOut()
    return { error: "Dieser Account hat keine Administratorrechte." }
  }

  redirect("/admin")
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/admin/login")
}
