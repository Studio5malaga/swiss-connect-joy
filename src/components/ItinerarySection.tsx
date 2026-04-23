import { useState } from "react";

const days = [
  {
    day: 1,
    date: "29 Sep (Lunes)",
    route: "Málaga → Ginebra → Kandersteg",
    title: "Llegada a Ginebra y Kandersteg",
    image: "/images/dia1-ginebra-kandersteg.jpg",
    alt: "Tren panorámico junto al Lago Lemán con Alpes al fondo",
    tags: ["Lago Lemán", "Valle plano", "Chalet-Hotel Adler"],
    schedule: [
      { time: "06:30", text: "Salida desde Málaga (vuelo EasyJet)" },
      { time: "09:30", text: "Llegada al aeropuerto de Ginebra" },
      { time: "10:15", text: "Tren Ginebra → Kandersteg (vía Berna, ~2h 45min)" },
      { time: "~13:00", text: "Llegada a Kandersteg · Check-in Chalet-Hotel Adler" },
      { time: "14:00", text: "Paseo por el pueblo, compra en supermercado local" },
      { time: "19:00", text: "Cena en el hotel o preparada en la cocina" },
    ],
    highlights: "El trayecto Ginebra–Kandersteg recorre la orilla del Lago Lemán y atraviesa el Oberland Bernés. Kandersteg es un pueblo alpino tranquilo situado en un valle plano, ideal para movilidad. El Chalet-Hotel Adler está a 5-7 minutos a pie de la estación.",
  },
  {
    day: 2,
    date: "30 Sep (Martes)",
    route: "Kandersteg → Montreux → Kandersteg",
    title: "Castillo de Chillon & Barco de Vapor",
    image: "/images/dia2-chillon-barco.jpg",
    alt: "Castillo de Chillon junto al Lago Lemán con tren Belle Époque",
    tags: ["GoldenPass Belle Époque", "Castillo medieval", "Barco de vapor"],
    schedule: [
      { time: "08:00", text: "Desayuno en el hotel" },
      { time: "09:10", text: "Tren Kandersteg → Zweisimmen → Montreux (GoldenPass Belle Époque, ~3h)" },
      { time: "12:15", text: "Llegada a Montreux · Paseo por el malecón" },
      { time: "13:00", text: "Visita al Castillo de Chillon (GRATIS con Swiss Travel Pass)" },
      { time: "15:00", text: "Barco de vapor CGN Montreux → Vevey (~25min)" },
      { time: "16:00", text: "Tiempo libre en Vevey · Estatua de Charlie Chaplin" },
      { time: "17:30", text: "Regreso en tren a Kandersteg" },
    ],
    highlights: "El día estrella del viaje. El tren GoldenPass Belle Époque tiene vagones restaurados de 1930 con asientos de terciopelo. El Castillo de Chillon, del siglo XII, está sobre el agua del Lago Lemán. El barco de vapor CGN es una experiencia única con vistas a los Alpes.",
  },
  {
    day: 3,
    date: "1 Oct (Miércoles)",
    route: "Kandersteg → Meiringen → Blausee",
    title: "Sherlock Holmes, Cataratas & Lago Azul",
    image: "/images/dia3-sherlock-blausee.jpg",
    alt: "Cataratas de Reichenbach y Blausee, lago turquesa en Suiza",
    tags: ["Funicular 1899", "Museo gratis", "Lago turquesa"],
    schedule: [
      { time: "08:00", text: "Desayuno" },
      { time: "09:00", text: "Tren Kandersteg → Meiringen (~1h)" },
      { time: "10:15", text: "Funicular histórico de 1899 a las Cataratas de Reichenbach (~12 CHF)" },
      { time: "11:30", text: "Museo Sherlock Holmes en Meiringen (GRATIS con Swiss Travel Pass)" },
      { time: "12:30", text: "Almuerzo en Meiringen" },
      { time: "14:00", text: "Barco por el Lago Brienz (BLS, incluido con pase)" },
      { time: "15:30", text: "Visita al Blausee — lago de aguas turquesas (~12 CHF)" },
      { time: "17:30", text: "Regreso a Kandersteg" },
    ],
    highlights: "Arthur Conan Doyle eligió las Cataratas de Reichenbach como escenario de la muerte de Sherlock Holmes. El funicular que sube es original de 1899. El Blausee es un lago de aguas cristalinas color turquesa rodeado de bosque — mágico para fotografiar.",
  },
  {
    day: 4,
    date: "2 Oct (Jueves)",
    route: "Kandersteg → Grindelwald → Gengenbach",
    title: "Grindelwald First & Viaje a Alemania",
    image: "/images/dia4-grindelwald-first.jpg",
    alt: "First Cliff Walk en Grindelwald, pasarela suspendida sobre los Alpes suizos",
    tags: ["Cliff Walk", "ICE alemán", "Pueblo de cuento"],
    schedule: [
      { time: "07:30", text: "Check-out del Chalet-Hotel Adler · Desayuno temprano" },
      { time: "08:15", text: "Tren Kandersteg → Interlaken → Grindelwald (~1h 30min)" },
      { time: "10:00", text: "Teleférico a Grindelwald First (50% descuento con Swiss Travel Pass, ~34€)" },
      { time: "10:30", text: "First Cliff Walk by Tissot — pasarela suspendida a 2.168m" },
      { time: "12:00", text: "Descenso y almuerzo en Grindelwald" },
      { time: "13:30", text: "Tren Grindelwald → Interlaken → Berna → Basilea" },
      { time: "16:00", text: "ICE Basilea → Offenburg (~45min, tarifa grupo DB ~26€)" },
      { time: "17:30", text: "Tren regional Offenburg → Gengenbach (10min)" },
      { time: "18:00", text: "Check-in Villa Beckmann · Instalación" },
    ],
    highlights: "Mañana de adrenalina: el Cliff Walk es una pasarela de metal suspendida sobre un acantilado a más de 2.000m con vistas al Eiger. Por la tarde, cruce de frontera de Suiza a Alemania en el tren de alta velocidad ICE. Gengenbach es un pueblo de cuento con casas de entramado de madera.",
  },
  {
    day: 5,
    date: "3 Oct (Viernes)",
    route: "Gengenbach → Triberg → Gengenbach",
    title: "Cascadas, Reloj Gigante & Tarta Selva Negra",
    image: "/images/dia5-triberg-cascadas.jpg",
    alt: "Cascadas de Triberg y reloj de cuco gigante en la Selva Negra",
    tags: ["Cascadas 163m", "Reloj de cuco gigante", "Tarta original 1915"],
    schedule: [
      { time: "09:00", text: "Paseo por el mercado local de Gengenbach" },
      { time: "10:30", text: "Tren Gengenbach → Triberg (~30min, GRATIS con KONUS)" },
      { time: "11:00", text: "Cascadas de Triberg — las más altas de Alemania (163m, ~10€)" },
      { time: "12:30", text: "Eble Uhren-Park — el reloj de cuco más grande del mundo" },
      { time: "13:30", text: "Almuerzo y tarta Selva Negra original en Café Schäfer (desde 1915)" },
      { time: "15:00", text: "Tiempo libre · Tiendas de artesanía local" },
      { time: "16:30", text: "Regreso en tren a Gengenbach (GRATIS con KONUS)" },
    ],
    highlights: "Las cascadas de Triberg son las más altas de Alemania con 163 metros. El reloj de cuco del Eble Uhren-Park es el más grande del mundo. La tarta Selva Negra del Café Schäfer se prepara con la receta original desde 1915. Todos los trenes regionales son GRATIS con la tarjeta KONUS.",
  },
  {
    day: 6,
    date: "4 Oct (Sábado)",
    route: "Gengenbach → Friburgo",
    title: "Friburgo, Canales & Monte Schauinsland",
    image: "/images/dia6-friburgo-canales.jpg",
    alt: "Bächle (canales medievales) de Friburgo con catedral gótica al fondo",
    tags: ["Bächle medievales", "Teleférico más largo DE", "Salchicha típica"],
    schedule: [
      { time: "09:00", text: "Tren Gengenbach → Friburgo (~45min, GRATIS con KONUS)" },
      { time: "10:00", text: "Catedral gótica de Friburgo (Münster) y mercado de la plaza" },
      { time: "11:00", text: "Paseo por los Bächle — canales medievales del casco antiguo" },
      { time: "12:00", text: "Almuerzo: 'Lange Rote' (salchicha roja típica) en el mercado" },
      { time: "13:30", text: "Teleférico de Schauinsland — el más largo de Alemania (~15€)" },
      { time: "15:00", text: "Vistas panorámicas desde la cima del Monte Schauinsland (1.284m)" },
      { time: "16:30", text: "Descenso y regreso a Gengenbach" },
    ],
    highlights: "Friburgo es la ciudad más soleada de Alemania. Sus Bächle son canales medievales que recorren las calles del centro histórico. La catedral tiene una torre de 116m con vistas espectaculares. El teleférico de Schauinsland (3,6 km) es el más largo de Alemania.",
  },
  {
    day: 7,
    date: "5 Oct (Domingo)",
    route: "A elección del grupo",
    title: "Día Libre: Tres Opciones",
    image: "/images/dia7-opciones.jpg",
    alt: "Tres destinos opcionales: Estrasburgo, Baden-Baden y Castillo Haut-Koenigsbourg",
    tags: ["3 opciones", "Día libre", "Francia o Alemania"],
    schedule: [
      { time: "", text: "OPCIÓN A — Aventura Imperial:" },
      { time: "09:00", text: "Castillo Haut-Koenigsbourg (Alsacia) + tarde en Estrasburgo" },
      { time: "", text: "OPCIÓN B — Esplendor Alsaciano:" },
      { time: "09:00", text: "Día completo en Estrasburgo: Catedral, Petite France, Batorama" },
      { time: "", text: "OPCIÓN C — La Ruta de Sissi:" },
      { time: "09:00", text: "Baden-Baden: termas, Casino, funicular Monte Merkur (~7€)" },
    ],
    highlights: "Último día completo del viaje con tres opciones a elegir por el grupo. Estrasburgo ofrece la catedral gótica más impresionante de Francia, el barrio Petite France y cruceros Batorama. Baden-Baden es la ciudad termal por excelencia con su Casino histórico y el funicular del Monte Merkur.",
  },
  {
    day: 8,
    date: "6 Oct (Lunes)",
    route: "Gengenbach → Basilea → Málaga",
    title: "Regreso a Málaga",
    image: "/images/dia8-regreso.jpg",
    alt: "Aeropuerto de Basilea con avión despegando al atardecer",
    tags: ["Vuelo directo", "Llegada ~17:30"],
    schedule: [
      { time: "08:00", text: "Check-out Villa Beckmann · Desayuno" },
      { time: "09:30", text: "Tren Gengenbach → Offenburg → Basilea (~1h 15min)" },
      { time: "11:00", text: "Llegada a Basilea SBB · Bus Línea 50 al aeropuerto (GRATIS)" },
      { time: "11:30", text: "Aeropuerto EuroAirport Basel-Mulhouse" },
      { time: "14:00", text: "Vuelo EasyJet Basilea → Málaga" },
      { time: "~17:30", text: "Llegada a Málaga" },
    ],
    highlights: "Despedida de la Selva Negra. El bus Línea 50 desde la estación de Basilea al aeropuerto es gratuito con el billete de tren. El vuelo directo a Málaga dura unas 2h 30min.",
  },
];

