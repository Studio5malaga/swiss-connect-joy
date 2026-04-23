export default function KonusCardSection() {
  return (
    <section className="section-padding bg-background" aria-label="Tarjeta KONUS">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Selva Negra</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Tarjeta KONUS</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Transporte público gratuito en toda la Selva Negra, incluida con tu alojamiento.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-bold text-foreground">¿Qué es la tarjeta KONUS?</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              La tarjeta KONUS (KOnuskarte) es una tarjeta de huésped gratuita que recibes automáticamente al 
              registrarte en cualquier alojamiento participante de la Selva Negra. Te permite usar todos los 
              trenes regionales y autobuses de la zona sin coste adicional durante tu estancia.
            </p>

            <h4 className="mt-5 text-sm font-bold text-foreground">✅ Qué incluye:</h4>
            <ul className="mt-3 space-y-2">
              {[
                "Trenes regionales GRATIS en toda la Selva Negra",
                "Autobuses locales GRATIS",
                "Válida desde el check-in hasta el check-out",
                "Se recibe al registrarse en Villa Beckmann",
                "Cubre rutas a Triberg, Friburgo, Offenburg y más",
                "¡No necesitas comprar billetes de transporte!",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-accent shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-lg bg-accent/10 p-3 text-xs text-muted-foreground">
              💡 <strong>Ahorro estimado:</strong> La tarjeta KONUS nos ahorra entre 40-60€ por persona en transporte 
              durante los 3 días en la Selva Negra. ¡Solo por estar alojados en Villa Beckmann!
            </div>
          </div>

          <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-md">
            <img
              src="/images/konus-card.jpg"
              alt="Tren regional rojo recorriendo un pueblo de la Selva Negra alemana"
              className="h-full w-full object-cover"
              loading="lazy"
              width={800}
              height={512}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
