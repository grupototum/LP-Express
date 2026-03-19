import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';

const faqItems = [
  {
    question: 'A consultoria é realmente gratuita?',
    answer: 'Sim, 100% gratuita e sem compromisso. Não há nenhum custo oculto nem obrigação de contratar qualquer serviço depois.',
  },
  {
    question: 'O que vou receber ao final dos 45 minutos?',
    answer: 'Você sairá com um diagnóstico claro sobre o que está travando seus resultados, onde estão as oportunidades reais de crescimento e um direcionamento prático para os próximos meses.',
  },
  {
    question: 'Preciso preparar alguma coisa antes?',
    answer: 'Não é obrigatório, mas se puder ter em mãos dados básicos do seu marketing (investimento mensal, canais usados, métricas de resultado), a conversa será ainda mais produtiva.',
  },
  {
    question: 'Como funciona o agendamento?',
    answer: 'Após preencher o formulário, nossa equipe entrará em contato em até 24 horas para agendar o melhor horário para você.',
  },
  {
    question: 'Isso é para qualquer tipo de negócio?',
    answer: 'A consultoria é voltada para negócios que já investem em marketing e buscam mais previsibilidade. Não é indicada para quem está começando do zero ou ainda não tem operação ativa.',
  },
  {
    question: 'Vocês vão tentar me vender algo durante a conversa?',
    answer: 'Não. O foco é entregar valor real em 45 minutos. Se fizer sentido para ambos os lados, podemos conversar sobre próximos passos — mas sem pressão e sem truques.',
  },
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof faqItems[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`glass-card rounded-2xl overflow-hidden gentle-animation ${
        isOpen ? 'ring-2 ring-accent/20' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer"
      >
        <span className="text-primary font-semibold text-lg pr-4 leading-snug">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-accent" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="px-6 sm:px-7 pb-6 sm:pb-7">
              <p className="text-muted-foreground text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TotumFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-totum-dark/5 rounded-full blur-[100px]" />

      <div className="max-w-[800px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6"
          >
            <HelpCircle className="w-7 h-7 text-accent" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Perguntas <span className="text-accent">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo o que você precisa saber antes de agendar.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
