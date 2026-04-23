const images = [
  { src: "/images/hero-barco.png", alt: "Crucero de época en el Lago Lemán con los Alpes y el Jet d'Eau de Ginebra" },
  { src: "/images/collage-historico.png", alt: "Collage histórico: Estrasburgo, Baden-Baden, Emperatriz Sissi y funicular Merkurbergbahn" },
  { src: "/images/chalet-alpino.png", alt: "Chalet-Hotel Adler en Kandersteg rodeado de vegetación alpina" },
  { src: "/images/villa-beckmann.jpg", alt: "Villa Beckmann, casa tradicional de entramado de madera en Gengenbach" },
  { src: "/images/sherlock-holmes.jpg", alt: "Ilustración de Sherlock Holmes en las cataratas de Reichenbach por Sidney Paget" },
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-surface" aria-label="Galería de imágenes">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Galería</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Imágenes del Viaje</h2>

        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {images.map(img => (
            <div key={img.src} className="mb-6 break-inside-avoid overflow-hidden rounded-2xl shadow-sm border border-border">
              <img src={img.src} alt={img.alt} className="w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
