import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe,
  Smartphone,
  ClipboardList,
  TrendingUp,
  Pencil,

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
  ChevronLeft,
  ChevronRight,
  XCircle,
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
      Agendar reunião de alinhamento <ArrowRight className="w-4 h-4" />
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
  { label: 'Como funciona', href: '#processo' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
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
          <h1 className="font-display text-white mt-8 text-[11vw] sm:text-[9vw] lg:text-[7.5vw] xl:text-[118px] leading-[0.95]">
            O que sua empresa oferece que seus{' '}
            <span style={{ color: RED }}>concorrentes não conseguem?</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body-inter text-base sm:text-lg text-white/60 max-w-2xl mt-10 leading-relaxed">
            A maioria das empresas fala sobre produtos e serviços. Nós ajudamos você a descobrir e comunicar o verdadeiro motivo pelo qual seus clientes escolhem você.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <CTAButton />
            <a
              href="#processo"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-body-inter text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200"
            >
              Ver como funciona <ArrowDownRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 02 Proposta (replaces Tensão + Método) ---------- */

const PROPOSTA_CARDS = [
  {
    icon: <Search className="w-5 h-5" />,
    title: 'Diferencial',
    text: 'Identificamos o que torna sua empresa diferente no mercado.',
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Percepção',
    text: 'Transformamos esse diferencial em uma comunicação mais clara, confiável e profissional.',
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: 'Crescimento',
    text: 'Criamos uma página pensada para gerar mais confiança antes do primeiro contato.',
  },
]

function Proposta() {
  return (
    <section className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>01 — Tese</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[9vw] sm:text-6xl lg:text-7xl max-w-4xl leading-tight">
            O cliente não compra uma página. Ele compra aquilo que{' '}
            <span style={{ color: RED }}>só você consegue entregar.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body-inter text-white/60 mt-8 max-w-2xl text-lg leading-relaxed">
            Você já construiu reputação. Já conquistou clientes. Já provou que sabe fazer. Agora é hora de garantir que isso seja percebido por quem ainda não conhece sua empresa.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PROPOSTA_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.1 + i * 0.08}>
              <div className="liquid-glass rounded-2xl p-10 h-full transition-all duration-300 group">

                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-rosso transition-colors"
                  style={{ color: RED }}
                >
                  {card.icon}
                </div>
                <h3 className="font-display text-2xl text-white mt-8">{card.title}</h3>
                <p className="font-body-inter text-sm text-white/55 mt-3 leading-relaxed">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 03 Processo ---------- */

const STEPS = [
  {
    icon: <Search className="w-5 h-5" />,
    label: 'Análise',
    title: 'Analisamos sua empresa',
    desc: 'Entendemos sua presença digital, reputação, concorrência e diferenciais reais.',
    badge: null,
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    label: 'Diferencial',
    title: 'Identificamos seu diferencial',
    desc: 'Descobrimos o motivo pelo qual seus clientes escolhem você — e não o concorrente.',
    badge: null,
  },
  {
    icon: <Eye className="w-5 h-5" />,
    label: 'Preview',
    title: 'Criamos o Preview Estratégico',
    desc: 'Mostramos uma prévia visual de como sua empresa pode se apresentar melhor online.',
    badge: null,
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: 'Alinhamento',
    title: 'Alinhamos a estratégia com você',
    desc: 'Você valida a direção, os textos, o posicionamento e solicita os ajustes finais.',
    badge: null,
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    label: 'Entrega',
    title: 'Publicamos sua página',
    desc: 'Sua Landing Page vai ao ar pronta, responsiva e conectada ao WhatsApp.',
    badge: 'em até 24h',
  },
]

function Processo() {
  return (
    <section id="processo" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>02 — Como funciona</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[9vw] sm:text-6xl lg:text-7xl max-w-4xl leading-tight">
            Da estratégia à publicação em um{' '}
            <span style={{ color: RED }}>fluxo simples.</span>
          </h2>
        </Reveal>

        {/* Desktop: 5 colunas com linha de progresso / Mobile: lista vertical */}
        <div className="mt-20">

          {/* — Desktop grid — */}
          <div className="hidden lg:block">
            {/* Progress bar */}
            <div className="flex items-center mb-12">
              {STEPS.map((_, i) => (
                <div key={i} className="flex items-center flex-1 last:flex-none">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border text-xs font-mono-eyebrow shrink-0 z-10"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--rosso)',
                      color: 'var(--rosso)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-px mx-2" style={{ background: 'var(--rosso)', opacity: 0.25 }} />
                  )}
                </div>
              ))}
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-5 gap-4">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.07}>
                  <div
                    className="liquid-glass relative flex flex-col gap-4 rounded-xl p-6 transition-all duration-300 h-full group"
                    style={{ background: 'var(--elevated)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-rosso transition-colors"
                      style={{ color: RED }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <p className="font-mono-eyebrow text-[9px] mb-2 text-white/40">{step.label}</p>
                      <h3 className="font-display text-base text-white leading-snug">{step.title}</h3>
                      <p className="font-body-inter text-xs text-white/45 mt-2 leading-relaxed">{step.desc}</p>
                    </div>
                    {step.badge && (
                      <span
                        className="mt-auto inline-flex self-start font-mono-eyebrow text-[9px] px-2 py-1 rounded-full"
                        style={{ background: 'var(--rosso)', color: '#fff' }}
                      >
                        {step.badge}
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* — Mobile vertical list — */}
          <div className="flex flex-col lg:hidden">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
                <div className="relative grid grid-cols-[auto_1fr] gap-5 py-8 border-b border-white/8 last:border-0">
                  {/* Left: number + connector */}
                  <div className="flex flex-col items-center gap-0 pt-1">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center border text-xs font-mono-eyebrow shrink-0"
                      style={{ borderColor: RED, color: RED, background: 'var(--surface)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="flex-1 w-px mt-3" style={{ background: 'var(--rosso)', opacity: 0.2 }} />
                    )}
                  </div>
                  {/* Right: content */}
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-2" style={{ color: RED }}>
                      {step.icon}
                      <span className="font-mono-eyebrow text-[10px] text-white/40">{step.label}</span>
                    </div>
                    <h3 className="font-display text-xl text-white leading-snug">{step.title}</h3>
                    <p className="font-body-inter text-sm text-white/55 mt-2 leading-relaxed">{step.desc}</p>
                    {step.badge && (
                      <span
                        className="mt-4 inline-flex font-mono-eyebrow text-[10px] px-3 py-1.5 rounded-full"
                        style={{ background: RED, color: '#fff' }}
                      >
                        {step.badge}
                      </span>
                    )}
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


/* ---------- 08 Portfolio (with lightbox) ---------- */

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
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const prev = () =>
    setLightboxIdx((i) => (i !== null ? Math.max(0, i - 1) : null))
  const next = () =>
    setLightboxIdx((i) => (i !== null ? Math.min(PORTFOLIO.length - 1, i + 1) : null))

  useEffect(() => {
    if (lightboxIdx === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIdx])

  return (
    <section id="portfolio" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>Portfólio</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[9vw] sm:text-6xl lg:text-7xl uppercase">
            Páginas que <span style={{ color: RED }}>vendem.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <button
                onClick={() => setLightboxIdx(i)}
                className="liquid-glass group block w-full text-left rounded-2xl transition-all duration-300 overflow-hidden cursor-zoom-in"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-white text-xs font-body-inter border border-white/20">
                      Ver ampliado
                    </span>
                  </div>
                </div>
                <div className="px-8 py-6">
                  <Eyebrow>{p.tag}</Eyebrow>
                  <h3 className="font-display text-2xl text-white mt-3">{p.name}</h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 font-mono-eyebrow text-xs text-white/40">
              {lightboxIdx + 1} / {PORTFOLIO.length}
            </div>

            {/* Prev */}
            {lightboxIdx > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors bg-black/40 rounded-full p-2 z-10"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PORTFOLIO[lightboxIdx].img}
                alt={PORTFOLIO[lightboxIdx].name}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="font-mono-eyebrow text-xs text-white/40 mr-4">{PORTFOLIO[lightboxIdx].tag}</span>
                <span className="font-display text-xl text-white">{PORTFOLIO[lightboxIdx].name}</span>
              </div>
            </motion.div>

            {/* Next */}
            {lightboxIdx < PORTFOLIO.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors bg-black/40 rounded-full p-2 z-10"
                aria-label="Próximo"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ---------- 09 Inclui ---------- */

const INCLUDED = [
  { label: 'Diagnóstico', icon: <Search className="w-6 h-6" /> },
  { label: 'Posicionamento', icon: <Eye className="w-6 h-6" /> },
  { label: 'Oportunidades', icon: <Lightbulb className="w-6 h-6" /> },
  { label: 'Copywriting', icon: <Pencil className="w-6 h-6" /> },
  { label: 'Design responsivo', icon: <Smartphone className="w-6 h-6" /> },
  { label: 'WhatsApp', icon: <MessageSquare className="w-6 h-6" /> },
  { label: 'Formulário', icon: <ClipboardList className="w-6 h-6" /> },
  { label: 'Conversão', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Publicação', icon: <Rocket className="w-6 h-6" /> },
  { label: 'Ajustes', icon: <CheckCircle2 className="w-6 h-6" /> },
]

function Inclui() {
  return (
    <section id="inclui" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <Eyebrow>Inclui</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-white mt-8 text-[9vw] sm:text-6xl lg:text-7xl max-w-5xl uppercase leading-tight">
            Da estratégia à{' '}
            <span style={{ color: RED }}>publicação.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {INCLUDED.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="group flex flex-col items-start gap-5 rounded-2xl border border-white/10 bg-elevated p-8 hover:border-rosso transition-all duration-300 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-rosso transition-colors"
                  style={{ color: RED }}
                >
                  {item.icon}
                </div>
                <p className="font-body-inter text-lg text-white leading-snug">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 10 Depoimentos — WhatsApp conversations ---------- */

interface WppMessage {
  from: 'client' | 'totum'
  text: string
  time: string
}

interface StatusBar {
  time: string
  battery: number   // 0–100
  signalDots: string // ex: '●●●●○'
  carrier: string
  date: string
}

interface Conversation {
  name: string
  initials: string
  statusBar: StatusBar
  messages: WppMessage[]
}

const CONVERSATIONS: Conversation[] = [
  {
    name: 'Dr. Rafael Monteiro',
    initials: 'RM',
    statusBar: { time: '14:22', battery: 87, signalDots: '●●●○○', carrier: 'Vivo', date: 'Seg, 9 Jun' },
    messages: [
      { from: 'client', text: 'Ficou muito melhor do que eu imaginava.', time: '14:22' },
      { from: 'totum', text: 'A ideia foi destacar aquilo que já fazia sua empresa ser escolhida.', time: '14:23' },
      { from: 'client', text: 'Foi exatamente isso. Agora parece muito mais profissional.', time: '14:24' },
    ],
  },
  {
    name: 'Camila — Clínica Vértice',
    initials: 'CV',
    statusBar: { time: '10:08', battery: 72, signalDots: '●●●●○', carrier: 'Claro BR', date: 'Ter, 10 Jun' },
    messages: [
      { from: 'client', text: 'Gostei porque não ficou com cara de site genérico.', time: '10:08' },
      { from: 'totum', text: 'A gente tentou preservar o diferencial da sua marca.', time: '10:09' },
      { from: 'client', text: 'Deu pra perceber.', time: '10:09' },
    ],
  },
  {
    name: 'Lucas Andrade',
    initials: 'LA',
    statusBar: { time: '16:45', battery: 45, signalDots: '●●●●●', carrier: 'Tim', date: 'Qua, 11 Jun' },
    messages: [
      { from: 'client', text: 'Achei que seria só uma página bonita, mas fez sentido estratégico.', time: '16:45' },
      { from: 'totum', text: 'Essa era a ideia: transformar sua reputação em uma apresentação mais clara.', time: '16:46' },
    ],
  },
  {
    name: 'Mariana — Studio Norte',
    initials: 'MN',
    statusBar: { time: '09:33', battery: 91, signalDots: '●●●○○', carrier: 'Oi', date: 'Sex, 13 Jun' },
    messages: [
      { from: 'client', text: 'O pessoal aqui gostou muito da prévia.', time: '09:33' },
      { from: 'totum', text: 'Ótimo. Depois da reunião ajustamos os detalhes e publicamos.', time: '09:34' },
      { from: 'client', text: 'Perfeito.', time: '09:34' },
    ],
  },
  {
    name: 'Eng. Bruno Tavares',
    initials: 'BT',
    statusBar: { time: '11:52', battery: 63, signalDots: '●●●●○', carrier: 'Vivo', date: 'Qui, 12 Jun' },
    messages: [
      { from: 'client', text: 'Agora dá pra mandar um link profissional em vez de explicar tudo no WhatsApp.', time: '11:52' },
      { from: 'totum', text: 'Exatamente. A página trabalha antes da conversa começar.', time: '11:53' },
    ],
  },
  {
    name: 'Rodrigo — Escritório Contábil',
    initials: 'RC',
    statusBar: { time: '15:17', battery: 79, signalDots: '●●●●○', carrier: 'Tim', date: 'Sáb, 14 Jun' },
    messages: [
      { from: 'client', text: 'Recebi 2 orçamentos essa semana só pelo link que mandei.', time: '15:17' },
      { from: 'totum', text: 'Esse era o objetivo. A página apresenta antes da conversa começar.', time: '15:18' },
      { from: 'client', text: 'Faz total diferença. Antes eu precisava explicar tudo.', time: '15:19' },
    ],
  },
]

function WppCard({ conv }: { conv: Conversation }) {
  const sb = conv.statusBar
  const batteryFill = `${Math.round((1 - sb.battery / 100) * 100)}%`
  return (
    <div className="rounded-[28px] overflow-hidden border border-white/10 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] bg-white">
      {/* iOS status bar — único por conversa */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1 text-[11px] font-semibold text-black/85" style={{ background: '#F6F6F6' }}>
        <div className="flex items-center gap-1">
          <span className="tracking-tight">{sb.signalDots}</span>
          <span className="ml-1">{sb.carrier}</span>
          <span className="ml-1 font-normal">4G</span>
        </div>
        <div>{sb.time}</div>
        <div className="flex items-center gap-1">
          <span>↗</span>
          <span>{sb.battery}%</span>
          <span className="inline-block w-5 h-2.5 border border-black/70 rounded-[2px] relative">
            <span className="absolute inset-[1px] bg-black/80 rounded-[1px]" style={{ right: batteryFill }} />
          </span>
        </div>
      </div>

      {/* Header with privacy bar */}
      <div className="relative flex items-center gap-3 px-3 py-2 border-b border-black/5" style={{ background: '#F6F6F6' }}>
        <ChevronLeft className="w-5 h-5 shrink-0" style={{ color: '#0a84ff' }} />
        <div className="flex items-center gap-2 flex-1 min-w-0" style={{ filter: 'blur(7px)' }}>
          <div
            className="w-9 h-9 rounded-full shrink-0"
            style={{
              background: `linear-gradient(135deg, ${RED}, #6a1b1a)`,
            }}
          />
          <div className="min-w-0">
            <p className="text-black text-[15px] font-semibold leading-tight truncate">{conv.name}</p>
            <p className="text-black/55 text-[11px] leading-tight">or último hoje às 19:45</p>
          </div>
        </div>
        {/* Tarja sobreposta */}
        <div className="absolute inset-y-0 left-9 right-20 flex items-center gap-2 pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-black/85 border border-white/20 shrink-0" />
          <div className="flex-1 h-7 rounded-md bg-black/85 border border-white/15 flex items-center px-2">
            <span className="font-mono-eyebrow text-[8px] tracking-[0.22em] uppercase text-white/65">
              Identidade protegida
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-1" style={{ color: '#0a84ff' }}>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 3.5v-10l-4 3.5Z"/></svg>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20 15.5c-1.2 0-2.4-.2-3.5-.6a1 1 0 0 0-1 .2l-2.2 2.2a15 15 0 0 1-6.6-6.6l2.2-2.2a1 1 0 0 0 .2-1A11 11 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z"/></svg>
        </div>
      </div>

      {/* Messages — paper texture */}
      <div
        className="px-3 py-4 flex flex-col gap-2 min-h-[360px]"
        style={{
          background:
            "#ECE5DD url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.55 0 0 0 0 0.5 0 0 0 0 0.42 0 0 0 0.12 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      >
        <div className="self-center bg-white/85 text-black/60 text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-md shadow-sm">
          {sb.date}
        </div>
        {conv.messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'totum' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[80%] px-3 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.13)] relative"
              style={{
                background: msg.from === 'totum' ? '#DCF8C6' : '#FFFFFF',
                borderRadius:
                  msg.from === 'totum' ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
              }}
            >
              <p className="text-[13.5px] leading-snug text-black">{msg.text}</p>
              <p className="text-[10px] text-right mt-1 text-black/45 flex items-center gap-1 justify-end">
                {msg.time}
                {msg.from === 'totum' && <span style={{ color: '#34B7F1' }}>✓✓</span>}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-t border-black/5" style={{ background: '#F6F6F6' }}>
        <Plus className="w-5 h-5 text-black/55" />
        <div className="flex-1 h-7 rounded-full bg-white border border-black/10" />
        <div className="w-5 h-5 rounded-full border border-black/40" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-black/55" fill="currentColor"><path d="M9 4l-2 2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-2-2H9Zm3 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/></svg>
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-black/55" fill="currentColor"><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2Z"/></svg>
      </div>
    </div>
  )
}

function Depoimentos() {
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const perPage = 3
  const totalPages = Math.ceil(CONVERSATIONS.length / perPage)
  const start = page * perPage
  const visible = CONVERSATIONS.slice(start, start + perPage)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => {
      setPage((p) => (p === totalPages - 1 ? 0 : p + 1))
    }, 4500)
    return () => clearInterval(t)
  }, [paused, totalPages])

  return (
    <section id="depoimentos" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[950px] mx-auto">
        <Reveal>
          <h2 className="font-display text-white text-[9vw] sm:text-6xl lg:text-7xl uppercase">
            Conversas <span style={{ color: RED }}>reais.</span>
          </h2>
        </Reveal>

        <div
          className="mt-16 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((conv) => (
                <WppCard key={conv.name} conv={conv} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="h-[3px] transition-all"
                  style={{
                    width: i === page ? 32 : 14,
                    background: i === page ? RED : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => (p === 0 ? totalPages - 1 : p - 1))}
                className="w-11 h-11 rounded-full border border-white/15 hover:border-rosso hover:text-rosso text-white/70 flex items-center justify-center transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setPage((p) => (p === totalPages - 1 ? 0 : p + 1))}
                className="w-11 h-11 rounded-full border border-white/15 hover:border-rosso hover:text-rosso text-white/70 flex items-center justify-center transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
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
    <section id="faq" className="px-6 py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <h2 className="font-display text-white text-[9vw] sm:text-6xl lg:text-7xl uppercase">
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
                  <span className="font-display text-2xl md:text-3xl text-white group-hover:text-rosso transition-colors pr-4">
                    {item.q}
                  </span>
                  <span style={{ color: RED }} className="shrink-0">
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
          <h2 className="font-display text-white text-[10vw] sm:text-7xl lg:text-[100px] leading-tight uppercase">
            Sua reputação já existe.{' '}
            <span style={{ color: RED }}>Falta fazer ela ser vista.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-body-inter text-white/60 mt-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Agende uma reunião de alinhamento e veja como transformar seu diferencial em uma página estratégica, profissional e pronta para gerar mais oportunidades.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-14">
            <CTAButton className="text-base px-10 py-5" />
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="font-mono-eyebrow text-[10px] text-white/30 mt-8">
            Após a reunião de alinhamento, sua Landing Page pode ser entregue em até 24 horas.
          </p>
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
            className="font-body-inter text-xs text-white/60 hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/grupototum"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body-inter text-xs text-white/60 hover:text-white transition-colors"
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
      <Proposta />
      <Processo />
      <Portfolio />
      <Inclui />
      <Depoimentos />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
