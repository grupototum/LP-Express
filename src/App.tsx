import { TotumHero } from './components/TotumHero'
import { TotumForm } from './components/TotumForm'
import { TotumPain } from './components/TotumPain'
import { TotumConsulting } from './components/TotumConsulting'
import { TotumSocialProof } from './components/TotumSocialProof'
import { TotumCredibility } from './components/TotumCredibility'
import { TotumReferral } from './components/TotumReferral'
import { TotumFinalCTA } from './components/TotumFinalCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main role="main">
        <TotumHero />
        <TotumForm />
        <TotumPain />
        <TotumConsulting />
        <TotumSocialProof />
        <TotumCredibility />
        <TotumReferral />
        <TotumFinalCTA />
      </main>
    </div>
  )
}
