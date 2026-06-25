import { motion } from 'framer-motion'
import { ExpressWhatsAppIcon } from './ExpressWhatsAppIcon'

const WPP_URL = 'https://wa.me/5533997001893?text=Olá+Matheus!+Vi+a+análise+da+Totum+e+gostaria+de+agendar+uma+conversa+sobre+o+projeto.'

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
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-10 py-4 rounded-full text-lg gentle-animation shadow-[0_18px_45px_rgba(37,211,102,0.28)]"
          >
            <ExpressWhatsAppIcon className="w-5 h-5" />
            Quero ver o que identificaram na minha empresa
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
