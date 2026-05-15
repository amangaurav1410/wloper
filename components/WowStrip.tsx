'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const steps = 60;
        const increment = end / steps;
        const interval = (duration * 1000) / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Number(start.toFixed(1)));
            }
        }, interval);

        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
}

const MARQUEE_ITEMS = [
    '⚡ WordPress', '🛒 Shopify', '▲ Next.js', '🟢 Node.js',
    '🐍 Python', '🔴 Angular', '🔵 .NET', '📱 React Native',
    '📈 SEO', '🎯 Google Ads', '📲 Meta Ads', '🤖 AI Chatbots',
    '🔗 Blockchain', '☁️ AWS', '🐳 Docker', '🔧 Custom Dev',
];

export default function WowStrip() {
    return (
        <section className="relative overflow-hidden py-0 bg-wl-dark">


            {/* ── INFINITE MARQUEE ── */}
            <div className="py-6 overflow-hidden border-b border-white/5 relative">
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-wl-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-wl-dark to-transparent z-10 pointer-events-none" />

                {/* First row — left to right */}
                <div className="flex gap-6 marquee-track w-max">
                    {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                        <div key={i}
                            className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/50 text-sm font-semibold whitespace-nowrap hover:border-wl-accent/40 hover:text-wl-accent transition-all cursor-default flex-shrink-0">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── SECOND MARQUEE ROW — opposite direction ── */}
            <div className="py-4 overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-wl-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-wl-dark to-transparent z-10 pointer-events-none" />

                <div className="flex gap-6 marquee-track-reverse w-max">
                    {[...MARQUEE_ITEMS.slice(8), ...MARQUEE_ITEMS, ...MARQUEE_ITEMS.slice(0, 8)].map((item, i) => (
                        <div key={i}
                            className="px-5 py-2 rounded-full border border-wl-accent/10 bg-wl-accent/[0.03] text-wl-accent/40 text-sm font-semibold whitespace-nowrap hover:border-wl-accent/40 hover:text-wl-accent transition-all cursor-default flex-shrink-0">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
