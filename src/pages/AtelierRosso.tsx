import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import heroImg from '@/assets/atelier-hero.jpg'
import totumLogo from '@/assets/totum-logo.png'
import conceptReputation from '@/assets/concept-reputation.jpg'
import conceptClarity from '@/assets/concept-clarity.jpg'
import conceptGrowth from '@/assets/concept-growth.jpg'
import conceptMethod from '@/assets/concept-method.jpg'

/* ============================================================
   Atelier Rosso — Estratégia · Posicionamento · Landing Pages
   Tokens: --rosso #ee4f27 · --canvas #0e0918
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
          href="#agendar"
          className="hidden md:inline-flex items-center gap-2 text-[13px] text-white bg-[#ee4f27] hover:bg-[#ff0c00] rounded-full px-5 py-2.5 transition-all duration-300 hover:shadow-[0_7px_40px_-12px_#ee4f27]"
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
          <span className="w-10 h-px bg-[#ee4f27]" />
          Estratégia · Posicionamento · Landing Pages
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white text-[12vw] sm:text-[10vw] lg:text-[7.4vw] leading-[0.9] tracking-[-0.025em] uppercase max-w-[18ch]"
        >
          Sua empresa está sendo escolhida pelo motivo <span className="text-[#ee4f27]">certo</span>?
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 max-w-5xl"
        >
          <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-md">
            Sua reputação já existe. Transformamos ela em uma página estratégica que comunica
            confiança, autoridade e diferenciais antes do primeiro contato.
          </p>
          <a
            href="#agendar"
            className="group inline-flex items-center gap-3 text-[14px] tracking-[0.05em] text-white bg-[#ee4f27] hover:bg-[#ff0c00] rounded-full px-6 py-3 transition-all duration-300 w-fit hover:shadow-[0_7px_80px_-12px_#ee4f27]"
          >
            Agendar Reunião
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 right-6 lg:right-10 z-10 text-[10px] tracking-[0.3em] uppercase text-white/40 hidden md:block">
        Role para descobrir ↘
      </div>
    </section>
  )
}

/* ---------- Reputação / Problema ---------- */

const REP_ITEMS = [
  'Clientes satisfeitos',
  'Indicações constantes',
  'Avaliações positivas',
  'Presença no Google e redes sociais',
]

