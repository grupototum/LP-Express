import { motion } from 'framer-motion'
import { Users, Share2 } from 'lucide-react'
import { useState } from 'react'

export function TotumReferral() {
  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="py-24 px-6 bg-totum-gray relative overflow-hidden">
      {/* Light & gradient effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] via-transparent to-accent/[0.02]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-10 sm:p-14 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Conhece alguém que precisa disso?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Se você conhece outro empresário que esteja enfrentando dificuldades para crescer, pode indicar essa consultoria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="glass-btn-dark text-white font-bold px-8 py-4 rounded-xl text-lg gentle-animation flex items-center justify-center gap-3 cursor-pointer"
            >
              <Share2 className="w-5 h-5" />
              {copied ? 'Link copiado!' : 'Compartilhar link'}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/?text=${encodeURIComponent('Olha essa consultoria gratuita para destravar negócios: ' + window.location.href)}`}
              target="_blank"
              className="glass-btn-green text-white font-bold px-8 py-4 rounded-xl text-lg gentle-animation flex items-center justify-center gap-3"
            >
              Enviar pelo WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
