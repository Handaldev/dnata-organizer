import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import Problem from '@/sections/Problem'
import IntroSolution from '@/sections/IntroSolution'
import Process from '@/sections/Process'
import Gallery from '@/sections/Gallery'
import Testimonials from '@/sections/Testimonials'
import CTASection from '@/sections/CTASection'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <IntroSolution />
        <Process />
        <Gallery />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
