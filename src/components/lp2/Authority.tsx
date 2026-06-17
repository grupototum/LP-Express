import { motion } from 'framer-motion'

const FOUNDERS = [
  {
    name: 'Israel Lemos',
    initials: 'IL',
    photoUrl: null as string | null,
    bio: 'Israel trabalha construindo sites e marketing digital desde 2003. Em mais de 20 anos analisando o que funciona e o que não funciona online, uma coisa ficou clara: a maioria das empresas não perde cliente por falta de qualidade. Perde porque o que construiu não aparece onde a decisão acontece.',
  },
  {
    name: '[NOME_SÓCIO]',
    initials: 'NS',
    photoUrl: null as string | null,
    bio: '[NOME_SÓCIO] é pós-graduado em processos comerciais, com anos de prática em tráfego pago, certificações Google e Meta, e uma trajetória longa em gestão comercial de produtos complexos, serviços e mercados altamente competitivos. Sabe identificar onde a venda trava antes de acontecer.',
  },
]

export default function Authority() {
  return (
    <section className="bg-[#F4F3F1] px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-playfair text-[clamp(26px,3.5vw,44px)] leading-[1.2] text-[#141414] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Por que a gente sabe o que está olhando
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {FOUNDERS.map((founder, i) => (
            <motion.div
              key={founder.name}
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex items-center gap-4">
                {founder.photoUrl ? (
                  <img
                    src={founder.photoUrl}
                    alt={founder.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#E5E3DF] flex items-center justify-center flex-shrink-0">
                    <span className="font-dm-sans font-medium text-[#141414]/60 text-lg">{founder.initials}</span>
                  </div>
                )}
                <p className="font-playfair text-xl text-[#141414]">{founder.name}</p>
              </div>
              <p className="font-dm-sans text-[17px] leading-relaxed text-[#141414]/80">{founder.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-[#141414]/12 pt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-playfair text-[clamp(18px,2.2vw,26px)] leading-relaxed text-[#141414] max-w-3xl">
            A análise que fazemos antes de montar sua prévia não é achismo. É o resultado de mais de 20 anos lendo o que funciona, e o que deixa dinheiro na mesa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
