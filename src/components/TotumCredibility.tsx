import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Lock } from 'lucide-react'
import conceptTrust from '../assets/concept-trust.jpg'

const objections = [
  {
    question: '"Já tentei marketing e não funcionou"',
    answer: 'Aqui não aplicamos fórmulas genéricas. Primeiro entendemos o mecanismo do seu negócio.',
  },
  {
    question: '"Vai tentar me vender algo?"',
    answer: 'Não até que faça sentido para o seu cenário. Sem pressão, sem truques.',
  },
  {
    question: '"Não tenho tempo"',
    answer: 'São apenas 45 minutos que podem mudar os próximos 12 meses do seu negócio.',
  },
]

const guarantees = [
  { icon: ShieldCheck, text: 'Sem compromisso de compra' },
  { icon: Lock, text: 'Confidencialidade garantida' },
  { icon: Clock, text: 'Gravação da sessão enviada depois' },
]

export function TotumCredibility() {
  return (
    <section id="credibilidade" className="py-24 px-6 bg-totum-dark relative grain-bg overflow-hidden">
      {/* Background conceptual image */}
      <div className="absolute inset-0 z-0">
        <img src={conceptTrust} alt="" className="w-full h-full object-cover opacity-[0.10]" />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que essa consultoria pode{' '}
            <span className="text-accent">ajudar você agora?</span>
          </h2>
        </motion.div>

        <div className="space-y-6 mb-16">
          {objections.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-dark rounded-2xl p-8 hover:border-accent/30 gentle-animation"
            >
              <h3 className="text-xl font-bold text-white mb-3">{obj.question}</h3>
              <p className="text-white/60 text-lg">{obj.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-dark rounded-2xl p-8 sm:p-10"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Garantias adicionais</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {guarantees.map((g, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                  <g.icon className="w-7 h-7 text-accent" />
                </div>
                <p className="font-semibold text-white">{g.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
