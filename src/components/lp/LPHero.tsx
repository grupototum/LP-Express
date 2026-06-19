import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { LPContent, whatsappUrl } from '@/data/lp-totum'

interface Props {
  content: LPContent['hero']
}

export default function LPHero({ content }: Props) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ background: 'var(--surface)' }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none"
      >
        <source src="/videos/hero-rocket.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(80% 55% at 50% 0%, rgba(200,16,46,0.18) 0%, rgba(200,16,46,0.04) 40%, rgba(14,9,24,0) 70%)',
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0918]/30 via-[#0e0918]/50 to-[#0e0918] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-widest uppercase"
            style={{ borderColor: 'rgba(200,16,46,0.4)', color: 'var(--muted-foreground)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
            Grupo Totum — Identidade Digital
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 300 }}
        >
          {content.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-lg sm:text-xl leading-relaxed"
          style={{ color: 'var(--text-muted)', fontWeight: 300 }}
        >
          {content.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <a
            href={whatsappUrl(content.ctaPrimary)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary inline-flex items-center gap-2 text-white text-sm px-8 py-4"
          >
            {content.ctaPrimary}
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={whatsappUrl(content.ctaSecondary)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-white"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {content.ctaSecondary}
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown
            className="w-5 h-5 animate-bounce"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
