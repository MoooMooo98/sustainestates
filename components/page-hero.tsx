import Image from "next/image"

type PageHeroProps = {
  kicker?: string
  headline: string
  sub?: string
  image: string
  imageAlt: string
}

export function PageHero({ kicker, headline, sub, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-primary pt-20">
      <Image
        src={image || "/placeholder.svg"}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/25" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10 lg:pb-20">
        {kicker ? (
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-background/70">
            <span className="h-px w-10 bg-accent" />
            {kicker}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-background sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        {sub ? (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-background/80">{sub}</p>
        ) : null}
      </div>
    </section>
  )
}
