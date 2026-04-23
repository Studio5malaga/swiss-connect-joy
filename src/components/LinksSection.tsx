const linkGroups = [
  {
    title: "Transporte y Pases",
    links: [
      { label: "SBB.ch — Ferrocarriles Suizos", url: "https://www.sbb.ch/en" },
      { label: "Swiss Travel Pass (MySwitzerland)", url: "https://www.myswitzerland.com/es-es/planificacion/ofertas/swiss-travel-pass/" },
      { label: "DB — Tarifa de grupo (Alemania)", url: "https://int.bahn.de/es/ofertas/tarifa-de-precio-reducido-precio-flexible/tarifa-de-precio-reducido-para-grupos" },
      { label: "CGN — Barcos Lago Lemán", url: "https://www.cgn.ch/en/horaires-billets" },
      { label: "BLS — Barcos Lago de Brienz", url: "https://www.bls-schiff.ch/en/lake-cruise/timetable/boat-schedule" },
    ],
  },
  {
    title: "Experiencias y Trenes",
    links: [
      { label: "Tren Belle Époque (MOB)", url: "https://www.mob.ch/en/stories/belle-epoque" },
      { label: "Funicular Cataratas Reichenbach", url: "https://www.grimselwelt.ch/en/railways/reichenbachfall-bahn/" },
      { label: "Teleférico Schauinsland", url: "https://www.schauinslandbahn.de/en" },
      { label: "Funicular Monte Merkur", url: "https://www.stadtwerke-baden-baden.de/de/mobilitaet-freizeit/merkurbahn/" },
    ],
  },
  {
    title: "Actividades y Puntos de Interés",
    links: [
      { label: "Grindelwald First", url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/" },
      { label: "Castillo de Chillon", url: "https://www.chillon.ch/visite/" },
      { label: "Cataratas de Triberg", url: "https://www.triberg.de/english/tourismus-1/natural-experience-1/germanys-highest-waterfalls-1" },
      { label: "Museo Sherlock Holmes", url: "https://sherlockholmes.ch/de/Info/Museum" },
      { label: "Castillo Haut-Koenigsbourg", url: "https://www.haut-koenigsbourg.fr/en/" },
    ],
  },
];

export default function LinksSection() {
  return (
    <section className="section-padding bg-background" aria-label="Enlaces útiles">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Logística</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Enlaces Útiles</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Todos los enlaces oficiales organizados por categoría.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {linkGroups.map(g => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-bold text-foreground">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.links.map(l => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
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
