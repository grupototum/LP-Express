import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowDownRight,
  Menu,
  X,
  Plus,
  Minus,
  Search,
  Lightbulb,
  Eye,
  MessageSquare,
  Rocket,
  CheckCircle2,
  TrendingUp,
  Star,
  ShieldCheck,
  BarChart3,
  Sparkles,
} from 'lucide-react'
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
          <h1 className="font-display text-white mt-8 text-[14vw] sm:text-[12vw] lg:text-[9.5vw] xl:text-[150px] uppercase">
            Sua empresa está sendo escolhida pelo motivo{' '}
            <span style={{ color: RED }}>certo?</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body-inter text-base sm:text-lg text-white/60 max-w-xl mt-10 leading-relaxed">
            Transformamos sua reputação em uma página que comunica confiança antes do primeiro contato.
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

const CHIPS = ['Clientes satisfeitos', 'Indicações', 'Avaliações', 'Presença online']

function Tensao() {
  return (
    <section className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>01 — Reputação</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-5xl uppercase">
            Você tem reputação. Quem ainda não te conhece{' '}
            <span style={{ color: RED }}>percebe?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
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

        {/*
          Visual — PLACEHOLDER: díptico 2 imagens lado a lado (aspect 16/9 cada).
          Esquerda: profissional nítido/confiante (como clientes existentes te veem).
          Direita: a mesma cena com desfoque gaussiano forte (como um estranho te encontra online).
          Borda entre as duas imagens = linha fina branca/5.
          Substituir este bloco por <img> reais quando o ativo estiver pronto.
        */}
        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 gap-1 rounded-xl overflow-hidden border border-white/10">
            <div
              className="aspect-[4/3] bg-elevated flex items-end p-4"
              aria-label="Foto nítida: profissional confiante visto pelos clientes"
            >
              <span className="font-mono-eyebrow text-[10px] text-white/40">Como te veem</span>
            </div>
            <div
              className="aspect-[4/3] flex items-end p-4"
              style={{ background: 'var(--elevated)', filter: 'blur(2px)' }}
              aria-label="Mesma cena desfocada: como um estranho te encontra online"
            >
              <span className="font-mono-eyebrow text-[10px] text-white/40">Como te encontram</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 03 O que fazemos ---------- */

function Metodo() {
  return (
    <section id="metodo" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>02 — Método</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-5xl uppercase">
            Não vendemos páginas.{' '}
            <span style={{ color: RED }}>Vendemos clareza.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <blockquote
            className="mt-16 border-l-2 pl-8"
            style={{ borderColor: RED }}
          >
            <p className="font-display text-white/80 text-2xl sm:text-3xl lg:text-4xl leading-snug max-w-3xl">
              "O cliente não compra uma landing page. Compra uma visão mais clara do próprio valor."
            </p>
          </blockquote>
        </Reveal>

        {/*
          Visual — PLACEHOLDER: mockup do painel Site Hunter AI.
          Dashboard escuro com análise de reputação/concorrência da empresa.
          Dados exibidos em vermelho (--rosso): score de reputação, gráfico de concorrentes, oportunidades listadas.
          Estilo: terminal/dashboard minimalista, fundo #0e0918, tipografia mono.
          Substituir por screenshot real do sistema quando disponível.
        */}
        <Reveal delay={0.3}>
          <div
            className="mt-16 rounded-xl border border-white/10 overflow-hidden"
            aria-label="Mockup do Site Hunter AI — dashboard de análise de reputação e concorrência"
          >
            <div className="px-5 py-3 border-b border-white/10 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="font-mono-eyebrow text-[10px] text-white/30 ml-3">Site Hunter AI — análise de reputação</span>
            </div>
            <div className="bg-[#0a0812] p-8 min-h-[220px] flex flex-col gap-4">
              {['Reputação online', 'Análise de concorrentes', 'Oportunidades identificadas'].map((row, i) => (
                <div key={row} className="flex items-center gap-4">
                  <span className="font-mono-eyebrow text-[10px] text-white/30 w-32 shrink-0">{row}</span>
                  <div className="flex-1 h-px bg-white/5" />
                  <div
                    className="h-2 rounded-full"
                    style={{
                      background: RED,
                      width: `${[72, 58, 84][i]}%`,
                      maxWidth: 200,
                      opacity: [1, 0.7, 0.9][i],
                    }}
                  />
                  <span className="font-mono-eyebrow text-[10px] w-8 text-right" style={{ color: RED }}>
                    {['72', '58', '84'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 04 Processo ---------- */

const STEPS: { label: string; icon: React.ReactNode }[] = [
  { label: 'Análise', icon: <Search className="w-5 h-5" /> },
  { label: 'Oportunidades', icon: <Lightbulb className="w-5 h-5" /> },
  { label: 'Preview', icon: <Eye className="w-5 h-5" /> },
  { label: 'Alinhamento', icon: <MessageSquare className="w-5 h-5" /> },
  { label: 'Entrega 24h', icon: <Rocket className="w-5 h-5" /> },
]

function Processo() {
  return (
    <section id="processo" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>03 — Processo</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-5xl uppercase">
            Da análise à página no ar em{' '}
            <span style={{ color: RED }}>24h.</span>
          </h2>
        </Reveal>

        {/* Timeline — horizontal desktop / vertical mobile */}
        <div className="mt-20 relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[22px] left-0 right-0 h-px bg-white/10" />

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.08}>
                <div className="relative flex flex-col lg:items-start gap-4">
                  {/* Vertical connector — mobile */}
                  {i < STEPS.length - 1 && (
                    <div className="lg:hidden absolute left-[22px] top-12 bottom-0 w-px bg-white/10" />
                  )}
                  {/* Node */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center border border-white/10 bg-surface z-10 shrink-0"
                    style={{ color: RED }}
                  >
                    {step.icon}
                  </div>
                  <div className="ml-0 lg:ml-0">
                    <div className="font-mono-eyebrow text-[10px] mb-1" style={{ color: RED }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="font-body-inter text-white text-sm leading-snug">{step.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 05 Diferencial ---------- */

function Diferencial() {
  return (
    <section
      className="relative px-6 py-32 lg:py-52 border-t border-white/5 overflow-hidden grain-bg"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-[950px] mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="font-display text-white text-[12vw] sm:text-7xl lg:text-[110px] leading-none uppercase">
            Reputação vira{' '}
            <span style={{ color: RED }}>crescimento.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 06 Resultados ---------- */

const RESULTADOS: { label: string; icon: React.ReactNode }[] = [
  { label: 'Diferenciais claros', icon: <CheckCircle2 className="w-6 h-6" /> },
  { label: 'Mais autoridade', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Provas sociais', icon: <Star className="w-6 h-6" /> },
  { label: 'Menos objeções', icon: <ShieldCheck className="w-6 h-6" /> },
  { label: 'Mais orçamentos', icon: <BarChart3 className="w-6 h-6" /> },
  { label: 'Confiança em oportunidade', icon: <Sparkles className="w-6 h-6" /> },
]

function Resultados() {
  return (
    <section className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>04 — Resultados</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-4xl uppercase">
            O que sua página passa a{' '}
            <span style={{ color: RED }}>fazer.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-px bg-white/5 border border-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTADOS.map((r, i) => (
            <Reveal key={r.label} delay={(i % 3) * 0.08}>
              <div className="bg-surface p-10 h-full hover:bg-elevated transition-colors group">
                <div style={{ color: RED }}>{r.icon}</div>
                <p className="font-body-inter text-white text-sm mt-5 leading-snug">{r.label}</p>
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
  'CLÍNICAS',
  'ESCRITÓRIOS',
  'CONSULTORES',
  'PRESTADORES',
  'EMPRESAS LOCAIS',
  'ESPECIALISTAS',
  'PMEs',
]

function ParaQuem() {
  const items = [...AUDIENCE, ...AUDIENCE]
  return (
    <section className="py-20 border-t border-white/5 overflow-hidden">
      <div className="relative">
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
    tag: 'Construção',
    name: 'Azure Home Build',
    img: portfolioAzure.url,
  },
  {
    tag: 'Mudanças',
    name: 'We Move on Demand',
    img: portfolioWemove.url,
  },
  {
    tag: 'Odontologia',
    name: "L'Armond",
    img: portfolioLarmond.url,
  },
  {
    tag: 'Bem-estar',
    name: 'Heva Wellness',
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
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl uppercase">
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
                <div className="px-8 py-6">
                  <Eyebrow>{p.tag}</Eyebrow>
                  <h3 className="font-display text-2xl text-white mt-3">{p.name}</h3>
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
  'Diagnóstico',
  'Posicionamento',
  'Oportunidades',
  'Copywriting',
  'Design responsivo',
  'WhatsApp',
  'Formulário',
  'Conversão',
  'Publicação',
  'Ajustes',
]

function Inclui() {
  return (
    <section id="inclui" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>Inclui</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[10vw] sm:text-7xl lg:text-8xl max-w-5xl uppercase">
            Da estratégia à{' '}
            <span style={{ color: RED }}>publicação.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap gap-3">
            {INCLUDED.map((item) => (
              <span
                key={item}
                className="font-body-inter text-sm px-5 py-2.5 rounded-full border border-white/15 text-white/80 hover:border-rosso hover:text-white transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 10 Depoimentos (chat) ---------- */

const TESTIMONIALS = [
  {
    name: 'Dr. Rafael Monteiro',
    initials: 'RM',
    text: 'Entregaram em 24h. Já recebi 3 contatos hoje. 🔥',
  },
  {
    name: 'Camila — Clínica Vértice',
    initials: 'CV',
    text: 'Ficou como eu imaginava. Acabamento absurdo. 🤍',
  },
  {
    name: 'Eng. Bruno Tavares',
    initials: 'BT',
    text: 'Triplicou meus orçamentos no 1º mês. 🚀',
  },
  {
    name: 'Mariana — Studio Norte',
    initials: 'MN',
    text: 'A análise de concorrência abriu meus olhos.',
  },
]

function Depoimentos() {
  return (
    <section id="depoimentos" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <h2 className="font-display text-white text-[10vw] sm:text-7xl lg:text-8xl uppercase">
            Conversas <span style={{ color: RED }}>reais.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <div className="bg-elevated border border-white/10 rounded-2xl p-6 hover:border-rosso transition-all">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-body-inter font-medium text-white text-sm shrink-0"
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
          <h2 className="font-display text-white text-[10vw] sm:text-6xl lg:text-7xl uppercase">
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
          <h2 className="font-display text-white text-[12vw] sm:text-7xl lg:text-[110px] leading-tight uppercase">
            Sua reputação já existe.{' '}
            <span style={{ color: RED }}>Falta ser vista.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
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
