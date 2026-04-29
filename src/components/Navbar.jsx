import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Adaptable', href: '#adaptable' },
  { label: 'Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 transition-all duration-300 ${
          scrolled
            ? 'bg-space/95 border-b border-neon-blue/15 backdrop-blur-2xl'
            : 'bg-space/60 backdrop-blur-xl border-b border-neon-blue/5'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl md:text-2xl font-extrabold tracking-widest gradient-text-blue"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          NEXTGEN
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="relative text-slate-400 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors duration-200 group cursor-none"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-blue group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:block relative overflow-hidden border border-neon-blue text-neon-blue text-sm font-semibold tracking-widest uppercase px-6 py-2.5 group cursor-none transition-colors duration-300 hover:text-white"
        >
          <span className="relative z-10">Get a Quote</span>
          <span className="absolute inset-0 bg-neon-blue translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-space/98 backdrop-blur-2xl border-b border-neon-blue/10 flex flex-col px-6 py-6 gap-5"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link.href)}
                className="text-left text-slate-300 text-lg font-display font-bold tracking-wider uppercase hover:text-neon-blue transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => handleNav('#contact')}
              className="mt-2 bg-neon-blue text-white font-semibold tracking-widest uppercase text-sm py-3 px-6 hover:bg-blue-500 transition-colors"
            >
              Get a Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
