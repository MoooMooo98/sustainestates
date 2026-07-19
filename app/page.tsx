import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
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
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  )
}
