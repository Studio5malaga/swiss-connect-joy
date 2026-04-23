export default function FooterSection() {
  return (
    <footer className="bg-foreground py-10 px-4 text-center" role="contentinfo">
      <div className="mx-auto max-w-5xl">
        <p className="text-lg font-bold text-background">🏔️ Aventura en Familia: Suiza & Selva Negra 2026</p>
        <p className="mt-2 text-sm text-background/60">
          8 días · 7 personas · Dos países · Trenes históricos · Lagos turquesa · Castillos medievales
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-background/40">
          <span>© 2026 Aventura Familiar</span>
          <span>·</span>
          <span>Planificado con ❤️</span>
        </div>
      </div>
    </footer>
  );
}
