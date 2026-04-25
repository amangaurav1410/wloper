'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, Sparkles, Globe, Search, Target, Share2, Smartphone, Code2 } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';
import Image from 'next/image';
import MagneticWrapper from './MagneticWrapper';
import NeuralBackground from './NeuralBackground';

const WORDS = ["AI Roadmaps", "Web Development", "AI Chatbots", "SEO & Ads", "Mobile Apps"];

// Floating service badges — positioned around the hero content
const BADGES = [
    { icon: Globe, label: 'WordPress', color: 'bg-blue-500/20 border-blue-400/30', x: '-left-4 top-32', delay: 0 },
    { icon: Code2, label: 'Next.js', color: 'bg-white/10 border-white/20', x: '-left-8 bottom-40', delay: 0.3 },
    { icon: Search, label: 'SEO', color: 'bg-green-500/20 border-green-400/30', x: '-right-4 top-24', delay: 0.15 },
    { icon: Target, label: 'Google Ads', color: 'bg-yellow-500/20 border-yellow-400/30', x: '-right-8 bottom-48', delay: 0.45 },
    { icon: Share2, label: 'Meta Ads', color: 'bg-blue-400/20 border-blue-300/30', x: 'left-1/4 -top-8', delay: 0.2 },
    { icon: Smartphone, label: 'React Native', color: 'bg-cyan-500/20 border-cyan-400/30', x: 'right-1/4 -top-8', delay: 0.35 },
];

export default function Hero() {
    const { openDemoModal } = useDemo();
    const [index, setIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % WORDS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wl-dark pt-32 pb-24 md:pb-20">
            {/* Dot-grid overlay */}
            <div className="absolute inset-0 z-0 dot-grid opacity-40 pointer-events-none" />

            {/* Hero background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt=""
                    fill
                    priority
                    fetchPriority="high"
                    quality={55}
                    aria-hidden="true"
                    className="object-cover opacity-40"
                    sizes="100vw"
                />
            </div>

            {/* Animated glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-wl-accent/8 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-wl-accent/4 rounded-full blur-[160px] pointer-events-none" />

            <NeuralBackground />

            <div className="container-custom relative z-10 w-full">
                <div className="flex flex-col items-center text-center relative">

                    {/* Floating badges — hidden on mobile, shown on xl */}
                    {mounted && BADGES.map((badge, i) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + badge.delay, type: 'spring', stiffness: 200 }}
                            className={`absolute hidden xl:flex items-center gap-2 px-4 py-2 rounded-2xl border backdrop-blur-md ${badge.color} ${badge.x} z-20`}
                            style={{ animation: `float-anim ${4 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
                        >
                            <badge.icon className="w-3.5 h-3.5 text-white/70" />
                            <span className="text-[11px] font-bold text-white/70 whitespace-nowrap">{badge.label}</span>
                        </motion.div>
                    ))}

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="tag-label glow-pulse"
                    >
                        <Sparkles className="w-4 h-4 text-wl-accent" />
                        India's Best IT Company
                    </motion.div>

                    {/*
                     * LCP ELEMENT: plain <h1> — renders immediately in SSR.
                     */}
                    <h1 className="heading-xl mb-10 max-w-6xl text-balance tracking-tighter leading-tight">
                        <span className="sr-only">Wloper: The Best IT Company, Leading Tech Company for website Development & AI based Web Development Company.</span>
                        <span className="heading-gradient">Building the Future of</span>
                        <br />
                        <span className="relative h-[1.2em] inline-block w-full overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={WORDS[index]}
                                    initial={{ y: 60, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -60, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="text-wl-accent absolute left-0 right-0"
                                >
                                    {WORDS[index]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-white/50 max-w-2xl mb-14 text-sm md:text-xl font-medium leading-relaxed"
                    >
                        Website development, SEO, Google Ads, Meta Ads and AI solutions — everything your business needs to grow online, all under one roof.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
                    >
                        <MagneticWrapper strength={0.3}>
                            <CTAButton onClick={openDemoModal} variant="primary" className="w-full sm:w-auto py-5 sm:py-6 text-lg sm:text-base">
                                <span className="flex items-center gap-2 justify-center">
                                    Get Free Demo <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </CTAButton>
                        </MagneticWrapper>

                        <MagneticWrapper strength={0.2}>
                            <CTAButton href="/services" variant="secondary" className="w-full sm:w-auto py-5 sm:py-6 text-lg sm:text-base">
                                Explore Services
                            </CTAButton>
                        </MagneticWrapper>
                    </motion.div>

                    {/* Trust strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-8 text-white/25"
                    >
                        {['WordPress', 'Shopify', 'Next.js', 'Google Ads', 'Meta Ads', 'SEO'].map((tech) => (
                            <span key={tech} className="text-[11px] font-bold uppercase tracking-widest hover:text-wl-accent transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-wl-dark to-transparent pointer-events-none z-10" />
        </section>
    );
}
