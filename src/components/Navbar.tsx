import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { label: "Itinerario", href: "#itinerario" },
  { label: "Vídeos", href: "#videos" },
  { label: "Alojamientos", href: "#alojamientos" },
  { label: "Presupuesto", href: "#presupuesto" },
  { label: "eSIM", href: "#esim" },
  { label: "Consejos", href: "#consejos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border" role="navigation" aria-label="Navegación principal">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="text-lg font-bold tracking-tight text-primary">
          🏔️ Suiza & Selva Negra 2026
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">{l.label}</a>
          ))}
          <a href="/docs/plan-de-viaje-alpes-2026.pdf" download className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            📥 Descargar Plan
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Abrir menú" aria-expanded={open}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-foreground/70 hover:text-primary">{l.label}</a>
          ))}
          <a href="/docs/plan-de-viaje-alpes-2026.pdf" download className="mt-2 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
            📥 Descargar Plan
          </a>
        </div>
      )}
    </nav>
  );
}
