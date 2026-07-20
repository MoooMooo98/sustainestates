/**
 * SustainEstates — Content Manifest (source of truth)
 * ---------------------------------------------------
 * All texts below are taken 1:1 from the live site:
 *   https://n1755369.websitebuilder.online/
 * Images are the originals downloaded from that site into /public/source.
 */

/* ------------------------------------------------------------------ */
/* NAVIGATION + BRAND                                                 */
/* ------------------------------------------------------------------ */
export const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Zielgruppen", href: "/zielgruppen" },
  { label: "Herausforderung", href: "/herausforderung" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "FaaS", href: "/faas" },
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
  contact: {
    person: "Reza Keschawarz",
    phone: "+49 211 5405 96009",
    phoneHref: "tel:+4921154059600",
    email: "info@sustainestates.com",
    address: "Breite Straße 3, 40213 Düsseldorf, Germany",
  },
} as const

/* ------------------------------------------------------------------ */
/* HOMEPAGE                                                            */
/* ------------------------------------------------------------------ */
export const homepage = {
  hero: {
    headline: "Investment-Grade Feasibility für Bestandsimmobilien",
    body: "Wir analysieren Immobilien vor der Planung: Nutzungspotenzial, CapEx, ESG-Risiken, Miet- und Exit-Potenzial, Zeitplan und Umsetzungsrisiken — verdichtet zu einer entscheidungsreifen Vorlage für Eigentümer, Asset Manager und Investoren.",
    image: "/source/home-hero.png",
    imageAlt: "Bestandsgebäude in Transformation – von Bestand zu repositioniertem, nachhaltigem Objekt",
  },
  why: {
    kicker: "Warum SustainEstates",
    headline: "Technische Tiefe. Investorenlogik. Umsetzungserfahrung.",
    body: [
      "SustainEstates verbindet jahrzehntelange Erfahrung auf Bauherrn- und Investorenseite mit Projektentwicklung, Asset Management, ESG, Digitalisierung und Partnersteuerung. Wir liefern keine isolierte Planungsidee, sondern eine belastbare Entscheidungsgrundlage für Kapital, Nutzung und Umsetzung.",
      "SustainEstates ist der Spezialist für investorenfähige Machbarkeitsstudien und Development-Entscheidungen bei Bestandsimmobilien — schnell, technisch belastbar, ESG-kompatibel und entscheidungsorientiert.",
    ],
    image: "/source/home-1.png",
    imageAlt: "SustainEstates – Empfang und Beratungsumgebung",
  },
  stability: {
    headline: "Wir sichern Planbarkeit und Stabilität in einem volatilen Marktumfeld",
    lead: "Wer jetzt nicht handelt, riskiert sinkende Immobilienwerte, höhere Betriebskosten und geringeren Zugang zur Finanzierung.",
    body: "SustainEstates unterstützt Eigentümer, Asset Manager und Investoren bei der schnellen Bewertung und Entwicklung von Bestandsimmobilien. Unser Feasibility Sprint verbindet technische Analyse, Marktpotenzial, ESG-Anforderungen, CapEx und Investorenlogik zu einer belastbaren Entscheidungsvorlage — bevor Planungskosten, Budgets und Zeit in die falsche Richtung laufen.",
    image: "/source/home-3.png",
    imageAlt: "Modernes Bürogebäude",
  },
  value: {
    headline: "Das Potential für Wertsteigerung und Zukunftsfähigkeit",
    body: [
      "SustainEstates vereint technisches und regulatorisches Know-how mit jahrzehntelanger Erfahrung in Planung, Bauherrnvertretung und Betrieb.",
      "Attraktivität für Investoren und Mieterbindung, Stabilität und Krisensicherheit, Zugang zum Sustainable Finance und weitere Wettbewerbsvorteile",
      "Ziel ist es, durch ganzheitliche Beratung Mehrwert, Effizienz und Zukunftssicherheit für Immobilienprojekte zu schaffen.",
    ],
    image: "/source/home-2.png",
    imageAlt: "Gebäude mit technischen, ESG-, Energie- und Wertdaten",
  },
  digital: {
    headline: "Unsere Entwicklungen sind ökologisch, wirtschaftlich und digital",
    body: "Unsere Leistungen schaffen Entscheidungsgrundlagen, um CapEx zielgerichtet und wertorientiert einzusetzen.",
    pillars: ["Ökologisch", "Wirtschaftlich", "Digital"],
    image: "/source/home-4.png",
    imageAlt: "Digitale Gebäudeerfassung / Digital Twin",
  },
} as const

