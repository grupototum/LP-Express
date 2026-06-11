import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroImg from '@/assets/atelier-hero.jpg'
import work1 from '@/assets/concept-strategy.jpg'
import work2 from '@/assets/concept-funnel.jpg'
import work3 from '@/assets/concept-trust.jpg'
import work4 from '@/assets/concept-unlock.jpg'

/* ============================================================
   Atelier Rosso — Premium dark agency site
   Tokens: --rosso #da291c · --canvas #0a0a0a
   ============================================================ */

const SECTIONS = [
  { id: 'reel', label: 'Reel' },
  { id: 'work', label: 'Work' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Contact' },
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
        scrolled ? 'bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#da291c] shadow-[0_0_18px_#da291c]" />
          <span className="font-display text-[15px] tracking-[0.22em] uppercase text-white">
            Atelier <span className="text-[#da291c]">Rosso</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[12px] tracking-[0.2em] uppercase text-white/70">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-white transition-colors">
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-white border border-white/15 hover:border-[#da291c] hover:text-[#da291c] px-4 py-2.5 transition-colors"
        >
          Start a Project
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
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#0a0a0a]">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Atelier Rosso — cinematic crimson supercar fender"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
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
          <span className="w-10 h-px bg-[#da291c]" />
          Independent Creative Studio · Est. 2014
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white text-[14vw] sm:text-[12vw] lg:text-[9.5vw] leading-[0.88] tracking-[-0.03em] uppercase max-w-[12ch]"
        >
          Brands <br />
          built at <span className="italic text-[#da291c]">speed</span>.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 max-w-5xl"
        >
          <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-md">
            We design identities, films and digital experiences for marques that refuse the
            average. Cinematic craft. Engineered precision.
          </p>
          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-[12px] tracking-[0.28em] uppercase text-white border-b border-white/30 pb-2 hover:text-[#da291c] hover:border-[#da291c] transition-colors w-fit"
          >
            Selected Work
            <span className="inline-block group-hover:translate-x-1 transition-transform">↓</span>
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 right-6 lg:right-10 z-10 text-[10px] tracking-[0.3em] uppercase text-white/40 hidden md:block">
        Reel 2026 ↘
      </div>
    </section>
  )
}

function Reel() {
  return (
    <section id="reel" className="relative bg-[#0a0a0a] py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#da291c] mb-4">01 — Reel</div>
            <h2 className="font-display text-white text-5xl lg:text-7xl tracking-[-0.02em] uppercase leading-[0.95]">
              The 2026 <br />
              <span className="italic">showreel</span>
            </h2>
          </div>
          <div className="hidden md:block text-[11px] tracking-[0.28em] uppercase text-white/40">
            02:14 · Dir. M. Rosso
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative aspect-[16/9] w-full overflow-hidden bg-[#141414] border border-white/5"
        >
          <img
            src={heroImg}
            alt="Showreel still frame"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1200ms] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <button
            type="button"
            aria-label="Play showreel"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute w-28 h-28 rounded-full border border-white/30 group-hover:border-[#da291c] group-hover:scale-110 transition-all duration-700" />
              <span className="absolute w-28 h-28 rounded-full border border-[#da291c]/0 group-hover:border-[#da291c]/40 group-hover:scale-150 transition-all duration-1000" />
              <span className="relative w-16 h-16 rounded-full bg-[#da291c] flex items-center justify-center text-white text-xs tracking-[0.3em] uppercase shadow-[0_0_40px_#da291c]">
                Play
              </span>
            </span>
          </button>
          <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[10px] tracking-[0.28em] uppercase text-white/70">
            <span>Atelier Rosso · Reel</span>
            <span>MMXXVI</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const WORKS = [
  { title: 'Maranello GT', client: 'Scuderia Veloce', year: '2026', tag: 'Brand · Film', img: work1, span: 'lg:col-span-7' },
  { title: 'Notte Bianca', client: 'Casa Bianchi', year: '2025', tag: 'Identity', img: work2, span: 'lg:col-span-5' },
  { title: 'Vapor Editions', client: 'Vapor Studio', year: '2025', tag: 'Digital · Editorial', img: work3, span: 'lg:col-span-5' },
  { title: 'Onda Rossa', client: 'Aperitivo Co.', year: '2024', tag: 'Campaign', img: work4, span: 'lg:col-span-7' },
]

function SelectedWork() {
  return (
    <section id="work" className="relative bg-[#0a0a0a] py-24 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#da291c] mb-4">02 — Selected Work</div>
            <h2 className="font-display text-white text-5xl lg:text-7xl tracking-[-0.02em] uppercase leading-[0.95]">
              Recent <br />
              <span className="italic">obsessions</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-[12px] tracking-[0.28em] uppercase text-white/60 hover:text-[#da291c] border-b border-white/20 hover:border-[#da291c] pb-2 w-fit transition-colors"
          >
            Full Archive →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {WORKS.map((w, i) => (
            <motion.a
              key={w.title}
              href="#contact"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative block ${w.span} overflow-hidden bg-[#141414] border border-white/5`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={w.img}
                  alt={`${w.title} — ${w.client}`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#da291c] mb-2">{w.tag}</div>
                  <h3 className="font-display text-white text-2xl lg:text-3xl tracking-[-0.01em] uppercase">
                    {w.title}
                  </h3>
                  <p className="text-white/60 text-xs tracking-[0.22em] uppercase mt-2">
                    {w.client} · {w.year}
                  </p>
                </div>
                <span className="text-white/70 group-hover:text-[#da291c] group-hover:translate-x-1 transition-all text-2xl">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

const CAPS = [
  { n: '01', t: 'Brand Identity', d: 'Naming, marks, type systems and editorial guidelines built to outlast trend cycles.' },
  { n: '02', t: 'Film & Motion', d: 'Direction, production and post for cinematic brand films and launch campaigns.' },
  { n: '03', t: 'Digital Craft', d: 'Sites and product surfaces engineered with the same care as a coachbuilt body panel.' },
  { n: '04', t: 'Art Direction', d: 'Photography, set design and editorial systems for seasonal launches and lookbooks.' },
]

function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-[#0a0a0a] py-24 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#da291c] mb-4">03 — Capabilities</div>
            <h2 className="font-display text-white text-5xl lg:text-7xl tracking-[-0.02em] uppercase leading-[0.95]">
              A studio, <br />
              not a <span className="italic">vendor</span>.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-white/70 text-lg leading-relaxed self-end">
            We work in small, senior teams — directors, designers, engineers — embedded with your
            brand from first sketch to final cut. Every output is signed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {CAPS.map((c) => (
            <div
              key={c.n}
              className="group relative p-8 lg:p-10 border-b border-white/10 md:border-r last:md:border-r-0 lg:[&:nth-child(2)]:border-r [&:hover]:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-baseline justify-between mb-10">
                <span className="font-display text-white/30 text-xs tracking-[0.3em]">{c.n}</span>
                <span className="w-8 h-px bg-[#da291c] group-hover:w-16 transition-all duration-500" />
              </div>
              <h3 className="font-display text-white text-2xl lg:text-3xl uppercase tracking-[-0.01em] mb-4">
                {c.t}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CLIENTS = [
  'Scuderia Veloce', 'Casa Bianchi', 'Vapor Studio', 'Aperitivo Co.',
  'Maranello GT', 'Notte Bianca', 'Officina Nera', 'Rosso Editions',
  'Cinema Italia', 'Galleria 14',
]

function Clients() {
  return (
    <section id="clients" className="relative bg-[#0a0a0a] py-24 lg:py-32 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 mb-14">
        <div className="text-[11px] tracking-[0.3em] uppercase text-[#da291c] mb-4">04 — Clients</div>
        <h2 className="font-display text-white text-4xl lg:text-6xl tracking-[-0.02em] uppercase leading-[0.95] max-w-3xl">
          Trusted by marques that <span className="italic text-[#da291c]">obsess</span> over the detail.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            className="flex shrink-0 gap-16 pr-16"
          >
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
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

function Contact() {
  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-28 lg:py-44 border-t border-white/5 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#da291c]/15 blur-[160px]"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="text-[11px] tracking-[0.3em] uppercase text-[#da291c] mb-6">05 — Contact</div>
        <h2 className="font-display text-white text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-[0.88] tracking-[-0.03em] uppercase max-w-[14ch]">
          Let's make <br /> something <span className="italic text-[#da291c]">loud</span>.
        </h2>

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-10">
            <a
              href="mailto:studio@atelierrosso.com"
              className="group inline-flex items-center gap-4 text-white text-2xl lg:text-3xl font-display tracking-[-0.01em] border-b border-white/20 hover:border-[#da291c] pb-3 transition-colors"
            >
              studio@atelierrosso.com
              <span className="text-[#da291c] group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Studio</div>
                <p className="text-white/80 leading-relaxed">
                  Via Emilia 14<br />
                  Modena, Italy
                </p>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Outpost</div>
                <p className="text-white/80 leading-relaxed">
                  Rua Augusta 220<br />
                  São Paulo, BR
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = 'mailto:studio@atelierrosso.com'
            }}
            className="lg:col-span-6 lg:col-start-7 space-y-6"
          >
            {[
              { id: 'name', label: 'Name', type: 'text' },
              { id: 'email', label: 'Email', type: 'email' },
              { id: 'brand', label: 'Brand', type: 'text' },
            ].map((f) => (
              <div key={f.id} className="group">
                <label
                  htmlFor={f.id}
                  className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2 group-focus-within:text-[#da291c] transition-colors"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="w-full bg-transparent border-b border-white/15 focus:border-[#da291c] outline-none text-white text-lg py-3 transition-colors"
                />
              </div>
            ))}
            <div className="group">
              <label
                htmlFor="brief"
                className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2 group-focus-within:text-[#da291c] transition-colors"
              >
                Brief
              </label>
              <textarea
                id="brief"
                rows={3}
                className="w-full bg-transparent border-b border-white/15 focus:border-[#da291c] outline-none text-white text-lg py-3 resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-3 bg-[#da291c] hover:bg-[#b51e14] text-white text-[12px] tracking-[0.3em] uppercase px-8 py-4 transition-colors shadow-[0_0_40px_rgba(218,41,28,0.35)]"
            >
              Send Brief
              <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-white/40">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#da291c]" />
          Atelier Rosso © {new Date().getFullYear()}
        </div>
        <div>Modena · São Paulo · Worldwide</div>
        <div>All work made by hand.</div>
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
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans antialiased selection:bg-[#da291c] selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Reel />
        <SelectedWork />
        <Capabilities />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
