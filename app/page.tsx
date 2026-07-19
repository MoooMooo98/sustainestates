import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
import { ScrollShowcase } from '@/components/scroll-showcase'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Results } from '@/components/results'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Hero />
      <Mission />
      <ScrollShowcase />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  )
}
