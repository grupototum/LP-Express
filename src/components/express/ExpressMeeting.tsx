import { motion } from 'framer-motion'

export function ExpressMeeting() {
  return (
    <section id="autoridade" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">Quem faz a análise</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary leading-tight">
            Por que a gente sabe o que está olhando
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Israel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-normal text-primary mb-4">Israel Lemos</h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Israel trabalha construindo sites e marketing digital desde 2003. Em mais de 20 anos analisando o que funciona e o que não funciona online, uma coisa ficou clara: a maioria das empresas não perde cliente por falta de qualidade. Perde porque o que construiu não aparece onde a decisão acontece.
            </p>
          </motion.div>

          {/* Sócio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-normal text-primary mb-4">[NOME_SÓCIO]</h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              [NOME_SÓCIO] é pós-graduado em processos comerciais, com anos de prática em tráfego pago, certificações Google e Meta, e uma trajetória longa em gestão comercial de produtos complexos, serviços e mercados altamente competitivos. Sabe identificar onde a venda trava antes de acontecer.
            </p>
          </motion.div>
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 glass-card rounded-2xl p-8 border border-accent/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.05] to-transparent" />
          <p className="relative text-primary font-normal text-lg sm:text-xl leading-relaxed text-center max-w-2xl mx-auto">
            A análise que fazemos antes de montar sua prévia não é achismo. É o resultado de mais de 20 anos lendo o que funciona, e o que deixa dinheiro na mesa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
