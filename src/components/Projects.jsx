import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiStar } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'SkyPort',
    subtitle: 'Smart Airport Management System',
    description: 'A smart airport management platform designed to streamline passenger handling, airport operations, and analytics. Features comprehensive dashboards for both passengers and airport staff.',
    features: ['Passenger Dashboard', 'Flight Management', 'Airport Analytics', 'Responsive Design'],
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    status: 'Flagship Project',
    isFeatured: true,
    color: '#ff3b30',
    icon: '✈️',
    github: 'https://github.com',
    demo: null,
    gradient: 'from-red-900/20 via-transparent to-transparent',
  },
  {
    id: 2,
    title: 'Government Advisory Portal',
    subtitle: 'Citizen Information Platform',
    description: 'Government information and advisory platform designed for easy citizen access. Provides clear, organized access to public resources, advisories, and government communications.',
    features: ['Citizen Portal', 'Advisory System', 'Resource Hub', 'Accessible Design'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    isFeatured: false,
    color: '#3b82f6',
    icon: '🏛️',
    github: 'https://github.com',
    demo: 'https://govt-advisory-yr.netlify.app',
    gradient: 'from-blue-900/15 via-transparent to-transparent',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    subtitle: 'Recruiter-Focused Developer Portfolio',
    description: 'Modern, cinematic recruiter-focused portfolio built with React and Tailwind CSS. Features smooth animations, dark theme, and fully responsive layout designed to impress.',
    features: ['Framer Motion', 'Cinematic Design', 'Dark Theme', 'Fully Responsive'],
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    isFeatured: false,
    color: '#a855f7',
    icon: '💼',
    github: 'https://github.com',
    demo: '#',
    gradient: 'from-purple-900/15 via-transparent to-transparent',
  },
]

const tagColors = {
  React: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'HTML': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'CSS': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  JavaScript: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  'Framer Motion': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
}

const getTagStyle = (tag) =>
  tagColors[tag] || 'bg-white/5 text-white/50 border-white/10'

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-primary blur-[140px] opacity-[0.04]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <span className="section-label">Featured Work</span>
          <div className="flex items-end gap-4 mt-3 mb-4">
            <h2 className="section-title text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Selected Projects
            </h2>
          </div>
          <div className="red-line" />
          <p className="mt-4 text-white/45 text-sm max-w-lg leading-relaxed">
            Real-world projects built with modern technologies — focused on clean code, user experience, and practical utility.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Featured large card */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="project-card glass rounded-2xl border border-white/[0.06] overflow-hidden group">
              <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].gradient} opacity-60 pointer-events-none`} />
              <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image area */}
                <div className="lg:col-span-2 relative min-h-[220px] lg:min-h-[340px] bg-gradient-to-br from-red-950/30 via-neutral-900 to-neutral-800 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-7xl mb-3 select-none">{projects[0].icon}</span>
                    <span className="font-mono text-xs text-white/30">v1.0.0</span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-primary blur-[60px] opacity-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                        <HiStar size={10} />
                        {projects[0].status}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-2xl mb-1">
                      {projects[0].title}
                    </h3>
                    <p className="text-white/40 text-sm font-mono mb-4">{projects[0].subtitle}</p>
                    <p className="text-white/55 text-sm leading-relaxed mb-5">
                      {projects[0].description}
                    </p>

                    {/* Feature list */}
                    <div className="grid grid-cols-2 gap-1.5 mb-6">
                      {projects[0].features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-xs text-white/50">
                          <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {projects[0].tags.map(tag => (
                        <span key={tag} className={`px-2.5 py-1 rounded-md text-xs border font-mono ${getTagStyle(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-6">
                    <a href={projects[0].github} target="_blank" rel="noreferrer"
                      className="btn-outline flex items-center gap-2 text-sm py-2">
                      <FaGithub size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1).map((project, i) => (
              <div key={project.id} data-aos="fade-up" data-aos-delay={150 + i * 80}>
                <div className="project-card glass rounded-2xl border border-white/[0.06] overflow-hidden h-full flex flex-col">
                  {/* Image area */}
                  <div className={`relative h-40 bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <span className="text-5xl select-none">{project.icon}</span>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-darkCard to-transparent"
                    />
                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-white text-lg mb-1">{project.title}</h3>
                    <p className="text-white/35 text-xs font-mono mb-3">{project.subtitle}</p>
                    <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map(tag => (
                        <span key={tag} className={`px-2 py-0.5 rounded text-xs border font-mono ${getTagStyle(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="btn-outline flex items-center gap-2 text-xs py-1.5 px-3">
                        <FaGithub size={12} /> Code
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer"
                          className="btn-primary flex items-center gap-2 text-xs py-1.5 px-3">
                          <FaExternalLinkAlt size={10} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
