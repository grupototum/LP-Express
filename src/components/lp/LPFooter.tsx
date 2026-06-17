import totumLogo from '@/assets/totum-logo.png'

export default function LPFooter() {
  return (
    <footer
      className="py-10 px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <img src={totumLogo} alt="Totum" className="h-6 w-auto opacity-60" />
      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
        © {new Date().getFullYear()} Grupo Totum — Todos os direitos reservados
      </p>
    </footer>
  )
}