/* ------------------------------------------------------------------ */
/* ZIELGRUPPEN                                                         */
/* ------------------------------------------------------------------ */
export const zielgruppen = {
  hero: {
    headline: "Zielgruppen",
    subheadline:
      "Für Eigentümer, Asset Manager und Investoren, die vor einer Kapitalentscheidung stehen",
    image: "/source/zielgruppen-hero.png",
    imageAlt: "Gebäude mit ESG-, CapEx-, Performance- und Risiko-Overlays",
  },
  groups: [
    {
      name: "Bestandshalter",
      body: "Priorisierung von CapEx, ESG-Maßnahmen und Objektstrategie.",
    },
    {
      name: "Asset Manager",
      body: "Entscheidungsvorlagen für Maßnahmen, Budgets, Vermietung und Exit.",
    },
    {
      name: "Investoren / Family Offices",
      body: "Vorprüfung von Ankauf, Repositionierung und Wertsteigerung.",
    },
    {
      name: "Projektentwickler",
      body: "Schnelle Validierung von Nutzung, Kosten, Zeit und Marktfähigkeit.",
    },
  ],
  resources: {
    headline: "Unsere Ressourcen",
    items: [
      "Kuratiertes Partnernetzwerk aus dem technischen, kaufmännischen und Infrastruktur- sowie Energiedienstleistungsbereich",
      "Umfangreiches Track Record des Gründers und sein Team",
      "Zufriedene und wiederkehrende Kunden",
    ],
    images: ["/source/zielgruppen-1.jpg", "/source/zielgruppen-2.jpg", "/source/zielgruppen-3.png"],
  },
} as const

/* ------------------------------------------------------------------ */
/* HERAUSFORDERUNG                                                     */
/* ------------------------------------------------------------------ */
export const herausforderung = {
  hero: {
    kicker: "Added Value in Built Environment",
    headline: "Wir machen aus Bestandsimmobilien entscheidungsfähige Investment Cases",
    tag: "Herausforderung: Bestandsimmobilien stehen unter Entscheidungsdruck",
    image: "/source/herausforderung-hero.png",
    imageAlt: "Bestandsgebäude mit Erweiterung – Before-to-Potential Szene",
  },
  body: {
    headline:
      "Wir identifizieren die wirtschaftlich beste Handlungsoption für Ihr Bestandsobjekt",
    paragraphs: [
      "Hohe Finanzierungskosten, steigende CapEx-Anforderungen, ESG-Regulatorik, veränderte Nutzeranforderungen und unsichere Exit-Märkte erhöhen den Druck auf Eigentümer und Asset Manager.",
      "Viele Objekte haben Potenzial — aber ohne belastbare Vorprüfung werden Planung, Budget und Zeit häufig in die falsche Richtung gelenkt.",
    ],
    questions: [
      "Ist das Objekt haltbar, entwickelbar oder verkaufsreif?",
      "Welche Nutzung erzeugt den höchsten risikoadjustierten Wert?",
      "Welche CapEx-Maßnahmen sind zwingend, welche wertsteigernd?",
      "Welche ESG-Maßnahmen sichern Marktgängigkeit und Finanzierung?",
      "Welche Entscheidung kann vor LP2/LP3 belastbar getroffen werden?",
    ],
  },
} as const

