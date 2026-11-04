import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, ExternalLink, Eye } from 'lucide-react'
import { projects } from '../data/projects'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('alle')
  const [hoveredProject, setHoveredProject] = useState(null)

  const allFilters = [
    { id: 'alle', label: 'Alle Projekte' },
    { id: 'neubau', label: 'Neubau' },
    { id: 'sanierung', label: 'Sanierung' },
    { id: 'gewerbe', label: 'Gewerbe' }
  ]
  // Only show filter chips for categories that have at least one project.
  const filters = allFilters.filter(
    (f) => f.id === 'alle' || projects.some((p) => p.category === f.id)
  )

  const filteredProjects = activeFilter === 'alle'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium rounded-full mb-6">
            <Eye className="w-4 h-4" />
            Unsere Projekte
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Referenzen, die </span>
            <span className="gradient-text">überzeugen</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen
            Bauprojekte aus verschiedenen Bereichen.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                activeFilter === filter.id
                  ? 'text-white'
                  : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
              }`}
            >
              {activeFilter === filter.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600" />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projekt/${project.slug}`}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-primary-500/30 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: hoveredProject === project.id ? 'translateY(-8px)' : 'translateY(0)'
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full capitalize border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl shadow-primary-500/30">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 bg-dark-900/80 backdrop-blur-md text-white/80 text-xs font-medium rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-sm text-white/50">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    {project.location}
                  </span>
                </div>

                <p className="text-white/60 text-sm mb-5 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 pt-5 border-t border-white/10">
                  <div className="flex-1">
                    <div className="text-xl font-bold text-white">
                      {project.stats.sqm && project.stats.sqm !== '—' ? `${project.stats.sqm}m²` : '—'}
                    </div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">Fläche</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="flex-1">
                    <div className="text-xl font-bold text-white">{project.stats.duration}</div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">Bauzeit</div>
                  </div>
                </div>

                {/* View Project Link */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
                    Projekt ansehen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-primary-500 hover:border-primary-500 transition-all duration-300"
          >
            <span>Ihr Projekt besprechen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
