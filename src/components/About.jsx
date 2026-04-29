import { motion } from 'framer-motion'
import { bentoData } from '../data'

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-36 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">Why NEXTGEN</span>
          <h2
            className="font-display font-extrabold text-white leading-[1.02]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            Built Different,<br />Engineered to Win
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

          {/* Featured card — spans 2 rows on md+ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:row-span-2 glass-card border-neon-blue/20 p-8 md:p-10 relative overflow-hidden group cursor-none"
            style={{ background: 'rgba(59,130,246,0.06)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />
            <div
              className="font-display font-extrabold gradient-text-blue mb-4 leading-none"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              10+
            </div>
            <h4 className="font-display font-bold text-white text-xl mb-3">
              Years of Combined Expertise
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Our engineers have shipped products for Fortune 500 companies, VC-backed startups, and
              groundbreaking non-profits. We don't just build — we obsess over every detail until
              it's perfect.
            </p>
            <button className="text-neon-blue text-sm font-semibold tracking-widest uppercase cursor-none hover:text-blue-300 transition-colors">
              → Meet the Team
            </button>
          </motion.div>

          {/* Card: 48h */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 md:p-7 relative overflow-hidden cursor-none hover-glow"
          >
            <div
              className="font-display font-extrabold gradient-text-blue mb-2 leading-none"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
            >
              48h
            </div>
            <h4 className="font-display font-bold text-white text-base mb-2">Rapid Prototyping</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              From idea to interactive prototype in under 48 hours. We move at startup speed.
            </p>
          </motion.div>

          {/* Card: Infinity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-6 md:p-7 relative overflow-hidden cursor-none hover-glow"
          >
            <div
              className="font-display font-extrabold gradient-text-blue mb-2 leading-none"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
            >
              ∞
            </div>
            <h4 className="font-display font-bold text-white text-base mb-2">Infinite Scale</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Architecture designed from day one to handle whatever growth comes your way.
            </p>
          </motion.div>

          {/* Card: Stack agnostic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-7 cursor-none hover-glow"
            style={{ background: 'rgba(59,130,246,0.04)', borderColor: 'rgba(59,130,246,0.15)' }}
          >
            <h4 className="font-display font-bold text-white text-base mb-2">
              Tech Stack Agnostic
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              React, Vue, Python, Go, Rust — we meet you where you are and pick the right tool for
              the right job.
            </p>
          </motion.div>

          {/* Card: Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass-card p-6 md:p-7 cursor-none hover-glow"
          >
            <h4 className="font-display font-bold text-white text-base mb-2">
              Post-Launch Support
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              24/7 monitoring, SLA guarantees, and dedicated engineering bandwidth long after
              go-live.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
