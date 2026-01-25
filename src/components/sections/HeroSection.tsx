import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="z-10 text-center px-4">

        <h1 className="animate-fade-in-up font-display font-bold text-4xl sm:text-6xl md:text-7xl leading-tight text-white tracking-tighter uppercase mb-6 opacity-0">
          Enzo <span className="text-zinc-600">Oriol.</span>
        </h1>

        <div className="animate-fade-in-up delay-200 h-[1px] w-16 bg-zinc-800 mx-auto mb-8 opacity-0"></div>

        <p className="animate-fade-in-up delay-400 font-sans text-zinc-400 text-sm sm:text-base max-w-[600px] mx-auto leading-relaxed text-balance opacity-0">
          Développeur Full-Stack & futur expert <span className="text-emerald-400">Cybersécurité</span>.<br className="hidden md:block" />
          Je construis des solutions robustes, du backend Odoo aux interfaces React.
        </p>
      </div>
    </section>
  );
}