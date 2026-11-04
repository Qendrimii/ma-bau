export const services = [
  {
    id: 1,
    slug: 'rohbau',
    title: 'Rohbau',
    subtitle: 'Das solide Fundament',
    description: 'Solide Rohbauarbeiten als stabiles Fundament für jedes Bauvorhaben.',
    longDescription: `Der Rohbau ist das Skelett jedes Gebäudes. Bei MA Bau legen wir größten Wert auf solide, präzise ausgeführte Rohbauarbeiten als Grundlage für alles Weitere.

Ob Fundamente, Mauerwerk oder Betonarbeiten – unser erfahrenes Team arbeitet mit höchster Präzision und verwendet nur qualitativ hochwertige Materialien.

Ein gut ausgeführter Rohbau ist die Voraussetzung für ein langlebiges, wertbeständiges Gebäude. Mit unserer Expertise stellen wir sicher, dass Ihr Bauwerk auf einem soliden Fundament steht.`,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=2074&auto=format&fit=crop'
    ],
    icon: 'HardHat',
    color: 'from-red-500 to-red-600',
    features: [
      'Fundamentarbeiten',
      'Mauerwerk',
      'Betonarbeiten',
      'Stahlbetonbau',
      'Kellerarbeiten',
      'Geschossdecken'
    ],
    benefits: [
      {
        title: 'Präzision',
        description: 'Millimetergenaue Ausführung für perfekte Anschlüsse.'
      },
      {
        title: 'Stabilität',
        description: 'Verwendung hochwertiger, geprüfter Materialien.'
      },
      {
        title: 'Langlebigkeit',
        description: 'Solide Bauweise für jahrzehntelange Beständigkeit.'
      },
      {
        title: 'Normenkonform',
        description: 'Einhaltung aller relevanten Bauvorschriften.'
      }
    ],
    process: [
      { step: 1, title: 'Erdarbeiten', description: 'Aushub und Vorbereitung des Baugrunds' },
      { step: 2, title: 'Fundament', description: 'Erstellung der Bodenplatte oder des Kellers' },
      { step: 3, title: 'Mauerwerk', description: 'Aufbau der tragenden Wände' },
      { step: 4, title: 'Decken', description: 'Einbau der Geschossdecken' },
      { step: 5, title: 'Dachstuhl', description: 'Errichtung der Dachkonstruktion' }
    ],
    stats: {
      projects: '150+',
      experience: '15 Jahre',
      satisfaction: '100%'
    },
    relatedProjects: ['aerztehaus-steinenbronn']
  },
  {
    id: 2,
    slug: 'hochbau',
    title: 'Hochbau',
    subtitle: 'Vom Fundament bis zum Dach',
    description: 'Komplette Hochbaulösungen für Wohn- und Geschäftsgebäude aller Art.',
    longDescription: `Der Hochbau umfasst alle oberirdischen Bauwerke. Bei MA Bau realisieren wir Hochbauprojekte jeder Größenordnung mit höchster Qualität und Präzision.

Von Einfamilienhäusern über Mehrfamilienhäuser bis hin zu Gewerbebauten – wir begleiten Sie vom ersten Spatenstich bis zur Schlüsselübergabe.

Unser erfahrenes Team koordiniert alle Gewerke und sorgt für einen reibungslosen Bauablauf, termingerechte Fertigstellung und erstklassige Ergebnisse.`,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    ],
    icon: 'Building2',
    color: 'from-gray-700 to-gray-900',
    features: [
      'Wohngebäude',
      'Geschäftsgebäude',
      'Industriebauten',
      'Öffentliche Gebäude',
      'Mehrfamilienhäuser',
      'Gewerbeimmobilien'
    ],
    benefits: [
      {
        title: 'Komplettservice',
        description: 'Alles aus einer Hand vom Keller bis zum Dach.'
      },
      {
        title: 'Termintreue',
        description: 'Zuverlässige Einhaltung vereinbarter Fertigstellungstermine.'
      },
      {
        title: 'Qualität',
        description: 'Hochwertige Materialien und fachgerechte Ausführung.'
      },
      {
        title: 'Koordination',
        description: 'Professionelles Management aller Gewerke.'
      }
    ],
    process: [
      { step: 1, title: 'Planung', description: 'Detaillierte Projektplanung und Kalkulation' },
      { step: 2, title: 'Rohbau', description: 'Erstellung des Gebäuderohbaus' },
      { step: 3, title: 'Ausbau', description: 'Fenster, Türen, Installationen' },
      { step: 4, title: 'Innenausbau', description: 'Estrich, Putz, Malerarbeiten' },
      { step: 5, title: 'Fertigstellung', description: 'Qualitätskontrolle und Übergabe' }
    ],
    stats: {
      projects: '100+',
      experience: '15 Jahre',
      satisfaction: '100%'
    },
    relatedProjects: ['aerztehaus-steinenbronn']
  },
  {
    id: 3,
    slug: 'neubau',
    title: 'Neubau',
    subtitle: 'Ihr Traumhaus wird Wirklichkeit',
    description: 'Von der Grundsteinlegung bis zur Schlüsselübergabe – wir realisieren Ihr Traumhaus.',
    longDescription: `Der Neubau eines Hauses ist eine der größten Investitionen im Leben. Bei MA Bau verstehen wir das und begleiten Sie mit Expertise und Leidenschaft durch jeden Schritt dieses aufregenden Prozesses.

Unser erfahrenes Team plant und baut Ihr neues Zuhause nach Ihren individuellen Wünschen und Bedürfnissen. Wir legen dabei größten Wert auf Qualität, Nachhaltigkeit und Energieeffizienz.

Von der ersten Skizze bis zur finalen Abnahme sind wir Ihr zuverlässiger Partner. Wir koordinieren alle Gewerke, halten Termine ein und sorgen dafür, dass Ihr Bauprojekt im geplanten Budgetrahmen bleibt.`,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
    ],
    icon: 'Home',
    color: 'from-red-600 to-red-700',
    features: [
      'Einfamilienhäuser',
      'Mehrfamilienhäuser',
      'Doppelhaushälften',
      'Reihenhäuser',
      'Bungalows',
      'Villen'
    ],
    benefits: [
      {
        title: 'Individuelle Planung',
        description: 'Jedes Haus wird nach Ihren persönlichen Wünschen geplant.'
      },
      {
        title: 'Energieeffizienz',
        description: 'Wir bauen nach neuesten Standards für minimale Energiekosten.'
      },
      {
        title: 'Qualitätsmaterialien',
        description: 'Nur hochwertige, geprüfte Baumaterialien kommen zum Einsatz.'
      },
      {
        title: 'Festpreisgarantie',
        description: 'Transparente Kostenplanung ohne versteckte Überraschungen.'
      }
    ],
    process: [
      { step: 1, title: 'Beratung', description: 'Persönliches Gespräch über Ihre Wünsche' },
      { step: 2, title: 'Planung', description: 'Detaillierte Entwürfe und Kostenkalkulationen' },
      { step: 3, title: 'Genehmigung', description: 'Unterstützung bei Bauanträgen' },
      { step: 4, title: 'Rohbau', description: 'Fundament, Mauerwerk und Dachstuhl' },
      { step: 5, title: 'Ausbau', description: 'Installation, Innenausbau und Feinarbeiten' },
      { step: 6, title: 'Übergabe', description: 'Abnahme und Schlüsselübergabe' }
    ],
    stats: {
      projects: '80+',
      experience: '15 Jahre',
      satisfaction: '100%'
    },
    relatedProjects: ['aerztehaus-steinenbronn']
  },
  {
    id: 4,
    slug: 'an-umbau',
    title: 'An- & Umbau',
    subtitle: 'Mehr Raum, mehr Möglichkeiten',
    description: 'Erweiterungen und Umbauten, die Ihren bestehenden Wohnraum optimal ergänzen.',
    longDescription: `Sie brauchen mehr Platz oder möchten Ihre Räume neu gestalten? Bei MA Bau sind wir Experten für An- und Umbauten, die sich nahtlos in Ihre bestehende Bausubstanz einfügen.

Ob Anbau, Aufstockung, Dachausbau oder kompletter Umbau – wir verbinden respektvolle Bestandserhaltung mit modernem Wohnkomfort und optimaler Raumnutzung.

Unsere Projekte zeichnen sich durch sorgfältige Planung, handwerkliche Präzision und einen nachhaltigen Umgang mit vorhandenen Ressourcen aus.`,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop'
    ],
    icon: 'Hammer',
    color: 'from-gray-800 to-black',
    features: [
      'Anbauten',
      'Aufstockungen',
      'Dachausbau',
      'Raumaufteilung',
      'Wanddurchbrüche',
      'Kernsanierung'
    ],
    benefits: [
      {
        title: 'Werterhaltung',
        description: 'Steigerung des Immobilienwerts durch fachgerechte Erweiterung.'
      },
      {
        title: 'Nahtlose Integration',
        description: 'Perfekte Verbindung von Alt und Neu.'
      },
      {
        title: 'Bestandserhalt',
        description: 'Respektvoller Umgang mit der vorhandenen Bausubstanz.'
      },
      {
        title: 'Modernität',
        description: 'Zeitgemäßer Wohnkomfort durch clevere Lösungen.'
      }
    ],
    process: [
      { step: 1, title: 'Bestandsaufnahme', description: 'Analyse der vorhandenen Bausubstanz' },
      { step: 2, title: 'Konzeption', description: 'Entwicklung des Umbaukonzepts' },
      { step: 3, title: 'Planung', description: 'Detaillierte Ausführungsplanung' },
      { step: 4, title: 'Umsetzung', description: 'Fachgerechte Durchführung der Arbeiten' },
      { step: 5, title: 'Fertigstellung', description: 'Qualitätsprüfung und Abnahme' }
    ],
    stats: {
      projects: '70+',
      experience: '15 Jahre',
      satisfaction: '100%'
    },
    relatedProjects: []
  }
]

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug)
}
