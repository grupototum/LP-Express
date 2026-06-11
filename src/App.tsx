import { Routes, Route } from 'react-router-dom'
import { TotumHero } from './components/TotumHero'
import { TotumForm } from './components/TotumForm'
import { TotumPain } from './components/TotumPain'
import { TotumConsulting } from './components/TotumConsulting'
import { TotumResultados } from './components/TotumResultados'
import { TotumQualificacao } from './components/TotumQualificacao'
import { TotumSocialProof } from './components/TotumSocialProof'
import { TotumCredibility } from './components/TotumCredibility'
import { TotumFAQ } from './components/TotumFAQ'
import { TotumReferral } from './components/TotumReferral'
import { TotumFinalCTA } from './components/TotumFinalCTA'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import ExpressPage from './pages/Express'
import NotFound from './pages/NotFound'

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main role="main">
        <TotumHero />
        <TotumForm />
        <TotumPain />
        <TotumConsulting />
        <TotumResultados />
        <TotumQualificacao />
        <TotumSocialProof />
        <TotumCredibility />
        <TotumFAQ />
        <TotumReferral />
        <TotumFinalCTA />
      </main>
      <WhatsAppFloat />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/express" element={<ExpressPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
