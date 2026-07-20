import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { brand } from "@/content/source-content"

export function CtaBand({
  headline = "Von Objektunsicherheit zur Investitionsentscheidung",
  sub = "Wir strukturieren die Entscheidungsgrundlage.",
}: {
  headline?: string
  sub?: string
}) {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-background sm:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/75">
          {sub}
        </p>
        <Link
          href={brand.primaryCta.href}
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
        >
          {brand.primaryCta.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
