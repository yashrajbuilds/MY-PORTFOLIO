import { motion } from 'framer-motion'
import { HiAcademicCap, HiCode, HiChartBar, HiLightBulb } from 'react-icons/hi'

const traits = [
  { icon: <HiAcademicCap size={18} />, label: 'B.Tech IT Student', desc: 'Arya College of Engineering & IT' },
  { icon: <HiCode size={18} />, label: 'Frontend Developer', desc: 'React, Tailwind, JavaScript' },
  { icon: <HiChartBar size={18} />, label: 'Data Analytics', desc: 'Visualization & Business Insights' },
  { icon: <HiLightBulb size={18} />, label: 'Problem Solver', desc: 'Real-world project builder' },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute right-0 top-1/3 w-80 h-80 rounded-full bg-primary blur-[130px] opacity-[0.04]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div data-aos="fade-right" className="order-2 lg:order-1">
            <div className="relative">
              {/* Profile image placeholder */}
              <div className="relative mx-auto lg:mx-0 w-72 h-72 sm:w-80 sm:h-80">
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-3xl border border-primary/20"
                  style={{ transform: 'rotate(6deg)' }}
                />
                {/* Card */}
                <div className="relative glass rounded-3xl border border-white/[0.07] overflow-hidden w-full h-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(255,59,48,0.06) 0%, rgba(255,255,255,0.02) 100%)' }}>
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Avatar */}
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 flex items-center justify-center mb-4">
                      <span className="font-display font-bold text-4xl text-primary/80">Y</span>
                    </div>
                    <span className="font-display font-semibold text-white text-lg">Yashraj</span>
                    <span className="text-white/40 text-xs font-mono mt-1">IT Student & Developer</span>
                    
                    {/* Status badge */}
                    <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
                      <span className="text-white/60 text-xs">Open to Opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Floating accent card */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-5 -right-5 glass rounded-xl border border-white/[0.08] p-3 flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <HiCode size={16} />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">6+ Projects</div>
                    <div className="text-white/40 text-xs">Built from scratch</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-5 -left-5 glass rounded-xl border border-white/[0.08] p-3 flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-base">
                    🎓
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">B.Tech IT</div>
                    <div className="text-white/40 text-xs">Currently Pursuing</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div data-aos="fade-left" className="order-1 lg:order-2">
            <span className="section-label">Who I Am</span>
            <h2 className="section-title text-white mt-3 mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              About Me
            </h2>
            <div className="red-line mb-6" />

            <p className="text-white/55 text-sm leading-relaxed mb-4">
              I am a B.Tech Information Technology student at <span className="text-white/80 font-medium">Arya College of Engineering & IT</span> with a passion for web development, data analytics, and problem-solving.
            </p>

            <p className="text-white/55 text-sm leading-relaxed mb-8">
              I enjoy building real-world projects, learning modern technologies, and continuously improving my technical skills through practical experience and certifications. My goal is to create technology that makes a meaningful difference.
            </p>

            {/* Trait cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="glass rounded-xl border border-white/[0.06] p-4 hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg glass-red flex items-center justify-center text-primary flex-shrink-0">
                      {trait.icon}
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold mb-0.5">{trait.label}</div>
                      <div className="text-white/40 text-xs">{trait.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                See My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
