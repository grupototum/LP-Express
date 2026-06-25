import { motion } from 'framer-motion';
import { CalendarCheck, Clock3, Gauge, Handshake, ImageIcon, MapPin, Menu, MessageCircle, Search, ShieldCheck, Tag, Workflow, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import totumLogo from '../../assets/totum-logo.png';
import { ExpressWhatsAppIcon } from './ExpressWhatsAppIcon';

const WPP_URL = 'https://wa.me/5533997001893?text=Olá+Matheus!+Vi+a+análise+da+Totum+e+gostaria+de+agendar+uma+conversa+sobre+o+projeto.'

const navLinks = [
  { label: 'Método', href: '#metodo', icon: Workflow },
  { label: 'Portfólio', href: '#portfolio', icon: ImageIcon },
  { label: 'Prova social', href: '#prova', icon: MessageCircle },
  { label: 'Ver oferta', href: '#oferta', icon: Tag },
];

const urgencyBadges = [
  { label: 'No ar em 24h', icon: Clock3 },
  { label: 'Sem compromisso', icon: Handshake },
  { label: '1 empresa por região', icon: MapPin },
];

const analysisSignals = [
  { label: 'Google', value: '182 avaliações', icon: Search },
  { label: 'SEO local', value: '7/10', icon: Gauge },
  { label: 'Confiança', value: 'prova escondida', icon: ShieldCheck },
];

export function ExpressHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-totum-dark grain-bg">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110 opacity-60"
        autoPlay muted playsInline>
        <source src="/videos/hero-rocket.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-totum-dark/80 via-totum-dark/50 to-totum-dark/90" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]">

        <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ${isScrolled ? 'glass-navbar' : 'bg-transparent'}`}>
          <div className="flex items-center justify-between">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/express"
              className="cursor-pointer">
              <img src={totumLogo} alt="Totum" className="h-8 w-auto" />
            </motion.a>

            <div className="hidden 2xl:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white font-medium text-sm gentle-animation flex items-center gap-1.5">
                  <link.icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={WPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden 2xl:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-full gentle-animation shadow-[0_12px_30px_rgba(37,211,102,0.28)]">
                <ExpressWhatsAppIcon className="w-4 h-4" />
                Quero ver minha análise
              </motion.a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="2xl:hidden glass-btn-white p-3 rounded-full text-white gentle-animation cursor-pointer z-[120]">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="2xl:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80]"
          onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="2xl:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] glass-navbar z-[90]">

        <div className="flex flex-col pt-20 px-6 space-y-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 30 }}
              transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.1 + index * 0.06 : 0 }}
              className="text-white px-4 py-3 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg flex items-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}>
              <link.icon className="w-5 h-5 text-accent" />
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href={WPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 15 }}
            transition={{ duration: 0.35, delay: isMobileMenuOpen ? 0.1 + navLinks.length * 0.06 : 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-full text-center mt-4">
            <ExpressWhatsAppIcon className="w-4 h-4" />
            Quero ver minha análise
          </motion.a>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-40 flex items-center justify-center h-full px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center max-w-[1180px] w-full">

          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] mb-6">
              Sua clínica pode estar perdendo paciente novo antes da primeira mensagem.{' '}
              <span className="text-rosso">E talvez o problema nem seja o atendimento.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
              Alguém pesquisou sua clínica hoje. Comparou com dois concorrentes. E escolheu outro. Não porque o outro é melhor. Porque a página dele comunicou mais rápido a confiança que você também tem.
            </p>
            <div className="flex justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={WPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg gentle-animation shadow-[0_18px_45px_rgba(37,211,102,0.28)]">
                <ExpressWhatsAppIcon className="w-5 h-5" />
                Quero ver minha análise
              </motion.a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-white text-sm font-light">
              {urgencyBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md"
                >
                  <badge.icon className="w-4 h-4 text-[#25D366]" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <p className="text-white/55 text-xs uppercase tracking-widest">Prévia da análise</p>
                  <p className="text-white text-lg font-light">Clínica odontológica</p>
                </div>
                <span className="rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-xs px-3 py-1">
                  pronta para revisar
                </span>
              </div>

              <div className="p-6 space-y-5">
                <div className="grid grid-cols-3 gap-3">
                  {analysisSignals.map((signal) => (
                    <div key={signal.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
                      <signal.icon className="w-4 h-4 text-[#25D366] mb-3" />
                      <p className="text-white/50 text-xs">{signal.label}</p>
                      <p className="text-white text-sm leading-snug mt-1">{signal.value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-white/10 bg-black/25 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rosso/15 border border-rosso/25 flex items-center justify-center shrink-0">
                      <Search className="w-4 h-4 text-rosso" />
                    </div>
                    <div>
                      <p className="text-white text-sm mb-1">Gap encontrado</p>
                      <p className="text-white/62 text-sm leading-relaxed">
                        A reputação existe, mas a página atual não transforma avaliações, especialidade e comparação local em decisão rápida.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#25D366]/25 bg-[#25D366]/10 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <CalendarCheck className="w-4 h-4 text-[#25D366]" />
                    <p className="text-white text-sm">Próximo passo</p>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Matheus te mostra a análise no WhatsApp e confirma se vale montar a prévia da sua página.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
}
