import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import wpp1 from '@/assets/wpp-proof-1.png'
import wpp2 from '@/assets/wpp-proof-2.png'
import wpp3 from '@/assets/wpp-proof-3.png'
import wpp4 from '@/assets/wpp-proof-4.png'
import wpp5 from '@/assets/wpp-proof-5.png'

const images = [
  { src: wpp1, alt: 'Conversa real elogiando o entendimento estratégico' },
  { src: wpp2, alt: 'Conversa real elogiando a entrega em menos de 24h' },
  { src: wpp3, alt: 'Conversa real elogiando a clareza após a reunião' },
  { src: wpp4, alt: 'Conversa real relatando 3 clientes fechados em uma semana' },
  { src: wpp5, alt: 'Conversa real elogiando o profissionalismo e indicando a Totum' },
]

const loop = [...images, ...images]

// Velocidade: 64s para percorrer metade da trilha (60% mais lento que os 40s anteriores)
const LOOP_DURATION_MS = 64_000

export function ExpressWhatsAppProof() {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const pausedRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  const lastTsRef = useRef<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Loop de animação em rAF para permitir pause/prev/next sem perder fluidez
  useEffect(() => {
    const step = (ts: number) => {
      const track = trackRef.current
      if (track) {
        const halfWidth = track.scrollWidth / 2
        if (halfWidth > 0) {
          if (lastTsRef.current == null) lastTsRef.current = ts
          const dt = ts - lastTsRef.current
          lastTsRef.current = ts

          if (!pausedRef.current) {
            const speed = halfWidth / LOOP_DURATION_MS // px/ms
            offsetRef.current += speed * dt
          }
          // wrap
          if (offsetRef.current >= halfWidth) offsetRef.current -= halfWidth
          if (offsetRef.current < 0) offsetRef.current += halfWidth

          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
        }
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      lastTsRef.current = null
    }
  }, [])

  const getCardStep = () => {
    const track = trackRef.current
    if (!track) return 300
    const first = track.firstElementChild as HTMLElement | null
    if (!first) return 300
    const styles = window.getComputedStyle(track)
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0
    return first.getBoundingClientRect().width + gap
  }

  const nudge = (dir: 1 | -1) => {
    offsetRef.current += dir * getCardStep()
  }

  const togglePause = () => {
    pausedRef.current = !pausedRef.current
    setIsPaused(pausedRef.current)
  }

  return (
    <section id="prova" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">Conversas reais</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary mb-4 leading-tight">
            O que as pessoas dizem<br />
            <span className="text-accent">quando veem a prévia</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Conversas reais. Sem edição. Sem roteiro.
          </p>
        </motion.div>

        {/* Carrossel */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          }}
        >
          <div
            ref={trackRef}
            className="flex w-max gap-4 sm:gap-6 will-change-transform"
            style={{ transform: 'translate3d(0,0,0)' }}
          >
            {loop.map((img, i) => (
              <div
                key={i}
                className="relative w-[68vw] xs:w-[55vw] sm:w-[44vw] md:w-[290px] shrink-0 rounded-2xl overflow-hidden border border-border bg-white shadow-lg"
              >
                {/* Faixa que esconde foto e nome do topo do WhatsApp */}
                <div className="absolute top-0 left-0 right-0 h-[11%] bg-white z-10" />
                <div
                  className="absolute left-0 right-0 z-10"
                  style={{
                    top: '11%',
                    height: '3%',
                    background: 'linear-gradient(to bottom, white, transparent)',
                  }}
                />
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1024}
                  height={1536}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Conversa anterior"
            className="glass-btn-white p-3 rounded-full text-primary hover:scale-105 gentle-animation"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={togglePause}
            aria-label={isPaused ? 'Retomar autoplay' : 'Pausar autoplay'}
            className="glass-btn-accent text-accent-foreground px-4 py-3 rounded-full inline-flex items-center gap-2 text-sm font-medium hover:scale-105 gentle-animation"
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            <span className="hidden sm:inline">{isPaused ? 'Reproduzir' : 'Pausar'}</span>
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Próxima conversa"
            className="glass-btn-white p-3 rounded-full text-primary hover:scale-105 gentle-animation"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground font-light text-sm mt-6"
        >
          Conversas reais. Identidades preservadas a pedido dos clientes.
        </motion.p>
      </div>
    </section>
  )
}
