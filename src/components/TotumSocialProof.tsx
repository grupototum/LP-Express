import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, BarChart3 } from 'lucide-react'

const proofs = [
  {
    icon: Lightbulb,
    title: 'Mais clareza estratégica',
    description: 'Empresários passam a entender exatamente onde investir.'
  },
  {
    icon: TrendingUp,
    title: 'Mais eficiência nos investimentos',
    description: 'Redução de desperdício em canais que não geram resultado.'
  },
  {
    icon: BarChart3,
    title: 'Mais previsibilidade de vendas',
    description: 'Processos mais claros de geração e conversão de clientes.'
  }
]

export function TotumSocialProof() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-accent/[0.02]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Empresas que estruturam o marketing{' '}
            <span className="text-accent">crescem com mais previsibilidade</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {proofs.map((proof, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 hover:shadow-xl gentle-animation group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 gentle-animation">
                <proof.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{proof.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{proof.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-8 sm:p-10 text-center"
        >
          <p className="text-muted-foreground text-lg">
            Empresas atendidas em diferentes segmentos como{' '}
            <strong className="text-primary">serviços, saúde, imobiliário e negócios locais.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
