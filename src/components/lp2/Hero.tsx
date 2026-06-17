import { motion } from 'framer-motion'
import { WHATSAPP_URL } from './constants'

export default function Hero() {
  return (
    <section className="bg-[#FAFAF8] min-h-[90vh] flex flex-col justify-center px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h1
          className="font-playfair text-[clamp(36px,5.5vw,68px)] leading-[1.1] text-[#141414] max-w-4xl mb-8"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          A maioria das empresas bem avaliadas está perdendo cliente novo todo mês. O problema não é o atendimento.
        </motion.h1>

        <motion.p
          className="font-dm-sans text-[clamp(17px,2vw,20px)] leading-relaxed text-[#141414]/75 max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Alguém pesquisou sua empresa hoje. Comparou com dois concorrentes. E escolheu outro. Não porque o outro é melhor. Porque a página dele comunicou mais rápido a confiança que você também tem.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-start"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3A4A3F] text-white font-dm-sans font-medium text-base px-7 py-4 rounded-sm hover:bg-[#2d3b32] transition-colors duration-200"
          >
            Quero ver o que identificaram na minha empresa
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-dm-sans text-base text-[#3A4A3F] underline underline-offset-4 py-4 hover:text-[#2d3b32] transition-colors duration-200"
          >
            10 minutos pra entender a oportunidade
          </a>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto w-full mt-24 border-t border-[#141414]/10" />
    </section>
  )
}
