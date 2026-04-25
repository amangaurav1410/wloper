'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';
import { usePersona } from '@/context/PersonaContext';
import Image from 'next/image';
import MagneticWrapper from './MagneticWrapper';
import NeuralBackground from './NeuralBackground';

export default function Hero() {
    const { openDemoModal } = useDemo();
    const { persona } = usePersona();
    const [index, setIndex] = useState(0);

    const personaContent = {
        STRATEGY: {
            badge: "Intelligent Blueprint",
            words: ["AI Roadmaps", "Strategic Audits", "Future Mapping"],
            sub: "Don't build in the dark. We architect the technical and strategic foundation for your AI transition, ensuring every line of code serves a business outcome."
        },
        ENGINEERING: {
            badge: "Neural Forge",
            words: ["Rust Stacks", "LLM Integration", "Edge Nodes"],
            sub: "We engineer zero-latency systems that don't just work—they dominate. From Rust-powered backends to Next.js 15 edge logic, we build the elite tech the market demands."
        },
        SCALE: {
            badge: "Apex Protocol",
            words: ["Global Reach", "Web3 Systems", "Revenue Engines"],
            sub: "Your vision requires a platform that thinks like a builder, not a vendor. We architect scalable, venture-ready assets that stand up to institutional-grade scrutiny."
        }
    };

    const currentContent = personaContent[persona];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % currentContent.words.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [currentContent.words.length]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wl-dark pt-32 pb-24 md:pb-20">
            {/* Static optimised hero image — priority loaded, no JS needed */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt=""
                    fill
                    priority
                    fetchPriority="high"
                    quality={75}
                    aria-hidden="true"
                    className="object-cover opacity-50"
                />
            </div>

            <NeuralBackground />

            <div className="container-custom relative z-10 w-full">
                <div className="flex flex-col items-center text-center">
                    {/* Badge — non-LCP, can animate */}
                    <motion.div
                        key={`${persona}-badge`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="tag-label"
                    >
                        <Sparkles className="w-4 h-4 text-wl-accent" />
                        {currentContent.badge}
                    </motion.div>

                    {/*
                     * LCP ELEMENT: h1 must be VISIBLE on first paint — no opacity:0 initial state.
                     * Use plain <h1> so it renders immediately during SSR/hydration.
                     * Only the animated word slot inside uses motion.
                     */}
                    <h1 className="heading-xl mb-10 max-w-6xl text-balance tracking-tighter leading-tight">
                        <span className="sr-only">Wloper: The Best IT Company, Leading Tech Company for website Development &amp; AI based Web Development Company. </span>
                        <span className="heading-gradient">Building the Future of</span>
                        <br />
                        <span className="relative h-[1.2em] inline-block w-full overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={`${persona}-${currentContent.words[index]}`}
                                    initial={{ y: 60, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -60, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="text-wl-accent absolute left-0 right-0"
                                >
                                    {currentContent.words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>

                    {/* Subheadline — animate in, not LCP */}
                    <motion.p
                        key={`${persona}-sub`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-white/50 max-w-2xl mb-14 text-sm md:text-xl font-medium leading-relaxed"
                    >
                        {currentContent.sub}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <MagneticWrapper strength={0.3}>
                            <CTAButton onClick={openDemoModal} variant="primary" className="w-full sm:w-auto py-5 sm:py-6 text-lg sm:text-base">
                                <span className="flex items-center gap-2 justify-center">
                                    Start Protocol <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </CTAButton>
                        </MagneticWrapper>

                        <MagneticWrapper strength={0.2}>
                            <CTAButton href="/services" variant="secondary" className="w-full sm:w-auto py-5 sm:py-6 text-lg sm:text-base">
                                Explore Capabilities
                            </CTAButton>
                        </MagneticWrapper>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
