export default function EsimSection() {
  return (
    <section id="esim" className="section-padding bg-surface" aria-label="Conectividad eSIM">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Conectividad</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Conectividad en Suiza</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Elige entre una eSIM económica para datos locales (UBIGI) o una eSIM por días con datos ilimitados (HOLAFLY). Consulta los planes y compra desde los enlaces oficiales.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* UBIGI */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground text-lg font-bold">U</div>
              <div>
                <h3 className="text-lg font-bold text-foreground">UBIGI</h3>
                <p className="text-xs text-muted-foreground">eSIM económica</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">3 GB, 30 días; buena opción si quieres un paquete local económico.</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li>✓ 3 GB de datos</li>
              <li>✓ Válida 30 días</li>
              <li>✓ Cobertura en Suiza</li>
            </ul>
            <a
              href="https://cellulardata.ubigi.com/es/rates-and-coverage/suiza-planes-de-datos-de-esim/suiza-3-gb-30-dias/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Ver plan UBIGI ↗
            </a>
          </div>

          {/* HOLAFLY */}
          <div className="rounded-2xl border-2 border-accent bg-card p-6 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Recomendado</div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground text-lg font-bold">H</div>
              <div>
                <h3 className="text-lg font-bold text-foreground">HOLAFLY</h3>
                <p className="text-xs text-muted-foreground">eSIM por días</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Planes por días; opción ilimitada corta disponible; ideal si necesitas más datos sin complicaciones.</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li>✓ Datos ilimitados</li>
              <li>✓ Plan de 4 días disponible</li>
              <li>✓ Sin configuración compleja</li>
            </ul>
            <a
              href="https://esim.holafly.com/es/esim-suiza/?selectedDays=4&startDate=2026-04-26&endDate=2026-04-29"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Ver plan HOLAFLY ↗
            </a>
          </div>
        </div>

        {/* Comparative table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-6 py-3 text-left font-semibold text-foreground">Proveedor</th>
                <th className="px-6 py-3 text-left font-semibold text-foreground">Duración típica</th>
                <th className="px-6 py-3 text-left font-semibold text-foreground">Datos</th>
                <th className="px-6 py-3 text-left font-semibold text-foreground">Hotspot</th>
                <th className="px-6 py-3 text-left font-semibold text-foreground">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-3 font-medium text-foreground">UBIGI</td>
                <td className="px-6 py-3 text-muted-foreground">30 días</td>
                <td className="px-6 py-3 text-muted-foreground">3 GB</td>
                <td className="px-6 py-3 text-muted-foreground">Sí</td>
                <td className="px-6 py-3"><a href="https://cellulardata.ubigi.com/es/rates-and-coverage/suiza-planes-de-datos-de-esim/suiza-3-gb-30-dias/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Ver web</a></td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-medium text-foreground">HOLAFLY</td>
                <td className="px-6 py-3 text-muted-foreground">4 días</td>
                <td className="px-6 py-3 text-muted-foreground">Ilimitados</td>
                <td className="px-6 py-3 text-muted-foreground">No</td>
                <td className="px-6 py-3"><a href="https://esim.holafly.com/es/esim-suiza/?selectedDays=4&startDate=2026-04-26&endDate=2026-04-29" target="_blank" rel="noopener noreferrer" className="text-primary underline">Ver web</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl bg-primary/5 border border-primary/20 p-4 text-sm text-foreground">
          💡 <strong>Consejo práctico:</strong> descarga mapas y audioguías en Wi-Fi del alojamiento para ahorrar datos.
        </div>
      </div>
    </section>
  );
}
