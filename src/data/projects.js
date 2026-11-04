// Generate a gallery array from sequentially numbered image files in /public.
// Used to expose all 43 construction photos of the Ärztehaus project.
const buildGallery = (basePath, count) =>
  Array.from({ length: count }, (_, i) => `${basePath}/${String(i + 1).padStart(2, '0')}.jpg`)

const aerztehausGallery = buildGallery('/projekte/aerztehaus-steinenbronn', 43)

export const projects = [
  {
    id: 1,
    slug: 'aerztehaus-steinenbronn',
    title: 'Ärztehaus mit 4 Wohnungen',
    category: 'neubau',
    location: 'Steinenbronn',
    year: '2026',
    status: 'Im Bau',
    client: 'Privater Bauherr',
    description:
      'Neubau eines Ärztehauses mit integrierten 4 Wohneinheiten in Steinenbronn. Aktuell in der Rohbauphase.',
    longDescription: `In Steinenbronn (Landkreis Böblingen) realisieren wir den Neubau eines modernen Ärztehauses mit vier zusätzlichen Wohneinheiten. Das Projekt verbindet medizinische Versorgung im Erdgeschoss mit hochwertigem Wohnraum in den oberen Etagen.

Aktuell befindet sich das Vorhaben in der Rohbauphase: Bodenplatte und Fundamente sind fertiggestellt, das Mauerwerk wächst Stockwerk für Stockwerk in die Höhe. Stahlbetonbau, Bewehrungsarbeiten und präzises Mauerwerk gehen Hand in Hand.

Wir setzen auf solide handwerkliche Ausführung, sorgfältige Bauleitung und enge Abstimmung mit dem Bauherrn. Ziel ist ein langlebiges Gebäude, das den hohen Anforderungen einer Arztpraxis ebenso gerecht wird wie dem Komfortbedürfnis der späteren Mieter.

Der Standort an der Dornröschenweg 1 in 71144 Steinenbronn liegt verkehrsgünstig in der Region Stuttgart und ergänzt das wohnortnahe medizinische Angebot vor Ort.`,
    image: aerztehausGallery[0],
    gallery: aerztehausGallery,
    address: 'Dornröschenweg 1, 71144 Steinenbronn',
    stats: {
      sqm: '—',
      duration: 'laufend',
      rooms: '4 Wohnungen + Praxis',
      floors: '3'
    },
    features: [
      'Ärztehaus im Erdgeschoss',
      '4 separate Wohneinheiten',
      'Stahlbeton-Rohbau',
      'Massivbauweise',
      'Zentrale Lage in Steinenbronn',
      'Eigene Bauleitung durch MA Bau GmbH'
    ],
    testimonial: null
  }
]

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug)
}

export const getRelatedProjects = (currentId, category, limit = 3) => {
  return projects
    .filter((project) => project.id !== currentId && project.category === category)
    .slice(0, limit)
}