/* ------------------------------------------------------------------ */
/* LEISTUNGEN                                                          */
/* ------------------------------------------------------------------ */
export const leistungen = {
  hero: {
    headline: "Boardfähige Entscheidungsvorlage",
    subheadline: "ROI, CapEx- & ESG-Roadmap",
    image: "/source/leistungen-hero.png",
    imageAlt: "Technisch anspruchsvolles Bestandsgebäude",
  },
  highlights: [
    "10–15 Tage bis zur belastbaren Entscheidung bei ausreichender Datenlage",
    "4 Szenarien von „As-is“ bis „Maximum Value“",
    "IC-ready Memo mit CapEx, Risiko, ESG und Handlungsempfehlung",
  ],
  metrics: [
    { value: "10–15", label: "Tage bis zur Entscheidung" },
    { value: "4", label: "Szenarien" },
    { value: "IC-ready", label: "Memo" },
  ],
  sprintHeadline:
    "Investment taugliche Feasibility Analyse in 10–15 Tagen (bei ausreichender Datenlage)",
  sprintSub: "Entdecken Sie die Potentiale Ihrer Immobilie",
  description: {
    headline: "Leistungsbeschreibung",
    body: "Wir prüfen Bestandsimmobilien auf Nutzungspotenzial, Sanierungsbedarf, ESG-Risiken, CapEx-Erfordernisse, Miet- und Exit-Fähigkeit. Daraus entwickeln wir Szenarien mit klarer wirtschaftlicher Bewertung und Handlungsempfehlung. Ziel ist nicht die nächste Studie, sondern eine entscheidungsfähige Grundlage für Eigentümer, Investment Committee, Asset Management und Finanzierungspartner.",
  },
  conversion: {
    headline: "Von Objektunsicherheit zur Investitionsentscheidung",
    body: "Sie haben ein Objekt mit Leerstand, Sanierungsdruck oder unklarer Strategie?",
    accent: "Wir strukturieren die Entscheidungsgrundlage.",
    cta: "Erstgespräch vereinbaren",
  },
} as const

/* ------------------------------------------------------------------ */
/* FAAS – Feasibility as a Service                                     */
/* ------------------------------------------------------------------ */
export const faas = {
  hero: {
    headline: "Feasibility as a Service - FaaS",
    body: "SustainEstates liefert eine strukturierte Machbarkeitsstudie für Bestandsimmobilien, bevor größere Planungsbudgets ausgelöst werden. Wir verbinden technische Bestandsanalyse, Markt- und Finanzlogik, ESG-Anforderungen, CapEx-Schätzung, Terminrisiken und Investorenperspektive zu einer entscheidungsreifen Handlungsempfehlung.",
    resultLabel: "Ergebnis:",
    result: "„Proceed / Optimize / Hold / Exit“ - mit Begründung",
    image: "/source/faas-hero.png",
    imageAlt: "Wohn- und Gewerbegebäude",
  },
  scenariosHeadline: "Szenarienmodell",
  scenariosSub: "Vier Szenarien. Eine belastbare Entscheidung.",
  scenarios: [
    {
      key: "as-is",
      number: "Szenario 1",
      name: "As-is / Stabilisieren",
      body: "Status quo, Mindestmaßnahmen, kurzfristige Risikoreduktion.",
    },
    {
      key: "light",
      number: "Szenario 2",
      name: "Light Refurbishment",
      body: "Gezielte Sanierung, technische Stabilisierung, ESG-Baseline, vermietungsfähige Optimierung.",
    },
    {
      key: "value-add",
      number: "Szenario 3",
      name: "Value-add Repositioning",
      body: "Nutzungs- und Qualitätsverbesserung mit CapEx-/Miethebel.",
    },
    {
      key: "maximum",
      number: "Szenario 4",
      name: "Maximum Value / Transformation",
      body: "Umfassende Repositionierung, ESG-Optimierung, langfristige Markt- und Exit-Fähigkeit.",
    },
  ],
  images: ["/source/faas-1.png", "/source/faas-2.png"],
} as const

