import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Tag } from 'lucide-react'
import conceptFunnel from '../assets/concept-funnel.jpg'

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Leads chegando mas não convertendo',
    description: 'Você investe em tráfego, os leads aparecem, mas a taxa de conversão é frustrante.',
  },
  {
    icon: TrendingDown,
    title: 'Dependência total de tráfego pago ou indicação',
    description: 'Se parar de investir, para de vender. Seu negócio vive refém de uma única fonte.',
  },
  {
    icon: Tag,
    title: 'Marca fraca que precisa competir por preço',
    description: 'Sem posicionamento claro, resta competir por preço — e sempre alguém cobra menos.',
  },
]

export function TotumPain() {
  return (
    <section id="dor" className="py-24 px-6 bg-totum-dark relative grain-bg overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que muitos negócios travam{' '}
            <span className="text-accent">mesmo investindo em marketing?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16 items-center">
          <div className="lg:col-span-3 grid sm:grid-cols-1 gap-6">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card-dark rounded-2xl p-8 hover:border-accent/30 gentle-animation group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 gentle-animation">
                    <point.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                    <p className="text-white/60 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden glass-card-dark p-2">
              <img
                src={conceptFunnel}
                alt="Funil de conversão com vazamento — metáfora visual"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card-dark rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl font-bold text-white mb-4">
            "Você perde mais por falta de lead ou por{' '}
            <span className="text-accent">não aproveitar os que já chegam?</span>"
          </p>
          <p className="text-white/60 text-lg">
            O problema raramente é apenas volume de leads.{' '}
            <strong className="text-white/80">O problema geralmente está no mecanismo de conversão.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
