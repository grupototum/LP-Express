import { versaoC } from '@/data/lp-totum'
import LPNav from '@/components/lp/LPNav'
import LPHero from '@/components/lp/LPHero'
import LPTextSection from '@/components/lp/LPTextSection'
import LPDifferential from '@/components/lp/LPDifferential'
import LPProcess from '@/components/lp/LPProcess'
import LPPortfolio from '@/components/lp/LPPortfolio'
import LPSocialProof from '@/components/lp/LPSocialProof'
import LPFinalCTA from '@/components/lp/LPFinalCTA'
import LPFooter from '@/components/lp/LPFooter'

export default function LPVersaoC() {
  const c = versaoC
  return (
    <div style={{ background: 'var(--surface)', minHeight: '100vh' }}>
      <LPNav ctaPrimary={c.hero.ctaPrimary} />

      <main className="pt-16">
        {/* 1 — Hero */}
        <LPHero content={c.hero} />

        {/* 2 — Costura Linha B (má notícia) */}
        <LPTextSection headline={c.section2.headline} body={c.section2.body} accent />

        {/* 3 — O iceberg em palavras */}
        <LPTextSection headline={c.section3.headline} body={c.section3.body} dark />

        {/* 4 — Costura Linha A (mais que site) */}
        <LPDifferential content={c.section4} />

        {/* 5 — Como descobrimos */}
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
