'use server'

import { createClient } from '@/lib/supabase/server'

export type ContactState = {
  ok: boolean
  error?: string
  fieldErrors?: Record<string, string>
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const role = String(formData.get('role') ?? '').trim()
  const topic = String(formData.get('topic') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const sourcePage = String(formData.get('source_page') ?? '/kontakt').trim()
  // Honeypot field: real users leave this empty
  const website = String(formData.get('website') ?? '').trim()

  const fieldErrors: Record<string, string> = {}
  if (!name) fieldErrors.name = 'Bitte geben Sie Ihren Namen an.'
  if (!email) fieldErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    fieldErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
  if (!message) fieldErrors.message = 'Bitte beschreiben Sie Ihr Anliegen.'

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors }
  }

  // Silently accept bots (honeypot filled) without storing
  if (website) {
    return { ok: true }
  }

  const supabase = await createClient()
  const { error } = await supabase.from('contact_submissions').insert({
    name,
    email,
    phone: phone || null,
    company: company || null,
    role: role || null,
    topic: topic || null,
    message,
    source_page: sourcePage || null,
    status: 'new',
  })

  if (error) {
    console.log('[v0] contact insert error:', error.message)
    return {
      ok: false,
      error:
        'Ihre Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es erneut oder schreiben Sie an info@sustainestates.com.',
    }
  }

  return { ok: true }
}
