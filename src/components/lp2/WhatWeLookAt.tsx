import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ITEMS = [
  { num: '01', title: 'Avaliações no Google', desc: 'Quantas, o que dizem, qual padrão se repete.' },
  { num: '02', title: 'Presença no Instagram', desc: 'O que você publica, como o público responde.' },
  { num: '03', title: 'Concorrente direto', desc: 'Onde ele acerta, onde abre espaço pra você.' },
  { num: '04', title: 'O que seus clientes mais valorizam', desc: 'No que está escrito, não no que você imagina.' },
  { num: '05', title: 'A narrativa que falta', desc: 'O que existe na sua empresa e não está sendo dito em lugar nenhum.' },
]

export default function WhatWeLookAt() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % ITEMS.length)
    }, 4000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused])

  const goTo = (i: number) => {
    setActive(i)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActive(prev => (prev + 1) % ITEMS.length)
      }, 4000)
    }
  }

  return (
    <section
      className="bg-[#F4F3F1] px-6 py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-playfair text-[clamp(26px,3.5vw,44px)] leading-[1.2] text-[#141414] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          O que olhamos antes de montar sua prévia
        </motion.h2>

        <motion.p
          className="font-dm-sans text-[17px] leading-relaxed text-[#141414]/70 max-w-2xl mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Nada aqui é genérico. Cada prévia começa com uma análise específica da sua empresa. Esses são os cinco pontos que olhamos antes de montar qualquer coisa.
        </motion.p>

        {/* Desktop: grid de cards */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {ITEMS.map((item, i) => (
            <motion.button
              key={item.num}
              onClick={() => goTo(i)}
              className={`text-left rounded-sm border p-6 transition-colors duration-200 cursor-pointer ${
                active === i
                  ? 'border-[#3A4A3F] bg-white'
                  : 'border-[#141414]/12 bg-[#F4F3F1] hover:border-[#3A4A3F]/40'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="relative mb-4">
                <span className="font-playfair text-[56px] font-normal text-[#3A4A3F]/12 leading-none select-none absolute -top-2 -left-1">
                  {item.num}
                </span>
                <span className="font-playfair text-[14px] text-[#3A4A3F] relative z-10 pt-8 block">{item.num}</span>
              </div>
              <p className="font-dm-sans font-medium text-[14px] text-[#141414] mb-2 leading-tight">{item.title}</p>
              <p className="font-dm-sans text-[13px] text-[#141414]/65 leading-relaxed">{item.desc}</p>
            </motion.button>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="border border-[#3A4A3F]/30 rounded-sm bg-white p-8"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative mb-6">
                  <span className="font-playfair text-[80px] font-normal text-[#3A4A3F]/10 leading-none select-none absolute -top-4 -left-2">
                    {ITEMS[active].num}
                  </span>
                  <span className="font-playfair text-[15px] text-[#3A4A3F] relative z-10 pt-10 block">{ITEMS[active].num}</span>
                </div>
                <p className="font-playfair text-xl text-[#141414] mb-3">{ITEMS[active].title}</p>
                <p className="font-dm-sans text-[16px] text-[#141414]/75 leading-relaxed">{ITEMS[active].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => goTo((active - 1 + ITEMS.length) % ITEMS.length)}
              className="font-dm-sans text-sm text-[#3A4A3F] border border-[#3A4A3F]/30 px-4 py-2 rounded-sm hover:bg-[#3A4A3F]/5"
            >
              ← anterior
            </button>
            <div className="flex gap-2">
              {ITEMS.map((_, i) => (
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
              onClick={() => goTo((active + 1) % ITEMS.length)}
              className="font-dm-sans text-sm text-[#3A4A3F] border border-[#3A4A3F]/30 px-4 py-2 rounded-sm hover:bg-[#3A4A3F]/5"
            >
              próximo →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
