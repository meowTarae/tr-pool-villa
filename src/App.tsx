import { ContactSection } from '@/components/sections/contact-section'
import { FacilitiesSection } from '@/components/sections/facilities-section'
import { FaqSection } from '@/components/sections/faq-section'
import { HeroSection } from '@/components/sections/hero-section'
import { LocationSection } from '@/components/sections/location-section'
import { PrologueSection } from '@/components/sections/prologue-section'
import { ReservationSection } from '@/components/sections/reservation-section'
import { RoomsSection } from '@/components/sections/rooms-section'
import { FloatingChannels } from '@/components/floating-channels'
import { SeasonNotice } from '@/components/season-notice'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function App() {
  return (
    <div className="min-h-svh bg-ivory">
      <SiteHeader />
      <main>
        <HeroSection />
        <PrologueSection />
        <RoomsSection />
        <FacilitiesSection />
        <ReservationSection />
        <LocationSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingChannels />
      <SeasonNotice />
    </div>
  )
}
