import { motion } from 'framer-motion';
import { Menu, X, Workflow, MessageCircle, ImageIcon, Tag } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import totumLogo from '../../assets/totum-logo.png';

const WPP_URL = 'https://wa.me/5533991294114?text=Ol%C3%A1%21+Vi+a+landing+page+e+quero+ver+o+que+identificaram+na+minha+empresa.+Gostaria+de+entender+melhor.'

const navLinks = [
  { label: 'Método', href: '#metodo', icon: Workflow },
  { label: 'Portfólio', href: '#portfolio', icon: ImageIcon },
  { label: 'Prova social', href: '#prova', icon: MessageCircle },
  { label: 'Ver oferta', href: '#oferta', icon: Tag },
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
                className="hidden 2xl:block glass-btn-accent text-accent-foreground px-6 py-3 rounded-full gentle-animation">
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
            className="glass-btn-accent text-accent-foreground px-6 py-3 rounded-full text-center mt-4">
            Quero ver minha análise
          </motion.a>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-40 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-[950px]">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] mb-6">
            A maioria das empresas bem avaliadas está perdendo cliente novo todo mês.{' '}
            <span className="text-rosso">O problema não é o atendimento.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Alguém pesquisou sua empresa hoje. Comparou com dois concorrentes. E escolheu outro. Não porque o outro é melhor. Porque a página dele comunicou mais rápido a confiança que você também tem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-accent text-accent-foreground px-10 py-4 rounded-full text-lg gentle-animation">
              Quero ver o que identificaram na minha empresa
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-white text-white px-10 py-4 rounded-full text-lg gentle-animation">
              10 minutos pra entender a oportunidade
            </motion.a>

          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/60 text-sm font-light">
            <span>No ar em 24h</span>
            <span className="text-white/30">·</span>
            <span>Sem compromisso</span>
            <span className="text-white/30">·</span>
            <span>1 empresa por região</span>
          </div>
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