export default function ItinerarySection() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <section id="itinerario" className="section-padding bg-background" aria-label="Itinerario completo">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">8 Días de Aventura</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Itinerario Completo</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Cada día cuidadosamente planificado para disfrutar al máximo de Suiza y la Selva Negra. Pulsa en cada día para ver los horarios detallados.
        </p>

        <div className="mt-12 space-y-8">
          {days.map((d) => {
            const isExpanded = expandedDay === d.day;
            return (
              <div
                key={d.day}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Image header */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg">
                        {d.day}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white/80">{d.date}</p>
                        <h3 className="text-lg font-bold text-white sm:text-xl">{d.title}</h3>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-white/70">📍 {d.route}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {d.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        ★ {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{d.highlights}</p>

                  <button
                    onClick={() => setExpandedDay(isExpanded ? null : d.day)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Ocultar horarios ▲" : "Ver horarios detallados ▼"}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 rounded-xl bg-surface p-4 fade-in">
                      <h4 className="text-sm font-bold text-foreground mb-3">🕐 Horario del día</h4>
                      <div className="space-y-2">
                        {d.schedule.map((s, i) => (
                          <div key={i} className="flex gap-3 text-sm">
                            <span className="w-14 shrink-0 font-mono font-semibold text-accent text-right">
                              {s.time || ""}
                            </span>
                            <span className={`text-foreground ${!s.time ? "font-bold text-primary" : ""}`}>
                              {s.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
