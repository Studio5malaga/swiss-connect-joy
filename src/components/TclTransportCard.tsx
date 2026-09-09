import { TrainFront, Smartphone } from "lucide-react";

export default function TclTransportCard() {
  return (
    <div className="rounded-xl border border-border bg-card/90 p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground shrink-0">
          <TrainFront className="h-5 w-5" aria-hidden="true" />
        </div>
        <h4 className="text-base font-bold text-foreground">Moverse por Lyon (Red TCL)</h4>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        La red TCL integra metro (4 líneas), tranvía, autobuses y funiculares. Es la forma más rápida de moverse entre Vieux Lyon, Fourvière, la Part-Dieu y el Parc de la Tête d'Or.
      </p>
      <ul className="space-y-1.5 mb-4">
        <li className="flex gap-2 text-sm text-foreground">
          <span className="text-accent shrink-0">•</span>
          <span>Validación obligatoria en cada trayecto o transbordo: pasa la tarjeta o el QR por el lector al entrar.</span>
        </li>
        <li className="flex gap-2 text-sm text-foreground">
          <span className="text-accent shrink-0">•</span>
          <span>El mismo título se puede multi-validar: pasad la tarjeta 6 veces seguidas si viajáis en grupo.</span>
        </li>
        <li className="flex gap-2 text-sm text-foreground">
          <span className="text-accent shrink-0">•</span>
          <span>Los funiculares F1 y F2 (Vieux Lyon ↔ Fourvière / Saint-Just) están incluidos en los carnets.</span>
        </li>
      </ul>
      <a
        href="https://www.tcl.fr/en/discover/tcl-applications/tcl-e-ticket-application"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
      >
        <Smartphone className="h-4 w-4" aria-hidden="true" />
        Descargar TCL E-Ticket App
      </a>
    </div>
  );
}
