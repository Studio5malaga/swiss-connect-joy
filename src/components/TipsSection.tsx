const tips = [
  { icon: "💧", title: "Agua del Grifo — ¡Gratis y de Lujo!", text: "En Suiza, el agua del grifo es de excelente calidad. Llena tu botella reutilizable en cualquier fuente pública o en el hotel." },
  { icon: "💰", title: "Francos Suizos (CHF)", text: "En Suiza la moneda es el Franco Suizo. Puedes pagar casi todo con tarjeta. Usa N26 o Wise para evitar comisiones." },
  { icon: "⚡", title: "Adaptador de Enchufe Suizo", text: "En Suiza usan enchufes Tipo J, muy diferentes al estándar europeo. Compra un adaptador específico antes de viajar." },
  { icon: "🍽️", title: "Come como un Local", text: "Visita los supermercados Coop o Migros para preparar tus propias comidas. ¡Cocinar juntos es parte de la aventura!" },
];

export default function TipsSection() {
  return (
    <section id="consejos" className="section-padding bg-background" aria-label="Consejos de viaje">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Consejos</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Consejos para el Viaje</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Tips prácticos para ahorrar dinero y disfrutar al máximo.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {tips.map(t => (
            <div key={t.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-3xl">{t.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
