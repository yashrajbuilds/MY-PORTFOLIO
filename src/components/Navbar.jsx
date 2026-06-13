import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            scrolled
              ? 'bg-dark/90 backdrop-blur-xl border-b border-white/[0.04]'
              : 'bg-transparent'
          }`}
        />

        <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center font-display font-bold text-sm text-white">
              Y
            </span>
            <span className="font-display font-semibold text-sm text-white/80 group-hover:text-white transition-colors hidden sm:block">
              Yashraj
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link ${active === link.href.replace('#', '') ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:block btn-primary text-sm py-2 px-4"
            >
              Hire Me
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 w-72 z-50 bg-dark/95 backdrop-blur-xl border-l border-white/[0.06] flex flex-col p-8 pt-20"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-white/60 hover:text-white"
              aria-label="Close menu"
            >
              <HiX size={22} />
            </button>

            <ul className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 hover:text-white font-medium text-base py-2 transition-colors block w-full text-left"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary w-full text-center"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
