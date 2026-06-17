import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

const TESTIMONIALS = [
  { imageUrl: null as string | null },
  { imageUrl: null as string | null },
  { imageUrl: null as string | null },
]

function PlaceholderCard() {
  return (
    <div className="bg-white border border-[#141414]/10 rounded-sm p-8 flex flex-col items-center justify-center min-h-[320px] gap-4">
      <div className="w-full max-w-sm h-48 bg-[#F4F3F1] rounded-sm flex flex-col items-center justify-center gap-3">
        <ImageIcon size={32} className="text-[#141414]/30" />
        <p className="font-dm-sans text-sm text-[#141414]/45 text-center">Print real — a ser inserido</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused])

  const goTo = (i: number) => {
    setActive(i)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActive(prev => (prev + 1) % TESTIMONIALS.length)
      }, 5000)
    }
  }

  return (
    <section
      className="bg-[#F4F3F1] px-6 py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="font-playfair text-[clamp(26px,3.5vw,44px)] leading-[1.2] text-[#141414] mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          O que as pessoas dizem quando veem a prévia
        </motion.h2>

        <motion.p
          className="font-dm-sans text-[17px] text-[#141414]/65 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Conversas reais. Sem edição. Sem roteiro.
        </motion.p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {TESTIMONIALS[active].imageUrl ? (
                <img
                  src={TESTIMONIALS[active].imageUrl!}
                  alt="Depoimento"
                  className="w-full rounded-sm"
                />
              ) : (
                <PlaceholderCard />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="font-dm-sans text-sm text-[#3A4A3F] border border-[#3A4A3F]/30 px-4 py-2 rounded-sm hover:bg-[#3A4A3F]/5 transition-colors"
          >
            ←
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  active === i ? 'bg-[#3A4A3F]' : 'bg-[#141414]/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo((active + 1) % TESTIMONIALS.length)}
            className="font-dm-sans text-sm text-[#3A4A3F] border border-[#3A4A3F]/30 px-4 py-2 rounded-sm hover:bg-[#3A4A3F]/5 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
