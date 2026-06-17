import { motion } from 'framer-motion'
import { WHATSAPP_URL } from './constants'

export default function FinalCTA() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-24 md:py-32 text-center">
      <div className="max-w-xl mx-auto">
        <motion.p
          className="font-dm-sans text-[18px] text-[#141414]/65 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Se não fizer sentido, o diagnóstico fica de graça.
        </motion.p>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#3A4A3F] text-white font-dm-sans font-medium text-base px-8 py-4 rounded-sm hover:bg-[#2d3b32] transition-colors duration-200"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Quero ver o que identificaram na minha empresa
        </motion.a>
      </div>
    </section>
  )
}
