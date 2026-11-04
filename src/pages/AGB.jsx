import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AGB = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="space-y-10 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                Individuelle Vertragsbedingungen
              </h2>
              <p>
                Die MA Bau GmbH verwendet keine standardisierten Allgemeinen
                Geschäftsbedingungen für Bauleistungen. Jedes Bauvorhaben wird
                individuell betrachtet und die Vertragsbedingungen werden im Rahmen des
                konkreten Werk- oder Bauvertrages mit dem Auftraggeber persönlich
                vereinbart.
              </p>
              <p className="mt-3">
                Sofern nicht ausdrücklich anders schriftlich vereinbart, gilt für unsere
                Bauleistungen die Vergabe- und Vertragsordnung für Bauleistungen (VOB)
                in ihrer jeweils aktuellen Fassung, insbesondere Teil B (VOB/B).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                Angebote und Verträge
              </h2>
              <p>
                Unsere Angebote sind freibleibend, soweit nicht ausdrücklich als
                verbindlich gekennzeichnet. Der Vertragsschluss erfolgt schriftlich
                durch Unterzeichnung eines individuell ausgearbeiteten Werkvertrages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                Gewährleistung
              </h2>
              <p>
                Die Gewährleistung richtet sich nach den gesetzlichen Vorschriften des
                BGB sowie ggf. nach den Regelungen der VOB/B, sofern diese vertraglich
                einbezogen wurden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                Kontakt
              </h2>
              <p>
                Bei Fragen zu Vertragsbedingungen, Angeboten oder Bauleistungen wenden
                Sie sich bitte direkt an uns:
              </p>
              <p className="mt-3">
                MA Bau GmbH<br />
                Karlstraße 6<br />
                71034 Böblingen<br />
                Telefon:{' '}
                <a href="tel:+491794716480" className="text-primary-400 hover:underline">
                  +49 179 4716480
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:info@ma-bau.com" className="text-primary-400 hover:underline">
                  info@ma-bau.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AGB
