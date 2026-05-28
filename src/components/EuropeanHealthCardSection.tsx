const links = [
  {
    label: "Comisión Europea — Tarjeta Sanitaria Europea",
    href: "https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/european-health-insurance-card_es",
  },
  {
    label: "MUFACE — Cómo obtener la TSE",
    href: "https://muface.es/asistencia-sanitaria/extranjero/desplazamientos-temporales/como-obtener-tarjeta-sanitaria-europea",
  },
  {
    label: "Seguridad Social — Solicitud TSE / CPS",
    href: "https://prestaciones.seg-social.es/servicio/tarjeta-sanitaria-europea-certificado-provisional-sustitutorio.html?categoria=asistencia-sanitaria-fuera-espana",
  },
];

export default function EuropeanHealthCardSection() {
  return (
    <section
      id="tarjeta-sanitaria"
      className="section-padding bg-surface"
      aria-label="Tarjeta Sanitaria Europea"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Salud en la UE
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Tarjeta Sanitaria Europea (TSE)
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Imprescindible para acceder a la sanidad pública en Francia, Suiza y Alemania durante el
          viaje, en las mismas condiciones que los residentes locales.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              src="https://www.youtube.com/embed/Z7a5IS7ziHc"
              title="Tarjeta Sanitaria Europea: qué es y cómo funciona"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground hover:bg-surface hover:border-accent transition-colors"
            >
              🔗 {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
