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
    tag: '01 — The Property',
    title: 'A building with potential',
    body: 'Every transformation begins with an existing asset — evaluated for structure, location, and the value hidden within.',
  },
  {
    src: '/tour/02-facade.png',
    tag: '02 — The Façade',
    title: 'Reading the details',
    body: 'We study materials, windows, and envelope performance to plan a targeted, high-impact retrofit.',
  },
  {
    src: '/tour/03-entrance.png',
    tag: '03 — The Threshold',
    title: 'Stepping inside',
    body: 'Beyond the entrance lies the real opportunity: space waiting to be reimagined.',
  },
  {
    src: '/tour/04-interior-before.png',
    tag: '04 — Before',
    title: 'Dated and inefficient',
    body: 'Poor lighting, worn finishes, and wasted energy — the honest starting point for meaningful change.',
  },
  {
    src: '/tour/05-transition.png',
    tag: '05 — In Progress',
    title: 'The transformation',
    body: 'Walls reconfigured, systems modernized, and natural light reintroduced throughout.',
  },
  {
    src: '/tour/06-interior-after.png',
    tag: '06 — After',
    title: 'A space reborn',
    body: 'A bright, efficient, adaptable interior — designed for how people work and live today.',
  },
  {
    src: '/tour/07-exterior-renovated.png',
    tag: '07 — Renewed',
    title: 'Sustainable by design',
    body: 'Solar, greenery, and an upgraded envelope turn the exterior into a statement of performance.',
  },
  {
    src: '/tour/08-final-wide.png',
    tag: '08 — Delivered',
    title: 'Value, compounded',
    body: 'A finished, sustainable property worth more to owners, tenants, and the planet.',
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
            The SustainEstates Method
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
            <span>Scroll to explore</span>
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
