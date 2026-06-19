import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { useRef } from 'react';

export function TotumResultados() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <motion.div style={{ y: bgY }} className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-totum-dark/5 rounded-full blur-[100px]" />

      <div className="max-w-[800px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6"
          >
            <Lightbulb className="w-7 h-7 text-accent" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            O que você vai sair <span className="text-accent">sabendo</span>
          </h2>
        </motion.div>

        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-2xl p-8 sm:p-10"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg leading-relaxed mb-6"
          >
            Essa não é uma conversa superficial. Ao final da consultoria, você terá clareza sobre <strong className="text-primary">o que está sustentando (ou travando) seus resultados</strong>, onde estão as <strong className="text-primary">oportunidades reais de crescimento</strong> e qual direção faz sentido seguir nos próximos meses.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            É o tipo de clareza que normalmente só vem depois de muito tempo testando. Aqui você antecipa isso em <strong className="text-primary">uma única conversa</strong>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
