import { Link } from 'react-router-dom'
import { ArrowRight, Play, Shield, Clock, Award, ChevronDown } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Shield, value: '15+', label: 'Jahre Erfahrung' },
    { icon: Clock, value: '200+', label: 'Projekte' },
    { icon: Award, value: '100%', label: 'Zufriedenheit' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/projekte/aerztehaus-steinenbronn/01.jpg"
          alt="MA Bau GmbH Baustelle in Steinenbronn"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/95 to-dark-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/50" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-white/90 font-medium">
                Verfügbar für neue Projekte
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] animate-slide-up">
              <span className="text-white">Wir bauen</span>
              <br />
              <span className="relative">
                <span className="gradient-text">Ihre Zukunft</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#dc2626"/>
                      <stop offset="1" stopColor="#991b1b"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-white/70 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Als erfahrenes Bauunternehmen in Böblingen verwirklichen wir Ihre Visionen mit
              <span className="text-white font-medium"> Präzision</span>,
              <span className="text-white font-medium"> Qualität</span> und
              <span className="text-white font-medium"> Leidenschaft</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-2xl shadow-primary-500/30 transition-all duration-300 hover:shadow-primary-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Projekt starten
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#projects" className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Unsere Projekte
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-primary-500/20 group-hover:border-primary-500/30 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Featured Image Card */}
          <div className="relative hidden lg:block animate-slide-in-right">
            <Link to="/projekt/aerztehaus-steinenbronn" className="relative block">
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group">
                <img
                  src="/projekte/aerztehaus-steinenbronn/05.jpg"
                  alt="Ärztehaus mit 4 Wohnungen in Steinenbronn"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                      Aktuelles Projekt
                    </span>
                    <span className="text-white/60 text-sm">Steinenbronn</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Ärztehaus mit 4 Wohnungen</h3>
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-2xl font-bold text-white">Neubau</div>
                      <div className="text-sm text-white/50">Ärztehaus + 4 WE</div>
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <div className="flex-1">
                      <div className="text-sm text-white/60 mb-1">Status</div>
                      <div className="text-white font-medium">Rohbauphase</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 glass-card p-4 animate-float shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Qualität</div>
                    <div className="text-xs text-white/50">Garantiert</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 glass-card p-4 animate-float shadow-xl" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="MA Bau GmbH"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">MA Bau</div>
                    <div className="text-xs text-white/50">Ihr Partner</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary-500" />
      </div>
    </section>
  )
}

export default Hero
