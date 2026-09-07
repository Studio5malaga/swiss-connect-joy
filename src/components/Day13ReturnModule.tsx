import gengenbachImg from "../assets/gengenbach.jpg.asset.json";
import schiltachImg from "../assets/schiltach.jpg.asset.json";

export default function Day13ReturnModule() {
  return (
    <div className="space-y-6">
      {/* 1. Gestión del equipaje */}
      <div className="rounded-xl border border-border bg-surface/80 p-4">
        <h4 className="text-sm font-bold text-foreground mb-2">🧳 Gestión del Equipaje (Check-out)</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Lo ideal es pedir al anfitrión de Villa Beckmann que nos guarde las maletas tras el check-out matutino, para
          disfrutar de la mañana con las manos libres y recogerlas solo al final.
        </p>
        <blockquote className="mt-3 rounded-lg border-l-4 border-accent bg-card p-3 text-sm italic text-foreground">
          <span className="font-semibold not-italic">Mensaje para el anfitrión:</span> "Hallo! Unser Flug geht am
          späten Abend. Wäre es möglich, unser Gepäck nach dem Check-out morgens sicher bei Ihnen zu lassen? Wir
          würden es gegen 14:30 Uhr abholen, um unseren Zug um 15:08 Uhr zu erreichen. Das wäre eine enorme Hilfe!
          Vielen Dank. Beste Grüße, Roberto."
        </blockquote>
      </div>

      {/* 2. La mañana: dos opciones */}
      <div>
        <h4 className="text-sm font-bold text-foreground mb-3">🌄 La Mañana: Dos Opciones (con las manos libres)</h4>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Tarjeta A */}
          <div className="relative rounded-xl border-2 border-chart-3 bg-chart-3/5 p-4 shadow-md">
            <span className="absolute -top-3 left-4 rounded-full bg-chart-3 px-3 py-0.5 text-xs font-bold text-white shadow">
              ✅ OPCIÓN RECOMENDADA
            </span>
            <div className="mt-2 overflow-hidden rounded-lg shadow-sm">
              <img
                src={gengenbachImg.url}
                alt="Plaza del mercado de Gengenbach con casas de entramado de madera y ayuntamiento"
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>
            <h5 className="mt-3 font-bold text-foreground">Opción A: Gengenbach Relax</h5>
            <span className="mt-1 inline-block rounded-full bg-chart-3/15 px-2.5 py-0.5 text-xs font-semibold text-chart-3">
              Sin traslados · Más tranquilo
            </span>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Paseo tranquilo por el Marktplatz, casas de entramado de madera y orillas del río Kinzig. Ideal para un
              ritmo pausado y tomar café con calma sin traslados.
            </p>
            <a
              href="https://viajandoconnael.com/que-ver-en-gengenbach/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:opacity-90"
            >
              🎯 Qué ver en Gengenbach
            </a>
          </div>

          {/* Tarjeta B */}
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="overflow-hidden rounded-lg shadow-sm">
              <img
                src={schiltachImg.url}
                alt="Casas de colores y flores en el pueblo de Schiltach, Selva Negra"
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>
            <h5 className="mt-3 font-bold text-foreground">Opción B: Schiltach (La joya oculta)</h5>
            <span className="mt-1 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
              Requiere tren · 15 min
            </span>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Breve trayecto en tren regional (15 min, 100% gratis con KONUS). Famoso por su Marktplatz triangular y
              casas de colores en pendiente. Se visita perfectamente en 2 horas.
            </p>
            <a
              href="https://viajandoconnael.com/que-ver-en-schiltach/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:opacity-90"
            >
              🎯 Qué ver en Schiltach
            </a>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm font-semibold text-foreground">
          ⚠️ Regla de Oro: Recogeremos las maletas a las 14:30 h sin falta, para garantizar el traslado a la estación.
        </div>
      </div>

      {/* 3. La tarde: traslado blindado */}
      <div className="rounded-xl border border-border bg-surface/80 p-4 space-y-4">
        <div>
          <h4 className="text-base font-bold text-foreground">🚆 La Tarde: Traslado Blindado al Aeropuerto</h4>
          <p className="mt-1 rounded-lg bg-primary/10 px-3 py-2 text-sm font-bold text-primary">
            🏆 RUTA RECOMENDADA: Basel SBB + Bus 50
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Esta es la opción más segura por su alta frecuencia y porque puedes comprar el billete digitalmente sin
            hablar con nadie.
          </p>
        </div>

        {/* Opción 1 */}
        <div className="rounded-xl border-2 border-chart-3 bg-chart-3/10 p-4">
          <p className="text-sm font-bold text-foreground">📍 OPCIÓN 1 · ✅ RECOMENDADA</p>
          <ul className="mt-3 space-y-2">
            {[
              "14:30 h — Maletas recogidas en Villa Beckmann.",
              "15:08 h — Tren desde Gengenbach hacia Offenburg (cubierto por KONUS).",
              "15:26 h — RE7 desde Offenburg hacia Basel Bad Bf (llegada 17:07 h). Cubierto por KONUS.",
              "17:18 h — S6 regional Basel Bad Bf → Basel SBB (llegada 17:24 h). Cubierto por KONUS.",
              "17:30 h aprox. — Autobús Línea 50 desde la plaza de Basel SBB hacia el EuroAirport.",
              "~18:00 h — Llegada a la terminal de Salidas. Margen de 3 horas antes del vuelo.",
            ].map((line) => (
              <li key={line} className="flex gap-2 text-sm text-foreground">
                <span className="shrink-0" aria-hidden="true">{line.startsWith("14:30") ? "🧳" : line.includes("Autobús") ? "🚌" : line.startsWith("~18") ? "🛫" : "🚆"}</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-lg border border-chart-3/50 bg-card p-3">
            <p className="text-sm font-bold text-foreground">💡 POR QUÉ ES LA MEJOR OPCIÓN:</p>
            <ul className="mt-2 space-y-1 text-sm text-foreground">
              <li>✅ KONUS cubre todo el trayecto en tren regional hasta Basel SBB.</li>
              <li>✅ El billete del bus 50 se compra en la app SBB Mobile (3 zonas, ~7,15 €/persona).</li>
              <li>✅ Sin hablar con el conductor: billete digital con QR listo en el móvil.</li>
              <li>✅ Alta frecuencia: buses cada 7-10 minutos.</li>
              <li>✅ Servicio habitual de aeropuerto, directo y fiable.</li>
            </ul>
          </div>

          <div className="mt-3 rounded-lg bg-accent/10 border border-accent/30 p-3 text-sm font-semibold text-foreground">
            📱 Antes de subir al bus 50: Abre SBB Mobile → Busca "Basel SBB → Basel EuroAirport, Abflug" → Compra
            billete de 3 zonas → Mostrar QR al subir.
          </div>
        </div>

        {/* Opción 2 */}
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-sm font-bold text-foreground">📍 OPCIÓN 2 · Alternativa</p>
          <ul className="mt-3 space-y-2">
            {[
              "14:30 h — Maletas recogidas en Villa Beckmann.",
              "15:08 h — Tren desde Gengenbach hacia Offenburg (cubierto por KONUS).",
              "15:26 h — RE7 desde Offenburg hacia Haltingen (llegada 16:59 h). Cubierto por KONUS.",
              "17:26 h — Autobús Línea 220 desde Haltingen hacia EuroAirport.",
              "18:00 h — Llegada a la terminal de Salidas.",
            ].map((line) => (
              <li key={line} className="flex gap-2 text-sm text-muted-foreground">
                <span className="shrink-0" aria-hidden="true">{line.startsWith("14:30") ? "🧳" : line.includes("Autobús") ? "🚌" : line.startsWith("18:00") ? "🛫" : "🚆"}</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-foreground">
            <span className="font-semibold">Coste:</span> 5,80 €/persona con app FAIRTIQ (34,80 € el grupo).
          </p>
          <p className="mt-1 text-xs text-muted-foreground italic">
            Alternativa más económica pero con menor frecuencia (30 min). Usar solo si la Opción 1 falla.
          </p>
        </div>
      </div>

      {/* 4. Decisión rápida */}
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <p className="text-sm font-bold text-foreground mb-3">🎲 DECISIÓN RÁPIDA</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-surface/80 p-3">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Mañana</p>
            <p className="mt-1 text-sm text-foreground">☑ Gengenbach (recomendado) · Sin traslados</p>
            <p className="text-sm text-muted-foreground">☐ Schiltach · Requiere tren (15 min)</p>
          </div>
          <div className="rounded-lg bg-surface/80 p-3">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Tarde</p>
            <p className="mt-1 text-sm text-foreground">☑ Basel SBB + Bus 50 · Alta frecuencia + app SBB</p>
            <p className="text-sm text-muted-foreground">☐ Haltingen + Bus 220 · Más barato, menos frec.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
