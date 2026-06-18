import { ExpressHero } from '@/components/express/ExpressHero'
import { ExpressIdentification } from '@/components/express/ExpressIdentification'
import { ExpressLPvsSite } from '@/components/express/ExpressLPvsSite'
import { ExpressMeeting } from '@/components/express/ExpressMeeting'
import { ExpressMethod } from '@/components/express/ExpressMethod'
import { ExpressFlow } from '@/components/express/ExpressFlow'
import { ExpressPortfolio } from '@/components/express/ExpressPortfolio'
import { ExpressWhatsAppProof } from '@/components/express/ExpressWhatsAppProof'
import { ExpressOffer } from '@/components/express/ExpressOffer'
import { ExpressFinalCTA } from '@/components/express/ExpressFinalCTA'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export default function ExpressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main role="main">
        <ExpressHero />
        <ExpressIdentification />
        <ExpressLPvsSite />
        <ExpressMeeting />
        <ExpressMethod />
        <ExpressFlow />
        <ExpressPortfolio />
        <ExpressWhatsAppProof />
        <ExpressOffer />
        <ExpressFinalCTA />
      </main>
      <WhatsAppFloat />
    </div>
  )
}
