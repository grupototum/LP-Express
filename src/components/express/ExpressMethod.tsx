import { motion } from 'framer-motion'

const principles = [
  {
    number: '01',
    impact: 'Página que tenta falar com todo mundo não convence ninguém.',
    title: 'Uma mensagem. Um leitor. Uma ação.',
    explanation:
      'O princípio mais básico de conversão se chama "Rule of One": uma mensagem principal, um perfil de leitor, uma ação esperada. Quando a página fala com clareza pra uma pessoa específica, ela sente que aquilo foi feito pra ela. Isso muda o comportamento. A gente define antes de qualquer linha de texto: quem é essa pessoa, o que ela quer saber, e o que ela deve fazer.',
  },
  {
    number: '02',
    impact: 'Quem já quer comprar precisa de caminho. Quem ainda está pensando precisa de argumento. A mesma página serve os dois.',
    title: 'Estrutura que acompanha o nível de decisão',
    explanation:
      'Visitantes chegam em estágios diferentes. Alguns já leram a avaliação, já ouviram indicação, já decidiram. Precisam apenas de um botão claro. Outros ainda estão comparando. Precisam de argumento, prova, metodologia. A arquitetura de conversão por intenção constrói a página pra atender os dois sem confundir nenhum.',
  },
  {
    number: '03',
    impact: 'Mais de 70% das pessoas que chegarão nessa página vão acessar pelo celular. Se não funcionar ali, não funciona.',
    title: 'Feita pra funcionar no celular',
    explanation:
      'Mobile-first não é só layout responsivo. É legibilidade de fonte sem zoom, botão tocável sem erro, carregamento em menos de 3 segundos, e hierarquia que funciona em tela pequena. Quando a página carrega lento ou o texto fica pequeno demais, o visitante fecha. Não porque o produto é ruim. Porque a experiência foi ruim. A gente constrói pensando no celular primeiro.',
  },
  {
    number: '04',
    impact: 'Depoimento no lugar errado não convence ninguém. No lugar certo, ele derruba a última objeção.',
    title: 'Prova social no momento exato da dúvida',
    explanation:
      'Estudos de heat map mostram que a taxa de abandono é maior logo antes do CTA. Esse é o momento exato de máxima dúvida. É onde a prova social precisa aparecer. Não no topo decorativo, não no rodapé esquecido. Logo antes da decisão. A gente posiciona depoimentos, prints e reações reais nos pontos de maior atrito da página.',
  },
  {
    number: '05',
    impact: '"Contratar" é o que a gente quer. "Ver o que encontraram na minha empresa" é o que você quer. A diferença está no botão.',
    title: 'CTA que fala o que você ganha, não o que a gente vende',
    explanation:
      'CTA tradicional manda o visitante comprar. CTA orientado a benefício manda o visitante dar o próximo passo rumo ao que ele já quer. A compra é consequência, não o comando. Quando o botão descreve o que o leitor vai ganhar clicando, a resistência cai. Não tem truque. É só falar a linguagem de quem está lendo.',
  },
]

export function ExpressMethod() {
  return (
    <section id="metodo" className="relative py-24 px-6 bg-totum-gray overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">Método</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary mb-5 leading-tight">
            Por que o nosso processo funciona
          </h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-2xl">
            A maioria das páginas falha porque foi construída pra parecer bonita, não pra converter. A gente usa metodologia CRO — otimização de conversão — pra construir páginas que fazem o visitante tomar a decisão certa no momento certo.
          </p>
        </motion.div>

        <div className="space-y-6">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-7 grid md:grid-cols-[1fr_1.6fr] gap-8 items-start"
            >
              {/* Left: number + impact phrase */}
              <div>
                <span className="text-accent/40 font-light text-xs tracking-widest block mb-3">{p.number}</span>
                <p className="text-primary font-normal text-lg leading-snug mb-2">{p.title}</p>
                <p className="text-muted-foreground font-light text-sm leading-relaxed italic">
                  "{p.impact}"
                </p>
              </div>

              {/* Right: explanation */}
              <p className="text-muted-foreground font-light leading-relaxed text-sm sm:text-base">
                {p.explanation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
