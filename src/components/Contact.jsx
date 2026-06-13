import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'

const contactInfo = [
  {
    icon: <HiMail size={18} />,
    label: 'Email',
    value: 'ys8358272@gmail.com',
    href: 'mailto:ys8358272@gmail.com',
    color: '#ff3b30',
  },
  {
    icon: <FaGithub size={16} />,
    label: 'GitHub',
    value: 'github.com/yashrajbuilds',
    href: 'https://github.com/yashrajbuilds',
    color: '#fff',
  },
  {
    icon: <FaLinkedin size={16} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yashraj-singh-rathore-frontend-dev',
    href: 'https://www.linkedin.com/in/yashraj-singh-rathore-frontend-dev/',
    color: '#0077b5',
  },
  {
    icon: <HiLocationMarker size={18} />,
    label: 'Location',
    value: 'Rajasthan, India',
    href: null,
    color: '#10b981',
  },
]

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email address'
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!form.message.trim()) errors.message = 'Message is required'
  else if (form.message.trim().length < 20) errors.message = 'Message too short (min 20 chars)'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSending(true)
    // Simulate send
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-primary blur-[130px] opacity-[0.04]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <span className="section-label">Let's Connect</span>
          <div className="mt-3 mb-4">
            <h2 className="section-title text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Get In Touch
            </h2>
          </div>
          <div className="red-line" />
          <p className="mt-4 text-white/45 text-sm max-w-lg leading-relaxed">
            Have a project idea, internship opportunity, or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="glass rounded-2xl border border-white/[0.06] p-7 h-full">
              <h3 className="font-display font-semibold text-white text-lg mb-6">Contact Information</h3>

              <div className="space-y-5 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}12`, border: `1px solid ${info.color}25`, color: info.color }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-white/35 text-xs font-mono mb-0.5">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-white/70 text-sm hover:text-white transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-white/70 text-sm">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mb-7" />

              {/* Name card */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-primary">
                  Y
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Yashraj Singh Rathore</div>
                  <div className="text-white/35 text-xs">B.Tech IT Student</div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                <a href="https://github.com/yashrajbuilds" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-lg glass border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all duration-200"
                  aria-label="GitHub">
                  <FaGithub size={16} />
                </a>
                <a href="https://www.linkedin.com/in/yashraj-singh-rathore-frontend-dev/" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-lg glass border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-[#0077b5] hover:border-[#0077b5]/30 transition-all duration-200"
                  aria-label="LinkedIn">
                  <FaLinkedin size={16} />
                </a>
                <a href="mailto:ys8358272@gmail.com"
                  className="w-9 h-9 rounded-lg glass border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-200"
                  aria-label="Email">
                  <HiMail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <div className="glass rounded-2xl border border-white/[0.06] p-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
                    <HiCheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/45 text-sm mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-sm py-2 px-5">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display font-semibold text-white text-lg mb-6">Send a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white/45 text-xs font-mono mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-input"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="mt-1 text-primary text-xs">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-white/45 text-xs font-mono mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="mt-1 text-primary text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-white/45 text-xs font-mono mb-1.5">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="form-input"
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && <p className="mt-1 text-primary text-xs">{errors.subject}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/45 text-xs font-mono mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className="form-input resize-none"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="mt-1 text-primary text-xs">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiMail size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
