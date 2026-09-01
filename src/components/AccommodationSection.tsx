import { usePlan } from "../context/PlanContext";
import airbnbBarcelona from "../assets/airbnb-barcelona.jpg.asset.json";

type Lodging = {
  name: string;
  location: string;
  type: string;
  image: string;
  alt: string;
  features: string[];
  plans: Array<"A" | "B">;
  emoji?: string;
};

const accommodations: Lodging[] = [
  {
    name: "Apartamento Passatge Nogués (Gràcia)",
    location: "Passatge Nogués, 61, 1º · 08025 Barcelona, España 🇪🇸",
    type: "Airbnb · anfitrión Roberto · 2 noches (29 Sep–1 Oct)",
    image: airbnbBarcelona.url,
    alt: "Salón-comedor del apartamento Airbnb en Passatge Nogués, Gràcia, Barcelona",
    features: [
      "Apartamento céntrico en Gràcia, cerca de la Sagrada Familia",
      "Check-in desde las 16:00 (self check-in; llegada real ≈23:00)",
      "Check-out: jueves 1 de octubre, 10:00",
      "Reserva: HM48AZMHYN",
      "Contacto: mensajería de la app de Airbnb — confirmar el procedimiento de acceso antes del 29 de septiembre",
    ],
    plans: ["B"],
    emoji: "🏙️",
  },
  {
    name: "Appartement Vieux Lyon Terrasse",
    location: "Lyon, Francia 🇫🇷",
    type: "Apartamento · 2 noches (1–3 Oct)",
    image: "/images/loja-lyon.jpg",
    alt: "Apartamento con terraza en el casco antiguo de Lyon",
    features: ["Vieux Lyon (Patrimonio UNESCO)", "97 €/persona", "Terraza privada", "A pie de la catedral"],
    plans: ["B"],
    emoji: "🍷",
  },
  {
    name: "Hôtel Astoria",
    location: "Ginebra, Suiza 🇨🇭",
    type: "Hotel · 1 noche (3–4 Oct)",
    image: "/images/loja-astoria.jpg",
    alt: "Hôtel Astoria en el centro de Ginebra",
    features: ["Junto a la estación Cornavin", "95 €/persona", "Desayuno no incluido (17 CHF)", "Ideal para una sola noche"],
    plans: ["B"],
    emoji: "🏨",
  },
  {
    name: "Nonanteneuf Appart Hôtel",
    location: "Ginebra Étang · Aeropuerto, Suiza 🇨🇭",
    type: "Apart-hotel · 2 noches (2–4 Oct)",
    image: "/images/loja-nonanteneuf.jpg",
    alt: "Apart-hotel Nonanteneuf cerca del aeropuerto de Ginebra",
    features: ["Junto al aeropuerto de Ginebra", "126 €/persona", "Apartamentos con cocina", "Transporte público directo"],
    plans: ["A"],
    emoji: "✈️",
  },
  {
    name: "Chalet-Hotel Adler (Alpen Chalet)",
    location: "Kandersteg, Suiza 🇨🇭",
    type: "Hotel-Chalet · 3 noches (4–7 Oct)",
    image: "/images/chalet-alpino.png",
    alt: "Chalet-Hotel Adler en Kandersteg rodeado de prados alpinos verdes y montañas",
    features: [
      "Habitaciones para 6 personas",
      "121 €/persona",
      "Cocina disponible · WiFi gratuito",
      "Piscina y zona de spa",
      "Valle plano (ideal para movilidad)",
      "A 5-7 min andando de la estación",
    ],
    plans: ["A", "B"],
  },
  {
    name: "Villa Beckmann",
    location: "Gengenbach, Alemania 🇩🇪",
    type: "Casa completa · 4 noches (7–11 Oct)",
    image: "/images/villa-beckmann.jpg",
    alt: "Villa Beckmann, casa tradicional de entramado de madera en Gengenbach, Selva Negra",
    features: [
      "Casa completa para 6 personas",
      "221 €/persona",
      "Cocina con lavavajillas",
      "WiFi alta velocidad · Terraza privada",
      "Servicios de bienestar: confirmar en la reserva",
      "Tarjeta KONUS incluida (transporte gratis)",
    ],
    plans: ["A", "B"],
  },
];

export default function AccommodationSection() {
  const { plan } = usePlan();
  const visible = accommodations.filter((a) => a.plans.includes(plan));

  return (
    <section id="alojamientos" className="section-padding bg-surface" aria-label="Alojamientos">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Alojamientos · Gran Tour Ferroviario
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Dónde Dormiremos
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          5 alojamientos a lo largo del Gran Tour Ferroviario: Barcelona, Lyon, Ginebra, Kandersteg y Gengenbach.
        </p>

        <div className="mx-auto mt-6 max-w-3xl rounded-xl border-2 border-destructive/50 bg-destructive/10 p-4 text-sm text-foreground">
          <p className="font-bold text-destructive">⚠️ AVISO · RUIDO EN LOS ALOJAMIENTOS</p>
          <p className="mt-1">
            Barcelona vive un conflicto social por la vivienda turística, con bastante tensión vecinal. En todos los
            alojamientos del viaje avisan de sensores de ruido muy sensibles: lo mínimo puede generar un aviso al
            anfitrión o incluso una llamada a la policía. Extremar el silencio siempre, sobre todo en la llegada
            nocturna a Barcelona (≈23:00) y en zonas comunes de los edificios.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((a) => (
            <div
              key={a.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-48 w-full relative bg-gradient-to-br from-primary/20 via-accent/20 to-secondary overflow-hidden">
                <img
                  src={a.image}
                  alt={a.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {a.emoji && (
                  <span className="absolute inset-0 flex items-center justify-center text-6xl opacity-60 pointer-events-none">
                    {a.emoji}
                  </span>
                )}
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent">{a.type}</span>
                <h3 className="mt-1 text-xl font-bold text-foreground">{a.name}</h3>
                <p className="text-sm text-muted-foreground">{a.location}</p>
                <ul className="mt-4 space-y-2">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-accent">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
