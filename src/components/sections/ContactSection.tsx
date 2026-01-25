import React from "react";
import { Mail, MapPin, Github, Linkedin, ArrowRight, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="relative z-10 py-20 sm:py-32 px-4 sm:px-8 lg:px-20 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-[1px] w-8 bg-zinc-700"></div>
                                <span className="text-zinc-500 text-xs uppercase tracking-[0.2em]">Candidature</span>
                            </div>

                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-bold uppercase tracking-tight mb-8">
                                Prêt à rejoindre <br /> vos équipes.
                            </h2>

                            <p className="text-zinc-400 text-base leading-relaxed max-w-md mb-12">
                                À la recherche d'un stage de 6 mois (Mai 2026) évolutif en alternance (Dev. Fullstack).
                                Mobile, motivé et immédiatement opérationnel.
                            </p>

                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Disponible Mai 2026</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <a href="mailto:oriol.enzo10@gmail.com" className="group block p-6 border border-white/10 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-0.5">Me contacter</p>
                                            <p className="text-sm text-white">oriol.enzo10@gmail.com</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </div>
                            </a>

                            <div className="flex items-center gap-4 px-6 text-zinc-400">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">Lyon / France Entière</span>
                            </div>

                            <div className="flex gap-4 px-6 pt-4 border-t border-white/5">
                                <a href="https://github.com/judoka104" target="_blank" aria-label="GitHub" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                                <a href="https://www.linkedin.com/in/enzo-oriol-81448832b" target="_blank" aria-label="LinkedIn" className="text-zinc-500 hover:text-[#0077b5] transition-colors"><Linkedin className="w-5 h-5" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="my-auto">
                        <form
                            action="https://formspree.io/f/xovyqewz"
                            method="POST"
                            suppressHydrationWarning={true}
                            className="bg-zinc-900/60 border border-white/5 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-sm shadow-xl"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                {/* FIX: Ajout de suppressHydrationWarning sur le DIV parent */}
                                <div className="space-y-2" suppressHydrationWarning={true}>
                                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-zinc-500 font-bold ml-1">Nom</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Votre nom"
                                        className="w-full bg-[#18181B] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-600"
                                        suppressHydrationWarning={true}
                                    />
                                </div>
                                {/* FIX: Ajout de suppressHydrationWarning sur le DIV parent */}
                                <div className="space-y-2" suppressHydrationWarning={true}>
                                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-zinc-500 font-bold ml-1">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="nom@exemple.com"
                                        className="w-full bg-[#18181B] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-600"
                                        suppressHydrationWarning={true}
                                    />
                                </div>
                            </div>

                            {/* FIX: Ajout de suppressHydrationWarning sur le DIV parent */}
                            <div className="space-y-2 mb-6" suppressHydrationWarning={true}>
                                <label htmlFor="subject" className="text-xs uppercase tracking-wider text-zinc-500 font-bold ml-1">Sujet</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full bg-[#18181B] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-all appearance-none cursor-pointer"
                                >
                                    <option value="Recrutement">Entretien / Recrutement</option>
                                    <option value="Info">Demande d'informations</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>

                            {/* FIX: Ajout de suppressHydrationWarning sur le DIV parent */}
                            <div className="space-y-2 mb-8" suppressHydrationWarning={true}>
                                <label htmlFor="message" className="text-xs uppercase tracking-wider text-zinc-500 font-bold ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Bonjour Enzo, votre profil nous intéresse..."
                                    className="w-full bg-[#18181B] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-600 resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full group bg-white text-black font-bold uppercase tracking-wider text-xs py-4 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                                Envoyer
                                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}