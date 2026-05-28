export default function PlanComparisonVideoSection() {
  return (
    <section
      id="comparativa-planes"
      className="section-padding bg-surface"
      aria-label="Comparativa Plan A vs Plan B"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Plan A vs Plan B
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Comparativa en vídeo de las dos rutas
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Vuelo directo a Ginebra o Gran Tour Ferroviario por Barcelona y Lyon. Mira la comparativa
          completa antes de decidir tu plan.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              src="https://www.youtube.com/embed/Qh6iUQItVMQ"
              title="Comparativa Plan A vs Plan B · Expedición 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
