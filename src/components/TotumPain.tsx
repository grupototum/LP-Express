import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Tag } from 'lucide-react'

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
    <section id="dor" className="py-24 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Por que muitos negócios travam{' '}
            <span className="text-accent">mesmo investindo em marketing?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 hover:shadow-xl gentle-animation group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 gentle-animation">
                <point.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl font-bold text-primary mb-4">
            "Você perde mais por falta de lead ou por{' '}
            <span className="text-accent">não aproveitar os que já chegam?</span>"
          </p>
          <p className="text-muted-foreground text-lg">
            O problema raramente é apenas volume de leads.{' '}
            <strong>O problema geralmente está no mecanismo de conversão.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
