import { motion } from 'framer-motion'
import { HiDownload, HiMail } from 'react-icons/hi'

export default function ResumeSection() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-primary blur-[120px] opacity-[0.04]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass rounded-3xl border border-white/[0.07] p-10 sm:p-14 text-center overflow-hidden"
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-20 rounded-3xl" />
          
          {/* Corner accents */}
          <div className="absolute top-5 left-5 w-10 h-10 border-l border-t border-primary/25" />
          <div className="absolute top-5 right-5 w-10 h-10 border-r border-t border-primary/25" />
          <div className="absolute bottom-5 left-5 w-10 h-10 border-l border-b border-primary/25" />
          <div className="absolute bottom-5 right-5 w-10 h-10 border-r border-b border-primary/25" />

          <div className="relative z-10">
            {/* Label */}
            <span className="section-label">My Resume</span>

            {/* Title */}
            <h2 className="font-display font-bold text-white mt-4 mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Interested in My Work?
            </h2>

            <p className="text-white/50 text-sm max-w-lg mx-auto leading-relaxed mb-10">
              Download my resume and explore my projects, certifications, and technical expertise. 
              Open to internship and entry-level opportunities.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
              {[
                { value: '6+', label: 'Projects Built' },
                { value: '6', label: 'Certifications' },
                { value: '5+', label: 'Technologies' },
                { value: '100%', label: 'Commitment' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-2xl text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/35 text-xs font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-white/10 mx-auto mb-10" />

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="btn-primary flex items-center gap-2 text-base px-8 py-3.5"
              >
                <HiDownload size={18} />
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline flex items-center gap-2 text-base px-8 py-3.5"
              >
                <HiMail size={16} />
                Hire Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
