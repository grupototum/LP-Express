import { motion } from 'framer-motion'

export default function LPvsSite() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-playfair text-[clamp(28px,4vw,52px)] leading-[1.15] text-[#141414] max-w-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          A maioria das empresas pensa que precisa de um site. Mas o que converte cliente novo não é site. É página.
        </motion.h2>

        <motion.p
          className="font-dm-sans text-[18px] text-[#141414]/80 max-w-2xl mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Site institucional mostra tudo que você faz. Para todo mundo. Sem uma direção clara de onde o visitante deveria clicar. Landing page tem um objetivo só. Uma mensagem. Uma ação. Essa diferença parece pequena. No resultado, não é.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <motion.div
            className="border border-[#141414]/12 rounded-sm p-8 bg-[#FAFAF8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="font-dm-sans font-medium text-[13px] uppercase tracking-widest text-[#141414]/50 mb-4">Site institucional</p>
            <p className="font-dm-sans text-[17px] leading-relaxed text-[#141414]/80">
              Várias páginas, vários objetivos, vários CTAs. Visitante entra, lê um pouco, sai sem decidir nada. Você gastou pra construir um catálogo que ninguém compra.
            </p>
          </motion.div>

          <motion.div
            className="border border-[#3A4A3F]/30 rounded-sm p-8 bg-[#3A4A3F]/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <p className="font-dm-sans font-medium text-[13px] uppercase tracking-widest text-[#3A4A3F] mb-4">Landing page orientada a venda</p>
            <p className="font-dm-sans text-[17px] leading-relaxed text-[#141414]/80">
              Uma página. Uma mensagem específica pro tipo de cliente que você quer atrair. Um caminho que leva direto à decisão. O visitante entende em 30 segundos o que você faz, por que você é a escolha certa, e o que fazer agora.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="font-dm-sans text-[17px] leading-relaxed text-[#141414]/75 max-w-2xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Site institucional tem custo alto de produção, prazo longo de desenvolvimento, e depende de SEO de longo prazo pra gerar resultado. Você investe hoje e espera meses. Landing page tem desenvolvimento focado, prazo de horas, e começa a funcionar no mesmo dia que vai ao ar. Você investe hoje e vê resultado essa semana. No quesito custo-benefício, não tem comparação.
        </motion.p>

        <motion.p
          className="font-playfair text-[clamp(22px,3vw,36px)] text-[#141414] text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Uma empresa por região. Uma página que converte. É isso que a gente entrega.
        </motion.p>
      </div>
    </section>
  )
}
