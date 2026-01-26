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
          Étudiant Sécurité Offensive & AppSec | <span className="text-emerald-400">Du Code à la Sécurité</span>.<br />
          <span className="text-emerald-400">Mon objectif ?</span> Devenir le cauchemar des failles que je laissais peut-être passer hier.
        </p>
      </div>
    </section>
  );
}