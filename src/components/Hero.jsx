import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay } }
})

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          src="https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_25fps.mp4"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark/80" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 grid-bg opacity-20" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-primary blur-[120px] opacity-[0.06] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 w-60 h-60 rounded-full bg-primary blur-[100px] opacity-[0.04] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" style={{ boxShadow: '0 0 8px rgba(255,59,48,0.8)' }} />
              <span className="section-label">B.Tech Information Technology</span>
            </div>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              Yashraj Singh
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="font-display font-bold leading-tight"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              <span className="gradient-text">Rathore</span>
            </motion.h1>
          </div>

          {/* Animated roles */}
          <motion.div {...fadeUp(0.35)} className="mb-6 h-8 flex items-center">
            <span className="text-white/40 font-mono text-sm mr-2">{'>'}</span>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Python & Django Learner',
                2000,
                'Data Analytics Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono text-primary text-base font-medium"
            />
            <span className="ml-1 w-0.5 h-5 bg-primary animate-pulse inline-block" />
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.45)}
            className="text-white/55 text-base leading-relaxed max-w-xl mb-10"
            style={{ lineHeight: 1.75 }}
          >
            I build modern web experiences, data-driven solutions, and technology 
            projects that solve real-world problems.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-3 mb-14">
            <button onClick={scrollToProjects} className="btn-primary flex items-center gap-2">
              View Projects
              <HiArrowDown size={14} className="rotate-[-90deg]" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-outline flex items-center gap-2"
            >
              <HiDownload size={15} />
              Download Resume
            </a>
            <button onClick={scrollToContact} className="btn-outline">
              Contact Me
            </button>
          </motion.div>

          {/* Social + stats */}
          <motion.div {...fadeUp(0.65)} className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/yashrajbuilds"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all duration-200 border border-white/08"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/yashraj-singh-rathore-frontend-dev/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-primary transition-all duration-200 border border-white/08"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
            </div>

            <div className="w-px h-8 bg-white/10" />

            <div className="flex items-center gap-5">
              {[
                { num: '6+', label: 'Projects' },
                { num: '6+', label: 'Certificates' },
                { num: '3+', label: 'Technologies' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-white text-lg leading-none">{stat.num}</div>
                  <div className="text-white/35 text-xs mt-1 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <span className="section-label text-white/30" style={{ fontSize: '0.6rem' }}>SCROLL</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="scroll-dot w-1 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>

      {/* Side label */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/20" />
        <span className="font-mono text-white/20 text-[0.65rem] tracking-[0.2em] rotate-90 whitespace-nowrap">
          PORTFOLIO 2026
        </span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-white/20" />
      </div>
    </section>
  )
}
