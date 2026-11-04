import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
            Impressum
          </h1>

          <div className="space-y-10 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                MA Bau GmbH<br />
                Karlstraße 6<br />
                71034 Böblingen<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Vertreten durch</h2>
              <p>Geschäftsführer: Elida Zeqiraj</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
              <p>
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

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Handelsregister</h2>
              <p>
                Registergericht: Amtsgericht Stuttgart<br />
                Registernummer: HRB 789971<br />
                Stammkapital: 25.000 €
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [BITTE ERGÄNZEN: DE123456789]<br />
                <span className="text-xs text-white/40">
                  (Bitte echte USt-IdNr. einfügen — bis dahin bitte nicht prominent
                  verlinken)
                </span>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                [BITTE ERGÄNZEN: Name Geschäftsführer]<br />
                Karlstraße 6<br />
                71034 Böblingen
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Haftungsausschluss</h2>
              <h3 className="text-base font-semibold text-white mt-4 mb-2">Haftung für Inhalte</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <h3 className="text-base font-semibold text-white mt-4 mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich.
              </p>
              <h3 className="text-base font-semibold text-white mt-4 mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Impressum
