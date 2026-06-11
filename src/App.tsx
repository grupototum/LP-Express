import { Routes, Route, Navigate } from 'react-router-dom'
import AtelierRosso from './pages/AtelierRosso'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AtelierRosso />} />
      {/* Redirect legacy /express route to canonical / */}
      <Route path="/express" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
