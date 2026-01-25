import React from "react";
import { useInView } from "../../hooks/useInView";

// --- TIMELINE ---
const timeline = [
    {
        year: "Sept. 2026 → 2027",
        title: "Alternance (1 an)",
        desc: "Objectif : Contrat d'apprentissage en développement Fullstack pour valider le Bachelor.",
        place: "En Recherche",
        tags: ["Fullstack", "Cyber", "DevOps"],
        future: true
    },
    {
        year: "Mai 2026",
        title: "Stage (6 mois)",
        desc: "Immersion technique intensive. Préparation à l'alternance et montée en compétences sur des projets de production.",
        place: "Mobilité Totale",
        tags: ["Stage", "Immersion", "Projet"],
        future: true
    },
    {
        year: "2024 → 2026",
        title: "Bachelor Informatique",
        desc: "IPSSI Lyon. Formation en initial puis en alternance. Développement Web avancé (React/Node), Administration Système Linux et Introduction à l'IA.",
        place: "IPSSI",
        tags: ["Dev", "IA", "Système"]
    },
    {
        year: "2025",
        title: "Développeur Odoo",
        desc: "Stage EASI-SOFT. Migration critique vers Odoo 18. Développement de modules spécifiques (Helpdesk OWL 2) et support niveau 2.",
        place: "EASI-SOFT",
        tags: ["Python", "ERP", "Pro"]
    },
    {
        year: "2022 → 2023",
        title: "Développeur Jeux & API",
        desc: "Stage chez EDSI. Conception d'algorithmes mathématiques complexes (Méthodes de graphes, Matrices). Développement d'un Bot Discord en Python connecté à l'API Larousse (système de pendu).",
        place: "EDSI",
        tags: ["Algo", "Python", "API", "Maths"]
    }
];

export default function BiographieSection() {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <section id="biographie" className="relative z-10 py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                {/* COLONNE GAUCHE : STORYTELLING */}
                <div ref={ref} className={`space-y-8 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"} transition-all duration-700`}>
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-12 bg-zinc-700"></div>
                            <span className="text-zinc-500 text-xs uppercase tracking-[0.2em]">Mon Histoire</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-6">
                            De la Vocation <br /> à la <span className="text-emerald-500">Passion.</span>
                        </h2>

                        <div className="space-y-6 text-zinc-400 text-sm leading-loose text-justify font-light">
                            <p>
                                Tout a commencé par un changement de cap. Je me destinais à soigner des animaux, mais c'est en démontant mes premières consoles que j'ai compris où était ma vraie place : <strong>au cœur du système</strong>.
                            </p>
                            <p>
                                J'ai appris à coder seul, par pure curiosité. De la création de bots pour des communautés de joueurs à l'optimisation d'algorithmes mathématiques complexes, j'ai forgé ma logique bien avant d'entrer en école.
                            </p>
                            <p>
                                Mes premières expériences professionnelles m'ont confronté à la réalité : migrer des bases de données critiques, gérer les attentes clients et livrer du code propre. Aujourd'hui, je ne cherche plus seulement à faire fonctionner un programme, mais à construire des architectures <strong>robustes et sécurisées</strong>.
                            </p>
                        </div>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
                        <div>
                            <span className="block text-3xl font-display font-bold text-white mb-1">5+</span>
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Années de Passion</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-display font-bold text-white mb-1">15+</span>
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Projets Perso</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-display font-bold text-white mb-1">100%</span>
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Investissement</span>
                        </div>
                    </div>
                </div>

                {/* COLONNE DROITE : TIMELINE */}
                <div className="relative border-l border-zinc-800 pl-8 space-y-10 py-2">
                    {timeline.map((item, i) => (
                        <div key={i} className="group relative">
                            <div className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 bg-[#050505]
                        ${item.future
                                    ? "border-emerald-500 group-hover:bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                                    : "border-zinc-700 group-hover:border-white"
                                }`}>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                                <span className={`text-xs font-bold uppercase tracking-wider ${item.future ? "text-emerald-400" : "text-zinc-500"}`}>
                                    {item.year}
                                </span>
                            </div>

                            <h3 className="text-white font-display text-lg font-bold uppercase mb-1 group-hover:text-emerald-300 transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                                {item.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[9px] text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}