function Reputation() {
  return (
    <section className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5 overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-4">
          <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">01 — Reputação</div>
          <h2 className="font-display text-white text-4xl lg:text-6xl leading-[0.95] tracking-[-0.02em] uppercase">
            Você já construiu uma boa <span className="text-[#ee4f27]">reputação</span>.
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3 relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10"
        >
          <img
            src={conceptReputation}
            alt="Reputação construída"
            loading="lazy"
            width={680}
            height={850}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0918]/80 via-transparent to-transparent" />
        </motion.div>
        <div className="lg:col-span-5">
          <ul className="space-y-5 mb-12">
            {REP_ITEMS.map((it) => (
              <motion.li
                key={it}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 text-white/85 text-lg lg:text-xl border-b border-white/10 pb-5"
              >
                <span className="w-2 h-2 rounded-full bg-[#ee4f27]" />
                {it}
              </motion.li>
            ))}
          </ul>
          <p className="text-white/60 text-base lg:text-lg leading-relaxed font-display">
            Mas existe uma pergunta importante…
          </p>
          <p className="mt-6 text-white text-2xl lg:text-3xl font-display leading-[1.15] tracking-[-0.01em]">
            Quando alguém encontra sua empresa pela primeira vez, ela percebe o mesmo valor que seus
            clientes já <span className="text-[#ee4f27]">conhecem</span>?
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------- Problema / Diagnóstico ---------- */

function Problem() {
  return (
    <section className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5 overflow-hidden">
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 w-[600px] h-[600px] rounded-full bg-[#ee4f27]/10 blur-[180px]"
      />
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10 text-center">
        <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-6">02 — O Problema</div>
        <h2 className="font-display text-white text-4xl lg:text-6xl leading-[1.05] tracking-[-0.02em]">
          Muitas empresas fazem um excelente trabalho. <br />
          <span className="text-white/45">
            O problema é que isso nem sempre fica claro para quem está pesquisando.
          </span>
        </h2>
        <p className="mt-12 text-white/75 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          Enquanto seus concorrentes disputam atenção falando apenas sobre produtos, serviços e
          preços, os melhores negócios são escolhidos porque conseguem transmitir{' '}
          <span className="text-white">confiança, autoridade e diferenciais</span> antes mesmo do
          primeiro contato.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 aspect-[16/7] overflow-hidden rounded-sm border border-white/10"
        >
          <img
            src={conceptClarity}
            alt="Clareza emergindo no ruído"
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0918] via-transparent to-[#0e0918]/40" />
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Método ---------- */

const METHOD_ITEMS = [
  'Como sua marca é percebida',
  'O que faz seus clientes escolherem você',
  'O que seus concorrentes estão comunicando',
  'Onde existem oportunidades de crescimento',
]

function Method() {
  return (
    <section id="metodo" className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">03 — Método</div>
          <h2 className="font-display text-white text-5xl lg:text-7xl leading-[0.95] tracking-[-0.02em] uppercase">
            Não <span className="text-[#ee4f27]">começamos</span> criando páginas.
          </h2>
          <p className="mt-8 text-white/70 text-lg leading-relaxed">
            Começamos entendendo o que torna sua empresa diferente. A partir disso, construímos uma
            estratégia clara para destacar aquilo que realmente faz sentido para o seu negócio.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-12 aspect-[4/3] overflow-hidden rounded-sm border border-white/10 hidden lg:block"
          >
            <img
              src={conceptMethod}
              alt="Método e planejamento estratégico"
              loading="lazy"
              width={1024}
              height={768}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0918]/80 via-transparent to-transparent" />
          </motion.div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">Analisamos</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {METHOD_ITEMS.map((it, i) => (
              <div
                key={it}
                className="bg-[#0e0918] p-8 lg:p-10 group hover:bg-white/[0.03] transition-colors"
              >
                <div className="font-display text-[#ee4f27] text-xs tracking-[0.3em] mb-6">
                  0{i + 1}
                </div>
                <p className="text-white text-lg lg:text-xl font-display leading-[1.2] tracking-[-0.01em]">
                  {it}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Como Funciona (5 passos) ---------- */

const STEPS = [
  {
    n: '01',
    t: 'Análise Estratégica',
    d: 'Estudamos sua presença digital, reputação, posicionamento e diferenciais.',
  },
  {
    n: '02',
    t: 'Identificação de Oportunidades',
    d: 'Encontramos pontos que podem aumentar confiança, autoridade e conversão.',
  },
  {
    n: '03',
    t: 'Preview Estratégico',
    d: 'Criamos uma prévia personalizada mostrando como sua empresa pode apresentar melhor seus diferenciais.',
  },
  {
    n: '04',
    t: 'Reunião de Alinhamento',
    d: 'Apresentamos a estratégia, validamos o posicionamento e ajustamos os detalhes finais.',
  },
  {
    n: '05',
    t: 'Entrega Rápida',
    d: 'Após o alinhamento, sua Landing Page é entregue pronta em até 24 horas.',
  },
]

function Process() {
  return (
    <section id="processo" className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">04 — Como Funciona</div>
            <h2 className="font-display text-white text-5xl lg:text-7xl tracking-[-0.02em] uppercase leading-[0.95]">
              Cinco passos. <br />
              <span className="text-[#ee4f27]">Zero improviso.</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm tracking-[0.18em] uppercase max-w-xs">
            Da primeira análise até a publicação em até 24h após o alinhamento.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[27px] sm:left-[35px] top-4 bottom-4 w-px bg-white/10 lg:hidden" />
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
                <div className="font-display text-[#ee4f27] text-3xl lg:text-5xl tracking-[-0.02em]">
                  {s.n}
                </div>
                <h3 className="font-display text-white text-xl lg:text-3xl tracking-[-0.01em] uppercase leading-tight">
                  {s.t}
                </h3>
                <p className="col-span-2 lg:col-span-1 text-white/65 text-base lg:text-lg leading-relaxed">
                  {s.d}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ---------- Diferencial ---------- */

function Difference() {
  return (
    <section className="relative bg-[#0e0918] py-28 lg:py-44 border-t border-white/5 overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-40 top-0 w-[600px] h-[600px] rounded-full bg-[#ee4f27]/10 blur-[180px]"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">05 — Diferencial</div>
          <h2 className="font-display text-white text-5xl lg:text-7xl tracking-[-0.025em] uppercase leading-[0.92]">
            A maioria vende páginas. <br />
            <span className="text-[#ee4f27]">Nós vendemos crescimento.</span>
          </h2>
          <div className="mt-10 space-y-6 text-white/75 text-lg leading-relaxed max-w-xl">
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
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 order-1 lg:order-2 relative aspect-square overflow-hidden rounded-sm border border-white/10"
        >
          <img
            src={conceptGrowth}
            alt="Direção estratégica e crescimento"
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#0e0918]/70 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- O que sua LP faz ---------- */

const LP_BENEFITS = [
  'Apresentar seus diferenciais com clareza',
  'Aumentar a percepção de profissionalismo',
  'Destacar avaliações e provas sociais',
  'Reduzir objeções antes do contato',
  'Direcionar mais visitantes para orçamento',
  'Transformar confiança em oportunidades reais',
]

function Benefits() {
  return (
    <section className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">06 — Resultados</div>
            <h2 className="font-display text-white text-4xl lg:text-6xl tracking-[-0.02em] uppercase leading-[0.95]">
              O que sua Landing Page pode fazer por <span className="text-[#ee4f27]">você</span>.
            </h2>
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
                <span className="font-display text-white/30 text-xs tracking-[0.3em]">
                  0{i + 1}
                </span>
                <span className="w-8 h-px bg-[#ee4f27] group-hover:w-16 transition-all duration-500" />
              </div>
              <p className="font-display text-white text-xl lg:text-2xl leading-[1.2] tracking-[-0.01em]">
                {b}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Quem se beneficia ---------- */

const AUDIENCE = [
  'Clínicas',
  'Escritórios',
  'Consultores',
  'Prestadores de serviço',
  'Empresas locais',
  'Especialistas',
  'Pequenas e médias empresas',
]

function Audience() {
  return (
    <section className="relative bg-[#0e0918] py-28 lg:py-36 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 mb-14">
        <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">07 — Para Quem</div>
        <h2 className="font-display text-white text-4xl lg:text-6xl tracking-[-0.02em] uppercase leading-[0.95] max-w-3xl">
          Para negócios que já têm reputação e querem{' '}
          <span className="text-[#ee4f27]">mais oportunidades</span>.
        </h2>
      </div>

      <div className="relative">
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
    </section>
  )
}

/* ---------- O que está incluso ---------- */

const INCLUDED = [
  'Diagnóstico estratégico inicial',
  'Análise de posicionamento',
  'Identificação de oportunidades',
  'Copywriting estratégico',
  'Design profissional responsivo',
  'Integração com WhatsApp',
  'Formulário de contato',
  'Estrutura de conversão',
  'Publicação da página',
  'Ajustes finais após alinhamento',
]

function Included() {
  return (
    <section id="incluso" className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">08 — Incluso</div>
          <h2 className="font-display text-white text-5xl lg:text-7xl tracking-[-0.02em] uppercase leading-[0.95]">
            Tudo o que <span className="text-[#ee4f27]">está</span> incluso.
          </h2>
          <p className="mt-8 text-white/65 text-lg leading-relaxed">
            Um pacote completo, da estratégia à publicação. Sem surpresas, sem cobrança extra de
            etapas essenciais.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {INCLUDED.map((it, i) => (
              <motion.li
                key={it}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex items-start gap-4 py-5 border-b border-white/10 text-white/85"
              >
                <span className="font-display text-[#ee4f27] text-xs tracking-[0.25em] pt-1.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base lg:text-lg">{it}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- Depoimentos WhatsApp ---------- */

const TESTIMONIALS: Array<{
  name: string
  initials: string
  time: string
  badge: string
  messages: Array<{ from: 'them' | 'me'; text: string; time: string }>
}> = [
  {
    name: 'Dr. Rafael Monteiro',
    initials: 'RM',
    time: 'hoje',
    badge: 'Rapidez',
    messages: [
      { from: 'them', text: 'Pessoal, vocês entregaram em menos de 24h. Surreal.', time: '14:02' },
      { from: 'me', text: 'Acordo é acordo 🔥', time: '14:03' },
      { from: 'them', text: 'Já recebi 3 contatos hoje pela página. Obrigado!', time: '14:05' },
    ],
  },
  {
    name: 'Camila — Clínica Vértice',
    initials: 'CV',
    time: 'ontem',
    badge: 'Qualidade',
    messages: [
      { from: 'them', text: 'Ficou exatamente do jeito que eu imaginava 🤍', time: '09:41' },
      { from: 'them', text: 'O nível de acabamento é absurdo.', time: '09:41' },
    ],
  },
  {
    name: 'Lucas Andrade',
    initials: 'LA',
    time: 'seg',
    badge: 'Profissionalismo',
    messages: [
      { from: 'them', text: 'Reunião super objetiva, sem enrolação.', time: '18:20' },
      { from: 'them', text: 'Esse é o padrão que eu queria pra minha marca.', time: '18:22' },
    ],
  },
  {
    name: 'Mariana — Studio Norte',
    initials: 'MS',
    time: 'qua',
    badge: 'Estratégia',
    messages: [
      { from: 'them', text: 'A análise de concorrência abriu meus olhos.', time: '11:08' },
      { from: 'them', text: 'Vocês mostraram coisas que eu não tinha visto em anos.', time: '11:09' },
    ],
  },
  {
    name: 'Eng. Bruno Tavares',
    initials: 'BT',
    time: 'sex',
    badge: 'Resultado',
    messages: [
      { from: 'them', text: 'Triplicou meus orçamentos no primeiro mês.', time: '20:15' },
      { from: 'me', text: 'Esse é o objetivo 🚀', time: '20:16' },
      { from: 'them', text: 'Bora pra próxima fase!', time: '20:17' },
    ],
  },
]

/* Real WhatsApp dark-mode doodle wallpaper (subtle, tiled SVG) */
const WA_BG =
  "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.035' stroke-width='1.2'%3E%3Cpath d='M20 40c8-10 18-10 26 0s18 10 26 0 18-10 26 0'/%3E%3Ccircle cx='160' cy='60' r='10'/%3E%3Cpath d='M40 130l10-10 10 10 10-10 10 10'/%3E%3Cpath d='M150 150c6-8 14-8 20 0s14 8 20 0'/%3E%3Cpath d='M70 190h30M85 175v30'/%3E%3Cpath d='M180 100l-6 6 6 6 6-6z'/%3E%3C/g%3E%3C/svg%3E\")"

/* Bubble tail SVGs — incoming (left) and outgoing (right) */
const TailIn = () => (
  <svg
    viewBox="0 0 8 13"
    className="absolute -left-[7px] top-0 w-2 h-[13px] text-[#202c33]"
    aria-hidden
  >
    <path fill="currentColor" d="M8 0L0 0c2 4 5 7 8 8V0z" />
  </svg>
)
const TailOut = () => (
  <svg
    viewBox="0 0 8 13"
    className="absolute -right-[7px] top-0 w-2 h-[13px] text-[#005c4b]"
    aria-hidden
  >
    <path fill="currentColor" d="M0 0l8 0c-2 4-5 7-8 8V0z" />
  </svg>
)
const DoubleCheck = () => (
  <svg viewBox="0 0 16 11" className="w-[15px] h-[11px] inline-block ml-1 -mb-[1px]" aria-hidden>
    <path
      fill="#53bdeb"
      d="M11.071.653a.457.457 0 0 0-.304-.158.475.475 0 0 0-.422.169L4.629 8.038 2.225 5.61a.46.46 0 0 0-.65 0L.114 7.073a.464.464 0 0 0 0 .654l3.747 3.78a.46.46 0 0 0 .65 0l.011-.011.797-.802 7.376-7.448a.467.467 0 0 0 .015-.642L11.071.653zM15.448.495a.458.458 0 0 0-.303-.158.475.475 0 0 0-.422.169L9.006 7.88l-.81-.815a.46.46 0 0 0-.65 0L7.087 8.527a.464.464 0 0 0 0 .654l2.13 2.149a.46.46 0 0 0 .65 0l.012-.012.797-.803 7.376-7.448a.467.467 0 0 0 .015-.642L15.448.495z"
    />
  </svg>
)

function WhatsCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="shrink-0 w-[320px] sm:w-[360px] bg-[#0b141a] rounded-[10px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-black/40">
      {/* Header */}
      <div className="flex items-center gap-3 px-3 py-2.5 bg-[#202c33]">
        <svg className="w-5 h-5 text-white/70 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="w-9 h-9 rounded-full bg-[#6b7c85] flex items-center justify-center text-white text-[12px] font-semibold shrink-0">
          {t.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white text-[14px] font-medium truncate leading-tight">{t.name}</div>
          <div className="text-white/55 text-[11px] leading-tight mt-0.5">online</div>
        </div>
        <div className="flex items-center gap-4 text-white/70 shrink-0">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
          </svg>
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <circle cx="12" cy="5" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="12" cy="19" r="1.6" />
          </svg>
        </div>
      </div>

      {/* Chat area */}
      <div
        className="px-3 py-3 space-y-1.5 min-h-[210px] bg-[#0b141a]"
        style={{ backgroundImage: WA_BG, backgroundSize: '220px 220px' }}
      >
        {t.messages.map((m, i) => {
          const isMe = m.from === 'me'
          return (
            <div key={i} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`relative max-w-[78%] px-2 pt-1.5 pb-1 text-[13.5px] leading-[18px] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] ${
                  isMe
                    ? 'bg-[#005c4b] text-white rounded-[7.5px] rounded-tr-none'
                    : 'bg-[#202c33] text-[#e9edef] rounded-[7.5px] rounded-tl-none'
                }`}
              >
                {isMe ? <TailOut /> : <TailIn />}
                <div className="pr-[58px] whitespace-pre-wrap break-words">{m.text}</div>
                <div className="absolute right-1.5 bottom-0.5 flex items-center gap-0.5 text-[10.5px] text-white/55">
                  <span>{m.time}</span>
                  {isMe && <DoubleCheck />}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Input bar (cosmetic) */}
      <div className="flex items-center gap-2 px-2 py-2 bg-[#0b141a]">
        <div className="flex-1 flex items-center gap-2 bg-[#2a3942] rounded-full px-3 py-2 text-[12px] text-white/40">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-3.5 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8.5 9zm7 0a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 15.5 9zM12 17.5a5.5 5.5 0 0 1-4.9-3h9.8a5.5 5.5 0 0 1-4.9 3z" />
          </svg>
          <span className="truncate">Mensagem</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white" aria-hidden>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">09 — Depoimentos</div>
            <h2 className="font-display text-white text-4xl lg:text-6xl tracking-[-0.02em] uppercase leading-[0.95] max-w-2xl">
              O que nossos clientes <span className="text-[#ee4f27]">costumam dizer</span>.
            </h2>
          </div>
          <p className="text-white/50 text-xs tracking-[0.22em] uppercase max-w-xs">
            Conversas reais — rapidez, qualidade, estratégia e resultado.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0e0918] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0e0918] to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden py-4">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
            className="flex shrink-0 gap-6 pr-6"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <WhatsCard key={i} t={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Reunião de Alinhamento ---------- */

const MEETING_ITEMS = [
  'Oportunidades encontradas',
  'Diferenciais identificados',
  'Posicionamento recomendado',
  'Estrutura proposta para a página',
  'Estratégia aplicada ao seu negócio',
]

function Meeting() {
  return (
    <section className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">10 — Reunião</div>
          <h2 className="font-display text-white text-5xl lg:text-7xl tracking-[-0.02em] uppercase leading-[0.95]">
            O que acontece na <span className="text-[#ee4f27]">Reunião</span> de Alinhamento?
          </h2>
          <div className="mt-10 flex gap-3">
            <span className="text-[11px] tracking-[0.3em] uppercase text-white border border-white/15 px-4 py-2">
              Sem pressão
            </span>
            <span className="text-[11px] tracking-[0.3em] uppercase text-white border border-[#ee4f27] text-[#ee4f27] px-4 py-2">
              Sem compromisso
            </span>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-white/70 text-lg mb-8 leading-relaxed">Durante a reunião nós mostramos:</p>
          <ul className="space-y-px bg-white/10 border border-white/10">
            {MEETING_ITEMS.map((it, i) => (
              <li
                key={it}
                className="bg-[#0e0918] p-6 lg:p-7 flex items-center gap-6 hover:bg-white/[0.03] transition-colors"
              >
                <span className="font-display text-[#ee4f27] text-2xl tracking-[-0.01em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-white text-lg lg:text-xl">{it}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-white/55 text-base leading-relaxed">
            Ao final, você decide se deseja seguir para a implementação.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */

const FAQS = [
  {
    q: 'Vocês começam criando a página?',
    a: 'Não. Primeiro entendemos o que torna sua empresa diferente. Depois transformamos isso em uma estratégia clara.',
  },
  {
    q: 'Preciso ter todo o material pronto?',
    a: 'Não. Nossa equipe ajuda na construção da comunicação e estrutura da página.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'Após a reunião de alinhamento e aprovação da estratégia, a página é entregue em até 24 horas.',
  },
  {
    q: 'Isso funciona para qualquer segmento?',
    a: 'Sim. A metodologia foi criada para negócios que dependem de confiança, autoridade e diferenciação para conquistar clientes.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="relative bg-[#0e0918] py-28 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-5">11 — FAQ</div>
        <h2 className="font-display text-white text-5xl lg:text-7xl tracking-[-0.02em] uppercase leading-[0.95] mb-16">
          Perguntas <span className="text-[#ee4f27]">Frequentes</span>.
        </h2>

        <div className="border-t border-white/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span className="font-display text-white text-xl lg:text-3xl tracking-[-0.01em] leading-tight group-hover:text-[#ee4f27] transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-10 h-10 border border-white/20 group-hover:border-[#ee4f27] flex items-center justify-center text-white text-xl transition-all duration-500 ${
                      isOpen ? 'rotate-45 bg-[#ee4f27] border-[#ee4f27]' : ''
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
                      <p className="pb-8 pr-16 text-white/70 text-base lg:text-lg leading-relaxed">
                        {f.a}
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

/* ---------- CTA Final ---------- */

function FinalCTA() {
  return (
    <section
      id="agendar"
      className="relative bg-[#0e0918] py-32 lg:py-48 border-t border-white/5 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#ee4f27]/15 blur-[180px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#ee4f27]/10 blur-[160px]"
      />
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10 text-center">
        <div className="text-[11px] tracking-[0.3em] uppercase text-[#ee4f27] mb-6">12 — Próximo Passo</div>
        <h2 className="font-display text-white text-[12vw] sm:text-[9vw] lg:text-[6.5vw] leading-[0.9] tracking-[-0.03em] uppercase">
          Sua empresa já construiu uma <span className="text-[#ee4f27]">reputação</span>.
        </h2>
        <p className="mt-10 text-white/75 text-lg lg:text-2xl leading-relaxed font-display max-w-3xl mx-auto">
          Agora é hora de garantir que ela seja percebida por quem ainda não conhece você.
        </p>

        <div className="mt-16 flex flex-col items-center gap-6">
          <a
            href="https://wa.me/5500000000000?text=Quero%20agendar%20uma%20Reuni%C3%A3o%20de%20Alinhamento%20Estrat%C3%A9gico"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-[#ee4f27] hover:bg-[#ff0c00] text-white text-[15px] lg:text-base tracking-[0.05em] rounded-full px-10 lg:px-14 py-4 lg:py-5 transition-all duration-300 hover:shadow-[0_7px_80px_-12px_#ee4f27]"
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
          <div className="flex flex-col leading-none gap-1">
            <span className="text-white/70">Atelier <span className="text-[#ee4f27]">Rosso</span></span>
            <span className="text-white/35">by Totum · © {new Date().getFullYear()}</span>
          </div>
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
    <div className="min-h-screen bg-[#0e0918] text-white overflow-x-hidden font-sans antialiased selection:bg-[#ee4f27] selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Reputation />
        <Problem />
        <Method />
        <Process />
        <Difference />
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
