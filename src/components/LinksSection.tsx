const linkGroups = [
  {
    title: "🚂 Transporte y Pases Ferroviarios",
    links: [
      { label: "SBB.ch — Web Oficial Ferrocarriles Suizos", url: "https://www.sbb.ch/en" },
      { label: "Swiss Travel Pass (MySwitzerland)", url: "https://www.myswitzerland.com/es-es/planificacion/ofertas/swiss-travel-pass/" },
      { label: "Swiss Travel Pass (SBB)", url: "https://www.sbb.ch/en/offers/swiss-travel-pass" },
      { label: "Swiss Travel Pass (Swiss Activities)", url: "https://www.swissactivities.com/es-es/pasos-ferroviarios/comprar-swiss-travel-pass/" },
      { label: "Renfe AVE — Barcelona ↔ Lyon", url: "https://www.renfe.com/es/es" },
      { label: "Iryo — Alta velocidad Málaga ↔ Barcelona", url: "https://iryo.es/" },
      { label: "DB — Tarifa de grupo (Alemania)", url: "https://int.bahn.de/es/ofertas/tarifa-de-precio-reducido-precio-flexible/tarifa-de-precio-reducido-para-grupos" },
      { label: "CGN — Barcos Lago Lemán", url: "https://www.cgn.ch/en/horaires-billets" },
      { label: "BLS — Barcos Lago de Brienz", url: "https://www.bls-schiff.ch/en/lake-cruise/timetable/boat-schedule" },
      { label: "TCL — Transporte público de Lyon", url: "https://www.tcl.fr/en" },
      { label: "TCL — Funicular F2 Vieux Lyon ↔ Fourvière", url: "https://www.tcl.fr/en/lines/f2" },
      { label: "TMB — Transports Metropolitans de Barcelona", url: "https://www.tmb.cat/en/home" },
      { label: "Aena — Aeropuerto de Málaga", url: "https://www.aena.es/es/malaga-costa-del-sol.html" },
    ],
  },
  {
    title: "🏨 Alojamientos",
    links: [
      { label: "Nonanteneuf Appart Hôtel · Ginebra (Plan A)", url: "https://nonanteneuf.ch/" },
      { label: "Hôtel Astoria · Ginebra (Plan B)", url: "https://www.astoria-geneva.com/" },
      { label: "Appartement Vieux Lyon Terrasse · Lyon", url: "https://www.booking.com/searchresults.html?ss=Vieux+Lyon" },
      { label: "Gracia Classic Apartments · Barcelona", url: "https://www.booking.com/searchresults.html?ss=Gracia+Classic+Apartments+Barcelona" },
      { label: "Chalet alpino · Kandersteg", url: "https://www.airbnb.com/s/Kandersteg--Switzerland" },
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
      { label: "Mouettes Genevoises — Barquitos del Lemán", url: "https://www.mouettesgenevoises.ch/en" },
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
      { label: "Jet d'Eau de Ginebra", url: "https://www.geneve.com/en/attractions/jet-deau" },
      { label: "Reloj de Flores (Jardin Anglais)", url: "https://www.geneve.com/en/attractions/flower-clock" },
      { label: "Catedral de Saint-Pierre · Ginebra", url: "https://www.geneve.com/en/attractions/saint-pierre-cathedral" },
      { label: "Bains des Pâquis · Ginebra", url: "https://www.bains-des-paquis.ch/" },
      { label: "Barrio de Les Grottes (Edificios Pitufo)", url: "https://www.geneve.com/en/attractions/les-grottes" },
    ],
  },
  {
    title: "🍷 Lyon — Gastronomía y Cultura",
    links: [
      { label: "Mapa Bouchons Lyonnais auténticos", url: "https://www.lyon.fr/bouchon" },
      { label: "Les Fines Gueules · Bouchon", url: "https://www.lesfinesgueules-lyon.com/" },
      { label: "Le Musée · Bouchon", url: "https://www.restaurantlemusee.com/" },
      { label: "Le Garet · Bouchon", url: "https://www.bouchonlegaret.fr/" },
      { label: "Pastelería Pralus (Tarte aux Pralines)", url: "https://www.pralus.fr/" },
      { label: "Le Comptoir de Mathilde (chocolatería)", url: "https://www.lecomptoirdemathilde.com/" },
      { label: "Basílica de Notre-Dame de Fourvière", url: "https://www.fourviere.org/" },
      { label: "Théâtres Romains de Fourvière", url: "https://www.lyon.fr/lieu/ancien-theatre-romain" },
      { label: "Jardin du Rosaire", url: "https://www.lyon.fr/lieu/jardin-du-rosaire" },
    ],
  },
  {
    title: "🏛️ Barcelona — Cultura y Gastronomía",
    links: [
      { label: "Sagrada Familia · Web oficial", url: "https://sagradafamilia.org/en" },
      { label: "La Pedrera (Casa Milà)", url: "https://www.lapedrera.com/en" },
      { label: "Mercado de La Boqueria", url: "https://www.boqueria.barcelona/" },
      { label: "Barri Gòtic — Guía", url: "https://www.barcelona.cat/en/what-to-do-in-bcn/gothic-quarter" },
      { label: "Bunkers del Carmel", url: "https://www.barcelona.cat/en/what-to-do-in-bcn/bunkers-del-carmel" },
    ],
  },
  {
    title: "🌐 Tarjetas y Conectividad",
    links: [
      { label: "Geneva Transport Card (gratis con hotel)", url: "https://www.geneve.com/en/transport/geneva-transport-card" },
      { label: "Ubigi eSIM — Datos Europa", url: "https://www.ubigi.com/" },
    ],
  },
  {
    title: "🛡️ Seguros de Viaje y Sanidad",
    links: [
      { label: "Intermundial · TotalTravel Seniors", url: "https://www.intermundial.es/seguro-de-viaje/totaltravel-seniors" },
      { label: "IATI Seguros", url: "https://www.iatiseguros.com/" },
      { label: "Muface — Asistencia internacional", url: "https://www.muface.es/muface/Servicios/asistenciaSanitaria/Asistencia_en_el_Extranjero/index.htm" },
      { label: "Tarjeta Sanitaria Europea (TSE)", url: "https://sede.mptfp.gob.es/es/procedimientos/tarjeta-sanitaria-europea-tse" },
    ],
  },
  {
    title: "☀️ Tiempo y Meteorología",
    links: [
      { label: "MeteoBlue — Ginebra", url: "https://www.meteoblue.com/es/tiempo/semana/ginebra_suiza_2660646" },
      { label: "MeteoSwiss — Suiza", url: "https://www.meteoswiss.admin.ch/" },
      { label: "DWD — Alemania", url: "https://www.dwd.de/EN/Home/home_node.html" },
    ],
  },
  {
    title: "🗺️ Guías de Destinos y Logística",
    links: [
      { label: "Visit Freiburg — Guía turística", url: "https://visit.freiburg.de/en/discover/sightseeing/all-sights" },
      { label: "Baden-Baden Tourism", url: "https://www.baden-baden.com/en" },
      { label: "Montreux Riviera — Le 45", url: "https://www.montreuxriviera.com/fr/P5156/le-45" },
      { label: "Consignas en estaciones (SBB Lockers)", url: "https://www.sbb.ch/en/travel-information/stations/services-station/store-luggage/lockers.html" },
      { label: "Parking Aeropuerto Málaga (Pica)", url: "https://parking.pica.es/" },
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

const weatherCards = [
  {
    icon: "🌤️",
    title: "MeteoBlue · Ginebra",
    description: "Pronóstico semanal detallado para Ginebra y zona del Lemán",
    url: "https://www.meteoblue.com/es/tiempo/semana/ginebra_suiza_2660646",
  },
  {
    icon: "🇨🇭",
    title: "MeteoSwiss · Suiza",
    description: "Mapa oficial del servicio meteorológico suizo (Alpes, Kandersteg, Berna)",
    url: "https://www.meteoswiss.admin.ch/",
  },
  {
    icon: "🇩🇪",
    title: "DWD · Alemania",
    description: "Servicio meteorológico alemán (Selva Negra, Gengenbach, Friburgo)",
    url: "https://www.dwd.de/EN/Home/home_node.html",
  },
];

export default function LinksSection() {
  return (
    <section className="section-padding bg-background" aria-label="Enlaces útiles">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Logística</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Enlaces Útiles</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Todos los enlaces oficiales del viaje recopilados y organizados por categoría — un solo clic y abren en una pestaña nueva.
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
                  <li key={l.url + l.label}>
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

        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-foreground">Antes de salir</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            El Tiempo en Suiza y Alemania 🌦️ — Consulta el pronóstico oficial de cada país antes y durante la expedición. Imprescindible para preparar la mochila del día.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {weatherCards.map((card) => (
              <a
                key={card.title}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <span className="text-4xl" role="img" aria-hidden="true">{card.icon}</span>
                <h4 className="mt-4 font-bold text-foreground">{card.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Abrir pronóstico →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
