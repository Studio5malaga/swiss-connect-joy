const linkGroups = [
  {
    title: "🚂 Transporte y Pases Ferroviarios",
    links: [
      { label: "SBB.ch — Web Oficial Ferrocarriles Suizos", url: "https://www.sbb.ch/en" },
      { label: "Swiss Travel Pass (MySwitzerland)", url: "https://www.myswitzerland.com/es-es/planificacion/ofertas/swiss-travel-pass/" },
      { label: "Swiss Travel Pass (SBB)", url: "https://www.sbb.ch/en/offers/swiss-travel-pass" },
      { label: "Swiss Travel Pass (Swiss Activities)", url: "https://www.swissactivities.com/es-es/pasos-ferroviarios/comprar-swiss-travel-pass/" },
      { label: "DB — Tarifa de grupo (Alemania)", url: "https://int.bahn.de/es/ofertas/tarifa-de-precio-reducido-precio-flexible/tarifa-de-precio-reducido-para-grupos" },
      { label: "CGN — Barcos Lago Lemán", url: "https://www.cgn.ch/en/horaires-billets" },
      { label: "BLS — Barcos Lago de Brienz", url: "https://www.bls-schiff.ch/en/lake-cruise/timetable/boat-schedule" },
    ],
  },
  {
    title: "🎭 Experiencias y Trenes Panorámicos",
    links: [
      { label: "Tren Belle Époque (MOB)", url: "https://www.mob.ch/en/stories/belle-epoque" },
      { label: "Funicular Cataratas Reichenbach", url: "https://www.grimselwelt.ch/en/railways/reichenbachfall-bahn/" },
      { label: "Teleférico de Schauinsland", url: "https://www.schauinslandbahn.de/en" },
      { label: "Funicular Monte Merkur", url: "https://www.stadtwerke-baden-baden.de/de/mobilitaet-freizeit/merkurbahn/" },
      { label: "Batorama Estrasburgo", url: "https://www.batorama.com/en" },
    ],
  },
  {
    title: "🏰 Actividades y Puntos de Interés",
    links: [
      { label: "Grindelwald First", url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/" },
      { label: "First Cliff Walk by Tissot", url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/first-cliff-walk-by-tissot/" },
      { label: "Castillo de Chillon", url: "https://www.chillon.ch/visite/" },
      { label: "Cataratas de Triberg", url: "https://www.triberg.de/english/tourismus-1/natural-experience-1/germanys-highest-waterfalls-1" },
      { label: "Eble Uhren-Park (Reloj de Cuco)", url: "https://www.tripadvisor.ie/Attraction_Review-g187285-d7336370-Reviews-Eble_Uhren_Park-Triberg_Baden_Wurttemberg.html" },
      { label: "Vogtsbauernhof (Museo al aire libre)", url: "https://www.vogtsbauernhof.de/en" },
      { label: "Museo Sherlock Holmes", url: "https://sherlockholmes.ch/de/Info/Museum" },
      { label: "Castillo Haut-Koenigsbourg", url: "https://www.haut-koenigsbourg.fr/en/" },
      { label: "Catedral de Estrasburgo", url: "https://www.visitstrasbourg.fr/es/fiche-sit/F223007269_catedral-notre-dame-strasbourg-es/" },
    ],
  },
  {
    title: "🗺️ Guías de Destinos y Logística",
    links: [
      { label: "Visit Freiburg — Guía turística", url: "https://visit.freiburg.de/en/discover/sightseeing/all-sights" },
      { label: "Baden-Baden Tourism", url: "https://www.baden-baden.com/en" },
      { label: "Montreux Riviera — Le 45", url: "https://www.montreuxriviera.com/fr/P5156/le-45" },
      { label: "Consignas en estaciones (SBB Lockers)", url: "https://www.sbb.ch/en/travel-information/stations/services-station/store-luggage/lockers.html" },
    ],
  },
  {
    title: "🛒 Supermercados",
    links: [
      { label: "Migros — Supermercado suizo", url: "https://www.migros.ch/en" },
      { label: "Coop — Supermercado suizo", url: "https://www.coop.ch/" },
    ],
  },
];

export default function LinksSection() {
  return (
    <section className="section-padding bg-background" aria-label="Enlaces útiles">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Logística</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Enlaces Útiles</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Todos los enlaces oficiales organizados por categoría para planificar cada detalle del viaje.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {linkGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-foreground text-base">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-accent hover:underline transition-colors"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
