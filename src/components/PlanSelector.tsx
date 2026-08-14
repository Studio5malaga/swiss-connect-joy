import { usePlan, Profile } from "../context/PlanContext";

export default function PlanSelector() {
  const { profile, setProfile } = usePlan();

  const Btn = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-transparent text-muted-foreground hover:text-foreground"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );

  return (
    <section
      id="selector"
      className="section-padding bg-surface/70 backdrop-blur-sm border-y border-border"
      aria-label="Selector de perfil del viajero"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Configura tu Expedición
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          Gran Tour Ferroviario · perfil del viajero
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
          Ruta definitiva: 13 días, del 29 de septiembre al 11 de octubre de 2026. El presupuesto se adapta al perfil elegido.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Ruta
            </p>
            <div className="rounded-lg bg-secondary p-3 text-sm font-semibold text-foreground">
              Gran Tour Ferroviario
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              29 Sep-11 Oct · Barcelona + Lyon + Alpes + Selva Negra
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Perfil
            </p>
            <div className="flex gap-1 rounded-lg bg-secondary p-1">
              {(["senior", "junior"] as Profile[]).map((p) => (
                <Btn key={p} active={profile === p} onClick={() => setProfile(p)}>
                  {p === "senior" ? "Senior" : "Junior"}
                </Btn>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {profile === "senior"
                ? "Maleta facturada + seguro premium con Sala VIP"
                : "Sin maleta + seguro estándar (más económico)"}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Swiss Travel Pass
            </p>
            <div className="rounded-lg bg-secondary p-3 text-sm font-semibold text-foreground">
              4 días consecutivos
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              344 € aprox. · opción decidida (4-7 Oct)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
