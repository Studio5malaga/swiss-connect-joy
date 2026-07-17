import { Check, X, Plane, Calendar, Euro, MapPin, Ticket, Home } from "lucide-react";

const rows = [
  {
    icon: Euro,
    title: "Precio y valor real",
    agencia: "995€ base + 100€ excursiones imprescindibles = 1.095€ por 4 días. Coste real: 273,75€/día (solo alojamiento + desayuno).",
    familiar: "1.377,71€ todo incluido por 8 días: vuelos, alojamientos, pases, actividades y 300€ de comidas. Coste: 172,21€/día.",
    highlight: "Ahorro del 37% por jornada",
  },
  {
    icon: Calendar,
    title: "Duración del viaje",
    agencia: "4 días y 3 noches. Visita rápida limitada a Suiza central.",
    familiar: "8 días y 7 noches. Suiza + Selva Negra alemana + Alsacia/Estrasburgo (Francia).",
    highlight: "El doble de días, 3 países",
  },
  {
    icon: Plane,
    title: "Vuelos y madrugón",
    agencia: "Vuelo obligatorio a las 06:40 AM. Ida y vuelta por Zúrich (trayectos de retroceso).",
    familiar: "Eliges: Opción A relajada (12:15 PM) o Opción B estratégica (06:00 AM, +27€ por día completo en Ginebra). Entrada Ginebra, salida Basilea.",
    highlight: "Ruta lineal sur-norte sin retrocesos",
  },
  {
    icon: Ticket,
    title: "Excursiones y visitas",
    agencia: "Itinerario rígido. Castillo de Chillon, Interlaken y Lucerna requieren pago extra de 100€.",
    familiar: "Castillo de Chillon, Sherlock Holmes y museos GRATIS con Swiss Travel Pass. Tren histórico GoldenPass Belle Époque, crucero Lago de Brienz y Grindelwald First como visita indispensable del bloque alpino.",
    highlight: "Experiencias premium incluidas",
  },
  {
    icon: MapPin,
    title: "Variedad cultural",
    agencia: "Solo Suiza, base fija en Berna.",
    familiar: "Suiza alpina + Selva Negra (Triberg, reloj de cuco gigante, Gengenbach) + opciones de cierre en Estrasburgo o Baden-Baden.",
    highlight: "Inmersión multicultural",
  },
  {
    icon: Home,
    title: "Alojamiento y convivencia",
    agencia: "Hotel Kreuz Berna 3★ con habitaciones estándar y sin espacios comunes.",
    familiar: "Chalet-Hotel Adler + Villa Beckmann con cocina propia. Compra en Coop/Migros para evitar restaurantes caros y fomentar convivencia familiar.",
    highlight: "Hogares auténticos con vistas a los Alpes",
  },
];

export default function ComparisonSection() {
  return (
    <section id="comparativa" className="section-padding bg-background" aria-label="Comparativa con agencia de viajes">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Comparativa Definitiva</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Expedición 2026 vs. Oferta de Agencia
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
          Análisis al detalle entre la oferta "Esencia de Suiza" de Marsol y nuestro plan autogestionado
          "Expedición 2026". Más días, más países y un 37% más barato por jornada.
        </p>

        {/* Headline cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-destructive/30 bg-card/90 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive">
                Agencia Marsol
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-foreground">Esencia de Suiza</h3>
            <p className="mt-1 text-sm text-muted-foreground">4 días · Vuelo 06:40 AM · Hotel Kreuz Berna 3★</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-foreground">1.095€</span>
              <span className="text-sm text-muted-foreground">/persona</span>
            </div>
            <p className="text-xs text-muted-foreground">273,75€/día (con paquete excursiones obligatorio)</p>
          </div>

          <div className="rounded-2xl border-2 border-primary bg-primary p-6 text-primary-foreground shadow-lg">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Plan Familiar
              </span>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                Recomendado
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-bold">Expedición 2026</h3>
            <p className="mt-1 text-sm opacity-90">8 días · Vuelo flexible · Chalets + Villas con cocina</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold">1.377,71€</span>
              <span className="text-sm opacity-80">/persona</span>
            </div>
            <p className="text-xs opacity-90">172,21€/día — Ahorro del 37% por jornada</p>
          </div>
        </div>

        {/* Detailed comparison rows */}
        <div className="mt-10 space-y-4">
          {rows.map(row => {
            const Icon = row.icon;
            return (
              <div key={row.title} className="overflow-hidden rounded-2xl border border-border bg-card/90 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-6 py-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">{row.title}</h3>
                  <span className="ml-auto rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    {row.highlight}
                  </span>
                </div>
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="border-b border-border p-6 md:border-b-0 md:border-r">
                    <div className="flex items-start gap-2">
                      <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Agencia Marsol</p>
                        <p className="mt-1 text-sm text-foreground">{row.agencia}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-6">
                    <div className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Expedición 2026</p>
                        <p className="mt-1 text-sm text-foreground">{row.familiar}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conclusion */}
        <div className="mt-10 rounded-2xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <h3 className="text-xl font-bold text-foreground">Conclusión</h3>
          <p className="mt-3 text-muted-foreground">
            El plan familiar es un viaje mucho más <strong className="text-foreground">completo, flexible y económico</strong>.
            Mientras la agencia ofrece una visita rápida y costosa por la superficie de Suiza, la
            Expedición 2026 garantiza <strong className="text-foreground">8 días de inmersión total en tres países</strong>,
            con mejores transportes y la posibilidad de decidir si se madruga o se prefiere un inicio de viaje relajado.
          </p>
        </div>

        {/* Original offer image */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card/90 shadow-sm backdrop-blur-sm">
            <img
              src="/images/oferta-marsol.jpeg"
              alt="Folleto de la oferta Esencia de Suiza de la agencia Marsol para Semana Santa 2026"
              loading="lazy"
              className="w-full object-contain"
            />
            <figcaption className="border-t border-border bg-secondary/50 px-4 py-3 text-xs text-muted-foreground">
              Oferta original de Marsol — "Esencia de Suiza" Semana Santa 2026 (995€ + 100€ excursiones)
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-border bg-card/90 shadow-sm backdrop-blur-sm">
            <img
              src="/images/comparativa-infografia.png"
              alt="Infografía comparativa entre Expedición 2026 y Esencia de Suiza mostrando ahorro del 37% por día"
              loading="lazy"
              className="w-full object-contain"
            />
            <figcaption className="border-t border-border bg-secondary/50 px-4 py-3 text-xs text-muted-foreground">
              Infografía resumen: 8 días por un 37% menos al día
            </figcaption>
          </figure>
        </div>

        {/* Video */}
        <div className="mt-10">
          <h3 className="text-center text-xl font-bold text-foreground">Vídeo explicativo de la comparativa</h3>
          <div className="mx-auto mt-4 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card/90 shadow-sm backdrop-blur-sm">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/TVwbGXQSh2M"
                title="Comparativa Expedición 2026 vs Esencia de Suiza"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
