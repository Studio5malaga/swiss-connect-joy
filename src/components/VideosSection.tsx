export default function VideosSection() {
  return (
    <section id="videos" className="section-padding bg-surface" aria-label="Vídeos del viaje">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Multimedia</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Inspírate para la Aventura</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Descubre los paisajes y experiencias que te esperan en Suiza y la Selva Negra.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/b9YV14G0-B0"
                title="Vídeo 1: Aventura en los Alpes suizos"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="bg-card p-4">
              <h3 className="font-semibold text-foreground">Los Alpes Suizos</h3>
              <p className="text-sm text-muted-foreground">Paisajes, trenes y lagos de ensueño.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/-ijC6hlAsd4"
                title="Vídeo 2: Resumen del viaje Suiza 2026"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="bg-card p-4">
              <h3 className="font-semibold text-foreground">Suiza 2026</h3>
              <p className="text-sm text-muted-foreground">Resumen visual de la aventura familiar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
