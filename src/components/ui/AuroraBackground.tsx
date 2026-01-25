import React from 'react';

export default function AuroraBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen w-screen bg-[#050505]">
            <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] bg-zinc-800/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
            <div className="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] bg-[#1a1a1a]/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-zinc-900/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>

            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>
        </div>
    );
}