import { motion } from 'framer-motion'

export function ExpressIdentification() {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-8 leading-[1.15]">
            O cliente vê seus serviços. Nem sempre vê os motivos para escolher você.
          </h2>

          <div className="space-y-5 text-muted-foreground font-light text-lg leading-relaxed">
            <p>
              Quando alguém pesquisa sua empresa, vê o que você faz. Vê preço, vê serviço, vê foto. Mas raramente vê o que realmente importa na hora da decisão: a confiança que você levou anos pra construir.
            </p>
            <p>
              Isso fica escondido. E o que fica escondido não pesa na hora da escolha.
            </p>
            <p className="text-primary font-normal">
              A gente não vende site. Site você já podia ter comprado em qualquer lugar.
            </p>
            <p>
              O que a gente resolve é outra coisa. A maioria das empresas com boa reputação está perdendo cliente novo todo dia sem perceber. Alguém pesquisou seu serviço hoje. Comparou com dois concorrentes. E foi pro outro. Não porque ele é melhor. Mas porque a página dele comunicou melhor a confiança que você também tem.
            </p>
            <p>
              Esse cliente já estava procurando o que você faz. Ele estava na sua mesa. E escapou.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