/* ------------------------------------------------------------------ */
/* DELIVERABLES                                                        */
/* ------------------------------------------------------------------ */
export const deliverables = {
  kicker: "Was Sie nach dem Sprint erhalten",
  headline: "Deliverables",
  items: [
    "Executive Summary für Geschäftsführung, Investment Committee oder Eigentümer",
    "Szenarienvergleich mit CapEx, Zeit, Risiko und Werthebel",
    "ESG-/Dekarbonisierungslogik auf Maßnahmenebene",
    "Markt- und Nutzungseinschätzung",
    "Umsetzungsrisiken und Break Points",
    "Varianten- und Handlungsempfehlung inkl. ROI und nächstem Entscheidungsschritt",
    "Partnerkoordination aus dem technischen, kaufmännischen und Infrastruktur- sowie Energiedienstleistungsbereich inbegriffen",
  ],
  images: ["/source/deliverables-1.png", "/source/deliverables-2.png"],
} as const

/* ------------------------------------------------------------------ */
/* CASE STUDY                                                          */
/* ------------------------------------------------------------------ */
export const caseStudy = {
  headline: "Case Study",
  subtitle: "Bürobestand 10.000 m², NRW (Beispielhafte Projektlogik)",
  rows: [
    {
      label: "Ausgangslage",
      body: "absehbarer Leerstand, technische Alterung, unklare Nachnutzung",
    },
    {
      label: "Fragestellung",
      body: "Halten, repositionieren, verkaufen oder transformieren?",
    },
    {
      label: "Analyse",
      body: "4 Szenarien, CapEx-Korridor, Mietpotenzial, ESG-Risiko, Zeitplan",
    },
    {
      label: "Ergebnis",
      body: "Empfehlung Value-add Repositioning vor Volltransformation",
    },
    {
      label: "Entscheidungsnutzen",
      body: "klare Budgetfreigabe / Planungsstart / Vermarktungsstrategie",
    },
  ],
  cta: "FaaS - Onepager herunterladen",
  image: "/source/case-study-hero.png",
  imageAlt: "Bürobestand NRW – Case Study",
} as const

/* ------------------------------------------------------------------ */
/* ÜBER UNS                                                            */
/* ------------------------------------------------------------------ */
export const ueberUns = {
  kicker: "Ihr Partner in der Immobilienwirtschaft",
  headline: "Über unsere Gesellschaft",
  banner: "/source/ueber-banner.png",
  founder: {
    heading: "Der Gründer",
    name: "Reza Keschawarz",
    portrait: "/source/founder.jpg",
    paragraphs: [
      "Reza Keschawarz verfügt über langjährige internationale Erfahrung im ganzheitlichen Projektmanagement und in der Immobilienprojektentwicklung. Dabei begleitet er komplexe Vorhaben von der Konzeptphase bis zur Realisierung und dem Betrieb. Sein interdisziplinäres Netzwerk in der Bau-, Immobilien- und Energiebranche und sein professionelles Team schaffen die Grundlage für effiziente und zukunftsorientierte Lösungen.",
      "Er hat 30 Jahre Erfahrung in der Branche: Bauherrenvertretung, Projektentwicklung, Asset Management, ESG, Digitalisierung und internationale Investorenlogik",
      "Berufsbegleitend hat er seine Fachkompetenzen durch kaufmännisches Know-how sowie vertiefte Kenntnisse im Bereich ESG, Nachhaltigkeit und KI erweitert. Seine Projekte zeichnen sich durch die konsequente Schaffung nachhaltigen Mehrwerts und den Einsatz innovativer Methoden im Immobilienprojektmanagement aus.",
    ],
  },
  memberships: {
    heading: "Mitgliedschaften & Zertifikate",
    items: [
      "IHK Düsseldorf",
      "Ingenieurkammer Bau NRW",
      "Sustainable Real Estate Manager IREBS",
      'Zertifizierung "AI for Business Transformation: Generative AI and Beyond" Imperial College London',
      "DGNB Consultant",
    ],
  },
  closing:
    "SustainEstates GmbH ist ein innovatives Beratungs- und Dienstleistungsunternehmen für die Immobilienwirtschaft, mit einer starken Ausrichtung auf nachhaltige Projektentwicklung und digitale Prozesse.",
  images: ["/source/ueber-1.jpg", "/source/ueber-2.jpg"],
  cta: "Kontaktieren Sie uns",
} as const
