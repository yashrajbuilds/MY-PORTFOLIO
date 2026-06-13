import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiArrowUp } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark border-t border-white/[0.05] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Main footer */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-white text-base">
                Y
              </div>
              <div>
                <div className="font-display font-semibold text-white text-sm leading-tight">Yashraj Singh Rathore</div>
                <div className="text-white/30 text-xs">B.Tech IT Student</div>
              </div>
            </div>

            <p className="text-white/40 text-xs leading-relaxed max-w-xs mb-5">
              Building modern web experiences, data-driven solutions, and technology projects that solve real-world problems.
            </p>

            <div className="flex gap-2.5">
              <a href="https://github.com/yashrajbuilds" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg glass border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="GitHub">
                <FaGithub size={14} />
              </a>
              <a href="https://www.linkedin.com/in/yashraj-singh-rathore-frontend-dev/" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg glass border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-[#0077b5] transition-all duration-200"
                aria-label="LinkedIn">
                <FaLinkedin size={14} />
              </a>
              <a href="mailto:ys8358272@gmail.com"
                className="w-8 h-8 rounded-lg glass border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-primary transition-all duration-200"
                aria-label="Email">
                <HiMail size={14} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/45 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:ys8358272@gmail.com"
                className="flex items-center gap-2.5 text-white/45 text-sm hover:text-white transition-colors group">
                <HiMail size={14} className="text-primary" />
                ys8358272@gmail.com
              </a>
              <div className="flex items-center gap-2.5">
                <span className="text-sm">📍</span>
                <span className="text-white/45 text-sm">Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"
                  style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
                <span className="text-white/40 text-sm">Open to Opportunities</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-xs py-2 px-4"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-mono">
            © 2026 Yashraj Singh Rathore. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-xs font-mono">
              Built with React & ❤️
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg glass border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <HiArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
