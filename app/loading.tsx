'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-wl-dark z-[100] flex items-center justify-center">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-24 h-24"
            >
                <div className="absolute inset-0 bg-wl-accent rounded-full blur-xl opacity-20"></div>
                <div className="absolute inset-0 border-4 border-wl-accent/30 rounded-full border-t-wl-accent animate-spin"></div>
                <div className="absolute inset-4 bg-wl-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-wl-accent">W</span>
                </div>
            </motion.div>
        </div>
    );
}
