import { usePlan } from "../context/PlanContext";

type Policy = {
  name: string;
  price: string;
  description: string;
  web: string;
  conditions: string;
};

const seniorPolicies: Policy[] = [
  {
    name: "Intermundial TotalTravel Seniors (incluye Sala VIP)",
    price: "49,86 €",
    description:
      "Asistencia médica robusta, equipaje, demoras con Smart Delay (Sala VIP tras 1 h de retraso) y cobertura adaptada al perfil sénior.",
    web: "https://www.intermundial.es/seguros-de-viaje/seguro-totaltravel",
    conditions:
      "https://www.intermundial.es/content/download/136/11623/file/COND_TOTALTRAVEL_ESC50-S26-01C1_ES+EN_sompo.pdf",
  },
  {
    name: "Intermundial Cancellation Premium Seniors",
    price: "34,96 €",
    description:
      "Cobertura 100 % de vuelos y hoteles si hay que cancelar por desestabilización de enfermedades preexistentes.",
    web: "https://www.intermundial.es/seguros-de-viaje/seguro-go-cancellation",
    conditions:
      "https://www.intermundial.es/content/download/517/11688/file/COND_GO%20CANCELLATION_ESC45-S24-01C1_ES+EN_sompo.pdf",
  },
];

const juniorPolicies: Policy[] = [
  {
    name: "Intermundial TotalTravel Mini (sin anulación)",
    price: "26,29 €",
    description:
      "Opción económica: 300.000 € en asistencia médica y repatriación. No cubre anulación previa al viaje.",
    web: "https://www.intermundial.es/seguros-de-viaje/seguro-totaltravel",
    conditions:
      "https://www.intermundial.es/content/download/4165/71604/file/COND_TOTALTRAVEL%20MINI_ESC51-S26-01C1_ES+EN_sompo_V02.pdf",
  },
  {
    name: "IATI Estándar + Anulación + Reclamación Vuelos",
    price: "50,25 €",
    description:
      "Póliza clásica con alta asistencia médica y anulación de serie. Equilibrio entre cobertura y precio.",
    web: "https://www.iatiseguros.com/funnel/checkout/select-product/?num_travelers=1&client_living_country=1&insurance_type=1&destiny_country=226&date_range=2026-10-02__2026-10-11&is_traveling=no",
    conditions:
      "https://documents.iatiseguros.com/products/8133dcfd-9a3e-4a6d-bb9c-dae73c8a6064/docs/20260505_S0003_ESTANDAR__ANULACION_WEB_INDIVIDUAL_ESPANOLES_Ipid_Detras.pdf",
  },
];

export default function InsuranceSection() {
  const { profile } = usePlan();
  const policies = profile === "senior" ? seniorPolicies : juniorPolicies;
  const total =
    profile === "senior"
      ? (49.86 + 34.96).toFixed(2) + " €"
      : "26,29 € o 50,25 €";

  return (
    <section
      id="seguros"
      className="section-padding bg-background"
      aria-label="Seguros de viaje recomendados"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Seguros de Viaje · Perfil {profile === "senior" ? "Senior" : "Junior"}
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Cobertura recomendada para la Expedición 2026
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          {profile === "senior"
            ? "Combo recomendado para mayores de 75 años: salud + Sala VIP + cancelación premium."
            : "Dos alternativas según prefieras el ahorro máximo o incluir la cobertura de anulación."}{" "}
          Coste estimado: <strong>{total}</strong>.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {policies.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col"
            >
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Recomendado
              </span>
              <h3 className="mt-1 text-lg font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-2xl font-extrabold text-primary">{p.price}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href={p.web}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  🌐 Web del seguro
                </a>
                <a
                  href={p.conditions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 font-semibold text-foreground hover:bg-surface transition-colors"
                >
                  📄 Condiciones (PDF)
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <img
            src="/images/guia-seguros.png"
            alt="Guía maestra de seguros de viaje para grupos sénior y junior"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
          <h3 className="text-lg font-bold text-foreground">
            💳 ¿Y el seguro gratis de tu tarjeta de crédito?
          </h3>
          <p className="mt-3 text-sm text-foreground leading-relaxed">
            ¿Sabías que muchas tarjetas de crédito en España incluyen un seguro de viaje sin coste
            adicional? Suena bien porque, si algo se tuerce fuera de casa, una llamada puede ahorrarte
            un buen dinero y dolores de cabeza.
          </p>
          <p className="mt-3 text-sm text-foreground leading-relaxed">
            Eso sí: para que funcione de verdad, hay que entender qué cubre, cuándo se activa y cómo
            reclamar. En esta guía te lo dejan mascadito, con pasos claros, tablas y ejemplos
            cotidianos para que viajes con total tranquilidad.
          </p>
          <a
            href="https://midiaseletiva.com/seguro-viaje-tarjeta-credito-espana/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            🔗 Leer la guía completa
          </a>
        </div>
      </div>
    </section>
  );
}
