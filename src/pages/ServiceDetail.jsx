import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Home,
  Building2,
  Hammer,
  PaintBucket,
  Ruler,
  HardHat,
  Phone,
  ChevronRight
} from 'lucide-react'
import { getServiceBySlug, services } from '../data/services'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const iconMap = {
  Home,
  Building2,
  Hammer,
  PaintBucket,
  Ruler,
  HardHat
}

const ServiceDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [service, setService] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const foundService = getServiceBySlug(slug)
    if (foundService) {
      setService(foundService)
      setActiveImage(0)
      window.scrollTo(0, 0)
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  if (!service) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  const IconComponent = iconMap[service.icon]
  const relatedProjects = projects.filter(p => service.relatedProjects?.includes(p.slug))
  const otherServices = services.filter(s => s.id !== service.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 h-[60vh]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          {/* Back Button */}
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zu Leistungen
          </Link>

          <div className="max-w-3xl">
            {/* Icon */}
            <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
              {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-primary-400 font-medium mb-6">
              {service.subtitle}
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-8 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Projekte', value: service.stats.projects },
              { label: 'Erfahrung', value: service.stats.experience },
              { label: 'Zufriedenheit', value: service.stats.satisfaction }
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-white/10 text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
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
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Über diese Leistung</h2>
                <div className="prose prose-invert max-w-none">
                  {service.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-white/70 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Impressionen</h2>
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <img
                      src={service.gallery[activeImage]}
                      alt={`${service.title} - Bild ${activeImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {service.gallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`relative aspect-video rounded-xl overflow-hidden transition-all ${
                          activeImage === index
                            ? 'ring-2 ring-primary-500'
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
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Unser Prozess</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4 glass-card p-5 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                        <p className="text-white/60 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Ihre Vorteile</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-white/60 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features */}
              <div className="glass-card p-6 rounded-2xl border border-white/10 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">Unsere Leistungen</h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/60 text-sm mb-4">
                    Interessiert an {service.title}?
                  </p>
                  <Link
                    to="/#contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 mb-3"
                  >
                    Beratung anfordern
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+491794716480"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-xl transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    +49 179 4716480
                  </a>
                </div>
              </div>

              {/* Other Services */}
              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Weitere Leistungen</h3>
                <div className="space-y-3">
                  {otherServices.map((otherService) => {
                    const OtherIcon = iconMap[otherService.icon]
                    return (
                      <Link
                        key={otherService.id}
                        to={`/leistung/${otherService.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className={`w-10 h-10 bg-gradient-to-br ${otherService.color} rounded-lg flex items-center justify-center`}>
                          {OtherIcon && <OtherIcon className="w-5 h-5 text-white" />}
                        </div>
                        <span className="text-white/70 group-hover:text-white transition-colors flex-1">
                          {otherService.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-primary-500 transition-colors" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Referenzprojekte</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projekt/${project.slug}`}
                  className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">{project.location} • {project.year}</p>
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
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70" />
            </div>
            <div className="relative p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bereit für Ihr {service.title}-Projekt?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                Kontaktieren Sie uns für eine unverbindliche Beratung.
                Wir freuen uns darauf, Ihre Ideen zu verwirklichen.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 transition-all duration-300 hover:scale-105"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServiceDetail
