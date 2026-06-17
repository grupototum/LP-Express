import { motion } from 'framer-motion'

const STEPS = [
  {
    punch: 'Página que tenta falar com todo mundo não convence ninguém.',
    caption: 'uma mensagem, um leitor',
    body: 'O princípio mais básico de conversão se chama "Rule of One": uma mensagem principal, um perfil de leitor, uma ação esperada. Quando a página fala com clareza pra uma pessoa específica, ela sente que aquilo foi feito pra ela. Isso muda o comportamento. A gente define antes de qualquer linha de texto: quem é essa pessoa, o que ela quer saber, e o que ela deve fazer.',
  },
  {
    punch: 'Quem já quer comprar precisa de caminho. Quem ainda está pensando precisa de argumento. A mesma página serve os dois.',
    caption: 'arquitetura por intenção',
    body: 'Visitantes chegam em estágios diferentes. Alguns já leram a avaliação, já ouviram indicação, já decidiram. Precisam apenas de um botão claro. Outros ainda estão comparando. Precisam de argumento, prova, metodologia. A arquitetura de conversão por intenção constrói a página pra atender os dois sem confundir nenhum.',
  },
  {
    punch: 'Mais de 70% das pessoas que chegarão nessa página vão acessar pelo celular. Se não funcionar ali, não funciona.',
    caption: 'mobile-first',
    body: 'Mobile-first não é só layout responsivo. É legibilidade de fonte sem zoom, botão tocável sem erro, carregamento em menos de 3 segundos, e hierarquia que funciona em tela pequena. Quando a página carrega lento ou o texto fica pequeno demais, o visitante fecha. Não porque o produto é ruim. Porque a experiência foi ruim. A gente constrói pensando no celular primeiro.',
  },
  {
    punch: 'Depoimento no lugar errado não convence ninguém. No lugar certo, ele derruba a última objeção.',
    caption: 'prova social no pico da dúvida',
    body: 'Estudos de heat map mostram que a taxa de abandono é maior logo antes do CTA. Esse é o momento exato de máxima dúvida. É onde a prova social precisa aparecer. Não no topo decorativo, não no rodapé esquecido. Logo antes da decisão. A gente posiciona depoimentos, prints e reações reais nos pontos de maior atrito da página.',
  },
  {
    punch: '"Contratar" é o que a gente quer. "Ver o que encontraram na minha empresa" é o que você quer. A diferença está no botão.',
    caption: 'CTA orientado ao ganho do leitor',
    body: 'CTA tradicional manda o visitante comprar. CTA orientado a benefício manda o visitante dar o próximo passo rumo ao que ele já quer. A compra é consequência, não o comando. Quando o botão descreve o que o leitor vai ganhar clicando, a resistência cai. Não tem truque. É só falar a linguagem de quem está lendo.',
  },
]

export default function Method() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-playfair text-[clamp(26px,3.5vw,44px)] leading-[1.2] text-[#141414] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Por que o nosso processo funciona
        </motion.h2>

        <motion.p
          className="font-dm-sans text-[17px] leading-relaxed text-[#141414]/70 max-w-2xl mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A maioria das páginas falha porque foi construída pra parecer bonita, não pra converter. A gente usa metodologia CRO — otimização de conversão — pra construir páginas que fazem o visitante tomar a decisão certa no momento certo. Esses são os cinco princípios que aplicamos em cada página que entregamos.
        </motion.p>

        <div className="space-y-20">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-6">
                <div className="rounded-sm bg-[#F4F3F1] px-6 py-8 min-h-[120px] flex items-center">
                  <span className="font-caveat text-[22px] text-[#3A4A3F] leading-snug">{step.caption}</span>
                </div>
                <p className="font-playfair text-[clamp(18px,2.2vw,24px)] leading-snug text-[#3A4A3F]">
                  {step.punch}
                </p>
              </div>
              <div>
                <p className="font-dm-sans text-[17px] leading-relaxed text-[#141414]/80">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
