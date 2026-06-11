import { motion } from 'framer-motion'
import { useState } from 'react'
import { CalendarCheck, Loader2, Clock, MessageCircle, ShieldCheck, Rocket } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import { trackPixelEvent } from '@/utils/meta-pixel'

const FORMSPREE_ID = 'xnjgrwqz'

const contactInfo = [
  { icon: Clock, label: 'Resposta', value: 'Em até 1 hora útil' },
  { icon: CalendarCheck, label: 'Reunião', value: '25 min, online' },
  { icon: Rocket, label: 'Entrega', value: 'Página no ar em 24h' },
  { icon: ShieldCheck, label: 'Compromisso', value: 'Zero pressão comercial' },
]

export function ExpressForm() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    melhorHorario: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, origem: 'LP Express - Agendar Reunião' }),
      })
      if (!res.ok) throw new Error('Erro ao enviar')

      trackPixelEvent('Lead', { content_name: 'Reunião de Alinhamento', content_category: 'Express' })
      trackPixelEvent('Schedule', { content_name: formData.empresa })

      toast({
        title: 'Solicitação recebida ✓',
        description: 'Vamos confirmar o horário da sua reunião de alinhamento em até 1 hora útil.',
      })
      setFormData({ nome: '', empresa: '', whatsapp: '', email: '', melhorHorario: '' })
    } catch {
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente ou fale conosco pelo WhatsApp.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="agendar" className="py-24 px-6 bg-totum-gray relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-totum-dark/5 rounded-full blur-[100px]" />

      <div className="max-w-[800px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">Próximo passo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-4 leading-tight">
            Agende sua Reunião<br />
            de Alinhamento Estratégico
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto">
            Confirme alguns dados rápidos e nossa equipe entra em contato em até 1 hora útil para confirmar o melhor horário.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-form rounded-2xl p-8 sm:p-10 space-y-5"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-[65%]">
              <label className="block text-sm font-normal text-primary mb-2">Seu nome</label>
              <input
                type="text"
                placeholder="Ex: Rafael Tavares"
                value={formData.nome}
                onChange={(e) => setFormData(p => ({ ...p, nome: e.target.value }))}
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
              />
            </div>
            <div className="w-full sm:w-[35%]">
              <label className="block text-sm font-normal text-primary mb-2">WhatsApp</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => setFormData(p => ({ ...p, whatsapp: e.target.value }))}
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-[65%]">
              <label className="block text-sm font-normal text-primary mb-2">Empresa</label>
              <input
                type="text"
                placeholder="Nome da sua empresa"
                value={formData.empresa}
                onChange={(e) => setFormData(p => ({ ...p, empresa: e.target.value }))}
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
              />
            </div>
            <div className="w-full sm:w-[35%]">
              <label className="block text-sm font-normal text-primary mb-2">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-normal text-primary mb-2">Melhor período para a reunião</label>
            <select
              value={formData.melhorHorario}
              onChange={(e) => setFormData(p => ({ ...p, melhorHorario: e.target.value }))}
              required
              className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary"
            >
              <option value="">Selecione</option>
              <option>Manhã (9h – 12h)</option>
              <option>Tarde (13h – 17h)</option>
              <option>Final do dia (17h – 19h)</option>
              <option>Tenho um horário específico em mente</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full glass-btn-accent text-accent-foreground font-medium py-4 rounded-xl text-lg gentle-animation flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <CalendarCheck className="w-5 h-5" />}
            {isSubmitting ? 'Enviando...' : 'Agendar Reunião de Alinhamento'}
          </motion.button>

          <p className="text-center text-xs text-muted-foreground font-light flex items-center justify-center gap-1.5">
            🔒 Seus dados estão seguros. Confirmação em até 1 hora útil.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
