"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { faas } from "@/content/source-content"

const OUTCOMES: Record<string, { label: string; capex: number; value: number; esg: number }> = {
  "as-is": { label: "Hold", capex: 1, value: 1, esg: 1 },
  light: { label: "Optimize", capex: 2, value: 2, esg: 3 },
  "value-add": { label: "Proceed", capex: 3, value: 4, esg: 4 },
  maximum: { label: "Proceed", capex: 4, value: 5, esg: 5 },
}

function Meter({ label, level }: { label: string; level: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-background/60">
        <span>{label}</span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${i < level ? "bg-accent" : "bg-background/15"}`}
          />
        ))}
      </div>
    </div>
  )
}

export function ScenarioExplorer() {
  const [active, setActive] = useState(0)
  const scenario = faas.scenarios[active]
  const outcome = OUTCOMES[scenario.key]

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      {/* Selector */}
      <div className="flex flex-col gap-3">
        {faas.scenarios.map((s, i) => {
          const isActive = i === active
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={`group rounded-2xl border p-5 text-left transition-all ${
                isActive
                  ? "border-accent bg-accent/10"
                  : "border-border bg-card hover:border-accent/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{s.number}</span>
                <ArrowUpRight
                  className={`h-4 w-4 transition-all ${isActive ? "text-accent" : "text-muted-foreground opacity-0 group-hover:opacity-100"}`}
                />
              </div>
              <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">{s.name}</p>
            </button>
          )
        })}
      </div>

      {/* Detail panel */}
      <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-background lg:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-accent">{scenario.number}</span>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{scenario.name}</h3>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-background/75">{scenario.body}</p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              Empfehlung: {outcome.label}
            </div>

            <div className="mt-8 space-y-5">
              <Meter label="CapEx-Einsatz" level={outcome.capex} />
              <Meter label="Werthebel" level={outcome.value} />
              <Meter label="ESG-Wirkung" level={outcome.esg} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
