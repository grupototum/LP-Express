import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const qualifyItems = [
  'Você já investe em marketing, mas ainda não tem previsibilidade de resultados.',
  'Já testou diferentes estratégias e continua ajustando sem saber exatamente o que funciona.',
  'As decisões ainda são tomadas com base em percepção, não em clareza.',
];

export function TotumQualificacao() {
  return (
    <section className="py-24 px-6 bg-totum-gray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-totum-dark/5 rounded-full blur-[100px]" />

      <div className="max-w-[900px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Como essa consultoria pode{' '}
            <span className="text-accent">ajudar você agora?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {qualifyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-7 flex flex-col items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <p className="text-primary font-medium leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 text-center"
        >
          <p className="text-xl sm:text-2xl font-bold text-primary leading-snug">
            Isso não é para quem está começando do zero.<br />
            <span className="text-accent">E nem para quem só quer mais uma dica solta.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
