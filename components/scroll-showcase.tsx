'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from 'framer-motion'

type Frame = {
  src: string
  tag: string
  title: string
  body: string
}

const frames: Frame[] = [
  {
    src: '/tour/01-exterior-wide.png',
    tag: '01 — Bestand',
    title: 'Ein Objekt mit Potenzial',
    body: 'Jede Entscheidung beginnt mit dem Bestand — bewertet nach Struktur, Lage und dem Wert, der im Objekt steckt.',
  },
  {
    src: '/tour/02-facade.png',
    tag: '02 — Analyse',
    title: 'Technische Bestandsanalyse',
    body: 'Wir prüfen Materialien, Hülle und technische Substanz, um Sanierungsbedarf und CapEx belastbar einzuordnen.',
  },
  {
    src: '/tour/03-entrance.png',
    tag: '03 — As-is / Stabilisieren',
    title: 'Status quo sichern',
    body: 'Mindestmaßnahmen und kurzfristige Risikoreduktion — die Basislinie für jede weitere Entscheidung.',
  },
  {
    src: '/tour/04-interior-before.png',
    tag: '04 — Light Refurbishment',
    title: 'Gezielte Sanierung',
    body: 'Technische Stabilisierung, ESG-Baseline und vermietungsfähige Optimierung des Bestands.',
  },
  {
    src: '/tour/05-transition.png',
    tag: '05 — Value-add',
    title: 'Repositionierung',
    body: 'Nutzungs- und Qualitätsverbesserung mit CapEx- und Miethebel — der Wert wird aktiv gehoben.',
  },
  {
    src: '/tour/06-interior-after.png',
    tag: '06 — Nutzung neu gedacht',
    title: 'Marktfähige Flächen',
    body: 'Helle, effiziente und anpassbare Innenräume — ausgerichtet auf heutige Nutzeranforderungen.',
  },
  {
    src: '/tour/07-exterior-renovated.png',
    tag: '07 — Maximum Value',
    title: 'ESG-optimierte Transformation',
    body: 'Umfassende Repositionierung und ESG-Optimierung sichern langfristige Markt- und Exit-Fähigkeit.',
  },
  {
    src: '/tour/08-final-wide.png',
    tag: '08 — Entscheidung',
    title: 'Proceed / Optimize / Hold / Exit',
    body: 'Eine entscheidungsreife Handlungsempfehlung mit CapEx, Risiko, ESG und ROI — belastbar begründet.',
  },
]

function CinematicFrame({
  index,
  total,
  progress,
  src,
  priority,
}: {
  index: number
  total: number
  progress: MotionValue<number>
  src: string
  priority: boolean
}) {
  const clamp = (n: number) => Math.min(1, Math.max(0, n))
  const seg = 1 / (total - 1)
  const center = index * seg

  // cross-fade window: fully visible at center, faded at neighbours
  const inOffsets = [clamp(center - seg), center, clamp(center + seg)]
  const inValues = [
    index === 0 ? 1 : 0,
    1,
    index === total - 1 ? 1 : 0,
  ]
  const opacity = useTransform(progress, inOffsets, inValues)

  // slow cinematic zoom (Ken Burns) across each frame's life
  const scale = useTransform(
    progress,
    [clamp(center - seg), clamp(center + seg)],
    [1.06, 1.16],
  )

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={src || '/placeholder.svg'}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  )
}

export function ScrollShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(frames.length - 1, Math.max(0, Math.round(v * (frames.length - 1))))
    setActive((prev) => (prev === next ? prev : next))
  })

  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const frame = frames[active]

  return (
    <section ref={sectionRef} id="showcase" className="relative h-[720vh] bg-primary">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* image sequence */}
        {frames.map((f, i) => (
          <CinematicFrame
            key={f.src}
            index={i}
            total={frames.length}
            progress={scrollYProgress}
            src={f.src}
            priority={i === 0}
          />
        ))}

        {/* readability scrims */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        {/* section label */}
        <div className="absolute inset-x-0 top-24 mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            Vom Bestand zur Entscheidung — das Szenarienmodell
          </span>
        </div>

        {/* caption */}
        <div className="absolute inset-x-0 bottom-24 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative h-52 sm:h-44">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-end"
              >
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                  {frame.tag}
                </span>
                <h3 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  {frame.title}
                </h3>
                <p className="mt-4 max-w-lg text-pretty leading-relaxed text-white/70">
                  {frame.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* progress bar + counter */}
        <div className="absolute inset-x-0 bottom-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Scrollen zum Entdecken</span>
            <span className="tabular-nums text-white/70">
              {String(active + 1).padStart(2, '0')} / {String(frames.length).padStart(2, '0')}
            </span>
          </div>
          <div className="h-px w-full overflow-hidden bg-white/15">
            <motion.div
              style={{ scaleX: barScale }}
              className="h-full w-full origin-left bg-accent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
