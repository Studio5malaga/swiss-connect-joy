import { ExternalLink, Map } from "lucide-react";
import { Button } from "./ui/button";

const maps = [
  {
    title: "Ruta · España, Francia y Suiza",
    embedUrl: "https://www.google.com/maps/d/embed?mid=1n0Uol4LbQ5zSpW0UhwkC_jIba3PdYak",
    earthUrl: "https://earth.google.com/earth/d/15WW9C84Y5bmRIWZNRZzVkGWfpzTGhzpF?usp=sharing",
  },
  {
    title: "Ruta · Suiza y Selva Negra",
    embedUrl: "https://www.google.com/maps/d/embed?mid=1NiIZCCjO8_zmszWRKw5zZ5q_SiHkbc0",
    earthUrl: "https://earth.google.com/earth/d/1FEvIm-C1-QAByMeDQ9zdtDfGfC-dW0ic?usp=sharing",
  },
];

export default function RouteMapsSection() {
  return (
    <section className="section-padding bg-surface/40" aria-labelledby="route-maps-title">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">La ruta completa</p>
        <h2 id="route-maps-title" className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Mapas del Gran Tour
        </h2>

        <div className="mt-10 space-y-10">
          {maps.map((map) => (
            <article key={map.embedUrl}>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                  <Map className="h-5 w-5 text-accent" aria-hidden="true" />
                  {map.title}
                </h3>
                <Button asChild>
                  <a href={map.earthUrl} target="_blank" rel="noopener noreferrer">
                    Ver en Google Earth
                    <ExternalLink aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <iframe
                  src={map.embedUrl}
                  title={map.title}
                  className="h-[420px] w-full sm:h-[520px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}