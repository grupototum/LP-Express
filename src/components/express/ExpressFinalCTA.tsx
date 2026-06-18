import { motion } from 'framer-motion'

const WPP_URL = 'https://wa.me/5533991294114?text=Ol%C3%A1%21+Vi+a+landing+page+e+quero+ver+o+que+identificaram+na+minha+empresa.+Gostaria+de+entender+melhor.'

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
          <p className="text-white/60 font-light text-lg mb-6">
            Se não fizer sentido, o diagnóstico fica de graça.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={WPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 glass-btn-accent text-accent-foreground font-medium px-10 py-4 rounded-xl text-lg gentle-animation"
          >
            Quero ver o que identificaram na minha empresa
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
