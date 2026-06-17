import { Routes, Route, Navigate } from 'react-router-dom'
import AtelierRosso from './pages/AtelierRosso'
import LPVersaoA from './pages/LPVersaoA'
import LPVersaoB from './pages/LPVersaoB'
import LPVersaoC from './pages/LPVersaoC'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      {/* LP Totum — 3 versões */}
      <Route path="/" element={<LPVersaoA />} />
      <Route path="/fria" element={<LPVersaoB />} />
      <Route path="/percepcao" element={<LPVersaoC />} />

      {/* Página anterior acessível em /atelier */}
      <Route path="/atelier" element={<AtelierRosso />} />
      <Route path="/express" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
