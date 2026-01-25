import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-[#050505] border-t border-white/5 pt-20 pb-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                {/* COL 1 : BRAND */}
                <div className="md:col-span-2">
                    <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tighter mb-6">
                        Enzo <span className="text-zinc-600">Oriol.</span>
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                        Développeur passionné par l'architecture logicielle, la cybersécurité et les solutions performantes.
                        <br className="mb-4" />
                        Disponible pour construire des projets robustes.
                    </p>
                </div>

                {/* COL 2 : NAVIGATION */}
                <div>
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Menu</h3>
                    <ul className="space-y-4 text-sm text-zinc-500">
                        <li><a href="#projets" className="hover:text-emerald-400 transition-colors">Projets</a></li>
                        <li><a href="#competences" className="hover:text-emerald-400 transition-colors">Compétences</a></li>
                        <li><a href="#biographie" className="hover:text-emerald-400 transition-colors">Parcours</a></li>
                        <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* COL 3 : SOCIALS */}
                <div>
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Réseaux</h3>
                    <div className="flex gap-4">
                        <a href="https://github.com/judoka104" target="_blank" aria-label="Mon profil GitHub" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:bg-white hover:text-black transition-all">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" aria-label="Mon profil LinkedIn" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:bg-[#0077b5] hover:text-white transition-all">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:oriol.enzo10@gmail.com" aria-label="Me contacter par mail" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:bg-emerald-500 hover:text-white transition-all">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
                    © {new Date().getFullYear()} Enzo Oriol · Tous droits réservés.
                </p>

                <a
                    href="#top"
                    className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                    aria-label="Retourner en haut de page"
                >
                    Retour en haut
                    <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>
        </footer>
    );
}