import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send } from 'lucide-react'
import conceptStrategy from '../assets/concept-strategy.jpg'

export function TotumForm() {
  const [formData, setFormData] = useState({
    empresa: '',
    cidade: '',
    produto: '',
    whatsapp: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Gostaria de agendar minha consultoria gratuita.\n\nEmpresa: ${formData.empresa}\nCidade: ${formData.cidade}\nProduto/Serviço: ${formData.produto}\nWhatsApp: ${formData.whatsapp}`
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="formulario" className="py-24 px-6 bg-totum-gray relative overflow-hidden">
      {/* Background conceptual image */}
      <div className="absolute inset-0 z-0">
        <img src={conceptStrategy} alt="" className="w-full h-full object-cover opacity-[0.12]" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-totum-dark/5 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Preencha abaixo e{' '}
            <span className="text-accent">escolha seu horário</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Leva menos de 1 minuto para garantir sua vaga.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-form rounded-2xl p-8 sm:p-10 space-y-6"
        >
          {[
            { key: 'empresa', label: 'Nome Fantasia ou Razão Social', placeholder: 'Ex: Totum Consultoria', type: 'text' },
            { key: 'cidade', label: 'Cidade ou Região', placeholder: 'Ex: São Paulo, SP', type: 'text' },
            { key: 'produto', label: 'Principal produto ou serviço', placeholder: 'Ex: Consultoria de marketing digital', type: 'text' },
            { key: 'whatsapp', label: 'WhatsApp', placeholder: '(11) 99999-9999', type: 'tel' },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-semibold text-primary mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
                required
              />
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full glass-btn-accent text-accent-foreground font-bold py-4 rounded-xl text-lg gentle-animation flex items-center justify-center gap-3 cursor-pointer"
          >
            <Send className="w-5 h-5" />
            Quero minha consultoria gratuita
          </motion.button>

          <p className="text-center text-sm text-muted-foreground">
            🔒 Seus dados estão seguros. Sem spam, sem compromisso.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
