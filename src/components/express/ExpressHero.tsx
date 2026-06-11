import { motion } from 'framer-motion'
import { Menu, X, CalendarCheck, Clock, ShieldCheck } from 'lucide-react'
import { useState, useEffect } from 'react'
import totumLogo from '../../assets/totum-logo.png'

const CTA_LABEL = 'Agendar Reunião de Alinhamento'

export function ExpressHero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const links = [
    { label: 'Como funciona', href: '#fluxo' },
    { label: 'Prova social', href: '#prova' },
    { label: 'A reunião', href: '#reuniao' },
    { label: 'Perguntas', href: '#faq' },
  ]

  return (
    <header className="relative min-h-screen w-full overflow-hidden bg-totum-dark grain-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-totum-dark via-totum-dark/95 to-totum-dark" />
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] bg-accent/20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] bg-accent/15" />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ${isScrolled ? 'glass-navbar' : 'bg-transparent'}`}>
          <div className="flex items-center justify-between">
            <a href="/express" className="cursor-pointer">
              <img src={totumLogo} alt="Totum" className="h-8 w-auto" />
            </a>
            <div className="hidden lg:flex items-center space-x-6">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-white/80 hover:text-white text-sm font-light gentle-animation">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href="#agendar" className="hidden lg:inline-flex glass-btn-accent text-accent-foreground font-medium px-5 py-2.5 rounded-xl text-sm gentle-animation">
                Agendar reunião
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden glass-btn-white p-3 rounded-full text-white z-[120]"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="lg:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] glass-navbar z-[90]"
      >
        <div className="flex flex-col pt-20 px-6 space-y-3">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 30 }}
              transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.1 + i * 0.06 : 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white px-4 py-3 hover:bg-white/10 rounded-lg font-light text-lg"
            >
              {l.label}
            </motion.a>
          ))}
          <a
            href="#agendar"
            onClick={() => setIsMobileMenuOpen(false)}
            className="glass-btn-accent text-accent-foreground font-medium px-6 py-3 rounded-xl text-center mt-4"
          >
            Agendar reunião
          </a>
        </div>
      </motion.div>

      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[950px]"
        >
          <span className="inline-block glass-btn-white text-white/90 px-4 py-1.5 rounded-full text-xs font-light mb-6 tracking-wide uppercase">
            Análise estratégica entregue
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-[1.05] mb-6 tracking-tight">
            Sua reputação já existe.<br />
            Agora precisa do{' '}
            <span className="text-accent">posicionamento certo.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Você viu a prévia. Agora vamos validar o direcionamento e colocar a estratégia no ar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#agendar"
              className="glass-btn-accent text-accent-foreground font-medium px-10 py-4 rounded-xl text-lg gentle-animation inline-flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-5 h-5" />
              {CTA_LABEL}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#fluxo"
              className="glass-btn-white text-white font-light px-10 py-4 rounded-xl text-lg gentle-animation"
            >
              Ver como funciona
            </motion.a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/60 text-sm font-light">
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Reunião de 40 minutos</span>
            <span className="inline-flex items-center gap-2"><CalendarCheck className="w-4 h-4 text-accent" /> Página no ar em até 24h após o alinhamento</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" /> Sem compromisso</span>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
