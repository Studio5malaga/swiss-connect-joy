const accommodations = [
  {
    name: "Chalet-Hotel Adler",
    location: "Kandersteg, Suiza 🇨🇭",
    type: "Hotel-Chalet · 4 noches",
    image: "/images/chalet-alpino.png",
    alt: "Chalet-Hotel Adler en Kandersteg rodeado de prados alpinos verdes y montañas",
    features: ["Habitaciones para 7 personas", "Cocina disponible", "WiFi gratuito", "Piscina y zona de spa", "Valle plano (ideal para movilidad)", "A 5-7 min andando de la estación"],
  },
  {
    name: "Villa Beckmann",
    location: "Gengenbach, Alemania 🇩🇪",
    type: "Casa completa · 3 noches",
    image: "/images/villa-beckmann.jpg",
    alt: "Villa Beckmann, casa tradicional de entramado de madera en Gengenbach, Selva Negra",
    features: ["Casa completa para 7 personas", "Cocina con lavavajillas", "WiFi alta velocidad", "Terraza privada", "¿Sauna disponible?", "Tarjeta KONUS incluida (transporte gratis)"],
  },
];

export default function AccommodationSection() {
  return (
    <section id="alojamientos" className="section-padding bg-surface" aria-label="Alojamientos">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Alojamientos</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Dónde Dormiremos</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Alojamientos con cocina propia para mayor comodidad y ahorro.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {accommodations.map(a => (
            <div key={a.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
              <img src={a.image} alt={a.alt} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <span className="text-xs font-semibold text-accent">{a.type}</span>
                <h3 className="mt-1 text-xl font-bold text-foreground">{a.name}</h3>
                <p className="text-sm text-muted-foreground">{a.location}</p>
                <ul className="mt-4 space-y-2">
                  {a.features.map(f => (
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
