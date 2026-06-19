import { motion } from 'framer-motion'

interface Props {
  headline: string
  body: string[]
  accent?: boolean
  dark?: boolean
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

export default function LPTextSection({ headline, body, accent = false, dark = false }: Props) {
  return (
    <section
      className="py-24 sm:py-32 px-6"
      style={dark ? { background: 'rgba(255,255,255,0.02)' } : undefined}
    >
      <div className="max-w-3xl mx-auto">
        {accent && (
          <Reveal>
            <div className="w-8 h-px mb-8" style={{ background: 'var(--rosso)' }} />
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <h2
            className="text-white mb-10"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 300 }}
          >
            {headline}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-5">
          {body.map((para, i) => (
            <Reveal key={i} delay={0.1 + i * 0.07}>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--text-muted)', fontWeight: 300 }}
              >
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
