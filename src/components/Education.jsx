import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'

const educationData = [
  {
    id: 1,
    institution: 'Arya College of Engineering & IT',
    degree: 'B.Tech Information Technology',
    year: '2022 – Present',
    status: 'Currently Pursuing',
    statusColor: 'bg-green-500/10 border-green-500/20 text-green-400',
    detail: 'Focused on software engineering, web development, and data technologies.',
    icon: '🏫',
    current: true,
  },
  {
    id: 2,
    institution: 'RBSE – Class 12',
    degree: 'Higher Secondary Education',
    year: '2022',
    status: '60%',
    statusColor: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    detail: 'Completed higher secondary with Science stream.',
    icon: '📚',
    current: false,
  },
  {
    id: 3,
    institution: 'RBSE – Class 10',
    degree: 'Secondary Education',
    year: '2020',
    status: '81%',
    statusColor: 'bg-primary/10 border-primary/20 text-primary',
    detail: 'Strong academic performance in secondary board examinations.',
    icon: '🎓',
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute left-0 top-1/2 w-80 h-80 rounded-full bg-blue-600 blur-[140px] opacity-[0.03]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <span className="section-label">Academic Background</span>
          <div className="mt-3 mb-4">
            <h2 className="section-title text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Education
            </h2>
          </div>
          <div className="red-line" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent" />

          {educationData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div
                className={`timeline-dot absolute left-3.5 -translate-x-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 ${
                  item.current
                    ? 'border-primary bg-primary/20'
                    : 'border-white/20 bg-dark'
                }`}
                style={{ top: '4px' }}
              >
                {item.current && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>

              {/* Card */}
              <div className="glass rounded-2xl border border-white/[0.06] p-6 hover:border-white/[0.1] transition-colors duration-300 group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-base leading-tight">
                        {item.institution}
                      </h3>
                      <p className="text-white/45 text-sm mt-1">{item.degree}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-end gap-2">
                    <span className={`px-2.5 py-1 rounded-full border text-xs font-mono ${item.statusColor}`}>
                      {item.status}
                    </span>
                    <span className="text-white/25 text-xs font-mono">{item.year}</span>
                  </div>
                </div>
                <p className="text-white/40 text-sm pl-13">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
