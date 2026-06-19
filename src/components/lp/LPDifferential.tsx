import { motion } from 'framer-motion'
import { Clock, Eye } from 'lucide-react'
import { LPContent } from '@/data/lp-totum'

interface Props {
  content: LPContent['section4']
}

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export default function LPDifferential({ content }: Props) {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="w-8 h-px mb-8" style={{ background: 'var(--rosso)' }} />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="text-white mb-10"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 300 }}
          >
            {content.headline}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-5 mb-14">
          {content.body.map((para, i) => (
            <Reveal key={i} delay={0.1 + i * 0.07}>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)', fontWeight: 300 }}>
                {para}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Reveal delay={0.28}>
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: 'var(--card-bg)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
              }}
            >
              <Eye className="w-5 h-5" style={{ color: 'var(--rosso)' }} />
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                Você vê a prévia <strong className="text-white">antes</strong> de qualquer compromisso.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: 'var(--card-bg)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
              }}
            >
              <Clock className="w-5 h-5" style={{ color: 'var(--rosso)' }} />
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                Aprovada, a página vai ao ar em <strong className="text-white">até 24 horas</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
