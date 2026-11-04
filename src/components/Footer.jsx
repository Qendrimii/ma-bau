import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Startseite', href: '/#hero' },
    { name: 'Über uns', href: '/#about' },
    { name: 'Leistungen', href: '/#services' },
    { name: 'Projekte', href: '/#projects' },
    { name: 'Kontakt', href: '/#contact' }
  ]

  const services = [
    { name: 'Rohbau', href: '/leistung/rohbau' },
    { name: 'Hochbau', href: '/leistung/hochbau' },
    { name: 'Neubau', href: '/leistung/neubau' },
    { name: 'An- & Umbau', href: '/leistung/an-umbau' }
  ]

  const legal = [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' }
  ]

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-900 pt-20 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="MA Bau GmbH"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Ihr zuverlässiger Partner für qualitativ hochwertige Bauarbeiten in Böblingen und Umgebung.
              Von der ersten Idee bis zur Schlüsselübergabe.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 glass-card flex items-center justify-center text-white/60 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Leistungen</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-white/60 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+491794716480"
                  className="flex items-center gap-3 text-white/60 hover:text-primary-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +49 179 4716480
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ma-bau.com"
                  className="flex items-center gap-3 text-white/60 hover:text-primary-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@ma-bau.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Karlstraße 6<br />
                    71034 Böblingen<br />
                    Deutschland
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} MA Bau GmbH. Alle Rechte vorbehalten.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-white/40 hover:text-white/70 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 glass-card flex items-center justify-center text-white/60 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
