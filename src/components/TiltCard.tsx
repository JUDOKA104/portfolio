import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TiltCard({
    href,
    title,
    subtitle,
}: {
    href: string;
    title: string;
    subtitle?: string;
}) {
    const ref = useRef<HTMLAnchorElement>(null);

    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const srx = useSpring(rx, { stiffness: 180, damping: 18 });
    const sry = useSpring(ry, { stiffness: 180, damping: 18 });

    const onMove = (e: React.MouseEvent) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const px = x / r.width - 0.5;
        const py = y / r.height - 0.5;
        rx.set(py * -10);
        ry.set(px * 12);
    };

    const reset = () => {
        rx.set(0);
        ry.set(0);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
            className="asus-rog-card text-center block will-change-transform hover:scale-[1.01]"
        >
            <div style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-xl font-semibold">{title}</h3>
                {subtitle && (
                    <p className="text-[var(--muted)] text-sm mt-1">{subtitle}</p>
                )}
            </div>
        </motion.a>
    );
}
