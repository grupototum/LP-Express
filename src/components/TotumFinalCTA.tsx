import { motion } from 'framer-motion'
import { trackPixelEvent } from '@/utils/meta-pixel'
import { ArrowRight, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import totumLogo from '../assets/totum-logo.png'

export function TotumFinalCTA() {
  return (
    <>
      {/* Final CTA */}
      <section id="contato" className="py-24 px-6 bg-totum-dark relative overflow-hidden grain-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-accent/[0.03] to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/12 rounded-full blur-[140px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />

        <div className="max-w-[950px] mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Marketing não deveria ser um{' '}
              <span className="text-accent">experimento eterno.</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Com estratégia clara, sua empresa pode crescer com muito mais eficiência.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {['45 minutos', 'Gratuito', 'Sem compromisso'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="glass-card-dark rounded-2xl px-8 py-5"
                >
                  <span className="text-xl font-bold text-white">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#formulario"
              onClick={() => trackPixelEvent('InitiateCheckout', { content_name: 'CTA Final' })}
              className="inline-flex items-center gap-3 glass-btn-accent text-accent-foreground font-bold px-12 py-5 rounded-xl text-xl gentle-animation"
            >
              Quero minha consultoria gratuita
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-totum-dark border-t border-white/10 py-12 px-6 relative grain-bg overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="max-w-[950px] mx-auto relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <img src={totumLogo} alt="Totum" className="h-7 w-auto mb-4" />
              <p className="text-white/50 text-sm leading-relaxed">
                Consultoria estratégica para negócios que querem crescer de forma sustentável e previsível.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Contato</h4>
              <div className="space-y-3">
                <a href="mailto:contato@totum.com.br" className="flex items-center gap-2 text-white/50 hover:text-accent gentle-animation text-sm">
                  <Mail className="w-4 h-4" /> contato@totum.com.br
                </a>
                <a href="tel:+5500000000000" className="flex items-center gap-2 text-white/50 hover:text-accent gentle-animation text-sm">
                  <Phone className="w-4 h-4" /> (00) 00000-0000
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full glass-btn-white flex items-center justify-center text-white/50 hover:text-accent gentle-animation">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-btn-white flex items-center justify-center text-white/50 hover:text-accent gentle-animation">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/50 hover:text-accent gentle-animation text-sm">Política de Privacidade</a>
                <a href="#" className="block text-white/50 hover:text-accent gentle-animation text-sm">Termos de Uso</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Totum Consultoria. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
