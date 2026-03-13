import { motion } from 'framer-motion'
import { Search, Map, Rocket, Eye, CalendarCheck, Video } from 'lucide-react'

const items = [
  { icon: Search, title: 'Diagnóstico do seu cenário real', desc: 'Não usamos templates genéricos. Analisamos o que realmente está acontecendo no seu negócio.' },
  { icon: Map, title: 'Mapeamento da jornada do seu cliente', desc: 'Entendemos cada ponto de contato e identificamos onde há atrito.' },
  { icon: Rocket, title: 'Identificação das 3 principais alavancas de crescimento', desc: 'Encontramos as oportunidades de maior impacto com menor esforço.' },
  { icon: Eye, title: 'Clareza sobre onde está o vazamento', desc: 'Mostramos exatamente onde seu negócio está perdendo oportunidades.' },
  { icon: CalendarCheck, title: 'Direção prática para os próximos 60–90 dias', desc: 'Um plano claro com prioridades definidas para execução imediata.' },
  { icon: Video, title: 'Gravação da sessão para você rever depois', desc: 'Receba a gravação completa para compartilhar com sua equipe.' },
]

export function TotumConsulting() {
  return (
    <section id="consultoria" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Light & gradient effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-totum-red/5 rounded-full blur-[80px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-accent/[0.02]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block glass-btn-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            O que você recebe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            O que acontece nos{' '}
            <span className="text-accent">45 minutos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 hover:shadow-xl gentle-animation group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 gentle-animation">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#formulario"
            className="inline-block glass-btn-accent text-accent-foreground font-bold px-10 py-4 rounded-xl text-lg gentle-animation"
          >
            Quero minha consultoria gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
