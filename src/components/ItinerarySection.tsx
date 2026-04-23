import { useState } from "react";

const days = [
  {
    day: 1,
    date: "29 Sep (Lunes)",
    route: "Málaga → Ginebra → Kandersteg",
    title: "Llegada y el Dilema del Vuelo",
    image: "/images/dia1-ginebra-kandersteg.jpg",
    alt: "Tren panorámico junto al Lago Lemán con Alpes al fondo",
    tags: ["Lago Lemán", "Valle plano", "Chalet-Hotel Adler"],
    highlights:
      "El primer día marca el tono de toda la aventura. Tenéis dos opciones reales de vuelo, cada una con sus ventajas. La clave está en decidir si preferís el madrugón para ganar un día completo en Ginebra o ir más descansados. El tren bordea todo el Lago Lemán — es un viaje panorámico en sí mismo.",
    sections: [
      {
        title: "✈️ Opción A — Vuelo Relajado (12:15)",
        content: [
          "Llegada: 15:00 a Ginebra",
          "No hay que madrugar",
          "Llegada cómoda al hotel",
          "Ginebra solo se ve «de pasada»",
          "Check-in límite 21:00h (Suiza es muy estricta)",
        ],
      },
      {
        title: "🌅 Opción B — Vuelo Explorador (06:00 AM) — solo 27 €",
        content: [
          "Llegada: 08:30 aprox.",
          "Todo el día en Ginebra",
          "Paseo por el casco antiguo y el Jet d'Eau",
          "Tren a Kandersteg sin prisas a media tarde",
          "Hay que estar en el aeropuerto de Málaga a las 04:30 AM",
        ],
      },
      {
        title: "🚂 Logística: Ginebra → Kandersteg",
        content: [
          "1️⃣ Llegada al aeropuerto de Ginebra",
          "2️⃣ Validar el Swiss Travel Pass en la estación ferroviaria",
          "3️⃣ Tren panorámico Ginebra → Visp → Kandersteg (2h 45min)",
          "4️⃣ Llegada a pie al Chalet-Hotel Adler (5-7 min en llano, sin cuestas)",
        ],
      },
    ],
    tip: "💡 ¿Por qué Kandersteg es perfecto? A diferencia de Wengen (con muchas cuestas), Kandersteg es un pueblo en un valle plano. El Lago Oeschinen tiene un microbús eléctrico que lleva hasta la orilla. El hotel tiene piscina y spa para descansar las piernas cada noche (15 €/día).",
  },
  {
    day: 2,
    date: "30 Sep (Martes)",
    route: "Kandersteg → Zweisimmen → Montreux → Kandersteg",
    title: "El GoldenPass Belle Époque, Castillo de Chillon & Barco de Vapor",
    image: "/images/dia2-chillon-barco.jpg",
    alt: "Castillo de Chillon junto al Lago Lemán con tren Belle Époque",
    tags: ["GoldenPass Belle Époque", "Castillo medieval", "Barco de vapor", "Freddie Mercury"],
    highlights:
      "El día estrella del viaje. El GoldenPass Belle Époque no es un tren normal; es una joya histórica inspirada en el Orient Express de los años 30. Vagones de madera noble, terciopelo azul y verde, ventanales gigantes. El tren desciende desde los picos alpinos hasta la orilla del Lago Lemán.",
    sections: [
      {
        title: "🚂 Tren GoldenPass Belle Époque",
        content: [
          "Salida: 12:02 desde Zweisimmen",
          "Llegada a Montreux: 14:11",
          "Coste billete: 0 € (Swiss Travel Pass)",
          "Reserva asientos: ~10 €/persona (recomendado para ir los 7 juntos)",
        ],
      },
      {
        title: "🏰 Castillo de Chillon & Barco de Vapor",
        content: [
          "El monumento histórico más visitado de Suiza",
          "Prisiones, salas de banquetes y torres con vistas al lago",
          "Entrada castillo: GRATIS (Swiss Travel Pass = Pase de Museos)",
          "Barco de vapor CGN: GRATIS (incluido en el pase) — ruedas de madera laterales",
          "Tarde: Paseo por el muelle — estatua de Freddie Mercury",
          "Final del día: Piscina y spa en el hotel Adler",
        ],
      },
    ],
    savings: { label: "Ahorro Total Día 2", amount: "~90 €", detail: "Solo gastaréis en comida" },
  },
  {
    day: 3,
    date: "1 Oct (Miércoles)",
    route: "Kandersteg → Meiringen → Brienz → Blausee → Kandersteg",
    title: "Sherlock Holmes, Lago de Brienz & Blausee",
    image: "/images/dia3-sherlock-blausee.jpg",
    alt: "Cataratas de Reichenbach y Blausee, lago turquesa en Suiza",
    tags: ["Funicular 1899", "Museo gratis", "Lago turquesa", "Barco Lago Brienz"],
    highlights:
      "Meiringen, el pueblo de Sherlock Holmes. El funicular de madera de 1899 sube a las Cataratas Reichenbach, donde Holmes tuvo su «enfrentamiento final». Luego, crucero por el turquesa Lago de Brienz y visita al mágico Blausee.",
    sections: [
      {
        title: "🔍 Meiringen & Cataratas Reichenbach",
        content: [
          "Tren Kandersteg → Meiringen (~1h)",
          "Funicular histórico de 1899 a las Cataratas Reichenbach (~11,50 CHF con descuento del pase)",
          "Museo Sherlock Holmes: GRATIS (ahorro de 7 CHF/persona)",
        ],
      },
      {
        title: "🚢 Barco por el Lago de Brienz",
        content: [
          "Barco Lago de Brienz: GRATIS — ahorro de +200 € para el grupo",
          "El agua tiene un tono azul turquesa brillante (partículas de glaciar)",
          "Veréis las Cataratas de Giessbach y pueblitos típicos como Iseltwald",
          "Logística: Trayecto Brienz → Interlaken Ost, ~1h 15min. Frecuencia cada hora",
          "Sin reservas: solo enseñar el Swiss Travel Pass al subir. Totalmente accesible",
        ],
      },
      {
        title: "💎 El Blausee (Lago Azul) — El Broche de Oro",
        content: [
          "Azul eléctrico increíble — se ven troncos hundidos y truchas a varios metros",
          "Estatua hundida: leyenda de una joven cuyas lágrimas volvieron azul el lago",
          "Paseo en barca con fondo de cristal incluido con la entrada",
          "Bus 230 desde Kandersteg: solo 8-10 min. GRATIS con el pase",
          "Camino 100% llano desde la entrada al lago (200 metros)",
          "Tarifas: L-V adultos 11 CHF (~11,50 €) | Fines de semana 13 CHF (~13,50 €) | Niños 7-9 CHF",
        ],
      },
    ],
    tip: "💡 Dato curioso: Meiringen es famoso por sus merengues — ¡dicen que se inventaron allí! Con lo que ahorramos en transporte, podemos permitirnos una buena merienda en la pastelería local.",
    savings: { label: "Ahorro Total Día 3", amount: "~80 €", detail: "Transporte + museos cubiertos" },
  },
  {
    day: 4,
    date: "2 Oct (Jueves)",
    route: "Kandersteg → Interlaken → Grindelwald → Basilea → Gengenbach",
    title: "De los Glaciares Suizos a la Selva Negra",
    image: "/images/dia4-grindelwald-first.jpg",
    alt: "First Cliff Walk en Grindelwald, pasarela suspendida sobre los Alpes suizos",
    tags: ["Cliff Walk", "ICE alemán", "Pueblo de cuento", "Consigna maletas"],
    highlights:
      "El día más intenso del viaje: despedida épica de Suiza con el Cliff Walk del Eiger y luego el gran salto a Alemania en el tren ICE más rápido del país.",
    sections: [
      {
        title: "🏔️ Mañana: Grindelwald First",
        content: [
          "Salida temprana hacia Grindelwald (2h de tren)",
          "Teleférico con 50% de descuento con Swiss Travel Pass (~34 €/persona)",
          "Cliff Walk: pasarela metálica pegada al acantilado con vistas a la pared norte del Eiger",
          "GRATIS una vez arriba",
        ],
      },
      {
        title: "🧳 Mediodía: Logística de Maletas",
        content: [
          "Dejar maletas en consignas de Interlaken Ost por la mañana (ir ligeros a Grindelwald)",
          "Recogerlas antes de subir al tren hacia Alemania",
          "Coste: ~7-10 € por taquilla grande",
        ],
      },
      {
        title: "🚄 Tarde: El Gran Tren Alemán (ICE 276)",
        content: [
          "Ruta: Interlaken → Basilea (GRATIS con Swiss Pass) → Offenburg → Gengenbach",
          "El ICE 276 cruza la frontera a 250 km/h",
          "Asientos amplios, Wi-Fi gratis y vagón restaurante",
          "Precio tramo alemán: ~20 €/persona",
        ],
      },
      {
        title: "🏡 Noche: Llegada a Gengenbach",
        content: [
          "Pueblo de cuento de hadas con calles empedradas y casas de madera",
          "Check-in en Villa Beckmann a partir de las 16:00h",
          "Cena típica alemana: codillo, salchichas y cerveza local",
        ],
      },
    ],
    costs: [
      { concept: "Teleférico Grindelwald First (50% dto.)", pp: "~34 €", group: "~238 €" },
      { concept: "Tren a Alemania (Basilea → Gengenbach)", pp: "~20-30 €", group: "~140-210 €" },
      { concept: "Consigna maletas Interlaken Ost", pp: "~7-10 €", group: "~21-30 €" },
      { concept: "Tramo suizo (Interlaken → Basilea)", pp: "0 € (Swiss Pass)", group: "0 €" },
    ],
    tip: '💡 Truco para grupos: Buscad la "Sparpreis Gruppe" (Tarifa reducida para grupos) en la web de Deutsche Bahn. Suele salir por unos 9,99 €/persona si se reserva con tiempo.',
  },
  {
    day: 5,
    date: "3 Oct (Viernes)",
    route: "Gengenbach → Triberg → Gengenbach",
    title: "Triberg: Cascadas, Reloj de Cuco & Tarta Selva Negra",
    image: "/images/dia5-triberg-cascadas.jpg",
    alt: "Cascadas de Triberg y reloj de cuco gigante en la Selva Negra",
    tags: ["Cascadas 163m", "Reloj de cuco gigante", "Tarta original 1915", "KONUS gratis"],
    highlights:
      "Dos días para descubrir los secretos de la Selva Negra. Todo con transporte gratuito gracias a la tarjeta KONUS.",
    sections: [
      {
        title: "🌊 Cascadas de Triberg",
        content: [
          "Las más altas de Alemania, con siete niveles de caída",
          "Paseo agradable por el bosque",
          "¡Llevad cacahuetes! Hay ardillas muy simpáticas que se acercan a comer de la mano",
          "Entrada: ~8 €/persona",
          "Tren Gengenbach → Triberg: ~30 min, GRATIS con KONUS",
        ],
      },
      {
        title: "⏰ El Reloj de Cuco Gigante — Eble Uhren-Park (Schonach)",
        content: [
          "Un reloj de cuco del tamaño de una casa",
          "Podéis entrar dentro para ver los engranajes gigantes de madera",
          "Cada media hora sale el pájaro gigante a cantar",
          "Entrada: ~2 €/persona",
        ],
      },
      {
        title: "🍰 Tarta Selva Negra — Café Schäfer",
        content: [
          "Se guarda la receta original de 1915",
          "Tarta con mucha nata, chocolate y cerezas al licor (Kirsch)",
          "~5-7 € la porción — ¡Imprescindible!",
        ],
      },
    ],
    afternoonOptions: {
      title: "Opciones de Tarde (Día 5 o 6)",
      options: [
        {
          label: "OPCIÓN A — «Vistas de Infarto»",
          desc: "El Púlpito del Diablo. Ruta de senderismo desde Gengenbach. Subida de 1h entre viñedos para ver el atardecer. Coste: 0 € | Esfuerzo: Medio.",
        },
        {
          label: "OPCIÓN B — «Viaje al Pasado»",
          desc: "Museo Vogtsbauernhof. Granjas históricas de la Selva Negra. Ideal para ver cómo vivían hace 600 años. Coste: 13 € | Esfuerzo: Bajo.",
        },
        {
          label: "OPCIÓN C — Monte Schauinsland",
          desc: "El teleférico más largo de Alemania. Desde arriba se ve toda la Selva Negra y, en días claros, incluso los Alpes suizos. Coste: ~15 € ida y vuelta.",
        },
      ],
    },
  },
  {
    day: 6,
    date: "4 Oct (Sábado)",
    route: "Gengenbach → Friburgo → Gengenbach",
    title: "Friburgo de Brisgovia: Canales, Catedral & Schauinsland",
    image: "/images/dia6-friburgo-canales.jpg",
    alt: "Bächle (canales medievales) de Friburgo con catedral gótica al fondo",
    tags: ["Bächle medievales", "Catedral gótica", "KONUS gratis", "Mercado sábado"],
    highlights:
      "La capital ecológica de Alemania. Ciudad universitaria llena de vida, con canales que corren por las aceras y un casco antiguo precioso. Tren desde Gengenbach: ~1 hora, GRATIS con la tarjeta KONUS.",
    sections: [
      {
        title: "🏛️ Friburgo Centro",
        content: [
          "Catedral gótica de piedra arenisca roja con torre de 116m",
          "La plaza del mercado que la rodea es donde está todo el ambiente",
          "Los Bächle: pequeños canales de agua que recorren las calles del centro",
          "¡Quien mete el pie en un Bächle, se casa con alguien de Friburgo!",
        ],
      },
      {
        title: "🌭 Gastronomía Local",
        content: [
          "«Lange Rote»: la salchicha típica de Friburgo",
          "La venden en puestos rojos en la misma plaza del mercado",
          "~4,50 € — la forma más auténtica de comer como un local",
        ],
      },
      {
        title: "🛒 Mercado de Sábado en Gengenbach",
        content: [
          "De 8:00 a 12:00 en la plaza del ayuntamiento",
          "Productos frescos de la zona: quesos, embutidos y pan artesano",
          "Ideal para comprar desayunos o cenas para la Villa",
        ],
      },
    ],
  },
  {
    day: 7,
    date: "5 Oct (Domingo)",
    route: "A elección del grupo",
    title: "El Gran Cierre — 3 Opciones",
    image: "/images/dia7-opciones.jpg",
    alt: "Tres destinos opcionales: Estrasburgo, Baden-Baden y Castillo Haut-Koenigsbourg",
    tags: ["3 opciones", "Día libre", "Francia o Alemania"],
    highlights:
      "Nuestro último día completo. Tenemos 3 opciones muy distintas. En todas ellas la base es Gengenbach y el transporte es principalmente en tren. Elegid según el ritmo y las ganas del grupo.",
    sections: [
      {
        title: "🏰 Opción 1-A: Aventura Imperial — Castillo + Estrasburgo",
        content: [
          "Mañana: Castillo de Haut-Koenigsbourg (Francia). Salas del trono, cocinas reales y murallas con cañones",
          "Tarde: Estrasburgo — Catedral y canales de la «Petite France»",
          "Transporte: ~12-15 €/persona",
          "Entrada castillo: 12 € adultos / 8 € niños",
          "Coste total estimado: ~27 €/persona",
        ],
      },
      {
        title: "🏘️ Opción 1-B: Esplendor Alsaciano — Solo Estrasburgo",
        content: [
          "Todo el día: Petite France, Catedral de Notre-Dame y su reloj astronómico",
          "Opcional: Paseo en barco por los canales (Batorama, 15 €/persona)",
          "Transporte: ~5-7 €/persona",
          "Muy relajado, sin prisas por horarios",
          "Coste total estimado: ~7 €/persona",
        ],
      },
      {
        title: "👑 Opción 2: La Ruta de Sissi — Baden-Baden + Monte Merkur",
        content: [
          "Mañana: Lichtentaler Allee en Baden-Baden — el parque de lujo donde la Emperatriz Sissi paseaba a diario",
          "Tarde: Funicular Merkurberg a la cima de la montaña",
          "Transporte: 0 € (TOTALMENTE GRATIS con KONUS)",
          "Funicular Merkur: 6 € ida y vuelta",
          "Coste total estimado: ~6 €/persona",
        ],
      },
    ],
    tip: "En todas las opciones, el gasto principal será la comida. El transporte está cubierto total o parcialmente por la tarjeta KONUS.",
  },
  {
    day: 8,
    date: "6 Oct (Lunes)",
    route: "Gengenbach → Basilea → Málaga",
    title: "Regreso a Málaga",
    image: "/images/dia8-regreso.jpg",
    alt: "Aeropuerto de Basilea con avión despegando al atardecer",
    tags: ["Vuelo directo", "Llegada ~17:30"],
    highlights:
      "El último día es sencillo y bien organizado. Desayuno tranquilo, cierre de maletas y un trayecto cómodo hasta el aeropuerto de Basilea.",
    sections: [
      {
        title: "🕐 Horarios Clave del Día",
        content: [
          "Desayuno y cierre de maletas en Villa Beckmann",
          "Tren regional Gengenbach → Basilea: 09:30-10:30",
          "Autobús Línea 50 a EuroAirport: cada 7-10 min",
          "Vuelo Basilea → Málaga: salida 15:00 — llegada ~17:30",
        ],
      },
      {
        title: "💰 Costes del Último Día",
        content: [
          "Tren Gengenbach → Basilea: 0 € (tarjeta KONUS)",
          "Bus Línea 50 al Aeropuerto: 5 € (4,70 CHF)",
          "Vuelo Basilea → Málaga: 77 €",
          "Total aproximado: ~82 € por persona",
        ],
      },
    ],
    tip: "⚠️ Cuidado con la estación en Basilea: Al venir de Alemania, el tren suele parar primero en Basel Bad Bf. Para coger el bus 50 al aeropuerto más fácilmente, aseguraos de llegar hasta la estación principal Basel SBB. Haced el check-in online el día 7 para evitar colas.",
  },
];

