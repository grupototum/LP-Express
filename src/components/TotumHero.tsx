import { motion } from 'framer-motion'
import { Volume2, VolumeX, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import totumLogo from '../assets/totum-logo.png'

const navLinks = [
  { label: 'Fale conosco', href: '#contato' },
  { label: 'Destravar negócio', href: '#dor' },
  { label: 'Consultoria gratuita', href: '#consultoria' },
  { label: 'Começar agora', href: '#formulario' },
  { label: 'Garantias e bônus', href: '#credibilidade' },
]

export function TotumHero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = isMuted ? 0 : 0.7
    }
  }, [isMuted])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-totum-dark grain-bg">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110 opacity-60"
        autoPlay muted loop playsInline
      >
        <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-totum-dark/80 via-totum-dark/50 to-totum-dark/90" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ${
          isScrolled ? 'glass-navbar' : 'bg-transparent'
        }`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src={totumLogo} alt="Totum" className="h-8 w-auto" />
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white font-medium text-sm gentle-animation"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="glass-btn-white p-3 rounded-full text-white gentle-animation cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#formulario"
                className="hidden sm:block glass-btn-accent text-accent-foreground font-semibold px-6 py-3 rounded-xl gentle-animation"
              >
                Começar agora
              </motion.a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden glass-btn-white p-3 rounded-full text-white gentle-animation cursor-pointer z-[120]"
              >
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
        <div className="flex flex-col pt-20 px-6 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white px-4 py-3 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#formulario"
            onClick={() => setIsMobileMenuOpen(false)}
            className="glass-btn-accent text-accent-foreground font-semibold px-6 py-3 rounded-xl text-center mt-4"
          >
            Começar agora
          </a>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-40 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <span className="inline-block glass-btn-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Consultoria Estratégica Gratuita
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            45 minutos que vão{' '}
            <span className="text-accent">destravar</span>{' '}
            o seu negócio
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Uma consultoria estratégica gratuita para identificar exatamente onde o seu negócio está travando e como acelerar crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#formulario"
              className="glass-btn-accent text-accent-foreground font-bold px-10 py-4 rounded-xl text-lg gentle-animation"
            >
              Começar agora
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#consultoria"
              className="glass-btn-white text-white font-semibold px-10 py-4 rounded-xl text-lg gentle-animation"
            >
              Saiba mais
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  )
}
