import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const features = [
  {
    id: 0,
    tag: 'Startup to Enterprise',
    title: 'Scales With You',
    description:
      'Whether you\'re a 3-person startup or a 3,000-person enterprise, our architecture grows with your ambition. We design systems that never need to be rebuilt from scratch.',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.18)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="20" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
        <circle cx="24" cy="24" r="12" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="24" cy="24" r="5" fill="#3b82f6"/>
        <circle cx="24" cy="4" r="3" fill="#3b82f6" opacity="0.7"/>
        <circle cx="44" cy="24" r="3" fill="#3b82f6" opacity="0.5"/>
        <circle cx="24" cy="44" r="3" fill="#3b82f6" opacity="0.3"/>
        <circle cx="4" cy="24" r="3" fill="#3b82f6" opacity="0.2"/>
      </svg>
    ),
    visual: <ScaleVisual />,
  },
  {
    id: 1,
    tag: 'Cross-Industry',
    title: 'Built for Any Domain',
    description:
      'From fintech to healthcare, e-commerce to deep tech — our team has shipped in every vertical. Domain expertise isn\'t assumed, it\'s engineered into every line.',
    accentColor: '#818cf8',
    glowColor: 'rgba(129,140,248,0.18)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="4" y="4" width="18" height="18" rx="3" stroke="#818cf8" strokeWidth="1.5" opacity="0.5"/>
        <rect x="26" y="4" width="18" height="18" rx="3" stroke="#818cf8" strokeWidth="1.5" opacity="0.7"/>
        <rect x="4" y="26" width="18" height="18" rx="3" stroke="#818cf8" strokeWidth="1.5" opacity="0.7"/>
        <rect x="26" y="26" width="18" height="18" rx="3" fill="#818cf8" fillOpacity="0.15" stroke="#818cf8" strokeWidth="1.5"/>
        <path d="M30 35l4 4 8-8" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    visual: <DomainVisual />,
  },
  {
    id: 2,
    tag: 'Zero Lock-In',
    title: 'Tech Stack Agnostic',
    description:
      'React, Vue, Angular, Next.js, Python, Go, Rust — we speak every language. No vendor lock-in, no dogma. Just the right tool chosen with surgical precision for your problem.',
    accentColor: '#34d399',
    glowColor: 'rgba(52,211,153,0.15)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <polyline points="8,36 20,20 30,28 40,12" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="36" r="3" fill="#34d399" opacity="0.6"/>
        <circle cx="20" cy="20" r="3" fill="#34d399" opacity="0.7"/>
        <circle cx="30" cy="28" r="3" fill="#34d399" opacity="0.8"/>
        <circle cx="40" cy="12" r="3" fill="#34d399"/>
        <line x1="8" y1="42" x2="40" y2="42" stroke="#34d399" strokeWidth="1" opacity="0.2"/>
      </svg>
    ),
    visual: <StackVisual />,
  },
  {
    id: 3,
    tag: 'Continuous Delivery',
    title: 'Ship Fast, Stay Solid',
    description:
      'CI/CD pipelines, automated testing, and blue-green deployments mean your team ships daily without fear. Speed and stability aren\'t opposites — they\'re our baseline.',
    accentColor: '#fb923c',
    glowColor: 'rgba(251,146,60,0.15)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 4l5 10h11l-9 7 3 11-10-7-10 7 3-11-9-7h11z" stroke="#fb923c" strokeWidth="1.5" strokeLinejoin="round" opacity="0.8"/>
        <circle cx="24" cy="24" r="6" fill="#fb923c" fillOpacity="0.2" stroke="#fb923c" strokeWidth="1.5"/>
        <path d="M24 18v6l4 4" stroke="#fb923c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    visual: <DeliveryVisual />,
  },
  {
    id: 4,
    tag: 'AI-Native',
    title: 'Intelligence Out of the Box',
    description:
      'Every product we touch gets AI superpowers — intelligent search, predictive analytics, LLM-powered workflows, and recommendation engines that feel like magic.',
    accentColor: '#f472b6',
    glowColor: 'rgba(244,114,182,0.15)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="8" stroke="#f472b6" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="3" fill="#f472b6"/>
        <line x1="24" y1="4" x2="24" y2="12" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="36" x2="24" y2="44" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="4" y1="24" x2="12" y2="24" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="36" y1="24" x2="44" y2="24" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
        <line x1="7.8" y1="7.8" x2="13.5" y2="13.5" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="34.5" y1="34.5" x2="40.2" y2="40.2" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
    visual: <AIVisual />,
  },
]

