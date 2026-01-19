'use client';

import { motion } from 'framer-motion';
import {
    Target, Users, Zap, Sparkles, Heart, Globe, TrendingUp,
    Code2, Rocket, ShieldCheck, Cpu, Database, Cloud, Layers,
    Lock, Smartphone, Layout, ArrowRight, Quote
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export default function AboutPage() {
    const { openDemoModal } = useDemo();
    const stats = [
        { label: 'Cloud Solutions', value: '450+' },
        { label: 'AI Models Deployed', value: '1.2K' },
        { label: 'Global Clients', value: '850+' },
        { label: 'Team Experts', value: '120+' },
    ];

    const values = [
        {
            icon: Target,
            title: "Strategic Precision",
            desc: "We don't just build; we architect for long-term scalability and market dominance."
        },
        {
            icon: Zap,
            title: "Rapid Innovation",
            desc: "Our agile pods deliver enterprise-grade solutions at the speed of the AI era."
        },
        {
            icon: Heart,
            title: "Human-Centric AI",
            desc: "We believe technology should empower people, not replace the human touch."
        }
    ];

    const team = [
        {
            name: "Alex Rivet",
            role: "Chief Architect",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Sarah Chen",
            role: "AI Lead",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Marcus Thorne",
            role: "Strategy Director",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    const timeline = [
        { year: "2018", event: "The Genesis", desc: "Wloper starts in a small studio with 3 engineers focusing on cloud infrastructure." },
        { year: "2020", event: "Enterprise Shift", desc: "Global expansion begins with our first major enterprise SaaS platform launch." },
        { year: "2023", event: "AI Foundation", desc: "Pivoted core engine to LLM-driven architectures and neural networks." },
        { year: "2026", event: "AI Supremacy", desc: "Leading the global AI revolution with autonomous systems and predictive analytics." }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="section-padding relative pt-40 lg:pt-64 min-h-[90vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                        alt="About Us Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/80 to-wl-dark"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Sparkles className="w-4 h-4 text-wl-accent" />
                            Architecting the Future
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-12"
                        >
                            We are <br /><span className="heading-gradient">the AI Engine</span><br /> of Progress.
                        </motion.h1>
                        <div className="grid md:grid-cols-2 gap-16 items-end">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="subtitle-lg"
                            >
                                Wloper is a global technology powerhouse specializing in AI-driven digital transformation. We bridge the gap between complex engineering and human experience.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-4"
                            >
                                <div className="glass-strong p-8 rounded-[2rem] border border-white/5 flex-1">
                                    <div className="text-4xl font-black text-wl-accent mb-2">99%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-wl-muted-dark">Success Rate</div>
                                </div>
                                <div className="glass-strong p-8 rounded-[2rem] border border-white/5 flex-1 bg-wl-accent text-black shadow-[0_0_30px_rgba(202,246,72,0.2)]">
                                    <div className="text-4xl font-black mb-2">120+</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-70 font-black">AI Specialists</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visionary Section */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-strong rounded-[4rem] overflow-hidden border border-white/10 relative h-[600px]">
                                <img
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Deep Strategy Session"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark via-transparent to-transparent"></div>
                                <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-3xl border border-white/10">
                                    <Quote className="w-8 h-8 text-wl-accent mb-4" />
                                    <p className="subtitle-lg mb-4 italic">"Our mission is to democratize intelligence, making powerful AI accessible to every ambitious enterprise."</p>
                                    <div className="mt-4 font-bold uppercase tracking-widest text-[10px] text-wl-accent">— The Wloper Vision</div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="heading-lg mb-10 text-balance"
                            >
                                Built by Innovators, <br /><span className="text-wl-accent">For Game Changers.</span>
                            </motion.h2>
                            <div className="grid gap-8">
                                {values.map((v, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6 items-start group"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                            <v.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="heading-sm mb-2">{v.title}</h3>
                                            <p className="subtitle-md">{v.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Experience */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong border border-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[50%] h-full bg-wl-accent/5 blur-[120px] pointer-events-none"></div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
                            {stats.map((s, i) => (
                                <div key={i} className="text-center group">
                                    <div className="text-5xl md:text-7xl font-black text-wl-accent mb-4 tabular-nums group-hover:scale-110 transition-transform">{s.value}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-wl-muted-dark">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-24">
                        <h2 className="heading-lg">Minds Behind <span className="text-wl-accent">The Magic</span></h2>
                        <p className="text-xl text-wl-muted-dark mt-4">World-class talent from around the globe.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative h-[450px] rounded-[3rem] overflow-hidden mb-8 border border-white/5">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-wl-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <h3 className="heading-sm mb-2">{member.name}</h3>
                                <p className="text-wl-accent font-bold uppercase tracking-widest text-[10px]">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="section-padding overflow-hidden">
                <div className="container-custom">
                    <div className="mb-24">
                        <h2 className="heading-lg">Our <span className="text-wl-accent">Evolution</span></h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-white/5 md:block hidden"></div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass-strong p-8 rounded-[2.5rem] border border-white/10 relative group hover:border-wl-accent/30 transition-all"
                                >
                                    <div className="text-4xl font-black text-wl-accent mb-6">{item.year}</div>
                                    <h3 className="text-xl font-bold mb-3">{item.event}</h3>
                                    <p className="text-sm text-wl-muted-dark font-medium leading-relaxed">{item.desc}</p>
                                    <div className="absolute -bottom-2 md:bottom-auto md:top-1/2 md:translate-y-[-50%] left-1/2 -translate-x-1/2 w-4 h-4 bg-wl-accent rounded-full hidden md:block border-4 border-wl-dark group-hover:scale-150 transition-transform"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-strong p-12 md:p-32 rounded-[4rem] border border-wl-accent/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">Ready to build the <br /><span className="text-wl-accent">Unimaginable?</span></h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                <button onClick={openDemoModal} className="btn-primary flex items-center gap-3">
                                    Start Your Project <ArrowRight className="w-5 h-5" />
                                </button>
                                <Link href="/portfolio" className="px-10 h-16 rounded-full border border-white/10 flex items-center justify-center font-bold hover:bg-white/5 transition-all">
                                    View Our Work
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
