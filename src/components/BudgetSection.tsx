import { usePlan } from "../context/PlanContext";
import { Apple, Play, Smartphone } from "lucide-react";

type Row = {
  concept?: string;
  amount?: number;
  note?: string;
  custom?: React.ReactNode;
};

function BarcelonaTransportDetail() {
  return (
    <div className="space-y-5 mt-3">
      <div>
        <h5 className="font-semibold text-foreground mb-2 text-sm">Opción A — Solo metro/bus (transporte público)</h5>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="text-left py-1.5 px-2 font-medium text-foreground">Tramo</th>
                <th className="text-right py-1.5 px-2 font-medium text-foreground">Viajes/persona</th>
                <th className="text-right py-1.5 px-2 font-medium text-foreground">Viajes grupo (×6)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Día 1 · Sants → apartamento</td>
                <td className="py-1.5 px-2 text-right text-foreground">1</td>
                <td className="py-1.5 px-2 text-right text-foreground">6</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Día 2 · Apartamento → Sagrada Família (metro)</td>
                <td className="py-1.5 px-2 text-right text-foreground">1</td>
                <td className="py-1.5 px-2 text-right text-foreground">6</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Día 2 · Sagrada Família → Gràcia (bus V17)</td>
                <td className="py-1.5 px-2 text-right text-foreground">1</td>
                <td className="py-1.5 px-2 text-right text-foreground">6</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Día 3 · Apartamento → Sants</td>
                <td className="py-1.5 px-2 text-right text-foreground">1</td>
                <td className="py-1.5 px-2 text-right text-foreground">6</td>
              </tr>
              <tr className="bg-muted/20 font-medium">
                <td className="py-1.5 px-2 text-foreground">Total</td>
                <td className="py-1.5 px-2 text-right text-foreground">4</td>
                <td className="py-1.5 px-2 text-right text-foreground">24</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Coste: 3 × T-familiar (24 viajes) = <strong className="text-foreground">33,15 € grupo</strong> (<strong className="text-foreground">5,53 €/persona</strong>)
        </p>
      </div>

      <div>
        <h5 className="font-semibold text-foreground mb-2 text-sm">Opción B — Uber en llegada/salida + metro solo el día 2</h5>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="text-left py-1.5 px-2 font-medium text-foreground">Tramo</th>
                <th className="text-left py-1.5 px-2 font-medium text-foreground">Medio</th>
                <th className="text-right py-1.5 px-2 font-medium text-foreground">Coste grupo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Día 1 · Sants → apartamento</td>
                <td className="py-1.5 px-2 text-muted-foreground">Uber (2 coches)</td>
                <td className="py-1.5 px-2 text-right text-foreground">25,00 €</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Día 2 · Sagrada Família + vuelta (12 viajes)</td>
                <td className="py-1.5 px-2 text-muted-foreground">2 × T-familiar (16 viajes)</td>
                <td className="py-1.5 px-2 text-right text-foreground">22,10 €</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Día 3 · Apartamento → Sants</td>
                <td className="py-1.5 px-2 text-muted-foreground">Uber (2 coches)</td>
                <td className="py-1.5 px-2 text-right text-foreground">25,00 €</td>
              </tr>
              <tr className="bg-muted/20 font-medium">
                <td className="py-1.5 px-2 text-foreground">Total grupo</td>
                <td className="py-1.5 px-2 text-foreground">—</td>
                <td className="py-1.5 px-2 text-right text-foreground">72,10 €</td>
              </tr>
              <tr className="font-semibold text-primary">
                <td className="py-1.5 px-2">Por persona</td>
                <td className="py-1.5 px-2">—</td>
                <td className="py-1.5 px-2 text-right">12,02 €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h5 className="font-semibold text-foreground mb-2 text-sm">Comparativa pros y contras</h5>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="text-left py-1.5 px-2 font-medium text-foreground">Aspecto</th>
                <th className="text-left py-1.5 px-2 font-medium text-foreground">Uber (2 coches)</th>
                <th className="text-left py-1.5 px-2 font-medium text-foreground">Metro/T-familiar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Coste (ida+vuelta)</td>
                <td className="py-1.5 px-2 text-foreground">~50 € grupo (~8,30 €/pers.)</td>
                <td className="py-1.5 px-2 text-foreground">~16,60 € grupo (~2,77 €/pers.)</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Comodidad con 6 maletas grandes</td>
                <td className="py-1.5 px-2 text-foreground">Puerta a puerta, sin escaleras ni andenes</td>
                <td className="py-1.5 px-2 text-foreground">Transbordos, escaleras en algunas estaciones</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Llegada 23:00, posible cansancio</td>
                <td className="py-1.5 px-2 text-foreground">Directo, sin esperas</td>
                <td className="py-1.5 px-2 text-foreground">Aún operativo, pero menos frecuencia</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-1.5 px-2 text-muted-foreground">Salida día 3, hora punta (7:15-8:00)</td>
                <td className="py-1.5 px-2 text-foreground">Riesgo de tráfico/demora</td>
                <td className="py-1.5 px-2 text-foreground">Más predecible en tiempo</td>
              </tr>
              <tr>
                <td className="py-1.5 px-2 text-muted-foreground">Precio</td>
                <td className="py-1.5 px-2 text-foreground">Fijo (tarifa cerrada regulada)</td>
                <td className="py-1.5 px-2 text-foreground">Fijo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-2">Descarga la app oficial de TMB para comprar y validar billetes electrónicos:</p>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://apps.apple.com/es/app/tmbapp-metro-bus-barcelona/id387847254"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            <Apple className="h-4 w-4" aria-hidden="true" />
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.geomobile.tmbmobile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}

function buildBreakdown(profile: "senior" | "junior"): {
  rows: Row[];
  total: number;
} {
  const transport: Row[] = [
    { concept: "AVE Renfe Málaga → Barcelona (15:50 → 23:00)", amount: 65, note: "Maleta 23 kg incluida" },
    { concept: "Tren AVE Internacional Barcelona → Lyon (08:14 → 13:20)", amount: 55, note: "Maleta 23 kg incluida" },
    { concept: "Tren TER Lyon → Ginebra (12:38 → 14:40)", amount: 25 },
    {
      concept: "Transporte urbano Barcelona · Opción A (metro/bus)",
      amount: 5.53,
      note: "Base oficial del presupuesto. Opción B (~12,02 €/persona) como alternativa opcional.",
      custom: <BarcelonaTransportDetail />,
    },
    { concept: "Carnets TCL ×3 (transporte urbano Lyon)", amount: 10, note: "Precio oficial TCL 2026: carnet 10 viajes zonas 1-2 = 20 €. 3 carnets × 20 € = 60 € grupo ÷ 6 personas = 10 €/persona. Fuente: tcl.fr" },
    { concept: "Geneva Transport Card", amount: 0, note: "Gratuita con el hotel" },
    { concept: "Tarjeta KONUS (Selva Negra)", amount: 0, note: "Gratuita con alojamiento en Gengenbach" },
    { concept: "Bus Selva Negra → EuroAirport", amount: 7, note: "Basel SBB + bus 50 (~7,15 €) o Haltingen + bus 220 (5,80 €)" },
    {
      concept: "Vuelo Basilea → Málaga (21:00 → 00:20)",
      amount: profile === "senior" ? 129 : 45,
      note: profile === "senior" ? "easyJet U27022 · maleta 23 kg facturada" : "easyJet U27022 · sin maleta facturada",
    },
  ];

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

  const stpRow: Row = {
    concept: "Swiss Travel Pass (4 días)",
    amount: 344,
    note: "Precio oficial 2026: CHF 309 (2ª clase adulto) · aprox. 344 €",
  };

  // Alojamiento (precios por persona; basado en grupo de 6)
  const lodging: Row[] = [
    { concept: "Barcelona · Apartamento Passatge Nogués, Airbnb (2 noches)", amount: 103.83 },
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

  const rows = [...transport, insurance, stpRow, ...lodging];
  const total = rows.reduce((s, r) => s + r.amount, 0);
  return { rows, total };
}

export default function BudgetSection() {
  const { profile } = usePlan();
  const { rows, total } = buildBreakdown(profile);

  return (
    <section id="presupuesto" className="section-padding bg-background" aria-label="Presupuesto">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Presupuesto
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Desglose · Perfil {profile === "senior" ? "Senior" : "Junior"}
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
                {rows.map((r, idx) => (
                  <>
                    <tr key={`${r.concept ?? idx}-row`} className="border-b border-border/40">
                      <td className="py-2.5">
                        <p className="text-foreground">{r.concept}</p>
                        {r.note && <p className="text-xs text-muted-foreground mt-0.5">{r.note}</p>}
                      </td>
                      <td className="py-2.5 text-right font-mono font-semibold text-foreground whitespace-nowrap">
                        {r.amount?.toFixed(2)} €
                      </td>
                    </tr>
                    {r.custom && (
                      <tr key={`${r.concept ?? idx}-custom`} className="border-b border-border/40">
                        <td colSpan={2} className="py-2.5 bg-muted/20">
                          {r.custom}
                        </td>
                      </tr>
                    )}
                  </>
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
              <p>🚄 Gran Tour Ferroviario · 13 días</p>
              <p>🎫 {profile === "senior" ? "Senior premium" : "Junior estándar"}</p>
              <p>🎟️ Swiss Travel Pass 4 días</p>
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
