'use client';

import { motion } from 'framer-motion';
import {
    Target, Users, Zap, Sparkles, Heart, Globe, TrendingUp,
    Code2, Rocket, ShieldCheck, Cpu, Database, Cloud, Layers,
    Lock, Smartphone, Layout
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    const stats = [
        { label: 'Projects Completed', value: '6K+' },
        { label: 'Happy Clients', value: '2K+' },
        { label: 'Client Rating', value: '4.7' },
        { label: 'Years of Experience', value: '8+' },
    ];

    const techStack = [
        { name: "OpenAI", icon: Cpu, category: "AI Logic" },
        { name: "Next.js", icon: Code2, category: "Architecture" },
        { name: "AWS", icon: Cloud, category: "Infrastructure" },
        { name: "Etherium", icon: Database, category: "Blockchain" },
        { name: "Motion", icon: Layout, category: "Experience" }
    ];

    const timeline = [
        { year: "2018", event: "The Genesis", desc: "Wloper starts in a small studio with 3 engineers." },
        { year: "2020", event: "Enterprise Shift", desc: "First major enterprise SaaS platform launch." },
        { year: "2023", event: "AI Foundation", desc: "Pivoted core engine to LLM-driven architectures." },
        { year: "2026", event: "Global Dominance", desc: "Leading the Punjab-to-Global AI revolution." }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="section-padding relative pt-32 lg:pt-48">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-wl-accent" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">Empowering Innovation</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black leading-[1.1] mb-8"
                        >
                            Empowering Brands <br /><span className="heading-gradient">with AI & Strategy</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-wl-muted-dark leading-relaxed max-w-2xl mx-auto font-medium"
                        >
                            We help businesses build, launch, and scale digital products that don’t just function — they win in the market.
                        </motion.p>
                    </div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-5xl mx-auto mt-16"
                    >
                        <div className="glass-strong rounded-[4rem] overflow-hidden border border-white/10 relative h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1522071823991-b397dd51a196?q=80&w=2070&auto=format&fit=crop"
                                alt="WLOPER Team Culture"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-wl-dark/60 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cultural Core Section */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
                                Builders Who Think Like <span className="text-wl-accent">Marketers</span>
                            </h2>
                            <div className="space-y-6 text-xl text-wl-muted-dark leading-relaxed font-medium">
                                <p>
                                    We’re Wloper — a new generation of technologists who think beyond code. We blend creative engineering, AI innovation, and strategic digital thinking to build products that are designed for real-world success.
                                </p>
                                <p>
                                    Whether it’s an AI platform, a mobile application, or a scalable web system, we build with bold ideas and take products all the way from concept to market impact.
                                </p>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="glass-strong p-8 rounded-[2rem] border border-white/5 aspect-square flex flex-col justify-end">
                                    <Zap className="w-10 h-10 text-wl-accent mb-4" />
                                    <h3 className="font-black text-xl mb-1">Agility</h3>
                                    <p className="text-xs text-wl-muted-dark font-bold uppercase tracking-widest">Sprint-First Flow</p>
                                </div>
                                <div className="glass-strong p-8 rounded-[2rem] border border-white/5 aspect-square bg-wl-accent text-black flex flex-col justify-end">
                                    <Users className="w-10 h-10 mb-4" />
                                    <h3 className="font-black text-xl mb-1">Humanity</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Heart-Driven Code</p>
                                </div>
                            </div>
                            <div className="space-y-4 mt-12">
                                <div className="glass-strong p-8 rounded-[2rem] border border-white/5 aspect-square flex flex-col justify-end">
                                    <ShieldCheck className="w-10 h-10 text-wl-accent mb-4" />
                                    <h3 className="font-black text-xl mb-1">Trust</h3>
                                    <p className="text-xs text-wl-muted-dark font-bold uppercase tracking-widest">Compliance Ready</p>
                                </div>
                                <div className="glass-strong p-8 rounded-[2rem] border border-white/5 aspect-square flex flex-col justify-end">
                                    <Lock className="w-10 h-10 text-wl-accent mb-4" />
                                    <h3 className="font-black text-xl mb-1">Security</h3>
                                    <p className="text-xs text-wl-muted-dark font-bold uppercase tracking-widest">Enterprise Guard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evolution Timeline Section */}
            <section className="section-padding bg-wl-dark relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5 md:block hidden"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="heading-lg">Our Journey from <span className="text-wl-accent">2018 to 2026</span></h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-[2.5rem] border border-white/10 relative group hover:border-wl-accent/30 transition-all text-center"
                            >
                                <div className="text-5xl font-black text-wl-accent mb-6 group-hover:scale-110 transition-transform">{item.year}</div>
                                <h3 className="text-xl font-bold mb-3">{item.event}</h3>
                                <p className="text-sm text-wl-muted-dark font-medium leading-relaxed">{item.desc}</p>
                                <div className="absolute -bottom-2 lg:-bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-wl-accent rounded-full hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Partners Section */}
            <section className="section-padding bg-wl-dark/50 border-y border-white/5">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-widest text-wl-muted-dark mb-4">The Strategic Stack</p>
                        <h3 className="text-3xl font-black">Technologies That Power <span className="text-wl-accent">Our Solutions</span></h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center gap-4 group"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <tech.icon className="w-10 h-10" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-bold text-white mb-1">{tech.name}</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-wl-muted-dark">{tech.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-6xl md:text-8xl font-black text-wl-accent mb-4 tabular-nums">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-wl-muted-dark">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto glass-strong p-12 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-wl-accent/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <div className="text-center relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-8"
                            >
                                <Heart className="w-4 h-4 text-wl-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">Our Core Values</span>
                            </motion.div>
                            <h2 className="heading-lg mb-10">
                                Driven by Purpose. <br />United by Vision.
                            </h2>
                            <p className="text-xl md:text-2xl text-wl-muted-dark leading-relaxed font-medium">
                                At Wloper, we believe in collaboration, creativity, and compassion. Every idea starts with belief. Every solution starts with helping. And every success is built through teamwork.
                            </p>
                            <div className="mt-12">
                                <Link href="/contact" className="btn-primary">
                                    Join Our Journey
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
