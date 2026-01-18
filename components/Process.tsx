'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Search, Compass, Cpu, Code2, Rocket, Sparkles, Zap } from 'lucide-react';

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const steps = [
        {
            title: 'Discovery & AI Audit',
            desc: 'We deep-dive into your existing ecosystem to identify high-impact AI opportunities and growth blockers.',
            icon: Search,
            tag: 'Foundation'
        },
        {
            title: 'Strategic Blueprint',
            desc: 'Engineering a technical roadmap focused on ROI, scalability, and seamless user experiences.',
            icon: Compass,
            tag: 'Architecture'
        },
        {
            title: 'Rapid Prototyping',
            desc: 'Visualizing the future through high-fidelity interactive prototypes and AI-driven mockups.',
            icon: Cpu,
            tag: 'Validation'
        },
        {
            title: 'Hardcore Development',
            desc: 'Building battle-tested, high-performance systems using the latest Next.js and AI integrations.',
            icon: Code2,
            tag: 'Execution'
        },
        {
            title: 'Growth Activation',
            desc: 'Launching with a data-driven strategy to ensure your product doesn’t just work, but thrives.',
            icon: Rocket,
            tag: 'Impact'
        }
    ];

    return (
        <section ref={containerRef} className="section-padding bg-wl-dark relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none -mr-96"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none -ml-72"></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-6"
                    >
                        <Zap className="w-4 h-4 text-wl-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">Execution Framework</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-8"
                    >
                        The <span className="heading-gradient text-wl-accent">WLOPER</span> Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-wl-muted-dark max-w-2xl mx-auto font-medium"
                    >
                        A battle-tested methodology designed to launch industry-leading AI products.
                    </motion.p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Central Animated Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleY }}
                            className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-wl-accent via-wl-accent/50 to-transparent origin-top"
                        />
                    </div>

                    <div className="space-y-24 md:space-y-48">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex items-center gap-12 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Step Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full md:w-[42%] pl-20 md:pl-0"
                                >
                                    <div className="group relative">
                                        {/* Floating Badge */}
                                        <div className="absolute -top-6 left-0 px-4 py-1 rounded-lg bg-wl-accent/10 border border-wl-accent/20 text-[10px] font-black uppercase tracking-widest text-wl-accent">
                                            Stage 0{index + 1} • {step.tag}
                                        </div>

                                        <div className="glass-strong p-10 md:p-14 rounded-[3.5rem] border border-white/5 hover:border-wl-accent/20 transition-all duration-500 overflow-hidden group">
                                            {/* Corner Glow */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-wl-accent/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                            <div className="relative z-10">
                                                <h3 className="text-3xl font-black mb-6 group-hover:text-wl-accent transition-colors">
                                                    {step.title}
                                                </h3>
                                                <p className="text-lg text-wl-muted-dark leading-relaxed font-medium">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Center Icon Pillar */}
                                <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 flex flex-col items-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="w-16 h-16 rounded-3xl bg-wl-dark border-2 border-white/10 flex items-center justify-center relative z-20 shadow-[0_0_30px_rgba(0,0,0,0.5)] group hover:border-wl-accent transition-colors duration-500"
                                    >
                                        <div className="absolute inset-0 bg-wl-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <step.icon className="w-7 h-7 text-wl-accent" />
                                    </motion.div>

                                    {/* Number Circle for Mobile/Detail */}
                                    <div className="md:hidden mt-4 text-xs font-black text-white/20 uppercase tracking-widest">
                                        Stage {index + 1}
                                    </div>
                                </div>

                                {/* Placeholder for Alignment */}
                                <div className="hidden md:block md:w-[42%]"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Connector CTA (Subtle) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-48 text-center"
                >
                    <div className="inline-block p-1 rounded-full bg-white/5 border border-white/10 scale-110">
                        <div className="px-10 py-4 rounded-full bg-wl-dark text-wl-accent font-black uppercase tracking-widest text-sm">
                            Ready to begin?
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
