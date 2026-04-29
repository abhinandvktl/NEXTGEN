import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

const fields = [
  { id: 'name', label: 'Name', placeholder: 'Your full name', type: 'text', required: true },
  { id: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email', required: true },
  { id: 'project', label: 'Project', placeholder: 'What are you building?', type: 'text' },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative z-10 py-24 md:py-36 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: copy + trust */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-cyan-300/80 mb-4">
              Contact
            </div>
            <h2
              className="font-display font-extrabold text-slate-200/90 leading-[0.98] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.9rem)' }}
            >
              Let’s design and build
              <span className="block bg-gradient-to-r from-blue-200/85 via-cyan-200/80 to-blue-300/85 bg-clip-text text-transparent">
                something people love.
              </span>
            </h2>
            <p className="mt-5 text-slate-400/75 leading-relaxed max-w-md">
              Tell us what you’re working on. We’ll reply with the right next steps, a high-level plan, and a realistic
              timeline.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Email', value: 'hello@nextgen.io' },
                { label: 'Availability', value: 'Open for Projects' },
                { label: 'Response', value: '< 24 Hours' },
              ].map((item) => (
                <div key={item.label} className="glass-card py-4 px-4 text-center">
                  <div className="text-slate-300/80 text-xs tracking-widest uppercase mb-1">{item.label}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div
              className="relative overflow-hidden border border-white/10 rounded-2xl p-6 md:p-10"
              style={{ background: 'rgba(15,23,42,0.72)', backdropFilter: 'blur(18px)' }}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-cyan-500/10 blur-[70px]" />
                <div className="absolute -bottom-28 -left-28 w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[80px]" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between gap-4 mb-7">
                  <div>
                    <div className="text-white font-semibold tracking-tight">Project details</div>
                    <div className="text-slate-400 text-sm">A few inputs and we’ll get back quickly.</div>
                  </div>
                </div>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="py-14 text-center">
                    <CheckCircle2 className="mx-auto mb-4 text-cyan-300" size={44} />
                    <h3 className="font-display font-bold text-white text-2xl mb-2">Message sent</h3>
                    <p className="text-slate-400 text-sm">
                      We’ll reply within <span className="text-white/80">&lt; 24 hours</span>.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {fields.map((field) => (
                        <label
                          key={field.id}
                          className={`block ${field.id === 'project' ? 'md:col-span-2' : ''}`}
                        >
                          <span className="block text-xs tracking-widest uppercase text-slate-300/80 mb-2">
                            {field.label}{field.required ? ' *' : ''}
                          </span>
                          <input
                            name={field.id}
                            type={field.type}
                            value={form[field.id]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full rounded-xl border border-white/10 bg-space/60 px-4 py-3 text-white placeholder:text-slate-400/80 outline-none transition focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10"
                            style={{ cursor: 'none' }}
                          />
                        </label>
                      ))}
                    </div>

                    <label className="block">
                      <span className="block text-xs tracking-widest uppercase text-slate-300/80 mb-2">Message</span>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your goals, timeline, and any links..."
                        rows={6}
                        className="w-full rounded-xl border border-white/10 bg-space/60 px-4 py-3 text-white placeholder:text-slate-400/80 outline-none transition focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10 resize-none"
                        style={{ cursor: 'none' }}
                      />
                    </label>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 rounded-xl text-white font-semibold text-sm tracking-widest uppercase py-4 cursor-none relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
                    >
                      <Send size={16} />
                      Send message
                      <span className="absolute inset-0 bg-white/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                    </button>

                    <p className="text-center text-[0.75rem] text-slate-300/60 pt-1">
                      Typical response time: &lt; 24 hours
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
