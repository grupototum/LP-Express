import { versaoB } from '@/data/lp-totum'
import LPNav from '@/components/lp/LPNav'
import LPHero from '@/components/lp/LPHero'
import LPTextSection from '@/components/lp/LPTextSection'
import LPDifferential from '@/components/lp/LPDifferential'
import LPProcess from '@/components/lp/LPProcess'
import LPPortfolio from '@/components/lp/LPPortfolio'
import LPSocialProof from '@/components/lp/LPSocialProof'
import LPFinalCTA from '@/components/lp/LPFinalCTA'
import LPFooter from '@/components/lp/LPFooter'

export default function LPVersaoB() {
  const c = versaoB
  return (
    <div style={{ background: 'var(--surface)', minHeight: '100vh' }}>
      <LPNav ctaPrimary={c.hero.ctaPrimary} />

      <main className="pt-16">
        {/* 1 — Hero */}
        <LPHero content={c.hero} />

        {/* 2 — Agitação do problema */}
        <LPTextSection headline={c.section2.headline} body={c.section2.body} accent />

        {/* 3 — Costura Linha A (mais que site) */}
        <LPTextSection headline={c.section3.headline} body={c.section3.body} dark />

        {/* 4 — Diferencial: prévia pronta */}
        <LPDifferential content={c.section4} />

        {/* 5 — Como identificamos */}
        <LPProcess headline={c.section5.headline} />

        {/* 6 — Portfólio */}
        <LPPortfolio />

        {/* 7 — Prova social + objeções */}
        <LPSocialProof section6={c.section6} objections={c.objections} />

        {/* 8 — Oferta + CTA final */}
        <LPFinalCTA content={c.finalCta} />
      </main>

      <LPFooter />
    </div>
  )
}
