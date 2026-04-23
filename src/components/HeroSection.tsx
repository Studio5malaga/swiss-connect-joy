export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" aria-label="Portada">
      <div className="absolute inset-0">
        <img
          src="/images/hero-barco.png"
          alt="Crucero de época en el Lago Lemán con los Alpes suizos al fondo y el Jet d'Eau de Ginebra"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center fade-in">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-alpine-foreground/80">29 Sep – 6 Oct 2026 · 7 personas · 8 días</p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-alpine-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Explora Suiza con confianza
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-alpine-foreground/90 sm:text-xl">
          Guías, mapas y conectividad para tu viaje de 4 días. Descarga el plan y empieza a preparar tu ruta.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/docs/plan-de-viaje-alpes-2026.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg hover:opacity-90 transition-all hover:scale-105"
          >
            📥 Descargar PLANDEVIAJE
          </a>
          <a
            href="#videos"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-alpine-foreground/30 bg-alpine-foreground/10 px-8 py-4 text-base font-bold text-alpine-foreground backdrop-blur-sm hover:bg-alpine-foreground/20 transition-all"
          >
            ▶ Ver vídeos
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-alpine-foreground/80">
          <span>👥 7 personas</span>
          <span>📅 8 días</span>
          <span>💰 1.377,71€/pers.</span>
        </div>
      </div>
    </section>
  );
}
