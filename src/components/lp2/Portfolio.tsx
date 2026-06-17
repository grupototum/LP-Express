import { motion } from 'framer-motion'

const PROJECTS = [
  { name: 'Azure', segment: 'Beleza & Estética', url: '#', imageUrl: null as string | null, color: '#D4A373' },
  { name: 'WeMove', segment: 'Fitness & Personal', url: '#', imageUrl: null as string | null, color: '#4A7C59' },
  { name: 'Larmond', segment: 'Moda & Lifestyle', url: '#', imageUrl: null as string | null, color: '#7B5EA7' },
  { name: 'Heva', segment: 'Saúde & Bem-estar', url: '#', imageUrl: null as string | null, color: '#3A7DB5' },
]

function BrowserFrame({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <div className="rounded-sm overflow-hidden border border-[#141414]/10">
      <div className="bg-[#E5E3DF] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#141414]/20" />
        <div className="w-3 h-3 rounded-full bg-[#141414]/20" />
        <div className="w-3 h-3 rounded-full bg-[#141414]/20" />
        <div className="flex-1 ml-2 bg-[#141414]/10 rounded-sm h-4" />
      </div>
      <div
        className="h-48 flex items-center justify-center"
        style={{ background: project.color + '22' }}
      >
        <span className="font-playfair text-2xl" style={{ color: project.color }}>{project.name}</span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-playfair text-[clamp(26px,3.5vw,44px)] leading-[1.2] text-[#141414] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Páginas que já entregamos
        </motion.h2>

        <motion.p
          className="font-dm-sans text-[17px] leading-relaxed text-[#141414]/70 max-w-xl mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Antes de qualquer compromisso, você já pode ver o que a gente entrega. Projetos reais. Clique em qualquer um pra ver como transformamos reputação em percepção.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-sm">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.name} className="w-full h-56 object-cover" />
                ) : (
                  <BrowserFrame project={project} />
                )}
                <div className="absolute inset-0 bg-[#3A4A3F]/0 group-hover:bg-[#3A4A3F]/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="font-dm-sans text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver página →
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-playfair text-lg text-[#141414]">{project.name}</p>
                <p className="font-dm-sans text-sm text-[#141414]/55">{project.segment}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
