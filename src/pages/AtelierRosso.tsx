import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowDownRight, Menu, X, Plus, Minus } from 'lucide-react'
import totumLogo from '@/assets/totum-logo.png'
import portfolioAzure from '@/assets/portfolio-azure.png.asset.json'
import portfolioWemove from '@/assets/portfolio-wemove.png.asset.json'
import portfolioLarmond from '@/assets/portfolio-larmond.png.asset.json'
import portfolioHeva from '@/assets/portfolio-heva.png.asset.json'

const WHATSAPP_URL =
  'https://wa.me/5533991294114?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20de%20alinhamento.'

const RED = 'var(--rosso)'
const GREY = 'var(--muted-foreground)'


/* ---------- Reusable bits ---------- */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono-eyebrow text-[11px] sm:text-xs text-[color:var(--grey)]" style={{ ['--grey' as any]: GREY }}>
    {children}
  </span>
)

const CTAButton = ({
  children = (
    <>
      Agendar reunião <ArrowRight className="w-4 h-4" />
    </>
  ),
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-body-inter font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_var(--rosso)] ${className}`}
    style={{ background: RED }}
  >
    {children}
  </a>
)

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

/* ---------- Navbar ---------- */

const NAV_LINKS = [
  { label: 'Método', href: '#metodo' },
  { label: 'Processo', href: '#processo' },
  { label: 'Inclui', href: '#inclui' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-black/60 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[950px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={totumLogo} alt="Totum" className="h-6 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body-inter text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <CTAButton />
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-xl px-6 py-10 flex flex-col gap-6"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4">
              <CTAButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

/* ---------- 01 Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-screen hero-spotlight flex flex-col justify-center pt-32 pb-16 px-6 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none"
      >
        <source src="/videos/hero-rocket.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/60 to-surface pointer-events-none" />

      <div className="max-w-[950px] w-full mx-auto relative z-10">

        <Reveal>
          <Eyebrow>Estratégia · Posicionamento · Landing Pages</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-white mt-8 text-[14vw] sm:text-[12vw] lg:text-[9.5vw] xl:text-[150px]">
            Sua empresa está sendo escolhida pelo motivo{' '}
            <span style={{ color: RED }}>certo?</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body-inter text-base sm:text-lg text-white/60 max-w-2xl mt-10 leading-relaxed">
            Sua reputação já existe. Nós a transformamos em uma página que comunica confiança e
            autoridade antes do primeiro contato.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12">
            <CTAButton />
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-6 right-6 max-w-[950px] mx-auto flex justify-end z-10">
        <Eyebrow>
          Role para descobrir <ArrowDownRight className="inline w-3 h-3" />
        </Eyebrow>
      </div>
    </section>
  )
}

/* ---------- 02 Tensão ---------- */

const CHIPS = ['Clientes satisfeitos', 'Indicações', 'Avaliações positivas', 'Presença online']

function Tensao() {
  return (
    <section className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>01 — Reputação</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-5xl">
            Você já tem reputação. Quem ainda não te conhece <span style={{ color: RED }}>percebe</span> isso?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body-inter text-white/60 mt-10 max-w-2xl text-lg">
            Clientes satisfeitos, indicações e boas avaliações — mas nada disso aparece para quem te
            encontra pela primeira vez.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap gap-3">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="font-body-inter text-xs px-4 py-2 rounded-full border border-white/15 text-white/70"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 03 Método ---------- */

const METODO = [
  'Como sua marca é percebida',
  'Por que seus clientes escolhem você',
  'O que seus concorrentes comunicam',
  'Onde estão as oportunidades de crescimento',
]

function Metodo() {
  return (
    <section id="metodo" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>02 — Método</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-5xl">
            Não começamos pelo design.<br />
            Começamos pela <span style={{ color: RED }}>estratégia.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px bg-white/5 border border-white/5 lg:grid-cols-4">
          {METODO.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="bg-surface p-8 lg:p-10 h-full hover:bg-elevated transition-colors group">
                <div className="font-mono-eyebrow text-xs" style={{ color: RED }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-display text-2xl lg:text-3xl text-white mt-8 leading-tight">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 04 Processo ---------- */

const STEPS = [
  ['Análise estratégica', 'Presença, reputação e diferenciais.'],
  ['Oportunidades', 'Onde ganhar confiança e conversão.'],
  ['Preview personalizado', 'Uma prévia da sua página.'],
  ['Alinhamento', 'Validamos o posicionamento juntos.'],
  ['Entrega em 24h', 'Página pronta após o alinhamento.'],
]

function Processo() {
  return (
    <section id="processo" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>03 — Processo</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-5xl">
            Da análise à publicação em até <span style={{ color: RED }}>24h.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-5 lg:gap-4 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10" />
          {STEPS.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="relative">
                <div
                  className="font-display text-6xl lg:text-7xl leading-none"
                  style={{ color: RED }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-body-inter font-medium text-white text-lg mt-6">{title}</h3>
                <p className="font-body-inter text-sm text-white/55 mt-2 leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 05 Diferencial ---------- */

function Diferencial() {
  return (
    <section className="px-6 py-32 lg:py-52 border-t border-white/5 hero-spotlight">
      <div className="max-w-[950px] mx-auto text-center">
        <Reveal>
          <Eyebrow>04 — Diferencial</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-10 text-[12vw] sm:text-7xl lg:text-[120px]">
            A maioria vende páginas.<br />
            Nós vendemos <span style={{ color: RED }}>crescimento.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body-inter text-white/60 mt-10 max-w-2xl mx-auto text-lg">
            Resultado não vem do design bonito, e sim de comunicar com clareza o valor que você já
            tem.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 06 Resultados ---------- */

const RESULTADOS = [
  'Diferenciais claros',
  'Mais profissionalismo percebido',
  'Provas sociais em destaque',
  'Menos objeções antes do contato',
  'Mais visitantes pedindo orçamento',
  'Confiança virando oportunidade',
]

function Resultados() {
  return (
    <section className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>05 — Resultados</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-4xl">
            O que sua página passa a <span style={{ color: RED }}>fazer.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-px bg-white/5 border border-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTADOS.map((r, i) => (
            <Reveal key={r} delay={(i % 3) * 0.08}>
              <div className="bg-surface p-10 h-full hover:border-l-2 hover:border-rosso transition-all">
                <div className="font-display text-5xl" style={{ color: RED }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-body-inter text-white text-lg mt-6">{r}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 07 Para quem (marquee) ---------- */

const AUDIENCE = [
  'Clínicas',
  'Escritórios',
  'Consultores',
  'Prestadores de serviço',
  'Empresas locais',
  'Especialistas',
  'Pequenas e médias empresas',
]

function ParaQuem() {
  const items = [...AUDIENCE, ...AUDIENCE]
  return (
    <section className="py-32 lg:py-44 border-t border-white/5 overflow-hidden">
      <div className="max-w-[950px] mx-auto px-6">
        <Reveal>
          <Eyebrow>Para quem</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-6xl lg:text-7xl max-w-4xl">
            Negócios com reputação que querem mais <span style={{ color: RED }}>oportunidades.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-20 relative">
        <div className="marquee-track">
          {items.map((it, i) => (
            <span
              key={i}
              className="font-display text-6xl md:text-8xl text-white/90 px-10 flex items-center gap-10"
            >
              {it}
              <span style={{ color: RED }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 08 Portfolio ---------- */

const PORTFOLIO = [
  {
    tag: 'Construção · Investimento',
    name: 'Azure Home Build',
    desc: 'Captação qualificada para construtora de Fix & Flip.',
    img: portfolioAzure.url,
  },
  {
    tag: 'Mudanças · Serviços',
    name: 'We Move on Demand',
    desc: 'Conversão com prova social e orçamento gratuito.',
    img: portfolioWemove.url,
  },
  {
    tag: 'Odontologia · Clínica',
    name: "L'Armond",
    desc: 'Clínica premium: equipe, tecnologia e casos reais.',
    img: portfolioLarmond.url,
  },
  {
    tag: 'Bem-estar · Saúde',
    name: 'Heva Wellness',
    desc: 'Programa de bem-estar com visual editorial.',
    img: portfolioHeva.url,
  },
]

function Portfolio() {
  return (
    <section className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>Portfólio</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl">
            Páginas que <span style={{ color: RED }}>vendem.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-white/10 hover:border-rosso transition-all duration-300 overflow-hidden bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                  />
                </div>
                <div className="p-8">
                  <Eyebrow>{p.tag}</Eyebrow>
                  <h3 className="font-display text-3xl text-white mt-4">{p.name}</h3>
                  <p className="font-body-inter text-white/55 text-sm mt-3">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 09 Inclui ---------- */

const INCLUDED = [
  'Diagnóstico estratégico',
  'Análise de posicionamento',
  'Mapa de oportunidades',
  'Copywriting estratégico',
  'Design responsivo',
  'Integração WhatsApp',
  'Formulário de contato',
  'Estrutura de conversão',
  'Publicação',
  'Ajustes finais',
]

function Inclui() {
  return (
    <section id="inclui" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>Inclui</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-5xl">
            Da estratégia à publicação. Sem <span style={{ color: RED }}>surpresas.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-px bg-white/5 border border-white/5 sm:grid-cols-2 lg:grid-cols-5">
          {INCLUDED.map((item, i) => (
            <Reveal key={item} delay={(i % 5) * 0.05}>
              <div className="bg-surface p-6 h-full">
                <div className="font-mono-eyebrow text-[10px]" style={{ color: RED }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-body-inter text-white text-sm mt-4 leading-snug">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 10 Depoimentos (chat) ---------- */

const TESTIMONIALS = [
  {
    name: 'Dr. Rafael Monteiro',
    initials: 'RM',
    text: 'Entregaram em menos de 24h. Já recebi 3 contatos hoje pela página. 🔥',
  },
  {
    name: 'Camila — Clínica Vértice',
    initials: 'CV',
    text: 'Ficou exatamente como eu imaginava. O acabamento é absurdo. 🤍',
  },
  {
    name: 'Lucas Andrade',
    initials: 'LA',
    text: 'Reunião super objetiva. Esse é o padrão que eu queria pra minha marca.',
  },
  {
    name: 'Mariana — Studio Norte',
    initials: 'MN',
    text: 'A análise de concorrência abriu meus olhos.',
  },
  {
    name: 'Eng. Bruno Tavares',
    initials: 'BT',
    text: 'Triplicou meus orçamentos no primeiro mês. 🚀',
  },
]

function Depoimentos() {
  return (
    <section id="depoimentos" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>Depoimentos</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl">
            Conversas <span style={{ color: RED }}>reais.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <div className="bg-elevated border border-white/10 rounded-2xl p-6 hover:border-rosso transition-all">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-body-inter font-medium text-white text-sm"
                    style={{ background: RED }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-body-inter text-white text-sm font-medium">{t.name}</p>
                    <p className="font-body-inter text-[10px] text-emerald-400">● online</p>
                  </div>
                </div>
                <div className="mt-5 bg-surface rounded-2xl rounded-tl-sm px-4 py-3">
                  <p className="font-body-inter text-white/85 text-sm leading-relaxed">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 11 FAQ ---------- */

const FAQ = [
  {
    q: 'Vocês atendem empresas iniciantes?',
    a: 'Trabalhamos com negócios já estabelecidos, com reputação e clientela ativa.',
  },
  {
    q: 'Preciso ter todo o material pronto?',
    a: 'Não. Conduzimos a estratégia e o copywriting com você.',
  },
  { q: 'Quanto tempo leva?', a: 'A página é entregue em até 24h após o alinhamento.' },
  {
    q: 'Funciona para qualquer segmento?',
    a: 'Sim, desde que seu negócio já tenha reputação a comunicar.',
  },
]

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-6xl lg:text-7xl">
            Perguntas <span style={{ color: RED }}>frequentes.</span>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-white/10">
          {FAQ.map((item, i) => {
            const open = openIdx === i
            return (
              <div key={item.q} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-display text-2xl md:text-3xl text-white group-hover:text-rosso transition-colors">
                    {item.q}
                  </span>
                  <span style={{ color: RED }}>
                    {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-body-inter text-white/65 pb-6 max-w-2xl text-base leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- 12 Final CTA ---------- */

function FinalCTA() {
  return (
    <section className="px-6 py-32 lg:py-52 border-t border-white/5 hero-spotlight">
      <div className="max-w-[950px] mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-white text-[12vw] sm:text-7xl lg:text-[130px]">
            Sua reputação já está pronta.<br />
            Falta ser <span style={{ color: RED }}>percebida.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-body-inter text-white/60 mt-10 max-w-2xl mx-auto text-lg">
            Mostramos as oportunidades aplicadas ao seu negócio. Sem pressão, sem compromisso.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-14">
            <CTAButton className="text-base px-10 py-5" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-white/5">
      <div className="max-w-[950px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={totumLogo} alt="Totum" className="h-6 w-auto" />
        <p className="font-body-inter text-xs text-white/40">
          © {new Date().getFullYear()} Totum. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body-inter text-xs text-white/60 hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/grupototum"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body-inter text-xs text-white/60 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Page ---------- */

export default function AtelierRosso() {
  return (
    <main className="bg-surface text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Tensao />
      <Metodo />
      <Processo />
      <Diferencial />
      <Resultados />
      <ParaQuem />
      <Portfolio />
      <Inclui />
      <Depoimentos />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
