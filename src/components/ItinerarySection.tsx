const days = [
  { day: 1, date: "29 Sep", route: "Ginebra → Kandersteg", title: "Llegada a Ginebra y Kandersteg", desc: "Vuelo de Málaga a Ginebra. Tren panorámico bordeando el Lago Lemán hasta Kandersteg. Instalación en el Chalet-Hotel Adler.", tags: ["Lago Lemán", "Valle plano"] },
  { day: 2, date: "30 Sep", route: "Kandersteg → Montreux → Kandersteg", title: "Castillo de Chillon & Barco de Vapor", desc: "El día estrella: tren GoldenPass Belle Époque, Castillo de Chillon (gratis con pase) y regreso en barco de vapor histórico.", tags: ["GoldenPass Belle Époque", "Castillo medieval", "Barco de vapor"] },
  { day: 3, date: "1 Oct", route: "Kandersteg → Meiringen → Blausee", title: "Sherlock Holmes, Cataratas & Lago Azul", desc: "Funicular histórico de 1899 a las cataratas de Reichenbach, museo Sherlock Holmes (gratis), barco por el Lago Brienz y el mágico Blausee.", tags: ["Funicular 1899", "Museo gratis", "Lago turquesa"] },
  { day: 4, date: "2 Oct", route: "Kandersteg → Grindelwald → Gengenbach", title: "Grindelwald First & Viaje a Alemania", desc: "Mañana de adrenalina en el Cliff Walk de Grindelwald First. Por la tarde, cruce de Suiza a Alemania en el ICE hasta Gengenbach.", tags: ["Cliff Walk", "ICE alemán", "Pueblo de cuento"] },
  { day: 5, date: "3 Oct", route: "Gengenbach → Triberg → Gengenbach", title: "Cascadas, Reloj Gigante & Tarta Selva Negra", desc: "Mercado local por la mañana, cascadas más altas de Alemania, el reloj de cuco gigante y la auténtica tarta Selva Negra.", tags: ["Cascadas monumentales", "Reloj de cuco", "Tarta original"] },
  { day: 6, date: "4 Oct", route: "Gengenbach → Friburgo", title: "Friburgo, Canales & Monte Schauinsland", desc: "La ciudad de los Bächle (canales), catedral gótica, salchicha típica 'Lange Rote' y vistas desde el teleférico más largo de Alemania.", tags: ["Bächle medievales", "Teleférico", "Salchicha típica"] },
  { day: 7, date: "5 Oct", route: "A elección del grupo", title: "Día Libre: Tres Opciones", desc: "Aventura imperial (castillo + Estrasburgo), Esplendor alsaciano (solo Estrasburgo) o La Ruta de Sissi (Baden-Baden).", tags: ["3 opciones", "Francia o Alemania"] },
  { day: 8, date: "6 Oct", route: "Gengenbach → Basilea → Málaga", title: "Regreso a Málaga", desc: "Despedida de la Selva Negra. Tren a Basilea, bus al aeropuerto y vuelo de regreso a Málaga.", tags: ["Vuelo directo", "Llegada 17:30"] },
];

export default function ItinerarySection() {
  return (
    <section id="itinerario" className="section-padding bg-background" aria-label="Itinerario completo">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">8 Días de Aventura</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Itinerario Completo</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Cada día cuidadosamente planificado para disfrutar al máximo de Suiza y la Selva Negra.</p>

        <div className="mt-12 space-y-6">
          {days.map((d, i) => (
            <div key={d.day} className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                  {d.day}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                    <span className="text-xs font-semibold text-accent">{d.date}</span>
                    <span className="text-xs text-muted-foreground">{d.route}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{d.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {d.tags.map(t => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">★ {t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
