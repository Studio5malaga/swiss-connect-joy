import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ItinerarySection from "../components/ItinerarySection";
import SwissTravelPassSection from "../components/SwissTravelPassSection";
import KonusCardSection from "../components/KonusCardSection";
import VideosSection from "../components/VideosSection";
import AudioSection from "../components/AudioSection";
import AccommodationSection from "../components/AccommodationSection";
import BudgetSection from "../components/BudgetSection";
import EsimSection from "../components/EsimSection";
import TipsSection from "../components/TipsSection";
import GallerySection from "../components/GallerySection";
import LinksSection from "../components/LinksSection";
import DownloadSection from "../components/DownloadSection";
import FooterSection from "../components/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aventura Familiar Suiza & Selva Negra 2026 — Guía Completa de 8 Días" },
      { name: "description", content: "Guía completa de 8 días para 7 personas por los Alpes suizos y la Selva Negra alemana. Itinerario detallado, presupuesto, eSIM, audioguías, Swiss Travel Pass, tarjeta KONUS y plan de viaje descargable." },
      { property: "og:title", content: "Aventura Familiar Suiza & Selva Negra 2026" },
      { property: "og:description", content: "8 días de aventura por los Alpes suizos y la Selva Negra. Trenes históricos, lagos turquesa, castillos medievales. Guía completa con itinerario y presupuesto." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/hero-barco.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aventura Familiar Suiza & Selva Negra 2026" },
      { name: "twitter:description", content: "Guía completa de viaje familiar por Suiza y la Selva Negra." },
      { name: "twitter:image", content: "/images/hero-barco.png" },
      { name: "keywords", content: "viaje Suiza, Selva Negra, eSIM Suiza, Swiss Travel Pass, KONUS, Kandersteg, Gengenbach, itinerario familiar, plan de viaje" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ItinerarySection />
        <SwissTravelPassSection />
        <KonusCardSection />
        <VideosSection />
        <AudioSection />
        <AccommodationSection />
        <BudgetSection />
        <EsimSection />
        <DownloadSection />
        <TipsSection />
        <GallerySection />
        <LinksSection />
      </main>
      <FooterSection />
    </div>
  );
}
