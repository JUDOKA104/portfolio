import React from "react";

export default function Hero() {
  return (
    <section className="relative mb-6 overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)" }}>
      {/* bg vidéo optionnelle (public/hero.mp4). Si t'en as pas, commente. */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        src={`${import.meta.env.BASE_URL}/hero.mp4`}
        autoPlay loop muted playsInline
      />
      {/* gradient subtil pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/50" />
      <div className="relative z-10 p-10 md:p-16 text-center">
        <h1 className="h-title">
          Enzo <span className="relative inline-block">
            <span className="text-[var(--accent)]">Oriol</span>
            <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[var(--accent)]/60 rounded-full origin-left scale-x-0 animate-[underline_1s_ease-out_forwards]"></span>
          </span>
        </h1>
        <p className="h-sub mt-3">Étudiant cybersécurité · Dev Full-stack & Cybersécurité · Lyon / Sud</p>
      </div>
      <style>{`
        @keyframes underline{to{transform:scaleX(1)}}
      `}</style>
    </section>
  );
}
