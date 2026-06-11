import { motion } from 'framer-motion'
import { Award, Search, Sparkles, Users, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Award,
    title: 'Você possui uma reputação construída',
    desc: 'Autoridade, conexões e resultados reais. Agora precisam de uma narrativa que comunique o seu valor.',
  },
  {
    icon: Search,
    title: 'Identificamos uma oportunidade',
    desc: 'Nossa equipe analisou o seu posicionamento e mapeou uma oportunidade clara de crescimento que ainda não está sendo capturada.',
  },
  {
    icon: Sparkles,
    title: 'Criamos uma prévia estratégica',
    desc: 'Você já viu o preview: nosso entendimento do seu negócio, o ângulo proposto e a estrutura inicial.',
  },
  {
    icon: Users,
    title: 'Apresentamos a estratégia na reunião',
    desc: 'Agora validamos o direcionamento, apresentamos a estratégia completa e alinhamos os últimos detalhes.',
  },
  {
    icon: Rocket,
    title: 'Entregamos sua página em até 24h',
    desc: 'Após o alinhamento, materializamos tudo em uma Landing Page Express pronta para gerar oportunidades reais.',
  },
]

export function ExpressFlow() {
  return (
    <section id="fluxo" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">O processo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-4 leading-tight">
            Da reputação que você já tem<br />
            até a página que vai materializá-la
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Cinco etapas pensadas para entregar posicionamento, não apenas pixels.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 flex gap-5 hover:shadow-xl gentle-animation"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent/70 font-light text-sm">0{i + 1}</span>
                    <h3 className="text-xl sm:text-2xl font-light text-primary leading-tight">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
