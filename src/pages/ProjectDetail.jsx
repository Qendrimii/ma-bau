import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  Clock,
  Home,
  Maximize,
  Layers,
  CheckCircle2,
  Quote,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react'
import { getProjectBySlug, getRelatedProjects, projects } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [relatedProjects, setRelatedProjects] = useState([])
  const [activeImage, setActiveImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    const foundProject = getProjectBySlug(slug)
    if (foundProject) {
      setProject(foundProject)
      setRelatedProjects(getRelatedProjects(foundProject.id, foundProject.category))
      setActiveImage(0)
      window.scrollTo(0, 0)
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  const categoryLabels = {
    neubau: 'Neubau',
    sanierung: 'Sanierung',
    gewerbe: 'Gewerbebau'
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 h-[70vh]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-dark-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
          {/* Back Button */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zu Projekten
          </Link>

          {/* Project Info */}
          <div className="max-w-3xl">
            {/* Category Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 backdrop-blur-md border border-primary-500/30 text-primary-400 text-sm font-medium rounded-full mb-6">
              {categoryLabels[project.category]}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Calendar className="w-5 h-5 text-primary-500" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <User className="w-5 h-5 text-primary-500" />
                <span>{project.client}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Maximize,
                label: 'Fläche',
                value: project.stats.sqm && project.stats.sqm !== '—' ? `${project.stats.sqm}m²` : '—'
              },
              { icon: Clock, label: 'Bauzeit', value: project.stats.duration },
              { icon: Home, label: 'Räume', value: project.stats.rooms },
              { icon: Layers, label: 'Etagen', value: project.stats.floors }
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-white/10 text-center hover:border-primary-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Projektgalerie</h2>

                {/* Main Image */}
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden mb-4 cursor-pointer group"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <img
                    src={project.gallery[activeImage]}
                    alt={`${project.title} - Bild ${activeImage + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Maximize className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-500"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-500"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {project.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-video rounded-xl overflow-hidden transition-all ${
                        activeImage === index
                          ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-dark-900'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Projektbeschreibung</h2>
                <div className="prose prose-invert max-w-none">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-white/70 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="glass-card p-8 rounded-3xl border border-primary-500/20 bg-gradient-to-br from-primary-500/5 to-primary-600/5">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-primary-400" />
                  </div>
                  <blockquote className="text-xl text-white/80 italic mb-6 leading-relaxed">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{project.testimonial.author}</div>
                      <div className="text-white/50 text-sm">{project.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features Card */}
              <div className="glass-card p-6 rounded-2xl border border-white/10 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">Projekthighlights</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-sm mb-4">
                    Interessiert an einem ähnlichen Projekt?
                  </p>
                  <Link
                    to="/#contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Projekt anfragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Project Info Card */}
              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Projektdetails</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-white/50 text-sm">Kategorie</dt>
                    <dd className="text-white font-medium">{categoryLabels[project.category]}</dd>
                  </div>
                  <div>
                    <dt className="text-white/50 text-sm">Standort</dt>
                    <dd className="text-white font-medium">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-white/50 text-sm">Fertigstellung</dt>
                    <dd className="text-white font-medium">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-white/50 text-sm">Auftraggeber</dt>
                    <dd className="text-white font-medium">{project.client}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Ähnliche Projekte</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/projekt/${relatedProject.slug}`}
                  className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-white/50">
                      <MapPin className="w-4 h-4" />
                      {relatedProject.location}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                alt="Construction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70" />
            </div>
            <div className="relative p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bereit für Ihr eigenes Projekt?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                Kontaktieren Sie uns für eine unverbindliche Beratung.
                Wir freuen uns darauf, Ihre Ideen zu verwirklichen.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 transition-all duration-300 hover:scale-105"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={project.gallery[activeImage]}
            alt={`${project.title} - Bild ${activeImage + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
            {activeImage + 1} / {project.gallery.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
