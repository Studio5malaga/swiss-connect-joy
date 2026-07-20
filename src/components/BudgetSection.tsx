import { usePlan } from "../context/PlanContext";

type Row = { concept: string; amount: number; note?: string };

function buildBreakdown(plan: "A" | "B", profile: "senior" | "junior", pass: "4d" | "3d"): {
  rows: Row[];
  total: number;
} {
  const stp = pass === "4d" ? 344 : 283;

  // Transporte ida + vuelta
  let transport: Row[] = [];
  if (plan === "A") {
    transport = [
      {
        concept: "Vuelo Málaga → Ginebra (09:40 → 12:00)",
        amount: profile === "senior" ? 189 : 150,
        note: profile === "senior" ? "Maleta 23 kg facturada" : "Sin maleta facturada",
      },
      {
        concept: "Vuelo Basilea → Málaga (21:30 → 00:20)",
        amount: profile === "senior" ? 129 : 45,
        note: profile === "senior" ? "Maleta 23 kg facturada" : "Sin maleta facturada",
      },
    ];
  } else {
    transport = [
      { concept: "Tren Iryo Málaga → Barcelona (11:34 → 18:13)", amount: 65, note: "Maleta 23 kg incluida" },
      { concept: "Tren AVE Internacional Barcelona → Lyon (08:14 → 13:20)", amount: 55, note: "Maleta 23 kg incluida" },
      { concept: "Tren TER Lyon → Ginebra (12:38 → 14:40)", amount: 25 },
      { concept: "T-familiar (transporte urbano Barcelona)", amount: 2 },
      { concept: "Carnets TCL ×3 (transporte urbano Lyon)", amount: 7 },
      { concept: "Geneva Transport Card", amount: 0, note: "Gratuita con el hotel" },
      { concept: "Tarjeta KONUS (Selva Negra)", amount: 0, note: "Gratuita con alojamiento en Gengenbach" },
      { concept: "Bus Selva Negra → EuroAirport", amount: 7, note: "Basel SBB + bus 50 (~7,15 €) o Haltingen + bus 220 (5,80 €)" },
      {
        concept: "Vuelo Basilea → Málaga (21:00 → 00:20)",
        amount: profile === "senior" ? 129 : 45,
        note: profile === "senior" ? "easyJet U27022 · maleta 23 kg facturada" : "easyJet U27022 · sin maleta facturada",
      },
    ];
  }

  // Seguro
  const insurance: Row =
    profile === "senior"
      ? {
          concept: "Seguro Intermundial TotalTravel Seniors",
          amount: 49.86,
          note: "Incluye Sala VIP en aeropuertos",
        }
      : {
          concept: "Seguro IATI Estándar + Anulación + Reclamación Vuelos",
          amount: 50.25,
          note: "Alternativa: Intermundial TotalTravel Mini sin anulación · 26,29 €",
        };

  // Swiss Travel Pass
  const stpRow: Row = {
    concept: `Swiss Travel Pass (${pass === "4d" ? "4 días" : "3 días"})`,
    amount: stp,
    note: pass === "4d" ? "Precio oficial 2026: CHF 309 (2ª clase adulto) · aprox. 344 €" : "Precio oficial 2026: CHF 254 (2ª clase adulto) · aprox. 283 €",
  };

  // Alojamiento (precios por persona; basado en grupo de 6)
  let lodging: Row[] = [];
  if (plan === "A") {
    lodging = [
      { concept: "Ginebra · Nonanteneuf Appart Hôtel (2 noches)", amount: 126 },
      { concept: "Kandersteg · Alpen Chalet (3 noches)", amount: 121 },
      { concept: "Gengenbach · Villa Beckmann (4 noches)", amount: 221 },
    ];
  } else {
    lodging = [
      { concept: "Barcelona · Classic Gracia Apartments (2 noches)", amount: 103.83 },
      { concept: "Lyon · Appartement Vieux Lyon Terrasse (2 noches)", amount: 97.17, note: "+33 7 68 10 83 88" },
      { concept: "Ginebra · Hôtel Astoria (1 noche)", amount: 93.83, note: "+41 22 544 52 52" },
      { concept: "Kandersteg · Chalet-Hotel Adler (3 noches)", amount: 119.5, note: "+41 33 655 60 80" },
      { concept: "Gengenbach · Villa Beckmann (4 noches)", amount: 221.17 },
      { concept: "Funicular Giessbach (no cubierto por Swiss Travel Pass)", amount: 15.17 },
      { concept: "Blausee", amount: 13 },
      { concept: "Teleférico Grindelwald First (50% dto. STP · no gratis)", amount: 40 },
      { concept: "Cascadas Triberg", amount: 8.5 },
      { concept: "Eble Uhren-Park (reloj de cuco gigante)", amount: 3 },
      { concept: "Gran cierre · Funicular Merkur (Baden-Baden)", amount: 8.5, note: "Si elegís Estrasburgo: EUROPASS-Family + reloj astronómico ≈ +19 €/persona" },
    ];
  }

  const rows = [...transport, insurance, stpRow, ...lodging];
  const total = rows.reduce((s, r) => s + r.amount, 0);
  return { rows, total };
}

export default function BudgetSection() {
  const { plan, profile, pass } = usePlan();
  const { rows, total } = buildBreakdown(plan, profile, pass);

  return (
    <section id="presupuesto" className="section-padding bg-background" aria-label="Presupuesto">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Presupuesto
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Desglose · Plan {plan} · {profile === "senior" ? "Senior" : "Junior"}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Precios por persona basados en cotizaciones reales y tarifas oficiales revisadas. El total no incluye
          comidas, tasa turística local ni gastos varios.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-border bg-card/90 backdrop-blur-sm p-6 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-bold text-foreground">Concepto</th>
                  <th className="text-right py-2 font-bold text-foreground">€/persona</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.concept} className="border-b border-border/40">
                    <td className="py-2.5">
                      <p className="text-foreground">{r.concept}</p>
                      {r.note && <p className="text-xs text-muted-foreground mt-0.5">{r.note}</p>}
                    </td>
                    <td className="py-2.5 text-right font-mono font-semibold text-foreground whitespace-nowrap">
                      {r.amount.toFixed(2)} €
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 font-bold text-foreground">Subtotal por persona</td>
                  <td className="py-3 text-right font-mono font-extrabold text-primary text-lg">
                    {total.toFixed(2)} €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-primary p-8 text-primary-foreground shadow-lg">
            <span className="text-xs font-semibold uppercase tracking-widest opacity-80">
              Total estimado
            </span>
            <span className="mt-2 text-5xl font-extrabold">{Math.round(total)}€</span>
            <span className="mt-1 text-xs opacity-80">por persona (sin comidas)</span>
            <div className="mt-5 w-full space-y-2 rounded-lg bg-primary-foreground/10 p-4 text-xs">
              <p>👥 Grupo (6): ~{Math.round(total * 6).toLocaleString("es-ES")} €</p>
              <p>🛫 Plan {plan === "A" ? "A · Directo" : "B · Gran Tour"}</p>
              <p>🎫 {profile === "senior" ? "Senior premium" : "Junior estándar"}</p>
              <p>🚄 Swiss Pass {pass === "4d" ? "4 días" : "3 días"}</p>
            </div>
            <p className="mt-4 text-[11px] opacity-75 text-center leading-relaxed">
              + comidas, tasa turística local y gastos varios. Transportes 2026: reconfirmar horarios 30-60 días antes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
