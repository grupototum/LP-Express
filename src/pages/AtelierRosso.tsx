import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import heroImg from '@/assets/atelier-hero.jpg'
import totumLogo from '@/assets/totum-logo.png'
import conceptReputation from '@/assets/concept-reputation.jpg'
import conceptClarity from '@/assets/concept-clarity.jpg'
import conceptGrowth from '@/assets/concept-growth.jpg'
import conceptMethod from '@/assets/concept-method.jpg'
import portfolioAzure from '@/assets/portfolio-azure.png.asset.json'
import portfolioWemove from '@/assets/portfolio-wemove.png.asset.json'
import portfolioLarmond from '@/assets/portfolio-larmond.png.asset.json'
import portfolioHeva from '@/assets/portfolio-heva.png.asset.json'

const PORTFOLIO_ITEMS = [
  {
    title: 'Azure Home Build',
    tag: 'Construção · Investimento',
    description:
      'Landing page institucional para construtora americana focada em investidores de Fix & Flip. Estrutura voltada a credibilidade, portfólio de obras e captação qualificada.',
    src: portfolioAzure.url,
  },
  {
    title: 'We Move on Demand',
    tag: 'Mudanças · Serviços',
    description:
      'Página de conversão para empresa de mudanças residenciais e comerciais. Hero direto, prova social com avaliações reais e formulário de orçamento gratuito.',
    src: portfolioWemove.url,
  },
  {
    title: "L'Armond",
    tag: 'Odontologia · Clínica',
    description:
      'Site para clínica odontológica premium em Governador Valadares. Apresenta equipe, tecnologia, antes e depois de casos e localização — tudo com estética acolhedora.',
    src: portfolioLarmond.url,
  },
  {
    title: 'Heva Wellness',
    tag: 'Bem-estar · Saúde',
    description:
      'Landing para programa de bem-estar digital com foco em equilíbrio e cuidado contínuo. Visual editorial, depoimentos integrados e formulário para iniciar a jornada.',
    src: portfolioHeva.url,
  },
]

