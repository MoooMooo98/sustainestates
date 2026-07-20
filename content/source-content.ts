/**
 * SustainEstates — Content Manifest (source of truth)
 * ---------------------------------------------------
 * Rules (from the project brief):
 *  - All texts from the uploaded screenshots/documents are BINDING and must be used 1:1.
 *  - Do NOT invent, paraphrase or shorten supplied texts.
 *  - Where the full paragraph text lives only inside a screenshot that has not yet been
 *    provided in machine-readable form, the field is marked with `status: "pending-source"`
 *    and `body: PENDING`. These MUST be filled from the source screenshots before launch.
 *  - Confirmed headlines, CTAs, metrics and scenario names (visible verbatim in the brief)
 *    are stored with `status: "confirmed"`.
 *
 * Each entry documents: source filename, page, section, exact headline, supporting text,
 * corresponding image + alt text, and whether the asset is a clean original or a screenshot.
 */

export const PENDING = "__PENDING_SOURCE_TEXT__" as const

export type ContentStatus = "confirmed" | "pending-source"
export type AssetKind = "clean-original" | "screenshot-reference" | "pending"

export interface ContentImage {
  /** Local path once the clean original / cropped asset is imported into /public */
  src: string | null
  alt: string
  kind: AssetKind
  /** Original source screenshot filename this image relates to */
  sourceFile: string
}

export interface ContentSection {
  id: string
  sourceFile: string
  page: string
  section: string
  headline: string
  subheadline?: string
  /** Exact 1:1 body text. PENDING until sourced from the screenshot. */
  body: string
  bullets?: string[]
  image?: ContentImage
  status: ContentStatus
}

/* ------------------------------------------------------------------ */
/* HOMEPAGE                                                            */
/* ------------------------------------------------------------------ */
export const homepage: ContentSection[] = [
  {
    id: "home-hero",
    sourceFile: "IMG_4366",
    page: "Homepage",
    section: "Hero",
    headline: "Investment-Grade Feasibility für Bestandsimmobilien",
    body: PENDING,
    image: {
      src: null,
      alt: "Gebäude-Transformation – Bestand zu Potenzial",
      kind: "pending",
      sourceFile: "IMG_4366",
    },
    status: "pending-source",
  },
  {
    id: "home-why",
    sourceFile: "IMG_4367",
    page: "Homepage",
    section: "Warum SustainEstates",
    headline: "Warum SustainEstates",
    subheadline: "Technische Tiefe. Investorenlogik. Umsetzungserfahrung.",
    body: PENDING,
    image: {
      src: null,
      alt: "SustainEstates Empfang / Lobby",
      kind: "pending",
      sourceFile: "IMG_4367",
    },
    status: "pending-source",
  },
  {
    id: "home-decision-room",
    sourceFile: "IMG_4368",
    page: "Homepage",
    section: "Investment Decision Room",
    headline: "Investment Decision Room",
    body: PENDING,
    image: {
      src: null,
      alt: "Investment Decision Room mit Architekturplänen, Tablet, Reports, Charts und digitalem Gebäudemodell",
      kind: "pending",
      sourceFile: "IMG_4368",
    },
    status: "pending-source",
  },
  {
    id: "home-stability",
    sourceFile: "IMG_4369",
    page: "Homepage",
    section: "Planbarkeit & Stabilität",
    headline: "Wir sichern Planbarkeit und Stabilität in einem volatilen Marktumfeld",
    body: PENDING,
    image: {
      src: null,
      alt: "Office / Bürogebäude",
      kind: "pending",
      sourceFile: "IMG_4369",
    },
    status: "pending-source",
  },
  {
    id: "home-value",
    sourceFile: "IMG_4370",
    page: "Homepage",
    section: "Wertsteigerung & Zukunftsfähigkeit",
    headline: "Das Potenzial für Wertsteigerung und Zukunftsfähigkeit",
    body: PENDING,
    image: {
      src: null,
      alt: "Gebäude mit technischen, ESG-, Energie-, Risiko- und Wertdaten",
      kind: "pending",
      sourceFile: "IMG_4370",
    },
    status: "pending-source",
  },
  {
    id: "home-digital-capture",
    sourceFile: "IMG_4371",
    page: "Homepage",
    section: "Digitale Gebäudeerfassung",
    headline: "Digitale Gebäudeerfassung",
    body: PENDING,
    bullets: ["ökologisch", "wirtschaftlich", "digital"],
    image: {
      src: null,
      alt: "Laser-Scanning / Digital-Twin Visual",
      kind: "pending",
      sourceFile: "IMG_4371",
    },
    status: "pending-source",
  },
]

