import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

const qualifyItems = [
  'Você já investe em marketing, mas ainda não tem previsibilidade de resultados.',
  'Já testou diferentes estratégias e continua ajustando sem saber exatamente o que funciona.',
  'As decisões ainda são tomadas com base em percepção, não em clareza.',
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function TotumQualificacao() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-totum-gray relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <motion.div style={{ y: bgY, x: 20 }} className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-totum-dark/5 rounded-full blur-[100px]" />

      <div className="max-w-[900px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(39, 34, 31, 0.12)" }}
              className="glass-card rounded-2xl p-7 flex flex-col items-start gap-4 cursor-default"
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.2, type: "spring", stiffness: 250 }}
                className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0"
              >
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </motion.div>
              <p className="text-primary font-medium leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
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
