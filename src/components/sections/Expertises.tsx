import React from "react";
import { Code2, Server, Shield, Terminal, Database, Cpu, Globe, Layers } from "lucide-react";

const skills = [
    // FRONT
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Globe },
    { name: "Tailwind CSS", icon: Layers },
    { name: "TypeScript", icon: Code2 },
    { name: "Astro", icon: Rocket },
    // BACK & DATA
    { name: "Python", icon: Terminal },
    { name: "C++", icon: Cpu },
    { name: "C#", icon: Code2 },
    { name: "PostgreSQL", icon: Database },
    { name: "Firebase", icon: Database },
    { name: "API REST", icon: Globe },
    // ODOO / ERP
    { name: "Odoo 18", icon: Layers },
    { name: "OWL 2", icon: Code2 },
    { name: "QWeb", icon: FileText },
    // TOOLS & OPS
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Container },
    { name: "Linux", icon: Terminal },
    { name: "Unity", icon: Box },
];

import { Rocket, FileText, GitBranch, Container, Box } from "lucide-react";

export default function Expertises() {
    return (
        <section id="competences" className="relative z-10 py-20 border-t border-white/5 overflow-hidden">

            <div className="px-4 sm:px-8 max-w-7xl mx-auto mb-12">
                <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mb-6">
                    Compétences <span className="text-zinc-600">Technique</span>
                </h2>
                <p className="text-zinc-400 max-w-2xl">
                    Une stack polyvalente, du bas niveau (C++) aux interfaces modernes (React), en passant par l'architecture ERP complexe.
                </p>
            </div>

            {/* --- CARROUSEL INFINI --- */}
            <div className="relative w-full overflow-hidden mask-gradient-sides">
                <div className="flex w-max animate-scroll-left hover:pause gap-4">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-4 bg-[#0A0A0A] border border-white/5 rounded-full whitespace-nowrap hover:border-emerald-500/30 hover:bg-[#111] transition-colors group"
                        >
                            <skill.icon className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                            <span className="text-sm font-bold text-zinc-300 group-hover:text-white tracking-wide uppercase">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}