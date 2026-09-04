import mouettesLogo from "../assets/mouettes-logo.webp.asset.json";

const lines = [
  {
    code: "M1",
    color: "#1B4F9C",
    route: "Pâquis ↔ Molard",
    freq: "cada 10 min",
    desc: "Cruza el centro del puerto y conecta la orilla derecha (Pâquis) con la izquierda (Molard).",
  },
  {
    code: "M2",
    color: "#E1433C",
    route: "Pâquis ↔ Eaux-Vives (Quai Gustave-Ador)",
    freq: "cada 10 min",
    desc: "Conecta Les Pâquis con el barrio de Eaux-Vives, en la orilla izquierda.",
  },
  {
    code: "M3",
    color: "#2E8B57",
    route: "Pâquis ↔ Genève-Plage / Port Noir",
    freq: "cada 30 min",
    desc: "Recorre la orilla izquierda desde Les Pâquis hasta Genève-Plage.",
  },
  {
    code: "M4",
    color: "#9061C2",
    route: "Genève-Plage / Port Noir ↔ De-Chateaubriand",
    freq: "cada 30 min",
    desc: "Une Genève-Plage con el muelle De-Chateaubriand, junto al parque Perle du Lac.",
  },
];

const recommendations = [
  {
    rank: "1",
    code: "M4",
    color: "#9061C2",
    title: "La más panorámica y bonita",
    points: [
      "Paisaje abierto: la travesía más larga (~1,6 km) cruza la zona más ancha de la bahía, con panorámicas despejadas del agua y las montañas.",
      "Conexión de parques: une el Parc de La Perle du Lac (orilla derecha) con la zona arbolada de Genève-Plage / Port-Noir (orilla izquierda).",
    ],
  },
  {
    rank: "2",
    code: "M2",
    color: "#E1433C",
    title: "La más icónica y fotogénica",
    points: [
      "Pasa muy cerca del Jet d'Eau: se siente la brisa y se fotografía el chorro desde una perspectiva cercana.",
      "Llega a Eaux-Vives, a pocos minutos a pie del Jardín Inglés y su Reloj de Flores.",
    ],
  },
  {
    rank: "3",
    code: "M3",
    color: "#2E8B57",
    title: "Travesía diagonal",
    points: [
      "Recorrido diagonal de 1,5 km desde el animado distrito de Les Pâquis hasta Genève-Plage.",
      "Buenas vistas del conjunto del puerto y, en días despejados, del Mont Blanc a lo lejos.",
    ],
  },
  {
    rank: "4",
    code: "M1",
    color: "#1B4F9C",
    title: "Conexión rápida de transporte",
    points: [
      "La ruta más corta (600 m): Les Pâquis con la Place du Molard, junto al centro comercial y el casco antiguo.",
      "Ideal para cruzar rápido, pero al ir por el puerto interior la perspectiva del paisaje es más reducida.",
    ],
  },
];

export default function MouettesGenevoises() {
  return (
    <div className="rounded-xl border border-border bg-surface/80 p-4">
      <div className="flex flex-wrap items-center gap-3">
        <img
          src={mouettesLogo.url}
          alt="Logotipo de Mouettes Genevoises"
          className="h-10 w-auto"
          loading="lazy"
        />
        <h4 className="text-sm font-bold text-foreground">
          ⛴️ Cómo moverte por el lago: Las Mouettes Genevoises
        </h4>
      </div>

      <p className="mt-3 text-sm text-foreground leading-relaxed">
        Las Mouettes Genevoises son el servicio de barcos-taxi que cruza la rada de Ginebra desde 1897,
        con una flota 100% eléctrico-solar y 4 líneas en funcionamiento todo el año. Están integradas en
        la red Unireso: válidas con billete TPG/CFF (y gratis con la Geneva Transport Card).
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {lines.map((l) => (
          <div
            key={l.code}
            className="rounded-lg border border-border bg-card p-3"
            style={{ borderLeftWidth: 6, borderLeftColor: l.color }}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sm font-bold text-white"
                style={{ backgroundColor: l.color }}
              >
                {l.code}
              </span>
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">{l.route}</p>
                <p className="text-xs text-muted-foreground">🕒 {l.freq}</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{l.desc}</p>
          </div>
        ))}
      </div>

      <a
        href="https://www.mouettesgenevoises.ch"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
      >
        Ver horarios y tarifas ↗
      </a>

      <div className="mt-5">
        <h5 className="text-sm font-bold text-foreground">¿Cuál es la ruta más bonita?</h5>
        <p className="mt-1 text-xs text-muted-foreground">
          La ruta más aconsejable varía según lo que busques durante el paseo.
        </p>
        <div className="mt-3 space-y-3">
          {recommendations.map((r) => (
            <div key={r.code} className="rounded-lg border border-border bg-card p-3">
              <div className="flex items-center gap-2">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.code}
                </span>
                <p className="text-sm font-semibold text-foreground">
                  {r.rank}. {r.title}
                </p>
              </div>
              <ul className="mt-2 space-y-1">
                {r.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                    <span className="text-accent shrink-0">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-3 rounded-lg border border-accent/30 bg-accent/5 p-3 text-sm text-foreground">
          💡 Recomendación: para disfrutar del paisaje y un paseo relajante por el lago, la <strong>Línea M4</strong> es
          la más bonita. Si prefieres la vista del Jet d'Eau, la <strong>Línea M2</strong> es la mejor opción.
        </p>
      </div>
    </div>
  );
}
