import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolioProjects } from '@/data/lp-totum'

export function ExpressPortfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-6 bg-totum-gray overflow-hidden">
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />

      <div className="max-w-[950px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block text-accent text-xs font-light tracking-widest uppercase mb-4">Portfólio</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary mb-4 leading-tight">
            Páginas que já entregamos
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-xl">
            Antes de qualquer compromisso, você já pode ver o que a gente entrega. Projetos reais. Clique em qualquer um pra ver como transformamos reputação em percepção.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl gentle-animation cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted/30 relative">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 gentle-animation"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 gentle-animation flex items-end p-4">
                  <ArrowUpRight className="w-5 h-5 text-white ml-auto" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-primary font-normal text-sm">{project.name}</p>
                <p className="text-muted-foreground font-light text-xs mt-0.5">{project.segment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
