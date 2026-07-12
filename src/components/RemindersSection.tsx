import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "./ui/checkbox";

type Item = {
  id: string;
  title: string;
  category: string;
  date: string; // YYYY-MM-DD, empty = sin fecha
  note?: string;
  done: boolean;
};

const TRIP_START = new Date("2026-09-29T00:00:00");
const STORAGE_KEY = "expedicion2026_reservas_v1";

const DEFAULT_ITEMS: Item[] = [
  {
    id: "ave-bcn-lyon",
    title: "Comprar AVE internacional Barcelona → Lyon",
    category: "Transporte",
    date: "2026-08-01",
    note: "⚠️ Prioritario: solo hay un tren útil ese día (viaje previsto 1 Oct). Ya está a la venta, no conviene esperar.",
    done: false,
  },
  {
    id: "iryo-mlg-bcn",
    title: "Comprar billete Málaga → Barcelona (IRYO)",
    category: "Transporte",
    date: "2026-08-10",
    note: "Día de viaje previsto: 29 Sep. Alternativa Plan B: OUIGO con escala en Madrid (más lento).",
    done: false,
  },
  {
    id: "vuelo",
    title: "Vuelo internacional Málaga ⇄ Suiza",
    category: "Transporte",
    date: "",
    note: "Ya comprado.",
    done: true,
  },
  {
    id: "bcn-apartment",
    title: "Barcelona Classic Gracia Apartments — cancelación gratuita hasta",
    category: "Alojamiento",
    date: "2026-09-14",
    note: "Check-in 29 Sep. Pasada esta fecha se cobra si se cancela.",
    done: false,
  },
  {
    id: "lyon-apartment",
    title: "Appartement Vieux Lyon Terrasse — cancelación gratuita hasta",
    category: "Alojamiento",
    date: "2026-09-16",
    note: "Check-in 1 Oct. Pasada esta fecha se cobra si se cancela.",
    done: false,
  },
  {
    id: "hotel-astoria",
    title: "Hôtel Astoria (Ginebra) — cancelación gratuita hasta",
    category: "Alojamiento",
    date: "2026-10-02",
    note: "Check-in 3 Oct — cancelación gratis hasta 1 día antes.",
    done: false,
  },
  {
    id: "alpen-chalet",
    title: "Chalet-Hotel Adler · Kandersteg — cancelación gratuita hasta",
    category: "Alojamiento",
    date: "2026-09-03",
    note: "Check-in 4 Oct. Pasada esta fecha se cobra si se cancela.",
    done: false,
  },
  {
    id: "villa-beckmann",
    title: "Villa Beckmann · Gengenbach — cancelación gratuita hasta",
    category: "Alojamiento",
    date: "2026-09-06",
    note: "Check-in 7 Oct. Pasada esta fecha se cobra si se cancela.",
    done: false,
  },
  {
    id: "tse-familia",
    title: "Tramitar Tarjeta Sanitaria Europea (TSE) — toda la familia",
    category: "Sanidad",
    date: "2026-09-01",
    note: "Sin fecha límite oficial; fecha orientativa para no dejarlo para el final.",
    done: false,
  },
  {
    id: "tse-muface",
    title: "Tramitar TSE especial MUFACE — padres",
    category: "Sanidad",
    date: "2026-08-29",
    note: "Como muy tarde 1 mes antes del viaje.",
    done: false,
  },
  {
    id: "swiss-pass",
    title: "Reservar Swiss Travel Pass",
    category: "Suiza",
    date: "2026-07-29",
    note: "Recomendado con 2 meses de antelación (≈289 €/persona).",
    done: false,
  },
  {
    id: "geneva-card",
    title: "Comprobar entrega de la Geneva Transport Card",
    category: "Suiza",
    date: "2026-10-03",
    note: "Gratis con el hotel — revisar que os la den al hacer check-in en Ginebra (Hôtel Astoria).",
    done: false,
  },
  {
    id: "konus-card",
    title: "Comprobar entrega de la tarjeta KONUS",
    category: "Alemania",
    date: "2026-10-07",
    note: "Se entrega al hacer check-in en Villa Beckmann — revisa el transporte gratis en la Selva Negra.",
    done: false,
  },
];

