import { usePlan } from "../context/PlanContext";

export default function HeroSection() {
  const { plan, profile } = usePlan();
  const dates = plan === "A" ? "2 – 11 Oct 2026" : "29 Sep – 11 Oct 2026";
  const duration = plan === "A" ? "10 días" : "13 días";

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      aria-label="Portada"
    >
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
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-alpine-foreground/80">
          Expedición 2026 · {dates} · 7 personas · {duration}
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-alpine-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {plan === "A" ? "Plan A · Ruta Directa" : "Plan B · Gran Tour Ferroviario"}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-alpine-foreground/90 sm:text-xl">
          {plan === "A"
            ? "Vuelo directo a Ginebra y base en los Alpes y la Selva Negra. Itinerario compacto y eficiente."
            : "Tren desde Málaga a través de Barcelona y Lyon, hasta los Alpes suizos y la Selva Negra alemana."}{" "}
          Perfil <strong>{profile === "senior" ? "Senior" : "Junior"}</strong> activo.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#selector"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg hover:opacity-90 transition-all hover:scale-105"
          >
            ⚙️ Configurar mi plan
          </a>
          <a
            href="/docs/plan-de-viaje-alpes-2026.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border-2 border-alpine-foreground/30 bg-alpine-foreground/10 px-8 py-4 text-base font-bold text-alpine-foreground backdrop-blur-sm hover:bg-alpine-foreground/20 transition-all"
          >
            📥 Descargar plan
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-alpine-foreground/80">
          <span>👥 7 personas</span>
          <span>📅 {duration}</span>
          <span>🛫 {plan === "A" ? "Vuelo directo" : "Tren + tren + vuelo"}</span>
        </div>
      </div>
    </section>
  );
}
