import { Routes, Route, Navigate } from 'react-router-dom'
import AtelierRosso from './pages/AtelierRosso'
import LPVersaoA from './pages/LPVersaoA'
import LPVersaoB from './pages/LPVersaoB'
import LPVersaoC from './pages/LPVersaoC'
import ExpressPage from './pages/Express'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      {/* LP Express — nova versão principal */}
      <Route path="/" element={<ExpressPage />} />
      <Route path="/express" element={<ExpressPage />} />

      {/* Versões anteriores */}
      <Route path="/v1" element={<LPVersaoA />} />
      <Route path="/fria" element={<LPVersaoB />} />
      <Route path="/percepcao" element={<LPVersaoC />} />

      {/* Página anterior acessível em /atelier */}
      <Route path="/atelier" element={<AtelierRosso />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
