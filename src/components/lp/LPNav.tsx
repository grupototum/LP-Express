import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { whatsappUrl } from '@/data/lp-totum'
import totumLogo from '@/assets/totum-logo.png'

interface Props {
  ctaPrimary: string
}

export default function LPNav({ ctaPrimary }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4"
      style={{
        background: 'rgba(14,9,24,0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <img src={totumLogo} alt="Totum" className="h-7 w-auto" />

      <a
        href={whatsappUrl(ctaPrimary)}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm text-white transition-all hover:scale-[1.03]"
        style={{ background: 'var(--rosso)' }}
      >
        {ctaPrimary}
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </motion.header>
  )
}
