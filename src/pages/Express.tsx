import { ExpressHero } from '@/components/express/ExpressHero'
import { ExpressFlow } from '@/components/express/ExpressFlow'
import { ExpressWhatsAppProof } from '@/components/express/ExpressWhatsAppProof'
import { ExpressMeeting } from '@/components/express/ExpressMeeting'
import { ExpressForm } from '@/components/express/ExpressForm'
import { ExpressFAQ } from '@/components/express/ExpressFAQ'
import { ExpressFinalCTA } from '@/components/express/ExpressFinalCTA'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export default function ExpressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main role="main">
        <ExpressHero />
        <ExpressFlow />
        <ExpressMeeting />
        <ExpressWhatsAppProof />
        <ExpressForm />
        <ExpressFAQ />
        <ExpressFinalCTA />
      </main>
      <WhatsAppFloat />
    </div>
  )
}