/* ------------------------------------------------------------------ */
/* ZIELGRUPPEN                                                         */
/* ------------------------------------------------------------------ */
export const zielgruppen: ContentSection[] = [
  {
    id: "zielgruppen-intro",
    sourceFile: "IMG_4372",
    page: "Zielgruppen",
    section: "Übersicht",
    headline: "Zielgruppen",
    body: PENDING,
    bullets: ["Bestandshalter", "Asset Manager", "Investoren / Family Offices", "Projektentwickler"],
    image: {
      src: null,
      alt: "Gebäude mit ESG-, CapEx-, Performance- und Risiko-Overlays",
      kind: "pending",
      sourceFile: "IMG_4372",
    },
    status: "pending-source",
  },
]

/* ------------------------------------------------------------------ */
/* HERAUSFORDERUNG                                                     */
/* ------------------------------------------------------------------ */
export const herausforderung: ContentSection[] = [
  {
    id: "herausforderung-hero",
    sourceFile: "IMG_4375",
    page: "Herausforderung",
    section: "Hero",
    headline: "Wir machen aus Bestandsimmobilien entscheidungsfähige Investment Cases",
    subheadline: "Added Value in Built Environment",
    body: PENDING,
    image: {
      src: null,
      alt: "Gebäude-Erweiterung – Before-to-Potential Szene",
      kind: "pending",
      sourceFile: "IMG_4375",
    },
    status: "pending-source",
  },
  {
    id: "herausforderung-market",
    sourceFile: "IMG_4376",
    page: "Herausforderung",
    section: "Marktdruck & Entscheidungsfragen",
    headline: "Marktdruck & zentrale Entscheidungsfragen",
    body: PENDING,
    status: "pending-source",
  },
  {
    id: "herausforderung-board",
    sourceFile: "IMG_4377",
    page: "Herausforderung",
    section: "Boardfähige Entscheidungsvorlage",
    headline: "Boardfähige Entscheidungsvorlage",
    subheadline: "ROI, CapEx- & ESG-Roadmap",
    body: PENDING,
    bullets: ["10–15 Tage", "4 Szenarien", "IC-ready Memo"],
    image: {
      src: null,
      alt: "Technisches Gebäude",
      kind: "pending",
      sourceFile: "IMG_4377",
    },
    status: "confirmed",
  },
]

/* ------------------------------------------------------------------ */
/* LEISTUNGEN                                                          */
/* ------------------------------------------------------------------ */
export const leistungen: ContentSection[] = [
  {
    id: "leistungen-hero",
    sourceFile: "IMG_4378",
    page: "Leistungen",
    section: "Hero",
    headline: "Investmenttaugliche Feasibility Analyse in 10–15 Tagen",
    subheadline: "bei ausreichender Datenlage",
    body: PENDING,
    status: "pending-source",
  },
  {
    id: "leistungen-conversion",
    sourceFile: "IMG_4379",
    page: "Leistungen",
    section: "Conversion",
    headline: "Von Objektunsicherheit zur Investitionsentscheidung",
    body: PENDING,
    image: {
      src: null,
      alt: "Leistungen – Abschluss / Conversion",
      kind: "pending",
      sourceFile: "IMG_4379",
    },
    status: "pending-source",
  },
]

