import { motion } from 'framer-motion'
import { FileSearch, LayoutTemplate, CalendarCheck, Zap } from 'lucide-react'
import { WHATSAPP_URL } from './constants'

const DELIVERABLES = [
  {
    icon: FileSearch,
    title: 'Análise completa da sua presença digital',
    desc: 'Google, Instagram e os três principais concorrentes da sua região. Feita antes de qualquer conversa.',
  },
  {
    icon: LayoutTemplate,
    title: 'Prévia personalizada da sua página',
    desc: 'Você vê o que montamos antes de decidir qualquer coisa. Não tem surpresa depois.',
  },
  {
    icon: CalendarCheck,
    title: 'Reunião de alinhamento de até 30 minutos',
    desc: 'Pra ajustar o que quiser antes de subir.',
  },
  {
    icon: Zap,
    title: 'Página no ar em até 24 horas após o alinhamento',
    desc: 'Não em semanas. Não em 30 dias. Em 24 horas depois do alinhamento, a página vai ao ar.',
  },
]

export default function Offer() {
  return (
    <section className="bg-[#3A4A3F] px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-playfair text-[clamp(28px,4vw,52px)] leading-[1.15] text-white max-w-3xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sua reputação já existe. Falta fazer ela ser percebida.
        </motion.h2>

        <motion.p
          className="font-playfair text-[clamp(20px,2.5vw,30px)] text-white/80 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          A partir de R$ 900 no PIX ou 3x de R$ 400.
        </motion.p>

        <motion.p
          className="font-dm-sans text-[17px] leading-relaxed text-white/70 max-w-xl mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Não estamos te pedindo pra contratar agora. Estamos te pedindo 10 minutos pra te mostrar o que identificamos na sua empresa. Se fizer sentido, a gente segue. Se não fizer sentido, o diagnóstico fica de graça.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {DELIVERABLES.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-5 bg-white/8 border border-white/15 rounded-sm p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <item.icon size={22} className="text-white/60" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-dm-sans font-medium text-white text-[16px] mb-1">{item.title}</p>
                <p className="font-dm-sans text-[14px] text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border border-white/20 rounded-sm p-6 mb-10 flex gap-3 items-start"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-dm-sans text-[11px] font-semibold tracking-widest uppercase bg-white/15 text-white px-2 py-1 rounded-sm flex-shrink-0 mt-0.5">BÔNUS</span>
          <p className="font-dm-sans text-[15px] text-white/70 leading-relaxed">Em breve. Quem fechar essa semana recebe.</p>
        </motion.div>

        <motion.p
          className="font-dm-sans text-[15px] text-white/55 max-w-lg mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A gente trabalha com uma empresa por região nesse projeto. Se você está vendo essa página, ainda não fechamos com nenhum outro negócio da sua área. Isso pode mudar.
        </motion.p>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#3A4A3F] font-dm-sans font-semibold text-base px-8 py-4 rounded-sm hover:bg-[#F4F3F1] transition-colors duration-200"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Quero ver o que identificaram na minha empresa
        </motion.a>
      </div>
    </section>
  )
}
