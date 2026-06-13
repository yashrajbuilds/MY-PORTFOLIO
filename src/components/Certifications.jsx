import { motion } from 'framer-motion'
import { HiCheckCircle, HiBadgeCheck } from 'react-icons/hi'

const certificates = [
  {
    id: 1,
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    org: 'TATA Group (Forage)',
    icon: '📊',
    color: '#3b82f6',
    category: 'Data Analytics',
  },
  {
    id: 2,
    title: 'Negotiation Foundations',
    org: 'LinkedIn Learning',
    icon: '🤝',
    color: '#0077b5',
    category: 'Professional Skills',
  },
  {
    id: 3,
    title: 'Python & Django | The Complete Django Web Development Course',
    org: 'Udemy',
    icon: '🐍',
    color: '#f97316',
    category: 'Web Development',
  },
  {
    id: 4,
    title: 'Microsoft Excel – The Complete Excel Data Analysis Course',
    org: 'Udemy',
    icon: '📈',
    color: '#10b981',
    category: 'Data Analysis',
  },
  {
    id: 5,
    title: 'Diploma in Aviation, Airlines, Air Transportation & Airports',
    org: 'Udemy',
    icon: '✈️',
    color: '#ff3b30',
    category: 'Aviation',
  },
  {
    id: 6,
    title: 'Cultural Heritage & Traditions of India',
    org: 'Ministry of Defence & MyGov',
    icon: '🏛️',
    color: '#a855f7',
    category: 'Culture',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute right-0 top-20 w-96 h-96 rounded-full bg-primary blur-[140px] opacity-[0.04]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <span className="section-label">Professional Development</span>
          <div className="mt-3 mb-4">
            <h2 className="section-title text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Achievements & Certifications
            </h2>
          </div>
          <div className="red-line" />
          <p className="mt-4 text-white/45 text-sm max-w-lg leading-relaxed">
            Continuously expanding technical and professional knowledge through industry-recognized certifications.
          </p>
        </div>

        {/* Cert count badge */}
        <div data-aos="fade-up" className="mb-10">
          <div className="inline-flex items-center gap-2 glass rounded-full border border-white/[0.08] px-4 py-2">
            <HiBadgeCheck size={16} className="text-primary" />
            <span className="text-white/60 text-sm font-mono">{certificates.length} certificates earned</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
            >
              <div className="cert-card glass rounded-2xl border border-white/[0.06] p-5 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: `${cert.color}12`,
                      border: `1px solid ${cert.color}22`,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono">
                      <HiCheckCircle size={10} />
                      Completed
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-md text-xs font-mono"
                      style={{
                        background: `${cert.color}12`,
                        color: cert.color,
                        border: `1px solid ${cert.color}25`,
                      }}
                    >
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-sm font-semibold leading-snug mb-2 flex-1">
                  {cert.title}
                </h3>

                {/* Org */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/[0.05]">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: cert.color, boxShadow: `0 0 6px ${cert.color}80` }}
                  />
                  <span className="text-white/40 text-xs">{cert.org}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
