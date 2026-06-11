import { motion } from 'framer-motion'
import { Target, Compass, Layers, MessageSquare, Sparkles } from 'lucide-react'

const topics = [
  { icon: Target, label: 'Apresentamos a oportunidade que identificamos para o seu negócio' },
  { icon: Compass, label: 'Validamos o posicionamento encontrado na análise' },
  { icon: Layers, label: 'Apresentamos a estratégia completa por trás da página' },
  { icon: Sparkles, label: 'Mostramos a estrutura proposta da Landing Page' },
  { icon: MessageSquare, label: 'Alinhamos detalhes finais antes da entrega' },
]

export function ExpressMeeting() {
  return (
    <section id="reuniao" className="relative py-24 px-6 bg-totum-gray overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 rounded-full blur-[120px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">A Reunião de Alinhamento</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-4 leading-tight">
            40 minutos para validar tudo<br />
            antes de colocar no ar
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Não é uma reunião comercial. É a etapa onde a estratégia que preparamos para você é apresentada, ajustada e aprovada por você.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {topics.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 flex items-start gap-4 hover:shadow-lg gentle-animation"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <t.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-primary font-light leading-relaxed pt-1">{t.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground font-light">
            Aprovado o direcionamento, sua página entra no ar em até{' '}
            <strong className="text-primary font-normal">24 horas</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
