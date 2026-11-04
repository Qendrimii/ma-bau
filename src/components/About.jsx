import { CheckCircle2, Target, Users, Wrench, Award, TrendingUp } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Präzision',
      description: 'Jedes Detail zählt. Wir arbeiten mit höchster Genauigkeit.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Partnerschaft',
      description: 'Wir sehen unsere Kunden als Partner und arbeiten eng zusammen.',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Wrench,
      title: 'Handwerk',
      description: 'Traditionelles Handwerk trifft auf moderne Technologien.',
      color: 'from-red-600 to-red-700'
    }
  ]

  const highlights = [
    'Erfahrenes Bauunternehmen',
    'Regionale Verbundenheit',
    'Nachhaltige Bauweise',
    'Termingerechte Fertigstellung',
    'Transparente Kommunikation',
    'Faire Preisgestaltung'
  ]

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium rounded-full mb-6">
            Über uns
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Bauen mit </span>
            <span className="gradient-text">Leidenschaft</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Als erfahrenes Bauunternehmen in Böblingen legen wir Wert auf persönliche
            Betreuung und handwerkliche Exzellenz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1035&auto=format&fit=crop"
                    alt="Construction work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                </div>
                <div className="glass-card p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Qualität</div>
                      <div className="text-white/50 text-sm">Garantiert</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass-card p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">15+ Jahre</div>
                      <div className="text-white/50 text-sm">Erfahrung</div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=987&auto=format&fit=crop"
                    alt="Team at work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card px-6 py-4 rounded-2xl border border-primary-500/30 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-xs text-white/50">Projekte</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-xs text-white/50">Jahre</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-xs text-white/50">Zufrieden</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ihr Partner für <span className="gradient-text">Bauprojekte</span>
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                <span className="text-white font-medium">MA Bau GmbH</span> ist Ihr
                zuverlässiger Partner für Bauvorhaben jeder Größenordnung in Böblingen
                und der gesamten Region Stuttgart.
              </p>
              <p className="text-white/60 leading-relaxed">
                Mit unserem erfahrenen Team bieten wir Ihnen eine persönliche und
                maßgeschneiderte Betreuung für Rohbau, Hochbau, Neubau sowie An- und Umbauten.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary-400" />
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-xl text-primary-400 font-medium hover:bg-primary-500/20 transition-all"
            >
              Kontaktieren Sie uns
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group glass-card p-8 rounded-3xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
