import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    q: 'A reunião é uma reunião de vendas?',
    a: 'Não. A reunião é estratégica: apresentamos a oportunidade identificada, validamos o posicionamento e alinhamos a estrutura da página. Você sai com clareza independente de seguir conosco.',
  },
  {
    q: 'Quanto tempo até a página estar no ar?',
    a: 'Após a reunião e o aprovado do direcionamento, sua Landing Page entra no ar em até 24 horas.',
  },
  {
    q: 'Vocês entregam apenas a landing page?',
    a: 'A página é a materialização da estratégia. Antes dela, entregamos posicionamento, narrativa, prova social estruturada e fluxo de conversão pensado para o seu negócio.',
  },
  {
    q: 'Funciona para o meu segmento?',
    a: 'O método foi construído para ser segmento-agnóstico: o que entregamos é posicionamento. Já aplicamos em serviços, saúde, imobiliário, indústria, B2B e negócios locais.',
  },
  {
    q: 'Preciso ter algo pronto antes da reunião?',
    a: 'Não. Como você já recebeu nossa análise inicial, a reunião parte do que mapeamos para o seu negócio. Basta confirmar o horário.',
  },
  {
    q: 'Quem conduz a reunião?',
    a: 'Um especialista da Totum, com participação da pessoa responsável pela análise inicial enviada para você.',
  },
]

export function ExpressFAQ() {
  return (
    <section id="faq" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />

      <div className="max-w-[800px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">Perguntas frequentes</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary leading-tight">
            Antes de agendar,<br />talvez você queira saber
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-2 sm:p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left text-primary font-normal text-base sm:text-lg hover:no-underline px-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed px-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
