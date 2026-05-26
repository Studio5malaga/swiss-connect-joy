import { usePlan, Plan, Profile, Pass } from "../context/PlanContext";

export default function PlanSelector() {
  const { plan, profile, pass, setPlan, setProfile, setPass } = usePlan();

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
      aria-label="Selector de plan y perfil"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Configura tu Expedición
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          Plan A, Plan B y perfil del viajero
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
          El itinerario, alojamientos y presupuesto se adaptan automáticamente a tu elección.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Ruta
            </p>
            <div className="flex gap-1 rounded-lg bg-secondary p-1">
              {(["A", "B"] as Plan[]).map((p) => (
                <Btn key={p} active={plan === p} onClick={() => setPlan(p)}>
                  Plan {p}
                </Btn>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {plan === "A"
                ? "Directo · 2-11 Oct · vuelo a Ginebra"
                : "Gran Tour Ferroviario · 29 Sep-11 Oct · Barcelona + Lyon"}
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
            <div className="flex gap-1 rounded-lg bg-secondary p-1">
              {(["4d", "3d"] as Pass[]).map((p) => (
                <Btn key={p} active={pass === p} onClick={() => setPass(p)}>
                  {p === "4d" ? "4 días" : "3 días"}
                </Btn>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {pass === "4d" ? "338,28 € · máxima flexibilidad" : "278 € · ahorra ~60 €"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
