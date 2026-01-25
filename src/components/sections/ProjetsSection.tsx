import React from "react";
import { ArrowUpRight, Layout, Eye, Database, Monitor, Terminal, ShieldCheck, Cpu, Zap, Github } from "lucide-react";
import { useInView } from "../../hooks/useInView";

// --- DONNÉES ---
const projects = [
    // 1. ODOO (Top Tier)
    {
        id: "odoo",
        title: "Expertise Odoo 18",
        badge: "STAGE / EASI-SOFT",
        desc: "Projet critique de migration ERP. J'ai piloté seul la transition de parcs clients vers la version 18. Développement full-stack : Backend Python pour les règles métiers complexes, Frontend OWL 2 (framework réactif d'Odoo) pour les interfaces Helpdesk, et moteur de rendu QWeb pour la génération de rapports PDF dynamiques.",
        features: ["Architecture Modulaire Odoo", "Composants Réactifs OWL 2", "Rapports QWeb & PostgreSQL", "Support Niveau 2"],
        tags: ["Python", "XML", "PostgreSQL", "JS"],
        link: null,
        icon: Database,
        private: true
    },
    // 2. VISION SOLVER (N°2)
    {
        id: "solver",
        title: "Vision Solver Bot",
        badge: "C++ / OPENCV",
        desc: "Bot d'automatisation haute performance conçu pour la vitesse (<100ms). Le cœur est un moteur C++ utilisant des Bitboards 64-bits et un algo Beam Search optimisé (largeur 2500). La couche vision utilise OpenCV avec parallélisation OpenMP pour le traitement d'image temps réel. Interface Python via binding ctypes bas niveau.",
        features: ["Beam Search & Bit Manipulation", "Multi-threading OpenMP", "Binding C++ / Python (ctypes)", "Vision par Ordinateur"],
        tags: ["C++", "OpenCV", "Algorithmique", "Optimisation"],
        link: null,
        icon: Cpu,
        private: true
    },
    // 3. CONFIGURATEUR AVG (N°3)
    {
        id: "config-avg",
        title: "Configurateur AVG",
        badge: "REACT / CLIENT",
        desc: "Application SPA complexe de configuration de produits sur-mesure. Architecture React gérant des milliers de combinaisons d'états. Fonctionnalités avancées : Sérialisation JSON pour import/export via presse-papier, synchronisation Firebase temps réel et génération dynamique de liens.",
        features: ["State Management Complexe", "Sérialisation Base64/JSON", "Sync Firebase Firestore", "Routing Dynamique"],
        tags: ["React", "Firebase", "Tailwind", "SPA"],
        link: "https://judoka104.github.io/config-avg/",
        icon: Monitor,
        private: false
    },
    // --- SECONDAIRES ---
    {
        id: "portfolio",
        title: "Portfolio V2",
        badge: "ASTRO",
        desc: "Performance score 100. Architecture hybride Astro/React.",
        tags: ["Astro", "React", "Tailwind"],
        link: "https://github.com/judoka104/portfolio",
        icon: Layout
    },
    {
        id: "ember",
        title: "Ember Slash",
        badge: "UNITY",
        desc: "Jeu d'action C#. Focus sur l'architecture des inputs et VFX.",
        tags: ["C#", "Unity", "HLSL"],
        link: "https://github.com/JUDOKA104/Ember-Slash",
        icon: Terminal
    },
    {
        id: "carredas",
        title: "Projet Web Carredas",
        badge: "PHP / SQL",
        desc: "Site vitrine avec back-office administrateur sécurisé.",
        tags: ["PHP", "MySQL", "Secu"],
        link: "https://github.com/JUDOKA104/projet-web",
        icon: ShieldCheck
    }
];

function TechBadge({ name }: { name: string }) {
    return (
        <div className="flex items-center px-2 py-1 bg-white/5 border border-white/10 rounded-md">
            <span className="text-[10px] text-zinc-300 font-mono">{name}</span>
        </div>
    );
}

