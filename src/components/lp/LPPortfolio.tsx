import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import { portfolioProjects } from '@/data/lp-totum'

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export default function LPPortfolio() {
  const [active, setActive] = useState<(typeof portfolioProjects)[0] | null>(null)

  return (
    <>
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="w-8 h-px mb-8" style={{ background: 'var(--rosso)' }} />
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              className="text-white mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 300 }}
            >
              Páginas que já entregamos
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base mb-14" style={{ color: 'var(--muted-foreground)', fontWeight: 300 }}>
              Clique em qualquer projeto para ver em detalhe.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {portfolioProjects.map((project, i) => (
              <Reveal key={project.name} delay={0.12 + i * 0.08}>
                <button
                  onClick={() => setActive(project)}
                  className="group relative w-full text-left overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e]"
                  style={{
                    background: 'var(--card-bg)',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Browser chrome bar */}
                  <div
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                    <div
                      className="ml-3 flex-1 h-5 rounded-full flex items-center px-3"
                      style={{ background: 'rgba(255,255,255,0.05)', maxWidth: '60%' }}
                    >
                      <span className="text-[10px] truncate" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        totum.com.br/{project.name.toLowerCase()}
                      </span>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="relative overflow-hidden" style={{ paddingBottom: '62%' }}>
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: 'rgba(14,9,24,0.7)' }}
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="px-5 py-4">
                    <p className="text-white text-sm" style={{ fontWeight: 400 }}>{project.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{project.segment}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            style={{ background: 'rgba(14,9,24,0.92)', backdropFilter: 'blur(12px)' }}
            onClick={() => setActive(null)}
          >
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                boxShadow: '0 40px 120px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1)',
                maxHeight: '90vh',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chrome */}
              <div
                className="flex items-center gap-2 px-5 py-3"
                style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                <div
                  className="ml-4 flex-1 h-6 rounded-full flex items-center px-4"
                  style={{ background: 'rgba(255,255,255,0.06)', maxWidth: '50%' }}
                >
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    totum.com.br/{active.name.toLowerCase()}
                  </span>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="ml-auto p-1 rounded-full transition-colors hover:bg-white/10"
                >
                  <X className="w-4 h-4 text-white/50" />
                </button>
              </div>

              {/* Image — scrollable */}
              <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 52px)' }}>
                <img
                  src={active.imageUrl}
                  alt={active.name}
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
