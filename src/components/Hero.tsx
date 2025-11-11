import React, { useEffect, useState } from "react";

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(m.matches);
    const onChange = () => setReduced(m.matches);
    m.addEventListener?.('change', onChange);
    return () => m.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
};

export default function Hero() {
  const reduced = useReducedMotion();
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState("");
  const fullRole = "Développeur junior full‑stack & cybersécurité";

  // plein écran -> compact au scroll
  useEffect(() => {
    const onScroll = () => setCollapsed((window.scrollY || 0) > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // dactylo sur la 2ᵉ ligne uniquement
  useEffect(() => {
    if (reduced) { setRole(fullRole); return; }
    let i = 0; const iv = setInterval(() => {
      setRole(fullRole.slice(0, ++i));
      if (i >= fullRole.length) clearInterval(iv);
    }, 28);
    return () => clearInterval(iv);
  }, [reduced]);

  const expand = () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });

  return (
    <section
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        width: "99.5vw",
        borderColor: "var(--border)",
      }}
      className={[
        "relative overflow-hidden border",
        collapsed ? "mb-6" : "mb-0",
        reduced ? "" : "transition-[padding,transform] duration-500",
      ].join(" ")}
    >
      <div className={[collapsed ? "min-h-[420px]" : "min-h-screen", reduced ? "" : "transition-[min-height] duration-500"].join(" ")}>
        {/* Fond */}
        <video className="absolute inset-0 w-full h-full object-cover opacity-30" src={`${import.meta.env.BASE_URL}/hero.mp4`} autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        {/* Contenu centré */}
        <div className={["relative z-10 flex h-full min-h-inherit items-center justify-center text-center", collapsed ? "py-12" : "py-16"].join(" ")}>
          <div className="px-5">
            {/* H1 : une seule couche de gradient via .gradient-text */}
            <h1 className={["font-extrabold tracking-tight", collapsed ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl"].join(" ")}>
              <span className="pr-2">Enzo</span>
              <span className="gradient-text hover:gradient-text-hover">ORIOL</span>
            </h1>

            {/* Ligne 2 (typewriter) */}
            <p className={["mt-3 text-[var(--muted)] font-mono", collapsed ? "text-base md:text-lg" : "text-lg md:text-xl"].join(" ")}>
              {role}
              <span className="inline-block w-[10px] h-[1.2em] align-[-0.2em] bg-white/80 ml-1 animate-pulse" aria-hidden />
            </p>
          </div>
        </div>
      </div>

      {/* Raccourci pour revenir plein écran */}
      <button
        onClick={expand}
        className={[
          "fixed right-4 bottom-4 z-20 rounded-xl border px-3 py-2 text-sm backdrop-blur",
          "bg-black/30 border-white/10 hover:bg-black/40",
          reduced ? "" : "transition-opacity",
          collapsed ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-label="Revenir au focus du Hero"
      >
        Revenir au focus ↑
      </button>

      {/* Styles locaux pour le gradient */}
      <style>{`
        .min-h-inherit{min-height:inherit}
        .gradient-text{background:linear-gradient(92deg,var(--accent),var(--accent-2,#7cfcc6));-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 18px color-mix(in oklch,var(--accent) 25%, transparent))}
        .gradient-text-hover{background:linear-gradient(92deg,color-mix(in oklch,var(--accent) 80%, white),white)}
        .gradient-text.hover\:gradient-text-hover:hover{background:linear-gradient(92deg,color-mix(in oklch,var(--accent) 80%, white),white)}
      `}</style>
    </section>
  );
}