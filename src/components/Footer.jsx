import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const footerLinks = {
  Services: ['Web Architecture', 'Cloud Infrastructure', 'AI Integration', 'Mobile Engineering'],
  Company: ['About Us', 'Careers', 'Blog', 'Case Studies'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neon-blue/8">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display font-extrabold text-2xl tracking-widest gradient-text-blue mb-4">
              NEXTGEN
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              We architect bespoke digital experiences that redefine industries and scale without limits.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-slate-700 flex items-center justify-center text-slate-400 hover:border-neon-blue hover:text-neon-blue transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h5 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-4">
                {group}
              </h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neon-blue/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs tracking-wide">
            © 2025 NEXTGEN Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-xs">
              Crafted with precision &amp; passion
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 border border-slate-700 flex items-center justify-center text-slate-400 hover:border-neon-blue hover:text-neon-blue transition-all duration-200 cursor-none"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