export default function ItinerarySection() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <section id="itinerario" className="section-padding" aria-label="Itinerario completo">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          8 Días de Aventura
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Itinerario Completo
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Cada día cuidadosamente planificado para disfrutar al máximo de Suiza y la Selva Negra.
          Pulsa en cada día para ver todos los detalles, horarios y costes.
        </p>

        <div className="mt-12 space-y-8">
          {days.map((d) => {
            const isExpanded = expandedDay === d.day;
            return (
              <div
                key={d.day}
                className="group overflow-hidden rounded-2xl border border-border bg-card/90 backdrop-blur-sm shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Image header */}
                <div className="relative h-56 sm:h-72 overflow-hidden">
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
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        ★ {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{d.highlights}</p>

                  {d.savings && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700">
                      💰 {d.savings.label}: {d.savings.amount} — {d.savings.detail}
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedDay(isExpanded ? null : d.day)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Ocultar detalles ▲" : "Ver todos los detalles ▼"}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-4 fade-in">
                      {d.sections?.map((sec, i) => (
                        <div key={i} className="rounded-xl bg-surface/80 p-4">
                          <h4 className="text-sm font-bold text-foreground mb-2">{sec.title}</h4>
                          <ul className="space-y-1.5">
                            {sec.content.map((line, j) => (
                              <li key={j} className="flex gap-2 text-sm text-foreground">
                                <span className="text-accent shrink-0">•</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {d.costs && (
                        <div className="rounded-xl bg-surface/80 p-4">
                          <h4 className="text-sm font-bold text-foreground mb-2">💰 Desglose de Costes</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-border">
                                  <th className="text-left py-1.5 font-semibold text-foreground">Concepto</th>
                                  <th className="text-right py-1.5 font-semibold text-foreground">Por persona</th>
                                  <th className="text-right py-1.5 font-semibold text-foreground">Grupo (7)</th>
                                </tr>
                              </thead>
                              <tbody>
                                {d.costs.map((c, j) => (
                                  <tr key={j} className="border-b border-border/50">
                                    <td className="py-1.5 text-muted-foreground">{c.concept}</td>
                                    <td className="py-1.5 text-right font-mono text-foreground">{c.pp}</td>
                                    <td className="py-1.5 text-right font-mono text-foreground">{c.group}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {d.afternoonOptions && (
                        <div className="rounded-xl bg-surface/80 p-4">
                          <h4 className="text-sm font-bold text-foreground mb-3">
                            🌅 {d.afternoonOptions.title}
                          </h4>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {d.afternoonOptions.options.map((opt, j) => (
                              <div key={j} className="rounded-lg border border-border bg-card p-3">
                                <p className="font-semibold text-sm text-primary mb-1">{opt.label}</p>
                                <p className="text-xs text-muted-foreground">{opt.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {d.tip && (
                        <div className="rounded-xl border border-accent/30 bg-accent/5 p-4">
                          <p className="text-sm text-foreground leading-relaxed">{d.tip}</p>
                        </div>
                      )}
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
