import { motion } from 'framer-motion'
import { Target, Compass, Layers, MessageSquare, Sparkles, Clock, Rocket } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 12 } },
}

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
            25 minutos para validar tudo<br />
            antes de colocar no ar
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Não é uma reunião comercial. É onde a estratégia que preparamos é apresentada, ajustada e aprovada por você.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 auto-rows-[minmax(140px,auto)]"
        >
          {/* Tall featured card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-3 glass-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-accent text-xs font-light tracking-widest uppercase mb-4">
                <Clock className="w-3.5 h-3.5" /> Duração
              </div>
              <div className="text-6xl sm:text-7xl font-light text-primary leading-none mb-2">25<span className="text-3xl text-muted-foreground"> min</span></div>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                Tempo suficiente para apresentar a estratégia, validar o direcionamento e alinhar o que entra na página.
              </p>
            </div>
            <div className="relative pt-6 border-t border-border/40">
              <p className="text-xs text-muted-foreground font-light">Online, via Google Meet</p>
            </div>
          </motion.div>

          {/* Topic cards */}
          {[
            { icon: Target, title: 'Oportunidade', desc: 'Apresentamos o ângulo identificado.' },
            { icon: Compass, title: 'Posicionamento', desc: 'Validamos a direção encontrada.' },
            { icon: Layers, title: 'Estratégia', desc: 'Mostramos o que sustenta a página.' },
            { icon: Sparkles, title: 'Estrutura', desc: 'Apresentamos a proposta da LP.' },
          ].map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="md:col-span-1 md:row-span-1 glass-card rounded-2xl p-5 hover:shadow-lg gentle-animation"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <t.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-normal text-primary mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}

          {/* Wide bottom card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-1 glass-card rounded-2xl p-6 flex items-center gap-5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.06] to-transparent" />
            <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-accent" />
            </div>
            <div className="relative flex-1">
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-light tracking-widest uppercase text-accent">Após o alinhamento</span>
              </div>
              <p className="text-primary font-light leading-snug">
                Aprovado o direcionamento, sua página entra no ar em até{' '}
                <strong className="font-normal">24 horas</strong>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
