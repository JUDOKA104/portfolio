import React from "react";
import { Home, Briefcase, Cpu, Mail, User } from "lucide-react";

export default function Navigation() {
    return (
        <nav className="fixed bottom-5 w-full z-50 flex justify-center animate-fade-in-up">

            <div className="flex items-center gap-6 bg-zinc-900/60 px-5 py-1.5 rounded-full backdrop-blur-xl border border-white/5 shadow-lg shadow-black/10">

                <a href="#top" className="group relative flex items-center justify-center text-zinc-500 hover:text-white transition-colors p-1" aria-label="Accueil">
                    <Home className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    <span className="absolute -bottom-1 w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>

                <a href="#projets" className="group relative flex items-center justify-center text-zinc-500 hover:text-white transition-colors p-1" aria-label="Projets">
                    <Briefcase className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    <span className="absolute -bottom-1 w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>

                <a href="#competences" className="group relative flex items-center justify-center text-zinc-500 hover:text-white transition-colors p-1" aria-label="Compétences">
                    <Cpu className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    <span className="absolute -bottom-1 w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>

                <a href="#biographie" className="group relative flex items-center justify-center text-zinc-500 hover:text-white transition-colors p-1" aria-label="Biographie">
                    <User className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    <span className="absolute -bottom-1 w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>

                <a href="#contact" className="group relative flex items-center justify-center text-zinc-500 hover:text-white transition-colors p-1" aria-label="Contact">
                    <Mail className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    <span className="absolute -bottom-1 w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>

            </div>
        </nav>
    );
}