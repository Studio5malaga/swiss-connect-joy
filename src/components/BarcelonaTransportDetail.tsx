import { Apple, Play } from "lucide-react";

export default function BarcelonaTransportDetail() {
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
