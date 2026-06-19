import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { LPContent, whatsappUrl } from '@/data/lp-totum'

interface Props {
  content: LPContent['finalCta']
}

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export default function LPFinalCTA({ content }: Props) {
  const paragraphs = content.body.split('\n\n')

  return (
    <section
      className="py-28 sm:py-40 px-6 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(80% 50% at 50% 100%, rgba(200,16,46,0.18) 0%, rgba(200,16,46,0.04) 50%, rgba(14,9,24,0) 80%), var(--surface)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
        <Reveal>
          <div className="w-8 h-px mx-auto" style={{ background: 'var(--rosso)' }} />
        </Reveal>

        <Reveal delay={0.07}>
          <h2
            className="text-white"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 300 }}
          >
            {content.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--text-muted)', fontWeight: 300 }}
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <a
            href={whatsappUrl(content.cta)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary inline-flex items-center gap-2 text-white px-9 py-4 text-base mt-2 hover:scale-[1.03] transition-transform"
          >
            {content.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Se não fizer sentido, o diagnóstico fica de graça.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