/* ------------------------------------------------------------------ */
/* FAAS – Feasibility as a Service                                     */
/* ------------------------------------------------------------------ */
export interface Scenario {
  key: "as-is" | "light" | "value-add" | "maximum"
  name: string
  body: string
  status: ContentStatus
}

export const faasScenarios: Scenario[] = [
  { key: "as-is", name: "As-is / Stabilisieren", body: PENDING, status: "pending-source" },
  { key: "light", name: "Light Refurbishment", body: PENDING, status: "pending-source" },
  { key: "value-add", name: "Value-add Repositioning", body: PENDING, status: "pending-source" },
  { key: "maximum", name: "Maximum Value / Transformation", body: PENDING, status: "pending-source" },
]

export const faas: ContentSection[] = [
  {
    id: "faas-hero",
    sourceFile: "IMG_4380",
    page: "FaaS",
    section: "Hero",
    headline: "Feasibility as a Service – FaaS",
    body: PENDING,
    bullets: ["Proceed", "Optimize", "Hold", "Exit"],
    image: {
      src: null,
      alt: "Wohn- oder Gewerbegebäude",
      kind: "pending",
      sourceFile: "IMG_4380",
    },
    status: "pending-source",
  },
  {
    id: "faas-scenarios",
    sourceFile: "IMG_4381",
    page: "FaaS",
    section: "Vier Szenarien",
    headline: "Vier Szenarien",
    body: PENDING,
    image: {
      src: null,
      alt: "Vier-Szenarien-Visual mit Bestandsgebäude und Vier-Bild-Vergleich (Scenario Explorer)",
      kind: "pending",
      sourceFile: "IMG_4382",
    },
    status: "confirmed",
  },
]

/* ------------------------------------------------------------------ */
/* DELIVERABLES                                                        */
/* ------------------------------------------------------------------ */
export const deliverables: ContentSection[] = [
  {
    id: "deliverables-main",
    sourceFile: "IMG_4383",
    page: "Deliverables",
    section: "Was Sie nach dem Sprint erhalten",
    headline: "Was Sie nach dem Sprint erhalten",
    subheadline: "Deliverables",
    body: PENDING,
    status: "pending-source",
  },
]

/* ------------------------------------------------------------------ */
/* ÜBER UNS                                                            */
/* ------------------------------------------------------------------ */
export const ueberUns: ContentSection[] = [
  {
    id: "ueber-uns-resources",
    sourceFile: "IMG_4373",
    page: "Über uns",
    section: "Unsere Ressourcen",
    headline: "Unsere Ressourcen",
    body: PENDING,
    image: {
      src: null,
      alt: "Hochhaus-Architektur",
      kind: "pending",
      sourceFile: "IMG_4373",
    },
    status: "pending-source",
  },
  {
    id: "ueber-uns-track-record",
    sourceFile: "IMG_4374",
    page: "Über uns",
    section: "Track Record & Gründer",
    headline: "Track Record",
    body: PENDING,
    image: {
      src: null,
      alt: "Bau-Team",
      kind: "pending",
      sourceFile: "IMG_4374",
    },
    status: "pending-source",
  },
]

/* ------------------------------------------------------------------ */
/* NAVIGATION                                                          */
/* ------------------------------------------------------------------ */
export const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Zielgruppen", href: "/zielgruppen" },
  { label: "Herausforderung", href: "/herausforderung" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "FaaS – Feasibility as a Service", href: "/faas" },
  { label: "Deliverables", href: "/deliverables" },
  { label: "Case Study", href: "/case-study" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const

export const legalNavItems = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const

export const brand = {
  name: "SustainEstates",
  legalName: "SustainEstates GmbH",
  tagline: "Added Value in Built Environment",
  primaryCta: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
} as const
