import { motion } from 'framer-motion'

const lines = ['YASHRAJ', 'SINGH', 'RATHORE']

const containerVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: 'easeInOut', delay: 0.2 }
  }
}

const lineVariants = {
  initial: { y: 80, opacity: 0, skewY: 4 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    skewY: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3 + i * 0.18
    }
  }),
  exit: (i) => ({
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.06
    }
  })
}

const barVariants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }
  },
  exit: {
    scaleX: 0,
    transformOrigin: 'right',
    transition: { duration: 0.4, ease: 'easeIn' }
  }
}

const dotVariants = {
  animate: {
    opacity: [0, 1, 0],
    transition: { duration: 1, repeat: Infinity, repeatDelay: 0.2 }
  }
}

export default function Preloader() {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-primary opacity-40" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-primary opacity-40" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-primary opacity-40" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-primary opacity-40" />

      {/* Glow orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary opacity-[0.03] blur-[100px] pointer-events-none" />

      {/* Name lines */}
      <div className="relative overflow-hidden flex flex-col items-center">
        {lines.map((line, i) => (
          <div key={line} className="overflow-hidden py-1">
            <motion.span
              custom={i}
              variants={lineVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="block font-display font-bold text-white tracking-[0.18em]"
              style={{
                fontSize: 'clamp(2.2rem, 7vw, 5rem)',
                lineHeight: 1.1
              }}
            >
              {line}
            </motion.span>
          </div>
        ))}

        {/* Accent dot */}
        <motion.div
          variants={dotVariants}
          animate="animate"
          className="mt-4 w-2 h-2 rounded-full bg-primary"
          style={{ boxShadow: '0 0 12px rgba(255,59,48,0.8)' }}
        />
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48">
        <div className="h-[1px] bg-white/10 overflow-hidden">
          <motion.div
            variants={barVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full bg-primary origin-left"
            style={{ boxShadow: '0 0 8px rgba(255,59,48,0.6)' }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
          className="mt-3 text-center font-mono text-xs text-white/30 tracking-widest"
        >
          LOADING PORTFOLIO
        </motion.p>
      </div>
    </motion.div>
  )
}
