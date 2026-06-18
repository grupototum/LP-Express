import { motion } from 'framer-motion'
import { Star, Instagram, Users, Heart, Lightbulb } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Star,
    title: 'Avaliações no Google.',
    desc: 'Quantas, o que dizem, qual padrão se repete.',
  },
  {
    number: '02',
    icon: Instagram,
    title: 'Presença no Instagram.',
    desc: 'O que você publica, como o público responde.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Concorrente direto.',
    desc: 'Onde ele acerta, onde abre espaço pra você.',
  },
  {
    number: '04',
    icon: Heart,
    title: 'O que seus clientes mais valorizam.',
    desc: 'No que está escrito, não no que você imagina.',
  },
  {
    number: '05',
    icon: Lightbulb,
    title: 'A narrativa que falta.',
    desc: 'O que existe na sua empresa e não está sendo dito em lugar nenhum.',
  },
]

export function ExpressFlow() {
  return (
    <section id="analise" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">
              O que olhamos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-5 leading-[1.1]">
              O que olhamos antes de montar sua prévia
            </h2>
            <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
              Nada aqui é genérico. Cada prévia começa com uma análise específica da sua empresa. Esses são os cinco pontos que olhamos antes de montar qualquer coisa.
            </p>
          </motion.div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative glass-card rounded-2xl p-5 hover:shadow-xl gentle-animation flex flex-col h-full min-h-[170px]"
              >
                <div className="absolute top-4 right-4 text-accent/40 font-light text-xs tracking-wider">
                  {s.number}
                </div>
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 gentle-animation">
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-normal text-primary mb-1.5 leading-snug">{s.title}</h3>
                <p
                  lang="pt-BR"
                  className="text-[clamp(0.8125rem,3.2vw,0.875rem)] text-muted-foreground font-light leading-relaxed min-h-[2.875rem] hyphens-auto break-words"
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
