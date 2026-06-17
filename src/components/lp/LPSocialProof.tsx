import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react'
import { LPContent } from '@/data/lp-totum'
import wpp1 from '@/assets/wpp-proof-1.png'
import wpp2 from '@/assets/wpp-proof-2.png'
import wpp3 from '@/assets/wpp-proof-3.png'
import wpp4 from '@/assets/wpp-proof-4.png'
import wpp5 from '@/assets/wpp-proof-5.png'

const wppImages = [wpp1, wpp2, wpp3, wpp4, wpp5]

interface Props {
  section6: LPContent['section6']
  objections: LPContent['objections']
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

function WPPCarousel({ headline, subheadline }: { headline: string; subheadline?: string }) {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + wppImages.length) % wppImages.length)
  const next = () => setIndex((i) => (i + 1) % wppImages.length)

  return (
    <div>
      <Reveal>
        <div className="w-8 h-px mb-8" style={{ background: 'var(--rosso)' }} />
      </Reveal>

      <Reveal delay={0.05}>
        <h2
          className="text-white mb-3"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 300 }}
        >
          {headline}
        </h2>
      </Reveal>

      {subheadline && (
        <Reveal delay={0.1}>
          <p className="text-sm mb-12" style={{ color: 'var(--muted-foreground)' }}>{subheadline}</p>
        </Reveal>
      )}

      <Reveal delay={0.15}>
        <div className="relative">
          {/* Carousel frame — phone mockup feel */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>

            <div className="flex-1 overflow-hidden rounded-2xl" style={{ background: 'var(--card-bg)' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={wppImages[index]}
                  alt={`Conversa de WhatsApp ${index + 1}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="w-full h-auto max-h-[520px] object-contain block mx-auto"
                />
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {wppImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="transition-all duration-200 rounded-full"
                style={{
                  width: i === index ? '20px' : '6px',
                  height: '6px',
                  background: i === index ? 'var(--rosso)' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}

function Objections({ items }: { items: LPContent['objections'] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="mt-20">
      <Reveal>
        <h3
          className="text-white mb-8"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)', letterSpacing: '-0.02em', fontWeight: 300 }}
        >
          Dúvidas frequentes
        </h3>
      </Reveal>

      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <Reveal key={i} delay={0.07 * i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left rounded-xl px-6 py-5 transition-colors"
              style={{
                background: 'var(--card-bg)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-white text-sm sm:text-base" style={{ fontWeight: 300 }}>
                  {item.question}
                </p>
                <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--rosso)' }}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)', fontWeight: 300 }}>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function LPSocialProof({ section6, objections }: Props) {
  return (
    <section
      className="py-24 sm:py-32 px-6"
      style={{ background: 'rgba(255,255,255,0.015)' }}
    >
      <div className="max-w-3xl mx-auto">
        <WPPCarousel headline={section6.headline} subheadline={section6.subheadline} />
        <Objections items={objections} />
      </div>
    </section>
  )
}
