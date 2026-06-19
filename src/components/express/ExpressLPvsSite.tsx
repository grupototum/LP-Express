import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const siteItems = [
  'Várias páginas, vários objetivos, vários CTAs',
  'Visitante entra, lê um pouco, sai sem decidir nada',
  'Custo alto, prazo longo, depende de SEO de longo prazo',
  'Você investe hoje e espera meses',
]

const lpItems = [
  'Uma mensagem específica pro tipo de cliente que você quer atrair',
  'Um caminho que leva direto à decisão',
  'Desenvolvimento focado, entrega em horas',
  'Você investe hoje e vê resultado essa semana',
]

export function ExpressLPvsSite() {
  return (
    <section id="lp-vs-site" className="relative py-24 px-6 bg-totum-gray overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/6 rounded-full blur-[120px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">Por que landing page</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary mb-5 leading-tight">
            A maioria das empresas pensa que precisa de um site. Mas o que converte cliente novo não é site.{' '}
            <span className="text-accent">É página.</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            Site institucional mostra tudo que você faz. Para todo mundo. Sem uma direção clara de onde o visitante deveria clicar. Landing page tem um objetivo só. Uma mensagem. Uma ação. Essa diferença parece pequena. No resultado, não é.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Site col */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <h3 className="text-lg font-normal text-primary">Site institucional</h3>
            </div>
            <ul className="space-y-4">
              {siteItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground font-light text-sm leading-relaxed">
                  <X className="w-4 h-4 text-destructive/60 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground font-light border-t border-border/40 pt-4">
              Você gastou pra construir um catálogo que ninguém compra.
            </p>
          </motion.div>

          {/* LP col */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 border border-accent/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-lg font-normal text-primary">Landing page orientada a venda</h3>
              </div>
              <ul className="space-y-4">
                {lpItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground font-light text-sm leading-relaxed">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-primary font-normal border-t border-accent/20 pt-4">
                O visitante entende em 30 segundos o que você faz, por que você é a escolha certa, e o que fazer agora.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-primary font-normal text-lg mt-10"
        >
          Uma empresa por região. Uma página que converte. É isso que a gente entrega.
        </motion.p>
      </div>
    </section>
  )
}