function Portfolio() {
  const [open, setOpen] = useState<number | null>(null)
  const [zoom, setZoom] = useState(1)
  const [isFs, setIsFs] = useState(false)
  const [dir, setDir] = useState(1)
  const overlayRef = useRef<HTMLDivElement>(null)
  const active = open !== null ? PORTFOLIO_ITEMS[open] : null

  const next = () => {
    setDir(1)
    setOpen((i) => (i === null ? null : (i + 1) % PORTFOLIO_ITEMS.length))
  }
  const prev = () => {
    setDir(-1)
    setOpen((i) => (i === null ? null : (i - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length))
  }

  const toggleFullscreen = async () => {
    const el = overlayRef.current
    if (!el) return
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch {}
  }

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
        setOpen(null)
      }
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key.toLowerCase() === 'f') toggleFullscreen()
    }
    const onFs = () => setIsFs(!!document.fullscreenElement)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    document.addEventListener('fullscreenchange', onFs)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('fullscreenchange', onFs)
    }
  }, [open])

  useEffect(() => {
    setZoom(1)
  }, [open])

  const close = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
    setOpen(null)
  }

  return (
    <section id="portfolio" className="relative bg-[#0e0918] py-32 lg:py-48 border-t border-white/5">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        {/* Cabeçalho — respiro generoso, hierarquia tipográfica clara */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-20 lg:mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-12 h-px bg-rosso" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-rosso font-medium">Portfólio Selecionado</span>
            </div>
            <h2 className="font-display text-white text-4xl lg:text-6xl tracking-[-0.025em] uppercase leading-[0.95]">
              Páginas que <span className="text-rosso">vendem</span>.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-white/55 text-base leading-[1.7] font-light">
              Projetos reais entregues a clientes que escolheram a Totum para escalar sua presença digital com o mesmo padrão que mantêm fora dela.
            </p>
          </div>
        </div>

        {/* Grid 8pt — gap-8 / gap-12, proporção 4:5 mantida para consistência */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[20px] bg-[#15101f] text-left border border-white/[0.06] hover:border-rosso/40 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(200,16,46,0.25)]"
            >
              {/* Imagem — proporção mais cinematográfica */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0e0918]">
                <img
                  src={item.src}
                  alt={`Projeto ${item.title} — ${item.tag}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[9000ms] ease-linear group-hover:translate-y-[-28%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15101f] via-[#15101f]/20 to-transparent" />

                {/* Badge lupa — CTA evidente ao hover */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-rosso text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 shadow-xl shadow-rosso/30">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>

                {/* Numeração discreta — autoridade editorial */}
                <div className="absolute top-6 left-6 text-white/40 text-[10px] tracking-[0.3em] uppercase tabular-nums font-medium">
                  {String(i + 1).padStart(2, '0')} / {String(PORTFOLIO_ITEMS.length).padStart(2, '0')}
                </div>
              </div>

              {/* Conteúdo — 8pt grid, hierarquia clara, respiro luxuoso */}
              <div className="relative p-8 lg:p-10">
                <div className="text-[10px] tracking-[0.35em] uppercase text-rosso/80 mb-4 font-medium">{item.tag}</div>
                <h3 className="font-display text-white text-2xl lg:text-[28px] tracking-[-0.015em] leading-[1.1] mb-4">{item.title}</h3>
                <p className="text-white/50 text-[14px] leading-[1.7] font-light mb-8">{item.description}</p>

                <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/70 group-hover:text-rosso transition-colors duration-300 font-medium">
                  <span>Ver projeto</span>
                  <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col"
            onClick={close}
          >
            <div
              className="flex items-center justify-between gap-4 px-5 lg:px-8 h-16 border-b border-white/10 text-white shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="min-w-0 text-sm flex items-center gap-3">
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase tabular-nums">
                  {String((open ?? 0) + 1).padStart(2, '0')} / {String(PORTFOLIO_ITEMS.length).padStart(2, '0')}
                </span>
                <span className="hidden sm:inline text-white/50 text-[10px] tracking-[0.3em] uppercase">{active.tag}</span>
                <span className="font-display tracking-[-0.01em] truncate">{active.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  aria-label="Projeto anterior"
                  title="Anterior (←)"
                >←</button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  aria-label="Próximo projeto"
                  title="Próximo (→)"
                >→</button>
                <span className="w-px h-6 bg-white/10 mx-1" />
                <button
                  onClick={() => setZoom((z) => Math.max(1, +(z - 0.5).toFixed(2)))}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  aria-label="Diminuir zoom"
                >−</button>
                <span className="text-xs text-white/60 w-12 text-center tabular-nums">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={() => setZoom((z) => Math.min(4, +(z + 0.5).toFixed(2)))}
                  className="w-10 h-10 rounded-full bg-rosso hover:bg-rosso-accent transition-colors flex items-center justify-center"
                  aria-label="Aumentar zoom"
                >+</button>
                <span className="w-px h-6 bg-white/10 mx-1" />
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  aria-label={isFs ? 'Sair de tela cheia' : 'Tela cheia'}
                  title={isFs ? 'Sair de tela cheia (F)' : 'Tela cheia (F)'}
                >
                  {isFs ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/></svg>
                  )}
                </button>
                <button
                  onClick={close}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  aria-label="Fechar (Esc)"
                  title="Fechar (Esc)"
                >✕</button>
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={prev}
                aria-label="Projeto anterior"
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur"
              >←</button>
              <button
                onClick={next}
                aria-label="Próximo projeto"
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur"
              >→</button>

              <div className="relative h-full overflow-hidden">
                <AnimatePresence mode="wait" custom={dir} initial={false}>
                  <motion.div
                    key={active.src}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -60 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 overflow-auto p-4 lg:p-10 flex items-start justify-center"
                  >
                    <img
                      src={active.src}
                      alt={active.title}
                      onClick={() => setZoom((z) => (z >= 2 ? 1 : z + 1))}
                      style={{
                        width: `${zoom * 100}%`,
                        maxWidth: zoom === 1 ? '900px' : 'none',
                        cursor: zoom >= 2 ? 'zoom-out' : 'zoom-in',
                      }}
                      className="rounded-xl shadow-2xl select-none transition-[width] duration-200 ease-out"
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div
              className="shrink-0 border-t border-white/10 px-5 lg:px-8 py-4 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto max-w-3xl relative min-h-[78px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.title}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-[10px] tracking-[0.3em] uppercase text-rosso mb-1">{active.tag}</div>
                    <div className="font-display text-lg lg:text-xl tracking-[-0.01em] mb-1">{active.title}</div>
                    <p className="text-white/60 text-sm leading-relaxed">{active.description}</p>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-2 text-[10px] tracking-[0.25em] uppercase text-white/30">
                  ← → Navegar · + − Zoom · F Tela cheia · Esc Fechar
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ============================================================
   Atelier Rosso — Estratégia · Posicionamento · Landing Pages
   Tokens: --rosso #c8102e · --canvas #0e0918
   ============================================================ */

const NAV_LINKS = [
  { id: 'metodo', label: 'Método' },
  { id: 'processo', label: 'Processo' },
  { id: 'incluso', label: 'Inclui' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'faq', label: 'FAQ' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0e0918]/85 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={totumLogo}
            alt="Totum"
            width={28}
            height={28}
            className="h-7 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.2em] uppercase text-white/70">
          {NAV_LINKS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-white transition-colors">
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5533991294114?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20de%20alinhamento." target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-[13px] text-white bg-rosso hover:bg-rosso-accent rounded-full px-5 py-2.5 transition-all duration-300 hover:shadow-[0_7px_40px_-12px_#c8102e]"
        >
          Agendar Reunião
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  )
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#0e0918]">
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          src="/videos/hero-rocket.mp4"
          poster={heroImg}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0918] via-[#0e0918]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0918] via-transparent to-[#0e0918]/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full mx-auto max-w-[1440px] px-6 lg:px-10 flex flex-col justify-end pb-20 lg:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-white/60 mb-8"
        >
          <span className="w-10 h-px bg-rosso" />
          Estratégia · Posicionamento · Landing Pages
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white text-[12vw] sm:text-[10vw] lg:text-[7.4vw] leading-[0.9] tracking-[-0.025em] uppercase max-w-[18ch]"
        >
          Sua empresa está sendo escolhida pelo motivo <span className="text-rosso">certo</span>?
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-5xl"
        >
          <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-md">
            Sua reputação já existe. Transformamos ela em uma página estratégica que comunica
            confiança, autoridade e diferenciais antes do primeiro contato.
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 right-6 lg:right-10 z-10 text-[10px] tracking-[0.3em] uppercase text-white/40 hidden md:block">
        Role para descobrir ↘
      </div>
    </section>
  )
}

/* =========================================================
   BLOCO A — Reputação & Diagnóstico  (ex-seções 1 + 2)
   ========================================================= */

const REP_ITEMS = [
  'Clientes satisfeitos',
  'Indicações constantes',
  'Avaliações positivas',
  'Presença no Google e redes sociais',
]

function ReputacaoDiagnostico() {
  return (
    <section className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5 overflow-hidden">
      <img
        src={conceptReputation}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-[0.08]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0e0918] via-[#0e0918]/85 to-[#0e0918]" />
      <div aria-hidden className="absolute -left-40 top-1/2 w-[600px] h-[600px] rounded-full bg-rosso/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        {/* Coluna esquerda — título + lista de reputação */}
        <div className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-rosso mb-5">01 — Reputação & Diagnóstico</div>
          <h2 className="font-display text-white text-4xl lg:text-6xl leading-[0.95] tracking-[-0.02em] uppercase">
            Você já construiu uma boa <span className="text-rosso">reputação</span>.
          </h2>

          <ul className="space-y-5 mt-10">
            {REP_ITEMS.map((it) => (
              <motion.li
                key={it}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 text-white/85 text-lg border-b border-white/10 pb-5"
              >
                <span className="w-2 h-2 rounded-full bg-rosso" />
                {it}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Coluna direita — pergunta + diagnóstico */}
        <div className="lg:col-span-6 lg:col-start-7 self-center space-y-10">
          <div>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed font-display mb-4">
              Mas existe uma pergunta importante…
            </p>
            <p className="text-white text-2xl lg:text-4xl font-display leading-[1.15] tracking-[-0.01em]">
              Quando alguém encontra sua empresa pela primeira vez, ela percebe o mesmo valor que
              seus clientes já <span className="text-rosso">conhecem</span>?
            </p>
          </div>

          <div className="border-t border-white/10 pt-10">
            <h3 className="font-display text-white text-2xl lg:text-3xl leading-[1.1] tracking-[-0.01em]">
              Muitas empresas fazem um excelente trabalho.{' '}
              <span className="text-white/45">
                O problema é que isso nem sempre fica claro para quem está pesquisando.
              </span>
            </h3>
            <p className="mt-6 text-white/75 text-base lg:text-lg leading-relaxed">
              Enquanto seus concorrentes disputam atenção falando apenas sobre produtos, serviços e
              preços, os melhores negócios são escolhidos porque conseguem transmitir{' '}
              <span className="text-white">confiança, autoridade e diferenciais</span> antes mesmo
              do primeiro contato.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   BLOCO B — Método & Processo  (ex-seções 3 + 4)
   ========================================================= */

const METHOD_ITEMS = [
  'Como sua marca é percebida',
  'O que faz seus clientes escolherem você',
  'O que seus concorrentes estão comunicando',
  'Onde existem oportunidades de crescimento',
]

const STEPS = [
  { n: '01', t: 'Análise Estratégica', d: 'Estudamos sua presença digital, reputação, posicionamento e diferenciais.' },
  { n: '02', t: 'Identificação de Oportunidades', d: 'Encontramos pontos que podem aumentar confiança, autoridade e conversão.' },
  { n: '03', t: 'Preview Estratégico', d: 'Criamos uma prévia personalizada mostrando como sua empresa pode apresentar melhor seus diferenciais.' },
  { n: '04', t: 'Reunião de Alinhamento', d: 'Apresentamos a estratégia, validamos o posicionamento e ajustamos os detalhes finais.' },
  { n: '05', t: 'Entrega Rápida', d: 'Após o alinhamento, sua Landing Page é entregue pronta em até 24 horas.' },
]

function MetodoProcesso() {
  return (
    <section id="metodo" className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5 overflow-hidden">
      <img
        src={conceptMethod}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-[0.08]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0e0918] via-[#0e0918]/85 to-[#0e0918]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Cabeçalho + Método (analisamos) */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-rosso mb-5">02 — Método & Processo</div>
            <h2 className="font-display text-white text-5xl lg:text-7xl leading-[0.95] tracking-[-0.02em] uppercase">
              Não <span className="text-rosso">começamos</span> criando páginas.
            </h2>
            <p className="mt-8 text-white/70 text-lg leading-relaxed">
              Começamos entendendo o que torna sua empresa diferente. A partir disso, construímos
              uma estratégia clara para destacar aquilo que realmente faz sentido para o seu
              negócio.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">Analisamos</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {METHOD_ITEMS.map((it, i) => (
                <div key={it} className="bg-[#0e0918] p-8 lg:p-10 group hover:bg-white/[0.03] transition-colors">
                  <div className="font-display text-rosso text-xs tracking-[0.3em] mb-6">0{i + 1}</div>
                  <p className="text-white text-lg lg:text-xl font-display leading-[1.2] tracking-[-0.01em]">{it}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor + Processo (5 passos) */}
        <div id="processo" className="border-t border-white/10 pt-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <div className="text-[10px] tracking-[0.35em] uppercase text-rosso/80 mb-4">Cinco passos · Zero improviso</div>
              <h3 className="font-display text-white text-4xl lg:text-6xl tracking-[-0.02em] uppercase leading-[0.95]">
                Como <span className="text-rosso">funciona</span>.
              </h3>
            </div>
            <p className="text-white/60 text-sm tracking-[0.18em] uppercase max-w-xs">
              Da primeira análise até a publicação em até 24h após o alinhamento.
            </p>
          </div>

          <ol className="space-y-px bg-white/10 border border-white/10">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr_1.5fr] gap-6 lg:gap-12 bg-[#0e0918] p-6 lg:p-10 hover:bg-white/[0.03] transition-colors items-center"
              >
                <div className="font-display text-rosso text-3xl lg:text-5xl tracking-[-0.02em]">{s.n}</div>
                <h4 className="font-display text-white text-xl lg:text-3xl tracking-[-0.01em] uppercase leading-tight">{s.t}</h4>
                <p className="col-span-2 lg:col-span-1 text-white/65 text-base lg:text-lg leading-relaxed">{s.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   BLOCO C — Diferencial · Resultados · Para Quem · FAQ
   (ex-seções 5 + 6 + 7 + 11)
   ========================================================= */

const LP_BENEFITS = [
  'Apresentar seus diferenciais com clareza',
  'Aumentar a percepção de profissionalismo',
  'Destacar avaliações e provas sociais',
  'Reduzir objeções antes do contato',
  'Direcionar mais visitantes para orçamento',
  'Transformar confiança em oportunidades reais',
]

const AUDIENCE = [
  'Clínicas',
  'Escritórios',
  'Consultores',
  'Prestadores de serviço',
  'Empresas locais',
  'Especialistas',
  'Pequenas e médias empresas',
]

const FAQS = [
  { q: 'Vocês atendem empresas iniciantes?', a: 'Nossa metodologia é direcionada a negócios já estabelecidos, com reputação no mercado e clientela ativa.' },
  { q: 'Preciso ter todo o material pronto?', a: 'Não. Nossa equipe ajuda na construção da comunicação e estrutura da página.' },
  { q: 'Quanto tempo leva?', a: 'Após a reunião de alinhamento e aprovação da estratégia, a página é entregue em até 24 horas.' },
  { q: 'Isso funciona para qualquer segmento?', a: 'Sim. A metodologia foi criada para negócios que dependem de confiança, autoridade e diferenciação para conquistar clientes.' },
]

function DiferencialResultados() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5 overflow-hidden">
      <img
        src={conceptGrowth}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-[0.07]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0e0918] via-[#0e0918]/85 to-[#0e0918]" />
      <div aria-hidden className="absolute -right-40 top-0 w-[600px] h-[600px] rounded-full bg-rosso/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header geral */}
        <div className="mb-20">
          <div className="text-[11px] tracking-[0.3em] uppercase text-rosso mb-5">03 — Diferencial, Resultados & FAQ</div>
        </div>

        {/* Sub-bloco: Diferencial */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-8">
            <h2 className="font-display text-white text-5xl lg:text-7xl tracking-[-0.025em] uppercase leading-[0.92]">
              A maioria vende páginas. <br />
              <span className="text-rosso">Nós vendemos crescimento.</span>
            </h2>
            <div className="mt-10 space-y-6 text-white/75 text-lg leading-relaxed max-w-2xl">
              <p>
                Uma página bonita não resolve o problema. O que gera resultado é{' '}
                <span className="text-white">transmitir o valor</span> da sua empresa de forma clara
                para quem ainda não conhece você.
              </p>
              <p className="text-white/55">
                Ajudamos empresas a transformar reputação em oportunidades reais — começando pela
                estratégia, não pelo design.
              </p>
            </div>
          </div>
        </div>

        {/* Sub-bloco: Resultados (LP_BENEFITS) */}
        <div className="border-t border-white/10 pt-16 mb-24">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-7">
              <div className="text-[10px] tracking-[0.35em] uppercase text-rosso/80 mb-4">Resultados</div>
              <h3 className="font-display text-white text-4xl lg:text-6xl tracking-[-0.02em] uppercase leading-[0.95]">
                O que sua Landing Page pode fazer por <span className="text-rosso">você</span>.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {LP_BENEFITS.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group relative p-8 lg:p-10 border-b border-white/10 md:border-r last:md:border-r-0 lg:[&:nth-child(3n)]:border-r-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display text-white/30 text-xs tracking-[0.3em]">0{i + 1}</span>
                  <span className="w-8 h-px bg-rosso group-hover:w-16 transition-all duration-500" />
                </div>
                <p className="font-display text-white text-xl lg:text-2xl leading-[1.2] tracking-[-0.01em]">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sub-bloco: Para Quem (marquee) */}
        <div className="border-t border-white/10 pt-16 mb-24">
          <div className="mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-rosso/80 mb-4">Para Quem</div>
            <h3 className="font-display text-white text-4xl lg:text-6xl tracking-[-0.02em] uppercase leading-[0.95] max-w-3xl">
              Negócios com reputação que querem{' '}
              <span className="text-rosso">mais oportunidades</span>.
            </h3>
          </div>

          <div className="relative -mx-6 lg:-mx-10">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0e0918] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0e0918] to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
                className="flex shrink-0 gap-16 pr-16"
              >
                {[...AUDIENCE, ...AUDIENCE].map((c, i) => (
                  <span
                    key={i}
                    className="font-display text-3xl lg:text-5xl text-white/30 hover:text-white tracking-[-0.01em] uppercase whitespace-nowrap transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sub-bloco: FAQ */}
        <div className="border-t border-white/10 pt-16">
          <div className="mb-12 max-w-[1100px]">
            <div className="text-[10px] tracking-[0.35em] uppercase text-rosso/80 mb-4">FAQ</div>
            <h3 className="font-display text-white text-4xl lg:text-6xl tracking-[-0.02em] uppercase leading-[0.95]">
              Perguntas <span className="text-rosso">Frequentes</span>.
            </h3>
          </div>

          <div className="max-w-[1100px] border-t border-white/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i
              return (
                <div key={f.q} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  >
                    <span className="font-display text-white text-xl lg:text-3xl tracking-[-0.01em] leading-tight group-hover:text-rosso transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 w-10 h-10 border border-white/20 group-hover:border-rosso flex items-center justify-center text-white text-xl transition-all duration-500 ${
                        isOpen ? 'rotate-45 bg-rosso border-rosso' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pr-16 text-white/70 text-base lg:text-lg leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- CTA Final ---------- */

function FinalCTA() {
  return (
    <section
      id="agendar"
      className="relative bg-[#0e0918] py-32 lg:py-48 border-t border-white/5 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-rosso/15 blur-[180px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-rosso/10 blur-[160px]"
      />
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10 text-center">
        <div className="text-[11px] tracking-[0.3em] uppercase text-rosso mb-6">12 — Próximo Passo</div>
        <h2 className="font-display text-white text-[12vw] sm:text-[9vw] lg:text-[6.5vw] leading-[0.9] tracking-[-0.03em] uppercase">
          Sua empresa já construiu uma <span className="text-rosso">reputação</span>.
        </h2>
        <p className="mt-10 text-white/75 text-lg lg:text-2xl leading-relaxed font-display max-w-3xl mx-auto">
          Agora é hora de garantir que ela seja percebida por quem ainda não conhece você.
        </p>

        <div className="mt-16 flex flex-col items-center gap-6">
          <a
            href="https://wa.me/5533991294114?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20de%20alinhamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-rosso hover:bg-rosso-accent text-white text-[15px] lg:text-base tracking-[0.05em] rounded-full px-10 lg:px-14 py-4 lg:py-5 transition-all duration-300 hover:shadow-[0_7px_80px_-12px_#c8102e]"
          >
            Agendar Reunião de Alinhamento
            <span className="inline-block group-hover:translate-x-1 transition-transform text-lg">
              →
            </span>
          </a>
          <p className="text-white/45 text-xs tracking-[0.22em] uppercase">
            Vamos mostrar as oportunidades aplicadas ao seu negócio
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0e0918] border-t border-white/5 py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] tracking-[0.3em] uppercase text-white/40">
        <div className="flex items-center gap-3">
          <img src={totumLogo} alt="Totum" width={28} height={28} className="h-7 w-auto object-contain opacity-90" />
          <span className="text-white/50">© {new Date().getFullYear()}</span>
        </div>
        <div>Estratégia · Posicionamento · Landing Pages</div>
        <div>Feito com método.</div>
      </div>
    </footer>
  )
}

export default function AtelierRosso() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])
  return (
    <div className="min-h-screen bg-[#0e0918] text-white overflow-x-hidden font-sans antialiased selection:bg-rosso selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Reputation />
        <Problem />
        <Method />
        <Process />
        <Difference />
        <Portfolio />
        <Benefits />
        <Audience />
        <Included />
        <Testimonials />
        <Meeting />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
