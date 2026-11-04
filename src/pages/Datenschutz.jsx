import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
                Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <p className="mt-3">
                MA Bau GmbH<br />
                Karlstraße 6<br />
                71034 Böblingen<br />
                Deutschland<br />
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
              <h2 className="text-xl font-semibold text-white mb-3">
                2. Datenschutzbeauftragter
              </h2>
              <p>
                Ein Datenschutzbeauftragter ist gemäß Art. 37 DSGVO nicht erforderlich.
                Bei Fragen zum Datenschutz wenden Sie sich bitte direkt an die oben
                genannte Adresse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website
              </h2>
              <p>
                Beim Aufrufen unserer Website werden durch unseren Hosting-Provider
                (IONOS SE, Elgendorfer Str. 57, 56410 Montabaur) automatisch
                Server-Logfiles erfasst, die Ihr Browser übermittelt:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
              <p className="mt-3">
                Diese Daten werden zum Zweck eines reibungslosen Verbindungsaufbaus,
                der Systemsicherheit und der technischen Administration verarbeitet.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                Die Logfiles werden nach maximal 7 Tagen gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Kontaktaufnahme
              </h2>
              <p>
                Auf unserer Website können Sie über das Kontaktformular oder per E-Mail
                mit uns Kontakt aufnehmen.
              </p>
              <p className="mt-3">
                Das Kontaktformular auf dieser Website überträgt keine Daten an unseren
                Server. Beim Absenden öffnet sich Ihr lokales E-Mail-Programm mit den
                eingegebenen Daten — die E-Mail wird ausschließlich durch Sie selbst
                über Ihren E-Mail-Anbieter an uns versendet.
              </p>
              <p className="mt-3">
                Die von Ihnen freiwillig übermittelten Daten (Name, E-Mail-Adresse,
                Telefonnummer, Nachricht) verarbeiten wir ausschließlich zur Bearbeitung
                Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der Beantwortung). Wir löschen die Daten,
                sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Google Fonts
              </h2>
              <p>
                Wir binden auf dieser Website Schriftarten von Google Fonts ein
                (Anbieter: Google Ireland Limited, Gordon House, Barrow Street,
                Dublin 4, Irland). Beim Aufruf der Seite wird Ihre IP-Adresse an einen
                Server von Google übertragen, damit die Schriftart geladen werden kann.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                an einer einheitlichen Darstellung der Inhalte).
              </p>
              <p className="mt-3">
                Weitere Informationen:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline break-all"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. Google Maps
              </h2>
              <p>
                Auf der Kontaktseite ist eine Karte von Google Maps eingebunden
                (Anbieter: Google Ireland Limited). Durch das Laden der Karte wird Ihre
                IP-Adresse an Google übertragen und können Cookies gesetzt werden.
                Sofern Sie in Ihrem Google-Konto angemeldet sind, kann Google den Besuch
                Ihrem Konto zuordnen.
              </p>
              <p className="mt-3">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse,
                Ihnen unseren Standort komfortabel anzuzeigen). Wenn Sie nicht möchten,
                dass Daten an Google übertragen werden, deaktivieren Sie JavaScript in
                Ihrem Browser.
              </p>
              <p className="mt-3">
                Datenschutzerklärung von Google:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline break-all"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Cookies
              </h2>
              <p>
                Diese Website setzt selbst keine Cookies. Eingebundene Drittanbieter
                (Google Fonts, Google Maps) können beim Laden ihrer Inhalte technisch
                bedingt Cookies setzen. Sie können das Speichern von Cookies in den
                Einstellungen Ihres Browsers ablehnen oder bereits gespeicherte Cookies
                jederzeit löschen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                8. Ihre Rechte
              </h2>
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an{' '}
                <a href="mailto:info@ma-bau.com" className="text-primary-400 hover:underline">
                  info@ma-bau.com
                </a>
                . Sie haben außerdem das Recht, sich bei der zuständigen
                Datenschutz-Aufsichtsbehörde zu beschweren:
              </p>
              <p className="mt-3">
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
                Baden-Württemberg<br />
                Königstraße 10a<br />
                70173 Stuttgart<br />
                <a
                  href="https://www.baden-wuerttemberg.datenschutz.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline"
                >
                  www.baden-wuerttemberg.datenschutz.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                9. Aktualität dieser Datenschutzerklärung
              </h2>
              <p>
                Stand dieser Datenschutzerklärung: Mai 2026. Durch die Weiterentwicklung
                unserer Website und Angebote oder aufgrund geänderter gesetzlicher
                Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                Die jeweils aktuelle Fassung ist jederzeit auf dieser Seite abrufbar.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Datenschutz