function loadItems(): Item[] {
  if (typeof window === "undefined") return DEFAULT_ITEMS;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_ITEMS;
    const parsed: Item[] = JSON.parse(saved);
    const map = new Map(parsed.map((i) => [i.id, i]));
    return DEFAULT_ITEMS.map((d) => (map.has(d.id) ? { ...d, ...map.get(d.id) } : d));
  } catch {
    return DEFAULT_ITEMS;
  }
}

function daysUntil(dateStr: string): number | null {
  if (!dateStr) return null;
  const d = new Date(`${dateStr}T23:59:00`);
  return Math.ceil((d.getTime() - Date.now()) / 86400000);
}

type Urgency = "urgent" | "soon" | "later" | "nodate" | "done";

function urgencyOf(days: number | null, done: boolean): Urgency {
  if (done) return "done";
  if (days === null) return "nodate";
  if (days <= 14) return "urgent";
  if (days <= 45) return "soon";
  return "later";
}

const URGENCY_STYLES: Record<Urgency, { border: string; badge: string; label: string }> = {
  urgent: { border: "border-l-destructive", badge: "bg-destructive/10 text-destructive", label: "🔴 Urgente · próximas 2 semanas" },
  soon: { border: "border-l-warm", badge: "bg-warm/10 text-warm", label: "🟡 Próximamente · hasta 45 días" },
  nodate: { border: "border-l-muted-foreground/40", badge: "bg-muted text-muted-foreground", label: "⚪ Falta fecha — hay que fijarla" },
  later: { border: "border-l-secondary-foreground/40", badge: "bg-secondary text-secondary-foreground", label: "🟢 Más adelante" },
  done: { border: "border-l-secondary-foreground/40", badge: "bg-secondary text-secondary-foreground", label: "✅ Hecho" },
};

function countdownLabel(days: number | null, done: boolean): string {
  if (done) return "Hecho";
  if (days === null) return "Sin fecha";
  if (days < 0) return `Venció hace ${Math.abs(days)} d.`;
  if (days === 0) return "Hoy";
  return `${days} días`;
}

function icsDateStamp(dateStr: string): string {
  return dateStr.replace(/-/g, "");
}

