import { motion } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'

export function ExpressFinalCTA() {
  return (
    <section className="relative py-28 px-6 bg-totum-dark grain-bg overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/15 rounded-full blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-totum-dark/80 via-transparent to-totum-dark/90" />

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight">
            Você já construiu autoridade.<br />
            <span className="text-accent">Vamos transformá-la em crescimento.</span>
          </h2>
          <p className="text-white/70 font-light text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Reserve 40 minutos para validar a estratégia. Em até 24h depois, sua nova página está no ar.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#agendar"
            className="inline-flex items-center justify-center gap-2 glass-btn-accent text-accent-foreground font-medium px-10 py-4 rounded-xl text-lg gentle-animation"
          >
            <CalendarCheck className="w-5 h-5" />
            Agendar Reunião de Alinhamento
          </motion.a>
          <p className="text-white/50 text-sm font-light mt-6">
            Sem compromisso · Confirmação em até 1 hora útil
          </p>
        </motion.div>
      </div>
    </section>
  )
}
