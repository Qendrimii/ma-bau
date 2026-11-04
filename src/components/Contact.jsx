import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'neubau',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const projectLabels = {
    rohbau: 'Rohbau',
    hochbau: 'Hochbau',
    neubau: 'Neubau',
    'an-umbau': 'An- & Umbau',
    sonstiges: 'Sonstiges'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const projectLabel = projectLabels[formData.project] || formData.project
    const subject = `Anfrage über ma-bau.com: ${projectLabel}`
    const body = [
      `Name: ${formData.name}`,
      `E-Mail: ${formData.email}`,
      `Telefon: ${formData.phone || '—'}`,
      `Projektart: ${projectLabel}`,
      '',
      'Nachricht:',
      formData.message
    ].join('\n')

    const mailto = `mailto:info@ma-bau.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 8000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefon',
      value: '+49 179 4716480',
      href: 'tel:+491794716480',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'info@ma-bau.com',
      href: 'mailto:info@ma-bau.com',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Karlstraße 6, 71034 Böblingen',
      href: 'https://maps.google.com/?q=Karlstraße+6,+71034+Böblingen',
      color: 'from-red-600 to-red-700'
    },
    {
      icon: Clock,
      label: 'Öffnungszeiten',
      value: 'Mo-Fr: 7:00 - 17:00 Uhr',
      href: null,
      color: 'from-gray-800 to-black'
    }
  ]

  const projectTypes = [
    { value: 'rohbau', label: 'Rohbau' },
    { value: 'hochbau', label: 'Hochbau' },
    { value: 'neubau', label: 'Neubau' },
    { value: 'an-umbau', label: 'An- & Umbau' },
    { value: 'sonstiges', label: 'Sonstiges' }
  ]

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium rounded-full mb-6">
            <MessageSquare className="w-4 h-4" />
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Lassen Sie uns </span>
            <span className="gradient-text">sprechen</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Haben Sie ein Projekt im Sinn? Kontaktieren Sie uns für eine
            unverbindliche Beratung und ein individuelles Angebot.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group glass-card p-5 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-0.5">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white font-medium hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.1234567890!2d9.0123456!3d48.6864389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c0d67892a9c5%3A0x123456789!2sKarlstra%C3%9Fe%206%2C%2071034%20B%C3%B6blingen!5e0!3m2!1sde!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-70"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Quick Call CTA */}
            <div className="glass-card p-6 rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-primary-600/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Schnelle Antwort</h4>
                  <p className="text-white/60 text-sm">Innerhalb von 24 Stunden</p>
                </div>
              </div>
              <a
                href="tel:+491794716480"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Jetzt anrufen
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Vielen Dank!
                  </h3>
                  <p className="text-white/60 max-w-md mx-auto mb-2">
                    Ihr E-Mail-Programm sollte sich gleich öffnen — bitte schließen Sie das Senden dort ab.
                  </p>
                  <p className="text-white/40 text-sm max-w-md mx-auto">
                    Wenn nicht, schreiben Sie uns direkt an{' '}
                    <a href="mailto:info@ma-bau.com" className="text-primary-400 hover:underline">
                      info@ma-bau.com
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none transition-all duration-300 ${
                          focusedField === 'name'
                            ? 'border-primary-500 ring-2 ring-primary-500/20'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                        placeholder="Max Mustermann"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        E-Mail Adresse *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none transition-all duration-300 ${
                          focusedField === 'email'
                            ? 'border-primary-500 ring-2 ring-primary-500/20'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                        placeholder="max@beispiel.de"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none transition-all duration-300 ${
                          focusedField === 'phone'
                            ? 'border-primary-500 ring-2 ring-primary-500/20'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                        placeholder="+49 123 456 7890"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Projektart *
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('project')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white focus:outline-none transition-all duration-300 ${
                          focusedField === 'project'
                            ? 'border-primary-500 ring-2 ring-primary-500/20'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-dark-800">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none transition-all duration-300 resize-none ${
                        focusedField === 'message'
                          ? 'border-primary-500 ring-2 ring-primary-500/20'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      placeholder="Beschreiben Sie Ihr Projekt..."
                    />
                  </div>

                  {/* Privacy */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1.5 w-5 h-5 rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-500 focus:ring-offset-0"
                    />
                    <span className="text-sm text-white/50 leading-relaxed">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                      <a href="/datenschutz" className="text-primary-400 hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      zu. *
                    </span>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary-500/50"
                  >
                    Nachricht senden
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
