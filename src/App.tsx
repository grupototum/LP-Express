import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

// Hosts que devem entrar direto na Landing Page Express
const EXPRESS_HOSTS = ['lp.grupototum.com', 'lp.lovable.app']

function HostRouter({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const host = typeof window !== 'undefined' ? window.location.hostname : ''
  const isExpressHost = EXPRESS_HOSTS.some((h) => host === h || host.endsWith(`.${h}`))
  if (isExpressHost && location.pathname === '/') {
    return <Navigate to="/express" replace />
  }
  return <>{children}</>
}

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
    <HostRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/express" element={<ExpressPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HostRouter>
  )
}
