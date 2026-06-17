import { motion } from 'framer-motion'
import { processSteps, LPContent } from '@/data/lp-totum'

interface Props {
  headline: LPContent['section5']['headline']
}

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export default function LPProcess({ headline }: Props) {
  return (
    <section
      className="py-24 sm:py-32 px-6"
      style={{ background: 'rgba(255,255,255,0.015)' }}
    >
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="w-8 h-px mb-8" style={{ background: 'var(--rosso)' }} />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="text-white mb-14"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 300 }}
          >
            {headline}
          </h2>
        </Reveal>

        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div
            className="absolute left-[19px] top-8 bottom-8 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(200,16,46,0.6), rgba(200,16,46,0.05))' }}
          />

          {processSteps.map((step, i) => (
            <Reveal key={i} delay={0.1 + i * 0.09}>
              <div className="flex gap-6 pb-10 last:pb-0">
                {/* Number circle */}
                <div
                  className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono tracking-wider"
                  style={{
                    background: i === 0 ? 'var(--rosso)' : 'var(--card-bg)',
                    color: i === 0 ? '#fff' : 'var(--rosso)',
                    boxShadow: 'inset 0 0 0 1px rgba(200,16,46,0.3)',
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 pt-2">
                  <p className="text-white text-base" style={{ fontWeight: 400 }}>
                    {step.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)', fontWeight: 300 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
