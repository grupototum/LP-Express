import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export function TotumResultados() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
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
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            O que você vai sair <span className="text-accent">sabendo</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 sm:p-10"
        >
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Essa não é uma conversa superficial. Ao final da consultoria, você terá clareza sobre <strong className="text-primary">o que está sustentando (ou travando) seus resultados</strong>, onde estão as <strong className="text-primary">oportunidades reais de crescimento</strong> e qual direção faz sentido seguir nos próximos meses.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            É o tipo de clareza que normalmente só vem depois de muito tempo testando. Aqui você antecipa isso em <strong className="text-primary">uma única conversa</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
