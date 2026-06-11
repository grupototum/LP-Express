import { motion } from 'framer-motion'
import wpp1 from '@/assets/wpp-proof-1.png'
import wpp2 from '@/assets/wpp-proof-2.png'
import wpp3 from '@/assets/wpp-proof-3.png'
import wpp4 from '@/assets/wpp-proof-4.png'
import wpp5 from '@/assets/wpp-proof-5.png'

const images = [
  { src: wpp1, alt: 'Conversa real elogiando o entendimento estratégico' },
  { src: wpp2, alt: 'Conversa real elogiando a entrega em menos de 24h' },
  { src: wpp3, alt: 'Conversa real elogiando a clareza após a reunião' },
  { src: wpp4, alt: 'Conversa real relatando 3 clientes fechados em uma semana' },
  { src: wpp5, alt: 'Conversa real elogiando o profissionalismo e indicando a Totum' },
]

export function ExpressWhatsAppProof() {
  return (
    <section id="prova" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">Conversas reais</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-4 leading-tight">
            O que clientes mandam<br />
            <span className="text-accent">depois da entrega</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Sem case fabricado. Sem texto de marketing. Apenas as mensagens que recebemos depois que a estratégia entra no ar.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden border border-border bg-white shadow-lg hover:shadow-2xl gentle-animation ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1024}
                height={1536}
                loading="lazy"
                className="w-full h-auto block"
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground font-light text-sm mt-10"
        >
          Conversas reais. Nomes preservados a pedido dos clientes.
        </motion.p>
      </div>
    </section>
  )
}
