import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Startseite', href: '/#hero' },
    { name: 'Über uns', href: '/#about' },
    { name: 'Leistungen', href: '/#services' },
    { name: 'Projekte', href: '/#projects' },
    { name: 'Kontakt', href: '/#contact' },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)

    // If we're on the home page and clicking a hash link
    if (isHomePage && href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-xl shadow-lg shadow-black/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="/logo.png"
              alt="MA Bau GmbH"
              className="h-12 sm:h-16 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.name}
                  href={link.href.substring(1)}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+491794716480"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium whitespace-nowrap">+49 179 4716480</span>
            </a>
            {isHomePage ? (
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('/#contact')
                }}
                className="btn-primary !py-3 !px-6 text-sm whitespace-nowrap"
              >
                Angebot anfordern
              </a>
            ) : (
              <Link to="/#contact" className="btn-primary !py-3 !px-6 text-sm whitespace-nowrap">
                Angebot anfordern
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors flex-shrink-0"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
          }`}
        >
          <div className="glass-card p-4 space-y-2">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.name}
                  href={link.href.substring(1)}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="tel:+491794716480"
                className="flex items-center justify-center gap-2 py-3 px-4 text-white/80 hover:text-white bg-white/5 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+49 179 4716480</span>
              </a>
              {isHomePage ? (
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('/#contact')
                  }}
                  className="btn-primary w-full text-center block"
                >
                  Angebot anfordern
                </a>
              ) : (
                <Link to="/#contact" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center block">
                  Angebot anfordern
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