// ── Visual mockups per card ───────────────────────────────────────────
function ScaleVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full max-w-[240px] space-y-3">
        {[
          { label: 'Startup', w: '35%', color: '#3b82f6' },
          { label: 'Scale-up', w: '62%', color: '#3b82f6' },
          { label: 'Enterprise', w: '90%', color: '#3b82f6' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="text-slate-500 text-xs w-16 flex-shrink-0 font-mono">{item.label}</span>
            <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: item.w }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${item.color}66, ${item.color})` }}
              />
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 flex items-center gap-2 justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-blue-400 text-xs font-mono">Scaling in progress...</span>
        </motion.div>
      </div>
    </div>
  )
}

function DomainVisual() {
  const domains = ['Fintech', 'HealthTech', 'E-Commerce', 'SaaS', 'EdTech', 'AI/ML']
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="flex flex-wrap gap-2 justify-center max-w-[240px]">
        {domains.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4, type: 'spring', stiffness: 200 }}
            className="px-3 py-1.5 text-xs font-medium border"
            style={{
              borderColor: 'rgba(129,140,248,0.3)',
              background: i % 2 === 0 ? 'rgba(129,140,248,0.08)' : 'rgba(129,140,248,0.04)',
              color: '#818cf8',
            }}
          >
            {d}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="px-3 py-1.5 text-xs font-medium border border-dashed"
          style={{ borderColor: 'rgba(129,140,248,0.2)', color: 'rgba(129,140,248,0.4)' }}
        >
          + Your Industry
        </motion.div>
      </div>
    </div>
  )
}

function StackVisual() {
  const techs = [
    { name: 'React', color: '#61dafb' },
    { name: 'Next.js', color: '#fff' },
    { name: 'Python', color: '#ffd43b' },
    { name: 'Go', color: '#00acd7' },
    { name: 'Rust', color: '#f74c00' },
    { name: 'AWS', color: '#ff9900' },
  ]
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="grid grid-cols-3 gap-3">
        {techs.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.09 }}
            className="flex flex-col items-center justify-center gap-1 p-2 border border-slate-700/60 bg-slate-800/40"
            style={{ minWidth: 60 }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />
            <span className="text-[10px] font-mono" style={{ color: t.color + 'cc' }}>{t.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DeliveryVisual() {
  const steps = ['Build', 'Test', 'Stage', 'Deploy']
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full max-w-[240px]">
        <div className="flex items-center justify-between mb-6">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-1.5 relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 300 }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: i < 3 ? 'rgba(251,146,60,0.2)' : 'rgba(251,146,60,0.8)',
                  border: '1px solid rgba(251,146,60,0.5)',
                  color: '#fb923c',
                }}
              >
                {i < 3 ? '✓' : '▶'}
              </motion.div>
              <span className="text-[10px] text-slate-500 font-mono">{s}</span>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: i * 0.15 + 0.1, duration: 0.4 }}
                  className="absolute top-4 left-8 h-px origin-left"
                  style={{ width: 'calc(100% + 8px)', background: 'rgba(251,146,60,0.3)' }}
                />
              )}
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center font-mono text-xs"
          style={{ color: '#34d399' }}
        >
          ✓ Deployed in 2m 14s — zero downtime
        </motion.div>
      </div>
    </div>
  )
}

function AIVisual() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 900)
    return () => clearInterval(id)
  }, [])
  const lines = [
    'Analyzing user behavior...',
    'Running inference pipeline...',
    'Generating recommendations...',
    'Optimizing model weights...',
  ]
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full max-w-[240px] space-y-2">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: tick > i ? 1 : 0.2 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: tick > i ? '#f472b6' : '#334155' }}
            />
            <span className="font-mono text-[11px]" style={{ color: tick > i ? '#f472b6cc' : '#334155' }}>
              {line}
            </span>
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="font-mono text-[11px] pt-1"
          style={{ color: '#f472b6' }}
        >
          █ AI model ready
        </motion.div>
      </div>
    </div>
  )
}

// ── Progress dot ──────────────────────────────────────────────────────
function ProgressDot({ active, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center w-5 h-5 cursor-none group"
    >
      <span
        className="absolute inset-0 rounded-full transition-all duration-300 scale-0 group-hover:scale-100"
        style={{ background: color + '22' }}
      />
      <span
        className="rounded-full transition-all duration-300"
        style={{
          width: active ? 10 : 6,
          height: active ? 10 : 6,
          background: active ? color : '#334155',
          boxShadow: active ? `0 0 10px ${color}` : 'none',
        }}
      />
    </button>
  )
}

// ── Feature card ──────────────────────────────────────────────────────
function FeatureCard({ feature, isActive, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
      className="relative border overflow-hidden"
      style={{
        borderColor: isActive ? feature.accentColor + '40' : 'rgba(59,130,246,0.1)',
        background: isActive
          ? `linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.8) 100%)`
          : 'rgba(15,23,42,0.5)',
        boxShadow: isActive ? `0 0 60px ${feature.glowColor}, 0 20px 60px rgba(0,0,0,0.4)` : 'none',
        transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${feature.accentColor}, transparent)`,
          opacity: isActive ? 1 : 0,
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${feature.accentColor}, transparent 70%)`,
        }}
      />

      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left: text */}
        <div className="flex-1 min-w-0">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-widest uppercase px-2.5 py-1 mb-4 border"
            style={{
              color: feature.accentColor,
              borderColor: feature.accentColor + '40',
              background: feature.accentColor + '12',
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: feature.accentColor }}
            />
            {feature.tag}
          </div>

          {/* Icon + title row */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-10 h-10 flex-shrink-0 mt-0.5"
            >
              {feature.icon}
            </div>
            <h3
              className="font-display font-extrabold text-white leading-snug"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)' }}
            >
              {feature.title}
            </h3>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
            {feature.description}
          </p>

          <button
            className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
            style={{ color: feature.accentColor }}
          >
            Learn More
            <motion.span
              animate={{ x: isActive ? [0, 4, 0] : 0 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </button>
        </div>

        {/* Right: visual panel */}
        <div
          className="w-full md:w-52 lg:w-64 h-44 md:h-auto flex-shrink-0 border overflow-hidden"
          style={{
            borderColor: feature.accentColor + '20',
            background: `rgba(2,6,23,0.7)`,
            minHeight: 160,
          }}
        >
          {/* Panel header */}
          <div
            className="flex items-center gap-1.5 px-3 py-2 border-b"
            style={{ borderColor: feature.accentColor + '18' }}
          >
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full" style={{ background: feature.accentColor + '80' }} />
            <span className="ml-2 font-mono text-[10px] text-slate-600">live.preview</span>
          </div>
          <div className="h-[calc(100%-28px)]">
            {feature.visual}
          </div>
        </div>
      </div>

      {/* Number watermark */}
      <div
        className="absolute bottom-3 right-5 font-display font-extrabold text-7xl leading-none pointer-events-none select-none"
        style={{ color: feature.accentColor + '06' }}
      >
        0{index + 1}
      </div>
    </motion.div>
  )
}

// ── Main Adaptable section ────────────────────────────────────────────
export default function Adaptable() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const observers = features.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i)
        },
        { threshold: 0.5, rootMargin: '-10% 0px -40% 0px' }
      )
      if (cardRefs.current[i]) observer.observe(cardRefs.current[i])
      return observer
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToCard = (i) => {
    cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section
      id="adaptable"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-36"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label">Why Choose NEXTGEN</span>
          <h2
            className="font-display font-extrabold text-white leading-[1.02] mt-1 mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            Endlessly <span className="gradient-text-blue">Adaptable.</span>
            <br />Infinitely Capable.
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed">
            Every client is unique. Our approach, architecture, and delivery model flex to meet your
            exact needs — without compromise.
          </p>
        </motion.div>

        {/* Sticky layout wrapper */}
        <div className="flex gap-8 lg:gap-14">

          {/* Sticky left panel — desktop only */}
          <div className="hidden lg:flex flex-col items-center pt-2 w-10 flex-shrink-0">
            <div className="sticky top-32 flex flex-col items-center gap-3">
              {/* Vertical line */}
              <div className="w-px bg-slate-800 relative" style={{ height: 260 }}>
                <motion.div
                  className="absolute top-0 left-0 w-full bg-neon-blue origin-top"
                  animate={{ height: `${((activeIndex + 1) / features.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
              {/* Dots */}
              {features.map((f, i) => (
                <ProgressDot
                  key={f.id}
                  active={i === activeIndex}
                  color={f.accentColor}
                  onClick={() => scrollToCard(i)}
                />
              ))}
              {/* Count */}
              <div className="mt-2 font-mono text-xs text-slate-600">
                {String(activeIndex + 1).padStart(2, '0')}/{features.length}
              </div>
            </div>
          </div>

          {/* Right: card stack */}
          <div className="flex-1 flex flex-col gap-5 md:gap-6 min-w-0">
            {features.map((feature, i) => (
              <div key={feature.id} ref={(el) => (cardRefs.current[i] = el)}>
                <FeatureCard
                  feature={feature}
                  isActive={i === activeIndex}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile progress indicator */}
        <div className="flex lg:hidden justify-center gap-2 mt-8">
          {features.map((f, i) => (
            <ProgressDot
              key={f.id}
              active={i === activeIndex}
              color={f.accentColor}
              onClick={() => scrollToCard(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
