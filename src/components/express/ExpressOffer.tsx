import { motion } from 'framer-motion'
import { Check, AlertCircle } from 'lucide-react'

const WPP_URL = 'https://wa.me/5533991294114?text=Ol%C3%A1%21+Vi+a+landing+page+e+quero+ver+o+que+identificaram+na+minha+empresa.+Gostaria+de+entender+melhor.'

const deliverables = [
  {
    title: 'Análise completa da sua presença digital',
    desc: 'Google, Instagram e os três principais concorrentes da sua região. Feita antes de qualquer conversa.',
  },
  {
    title: 'Prévia personalizada da sua página',
    desc: 'Você vê o que montamos antes de decidir qualquer coisa. Não tem surpresa depois.',
  },
  {
    title: 'Reunião de alinhamento de até 30 minutos',
    desc: 'Pra ajustar o que quiser antes de subir.',
  },
  {
    title: 'Página no ar em até 24 horas após o alinhamento',
    desc: 'Não em semanas. Não em 30 dias. Em 24 horas depois do alinhamento, a página vai ao ar.',
  },
]

export function ExpressOffer() {
  return (
    <section id="oferta" className="relative py-24 px-6 bg-totum-gray overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">A oferta</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary mb-5 leading-tight">
            Sua reputação já existe. Falta fazer ela ser percebida.
          </h2>
          <p className="text-2xl font-light text-primary">
            A partir de <strong className="font-normal">R$ 900 no PIX</strong> ou 3x de R$ 400.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground font-light text-sm uppercase tracking-widest mb-6">O que você recebe</p>
            {deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-4 glass-card rounded-xl p-5">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-primary font-normal text-sm leading-snug mb-1">{d.title}</p>
                  <p className="text-muted-foreground font-light text-xs leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card rounded-2xl p-8 border border-accent/25 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.07] to-transparent" />
            <div className="relative">
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Não estamos te pedindo pra contratar agora. Estamos te pedindo 10 minutos pra te mostrar o que identificamos na sua empresa. Se fizer sentido, a gente segue. Se não fizer sentido, o diagnóstico fica de graça.
              </p>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={WPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full glass-btn-accent text-accent-foreground py-4 rounded-full text-base gentle-animation flex items-center justify-center gap-2 mb-6"
              >
                Quero ver o que identificaram na minha empresa
              </motion.a>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[rgb(var(--rosso-glow-rgb)/0.06)] border border-[var(--rosso-border)]">
                <AlertCircle className="w-4 h-4 text-rosso shrink-0 mt-0.5" />
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  A gente trabalha com uma empresa por região nesse projeto. Se você está vendo essa página, ainda não fechamos com nenhum outro negócio da sua área. Isso pode mudar.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