export default function RemindersSection() {
  const [items, setItems] = useState<Item[]>(DEFAULT_ITEMS);
  const [heroDays, setHeroDays] = useState<number | null>(null);

  useEffect(() => {
    setItems(loadItems());
    setHeroDays(Math.ceil((TRIP_START.getTime() - Date.now()) / 86400000));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const toggleDone = (id: string) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));

  const updateDate = (id: string, value: string) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, date: value } : i)));

  const resetAll = () => {
    if (!window.confirm("¿Reiniciar todos los estados y fechas a los valores por defecto?")) return;
    window.localStorage.removeItem(STORAGE_KEY);
    setItems(DEFAULT_ITEMS);
  };

  const grouped = useMemo(() => {
    const groups: Record<Urgency, (Item & { days: number | null; urgency: Urgency })[]> = {
      urgent: [],
      soon: [],
      nodate: [],
      later: [],
      done: [],
    };
    items.forEach((it) => {
      const days = daysUntil(it.date);
      const urgency = urgencyOf(days, it.done);
      groups[urgency].push({ ...it, days, urgency });
    });
    (["urgent", "soon", "nodate", "later"] as Urgency[]).forEach((k) => {
      groups[k].sort((a, b) => {
        if (a.days === null) return 1;
        if (b.days === null) return -1;
        return a.days - b.days;
      });
    });
    return groups;
  }, [items]);

  const downloadICS = () => {
    let ics = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Expedicion2026//Reservas//ES\r\n";
    items
      .filter((i) => i.date && !i.done)
      .forEach((it) => {
        ics += "BEGIN:VEVENT\r\n";
        ics += `UID:${it.id}-2026@expedicion2026\r\n`;
        ics += `DTSTART;VALUE=DATE:${icsDateStamp(it.date)}\r\n`;
        ics += `SUMMARY:${it.title.replace(/,/g, "")}\r\n`;
        ics += `DESCRIPTION:${(it.note || "").replace(/,/g, ";")}\r\n`;
        ics += "BEGIN:VALARM\r\nTRIGGER:-P3D\r\nACTION:DISPLAY\r\nDESCRIPTION:Recordatorio\r\nEND:VALARM\r\n";
        ics += "END:VEVENT\r\n";
      });
    ics += "BEGIN:VEVENT\r\nUID:trip-start-2026@expedicion2026\r\nDTSTART;VALUE=DATE:20260929\r\nSUMMARY:🏔️ Inicio Expedición 2026\r\nEND:VEVENT\r\n";
    ics += "END:VCALENDAR\r\n";

    const blob = new Blob([ics], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "recordatorios-expedicion-2026.ics";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const sectionsOrder: Urgency[] = ["urgent", "soon", "nodate", "later", "done"];

  return (
    <section id="reservas" className="section-padding bg-background" aria-label="Reservas pendientes">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">Organización</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">Reservas y Recordatorios Pendientes</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Fechas límite de cancelación gratuita, tickets pendientes de comprar y trámites de salud — todo en un vistazo.
        </p>

        <div className="mt-8 rounded-2xl bg-primary px-6 py-8 text-center text-primary-foreground shadow-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">Expedición 2026</p>
          <p className="mt-1 text-5xl font-bold sm:text-6xl">{heroDays === null ? "–" : heroDays >= 0 ? heroDays : "¡En marcha!"}</p>
          <p className="mt-1 text-sm text-primary-foreground/80">
            {heroDays !== null && heroDays >= 0 ? "días para el viaje" : "días desde el inicio del viaje"}
          </p>
          <p className="mt-2 text-xs text-primary-foreground/60">29 Sep – 11 Oct 2026 · 6 personas</p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={downloadICS}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground hover:opacity-90 transition-all"
          >
            📅 Descargar recordatorios (.ics)
          </button>
          <button
            onClick={resetAll}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-bold text-foreground hover:bg-secondary transition-all"
          >
            ↺ Reiniciar estado
          </button>
        </div>

        <div className="mt-10 space-y-8">
          {sectionsOrder.map((key) => {
            const list = grouped[key];
            if (!list.length) return null;
            const style = URGENCY_STYLES[key];
            return (
              <div key={key}>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted-foreground">{style.label}</h3>
                <div className="space-y-3">
                  {list.map((it) => (
                    <div
                      key={it.id}
                      className={`flex items-start gap-3 rounded-xl border border-border ${style.border} border-l-4 bg-card p-4 shadow-sm ${it.done ? "opacity-60" : ""}`}
                    >
                      <Checkbox checked={it.done} onCheckedChange={() => toggleDone(it.id)} className="mt-1" />
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{it.category}</p>
                        <p className={`text-sm font-semibold text-foreground ${it.done ? "line-through" : ""}`}>{it.title}</p>
                        {it.note && <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{it.note}</p>}
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <input
                            type="date"
                            value={it.date}
                            onChange={(e) => updateDate(it.id, e.target.value)}
                            className="rounded-lg border border-input bg-background px-2 py-1 text-xs text-foreground"
                          />
                          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${style.badge}`}>
                            {countdownLabel(it.days, it.done)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Los estados y fechas que edites se guardan en este navegador. Descarga el .ics e impórtalo en tu calendario
          para recibir avisos aunque no visites esta página.
        </p>
      </div>
    </section>
  );
}
