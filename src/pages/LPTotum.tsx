import SmoothScroll from '@/components/lp2/SmoothScroll'
import Hero from '@/components/lp2/Hero'
import Identification from '@/components/lp2/Identification'
import LPvsSite from '@/components/lp2/LPvsSite'
import Authority from '@/components/lp2/Authority'
import Method from '@/components/lp2/Method'
import WhatWeLookAt from '@/components/lp2/WhatWeLookAt'
import Portfolio from '@/components/lp2/Portfolio'
import Testimonials from '@/components/lp2/Testimonials'
import Offer from '@/components/lp2/Offer'
import FinalCTA from '@/components/lp2/FinalCTA'
import Footer from '@/components/lp2/Footer'

export default function LPTotum() {
  return (
    <SmoothScroll>
      <div className="bg-[#FAFAF8]">
        <Hero />
        <Identification />
        <LPvsSite />
        <Authority />
        <Method />
        <WhatWeLookAt />
        <Portfolio />
        <Testimonials />
        <Offer />
        <FinalCTA />
        <Footer />
      </div>
    </SmoothScroll>
  )
}