export default function ProjetsSection() {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const anim = (delay = "delay-0") => `transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${delay}`;

    return (
        <section id="projets" className="relative z-10 py-20 px-4 sm:px-8 max-w-7xl mx-auto">

            {/* HEADER */}
            <div ref={ref} className={`mb-16 ${anim('delay-0')}`}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-12 bg-zinc-700"></div>
                    <span className="text-zinc-500 text-xs uppercase tracking-[0.2em]">Portfolio</span>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">
                    Projets <span className="text-zinc-700">Sélectionnés</span>
                </h2>
            </div>

            {/* --- BENTO GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto lg:auto-rows-[380px] mb-8">

                {/* 1. ODOO */}
                <div className={`group relative md:col-span-2 lg:col-span-3 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center ${anim('delay-100')}`}>
                    <div className="relative z-10 flex flex-col justify-between h-full flex-1 w-full">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase">{projects[0].title}</h3>
                                <span className="px-3 py-1 bg-emerald-900/30 border border-emerald-500/30 text-[10px] text-emerald-400 font-bold uppercase rounded-full tracking-wider whitespace-nowrap">{projects[0].badge}</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-3xl">
                                {projects[0].desc}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                                {projects[0].features?.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {projects[0].tags.map(tag => <TechBadge key={tag} name={tag} />)}
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-64 h-64 bg-emerald-500/5 rounded-full border border-emerald-500/10 shrink-0 relative group-hover:scale-105 transition-transform duration-700">
                        <Database className="w-20 h-20 text-emerald-500/40" />
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full"></div>
                    </div>
                </div>

                {/* 2. VISION SOLVER */}
                <div className={`group relative md:col-span-2 lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-purple-500/30 transition-all duration-500 flex flex-col ${anim('delay-200')}`}>
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                            <Cpu className="text-zinc-600 group-hover:text-purple-400 transition-colors w-6 h-6" />
                            <h3 className="font-display text-xl font-bold text-white uppercase">{projects[1].title}</h3>
                        </div>
                        {projects[1].private && <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-zinc-600 border border-zinc-800 px-2 py-1 rounded-full"><ShieldCheck size={12} /> Code Privé</span>}
                    </div>

                    <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                        {projects[1].desc}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {projects[1].features?.map((f, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                                <Zap size={10} className="text-purple-500" />
                                {f}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {projects[1].tags.map(tag => <TechBadge key={tag} name={tag} />)}
                    </div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all"></div>
                </div>

                {/* 3. CONFIG AVG */}
                <div className={`group relative md:col-span-2 lg:col-span-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col ${anim('delay-300')}`}>
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="font-display text-xl font-bold text-white uppercase leading-none">Config<br />AVG</h3>
                        <a href={projects[2].link!} target="_blank" aria-label="Voir le site" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-colors">
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-zinc-500 text-xs mb-4 flex-grow leading-relaxed">
                        {projects[2].desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <TechBadge name="React" />
                        <TechBadge name="Firebase" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] group-hover:opacity-100 transition-opacity"></div>
                </div>

            </div>

            {/* --- GRILLE SECONDAIRE --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.slice(3).map((proj, i) => (
                    <div key={i} className={`group relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-white/10 hover:bg-[#0F0F0F] transition-all duration-300 ${anim(`delay-${(i + 4) * 100}`)}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-zinc-900 rounded-lg text-zinc-400 group-hover:text-white transition-colors">
                                <proj.icon className="w-5 h-5" />
                            </div>
                            {proj.link && (
                                <a href={proj.link} target="_blank" aria-label={`Voir ${proj.title}`} className="text-zinc-600 hover:text-white transition-colors">
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                        <h4 className="font-display text-sm font-bold text-white uppercase mb-2">{proj.title}</h4>
                        <p className="text-zinc-500 text-xs mb-4 line-clamp-2">{proj.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                            {proj.tags.map(t => (
                                <span key={t} className="text-[9px] text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- LIEN GITHUB --- */}
            <div className={`mt-16 text-center ${anim('delay-600')}`}>
                <a
                    href="https://github.com/judoka104"
                    target="_blank"
                    aria-label="Voir tout mon GitHub"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-white/20 transition-all duration-300 group"
                >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Voir plus sur GitHub</span>
                </a>
            </div>

        </section>
    );
}