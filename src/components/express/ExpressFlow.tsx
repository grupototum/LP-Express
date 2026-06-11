import { motion } from 'framer-motion'
import { Award, Search, Sparkles, Users, Rocket, ArrowUpRight } from 'lucide-react'

const steps = [
  { icon: Award, title: 'Reputação construída', desc: 'Autoridade e resultados reais já existem.' },
  { icon: Search, title: 'Oportunidade mapeada', desc: 'Identificamos o ângulo de crescimento.' },
  { icon: Sparkles, title: 'Prévia estratégica', desc: 'Você já viu o entendimento e a estrutura.' },
  { icon: Users, title: 'Reunião de alinhamento', desc: 'Validamos direção e ajustamos detalhes.' },
  { icon: Rocket, title: 'No ar em 24h', desc: 'Landing Page Express pronta para capturar.' },
]

export function ExpressFlow() {
  return (
    <section id="fluxo" lang="pt-BR" className="relative py-24 px-6 bg-background overflow-hidden">
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
              O processo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-5 leading-[1.1]">
              Da reputação que você tem<br />
              à página que a <span className="text-accent">materializa</span>
            </h2>
            <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
              Cinco etapas objetivas. Posicionamento primeiro, pixels depois.
              Você valida cada decisão antes de qualquer linha entrar no ar.
            </p>
            <a
              href="#agendar"
              className="inline-flex items-center gap-2 glass-btn-accent text-accent-foreground font-medium px-6 py-3 rounded-xl gentle-animation"
            >
              Agendar reunião
              <ArrowUpRight className="w-4 h-4" />
            </a>
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
                  0{i + 1}
                </div>
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 gentle-animation">
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-normal text-primary mb-1.5 leading-snug">{s.title}</h3>
                <p className="text-[clamp(0.8125rem,3.2vw,0.875rem)] text-muted-foreground font-light leading-relaxed min-h-[2.875rem] hyphens-auto break-words">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
