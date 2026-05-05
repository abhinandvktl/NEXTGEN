import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { projectsData } from '../data'

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="group relative border border-neon-blue/10 overflow-hidden cursor-none"
      style={{ background: 'rgba(15,23,42,0.5)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image placeholder */}
      <div className="relative h-52 md:h-60 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: project.gradient }}
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Grid lines on image */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          {project.imageSrc ? (
            <img
              src={project.imageSrc}
              alt={project.title}
              className="relative z-10 h-24 w-24 object-contain opacity-90"
            />
          ) : (
            <span className="text-6xl opacity-50 relative z-10">{project.imagePlaceholder}</span>
          )}
        </motion.div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: 'rgba(2,6,23,0.78)' }}
            >
              <div className="text-center px-4">
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-2 mb-1"
                  style={{ color: project.accentColor }}
                >
                  IT Solution
                </div>
                <div className="text-white font-display font-bold text-base">
                  {project.solution}
                </div>
              </div>
              <a
                href={project.liveLink}
                className="flex items-center gap-2 border border-white/30 text-white text-xs tracking-widest uppercase font-semibold px-5 py-2 hover:bg-white hover:text-space transition-colors duration-200"
              >
                View Project <ArrowUpRight size={14} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card body */}
      <motion.div
        className="p-5 md:p-6"
        animate={{ borderTopColor: hovered ? project.accentColor + '50' : 'transparent' }}
        style={{ borderTop: '1px solid transparent', transition: 'border-color 0.3s' }}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] font-semibold tracking-wider uppercase px-2 py-1 bg-neon-blue/10 border border-neon-blue/20 text-neon-blue"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

        {/* Hover reveal link */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.25 }}
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase"
          style={{ color: project.accentColor }}
        >
          {/* <ExternalLink size={12} /> Live Project */}
        </motion.div>
      </motion.div>

      {/* Bottom border on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        animate={{ width: hovered ? '100%' : '0%', backgroundColor: project.accentColor }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      />
    </motion.div>
  )
}

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative z-10 py-24 md:py-36 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
        >
          <div>
            <span className="section-label">Selected Work</span>
            <h2
              className="font-display font-extrabold text-white leading-[1.02]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              Projects That<br />Define Industries
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            A curated selection of our most impactful digital products.
          </p>
        </motion.div>

        {/* Responsive grid: 1 col → 2 col → 3 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="border border-slate-700 text-slate-400 font-medium text-sm tracking-wide px-10 py-4 cursor-none hover:border-neon-blue hover:text-neon-blue transition-all duration-300">
            View All Projects ↗
          </button>
        </motion.div>
      </div>
    </section>
  )
}
