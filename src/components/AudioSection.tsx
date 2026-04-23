import { useRef, useState } from "react";

export default function AudioSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="section-padding bg-background" aria-label="Audioguía">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Audioguía</p>
        <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Escucha el audio del viaje</h2>
        <p className="mt-3 text-muted-foreground">Reproducción con controles completos. Sin autoplay.</p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <button
            onClick={toggle}
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg hover:opacity-90 transition-all hover:scale-105"
            aria-label={playing ? "Pausar audio" : "Escuchar audio"}
          >
            {playing ? "⏸" : "▶"} Escuchar audio
          </button>

          <div className="mt-6">
            <audio ref={audioRef} controls className="mx-auto w-full max-w-md" preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
              <source src="/audio/himno.mp3" type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">Audio MP3 · Formato compatible con todos los navegadores</p>
        </div>
      </div>
    </section>
  );
}
