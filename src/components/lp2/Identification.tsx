import { motion } from 'framer-motion'

const paragraphs = [
  'O cliente vê seus serviços. Nem sempre vê os motivos para escolher você.',
  'Quando alguém pesquisa sua empresa, vê o que você faz. Vê preço, vê serviço, vê foto. Mas raramente vê o que realmente importa na hora da decisão: a confiança que você levou anos pra construir.',
  'Isso fica escondido. E o que fica escondido não pesa na hora da escolha.',
  'A gente não vende site. Site você já podia ter comprado em qualquer lugar. O que a gente resolve é outra coisa.',
  'A maioria das empresas com boa reputação está perdendo cliente novo todo dia sem perceber. Alguém pesquisou seu serviço hoje. Comparou com dois concorrentes. E foi pro outro. Não porque ele é melhor. Mas porque a página dele comunicou melhor a confiança que você também tem.',
  'Esse cliente já estava procurando o que você faz. Ele estava na sua mesa. E escapou.',
]

export default function Identification() {
  return (
    <section className="bg-[#F4F3F1] px-6 py-24 md:py-32">
      <div className="max-w-2xl mx-auto space-y-6">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            className="font-dm-sans text-[18px] md:text-[20px] leading-[1.7] text-[#141414]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
