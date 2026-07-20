import guiaViaje from "../assets/GuiaViaje.pdf.asset.json";

export default function DownloadSection() {
  return (
    <section className="section-padding bg-primary" aria-label="Descarga del plan de viaje">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Plan de Viaje Completo</h2>
        <p className="mt-3 text-primary-foreground/80">Descarga el PDF con el itinerario detallado, presupuestos y toda la información que necesitas.</p>
        <a
          href={guiaViaje.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary-foreground px-10 py-5 text-lg font-bold text-primary shadow-lg hover:opacity-90 transition-all hover:scale-105"
        >
          📥 Descargar PLANDEVIAJE (PDF)
        </a>
        <p className="mt-4 text-xs text-primary-foreground/60">GuiaViaje.pdf · Edición 17 jul 2026 · Idioma: Español</p>
      </div>
    </section>
  );
}
