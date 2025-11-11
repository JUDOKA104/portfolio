import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });
    const ctr = useAnimation();
    useEffect(() => { if (inView) ctr.start({ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: .6, delay } }); }, [inView, ctr, delay]);
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 16, filter: "blur(2px)" }} animate={ctr}>
            {children}
        </motion.div>
    );
}
