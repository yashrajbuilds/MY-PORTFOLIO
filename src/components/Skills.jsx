import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⚡',
    color: '#ff3b30',
    skills: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript', level: 80 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'React', level: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: '🛠',
    color: '#3b82f6',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'Django', level: 55 },
    ],
  },
  {
    category: 'Tools',
    icon: '🔧',
    color: '#10b981',
    skills: [
      { name: 'Git & GitHub', level: 78 },
      { name: 'VS Code', level: 90 },
      { name: 'Microsoft Excel', level: 75 },
    ],
  },
  {
    category: 'Data Analytics',
    icon: '📊',
    color: '#a855f7',
    skills: [
      { name: 'Data Visualization', level: 65 },
      { name: 'Dashboard Design', level: 68 },
      { name: 'Business Insights', level: 62 },
    ],
  },
]

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white/70 text-sm font-medium">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: animate ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="h-full rounded-full skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
    </div>
  )
}

function SkillCard({ group, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div ref={ref} data-aos="fade-up" data-aos-delay={index * 80}>
      <div className="glass rounded-2xl border border-white/[0.06] p-6 h-full hover:border-white/[0.1] transition-colors duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
            style={{ background: `${group.color}15`, border: `1px solid ${group.color}25` }}
          >
            {group.icon}
          </div>
          <div>
            <h3 className="font-display font-semibold text-white text-sm">{group.category}</h3>
            <p className="text-white/30 text-xs font-mono">{group.skills.length} skills</p>
          </div>
        </div>

        <div>
          {group.skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={group.color}
              animate={inView}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const techBadges = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS',
  'Python', 'Django', 'Git', 'GitHub', 'VS Code',
  'Data Viz', 'Excel', 'Framer Motion', 'Responsive Design',
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-primary blur-[130px] opacity-[0.04]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <span className="section-label">Technical Proficiency</span>
          <div className="mt-3 mb-4">
            <h2 className="section-title text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Skills & Expertise
            </h2>
          </div>
          <div className="red-line" />
          <p className="mt-4 text-white/45 text-sm max-w-lg leading-relaxed">
            A growing technical toolkit across frontend development, backend technologies, and data analytics.
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>

        {/* Tech badge cloud */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="glass rounded-2xl border border-white/[0.06] p-8">
            <p className="section-label mb-5">All Technologies</p>
            <div className="flex flex-wrap gap-2.5">
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/60 text-xs font-mono hover:border-primary/30 hover:text-white/80 hover:bg-primary/[0.05] transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
