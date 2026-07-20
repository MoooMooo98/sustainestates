import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { WhySection, StabilitySection, ValueSection, DigitalSection } from '@/components/home-sections'
import { ScrollShowcase } from '@/components/scroll-showcase'
import { CtaBand } from '@/components/cta-band'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav overHero />
      <main className="bg-background">
        <Hero />
        <WhySection />
        <ScrollShowcase />
        <StabilitySection />
        <ValueSection />
        <DigitalSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
