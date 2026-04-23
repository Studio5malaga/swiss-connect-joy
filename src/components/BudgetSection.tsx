const items = [
  { category: "Vuelos", amount: "210€", details: ["EasyJet Málaga-Ginebra (ida) — 133€", "EasyJet Basilea-Málaga (vuelta) — 77€"], pct: 15 },
  { category: "Transporte", amount: "315€", details: ["Swiss Travel Pass (4 días flex) — 289€", "ICE Basilea-Offenburg + DB grupo — ~26€", "KONUS Card — GRATIS", "Bus aeropuerto Basilea — GRATIS"], pct: 23 },
  { category: "Alojamiento", amount: "382,71€", details: ["Chalet-Hotel Adler (4 noches) — 202,71€", "Villa Beckmann (3 noches) — 180€"], pct: 28 },
  { category: "Comidas", amount: "300€", details: ["Desayunos incluidos — GRATIS", "Súper + comidas y 3 cenas fuera — 300€"], pct: 22 },
  { category: "Actividades", amount: "170€", details: ["Teleférico Grindelwald First — 34€", "Cascadas Triberg + Reloj — 10€", "Funicular Reichenbach — 12€", "Blausee — 12€", "Teleférico Schauinsland — 15€", "Funicular Monte Merkur — 7€", "Europa-Park (opcional) — 80€"], pct: 12 },
];

export default function BudgetSection() {
  return (
    <section id="presupuesto" className="section-padding bg-background" aria-label="Presupuesto">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Presupuesto</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Desglose de Gastos</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Presupuesto real por persona basado en reservas confirmadas.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(it => (
            <div key={it.category} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground">{it.category}</h3>
                <span className="text-xl font-extrabold text-primary">{it.amount}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: `${it.pct}%` }} />
              </div>
              <ul className="mt-4 space-y-1">
                {it.details.map(d => (
                  <li key={d} className="text-xs text-muted-foreground">{d}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg sm:col-span-2 lg:col-span-1">
            <span className="text-sm font-semibold uppercase tracking-widest opacity-80">Total por persona</span>
            <span className="mt-2 text-4xl font-extrabold">1.377,71€</span>
            <span className="mt-1 text-sm opacity-80">Total grupo (7): 9.643,97€</span>
            <div className="mt-4 rounded-lg bg-primary-foreground/10 px-4 py-2 text-center text-xs">
              Ahorro de 38€/persona vs. propuesta original
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
