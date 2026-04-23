export default function SwissTravelPassSection() {
  return (
    <section className="section-padding bg-surface" aria-label="Swiss Travel Pass">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Transporte</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Swiss Travel Pass</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Tu billete único para moverte por toda Suiza: trenes, buses, barcos y más de 500 museos gratis.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="/images/swiss-travel-pass.jpg"
              alt="Swiss Travel Pass con tren rojo suizo cruzando un viaducto en los Alpes"
              className="h-full w-full object-cover"
              loading="lazy"
              width={800}
              height={512}
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground">¿Qué es el Swiss Travel Pass?</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              El Swiss Travel Pass es un billete de transporte que da acceso ilimitado a la red de transporte público suiza
              durante los días contratados. Incluye trenes, autobuses, barcos y tranvías en las principales ciudades.
            </p>

            <h4 className="mt-5 text-sm font-bold text-foreground">✅ Qué incluye nuestro pase (4 días flex):</h4>
            <ul className="mt-3 space-y-2">
              {[
                "Trenes ilimitados en toda Suiza (SBB, BLS, MOB, etc.)",
                "Barcos de línea en Lagos Lemán, Brienz, Thun y más",
                "Buses y tranvías urbanos (Ginebra, Berna, Basilea…)",
                "Entrada GRATUITA a más de 500 museos (incluido Sherlock Holmes)",
                "25-50% descuento en teleféricos y funiculares",
                "Precio por persona: ~289€ (reservar con 2 meses de antelación)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-accent shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.myswitzerland.com/es-es/planificacion/ofertas/swiss-travel-pass/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90 transition-all"
              >
                Comprar en MySwitzerland ↗
              </a>
              <a
                href="https://www.sbb.ch/en/offers/swiss-travel-pass"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-bold text-foreground hover:bg-secondary transition-all"
              >
                Ver en SBB ↗
              </a>
            </div>

            <p className="mt-4 rounded-lg bg-accent/10 p-3 text-xs text-muted-foreground">
              💡 <strong>Consejo:</strong> Reserva con 2 meses de antelación para asegurar disponibilidad. 
              El pase se activa en la app SBB Mobile — descárgala antes de viajar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
