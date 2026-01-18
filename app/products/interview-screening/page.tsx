'use client';

import { motion } from 'framer-motion';
import {
    Layout, CheckCircle2, ArrowRight, Zap, Target,
    ShieldCheck, BarChart3, Bot, Users, Search,
    Cpu, Database, Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function InterviewScreeningPage() {
    const featureGroups = [
        {
            title: "Assessment Intelligence",
            features: [
                { name: "NLP Analysis", desc: "Deep context-aware evaluation of candidate verbal and text responses." },
                { name: "Tone & Sentiment", desc: "Assess soft skills and cultural fit through advanced acoustic modeling." },
                { name: "Skills Verification", desc: "Automated coding and technical competency challenge validation." }
            ]
        },
        {
            title: "Process Automation",
            features: [
                { name: "Dynamic Scheduling", desc: "Autonomous interview slot coordination across global timezones." },
                { name: "ATS Sync", desc: "Native bi-directional data flow with Lever, Greenhouse, and more." },
                { name: "Instant Ranking", desc: "AI-driven scoring matrix based on your custom success benchmarks." }
            ]
        }
    ];

    const techSpecs = [
        { label: "Infrastructure", value: "AWS Lambda / serverless architecture for instant scaling." },
        { label: "AI Engine", value: "Proprietary Whisper + GPT-4o multimodal pipeline." },
        { label: "Compliance", value: "SOC2 Type II + GDPR global data sovereignty standards." }
    ];

    return (
        <div className="bg-wl-dark min-h-screen text-white selection:bg-wl-accent selection:text-black pb-32">

            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-8"
                    >
                        <Bot className="w-4 h-4 text-wl-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">Next-Gen HR Tech</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black leading-tight mb-8"
                    >
                        AI <span className="heading-gradient">Interview</span> Screening
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-wl-muted-dark max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        Rank talent 10x faster with our multimodal AI engine. Automate screening, eliminate bias, and unlock top-tier human potential.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <Link href="/contact" className="btn-primary group h-16 px-10">
                            Book Technical Demo
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-4 text-wl-muted-dark border border-white/10 px-6 py-4 rounded-full glass">
                            <ShieldCheck className="w-5 h-5 text-wl-accent" />
                            <span className="text-xs font-bold uppercase tracking-widest">Enterprise Ready</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Product Snapshot: Three Pillars */}
            <section className="section-padding py-20 bg-wl-dark/50 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Zero Friction</h3>
                            <p className="text-wl-muted-dark font-medium leading-relaxed">No software for candidates to download. Built directly for the modern mobile web.</p>
                        </div>
                        <div className="group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Data Evidence</h3>
                            <p className="text-wl-muted-dark font-medium leading-relaxed">Every hiring decision is backed by transparent, explainable AI scoring data.</p>
                        </div>
                        <div className="group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Human-Centric</h3>
                            <p className="text-wl-muted-dark font-medium leading-relaxed">Designed to enhance recruiter productivity, not replace human judgment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Breakdown Sections */}
            <section className="section-padding py-32">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-20">
                        {/* Sidebar: Feature List */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-32 space-y-12">
                                <h2 className="text-4xl md:text-5xl font-black leading-tight">Comprehensive <br /><span className="text-wl-accent">Feature Logic</span></h2>
                                {featureGroups.map((group, idx) => (
                                    <div key={idx} className="space-y-8">
                                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">{group.title}</h4>
                                        <div className="space-y-6">
                                            {group.features.map((f, i) => (
                                                <div key={i} className="flex gap-4 group">
                                                    <CheckCircle2 className="w-5 h-5 text-wl-accent shrink-0 group-hover:scale-125 transition-transform" />
                                                    <div>
                                                        <h5 className="font-bold mb-1">{f.name}</h5>
                                                        <p className="text-sm text-wl-muted-dark">{f.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual representation: The Architecture */}
                        <div className="lg:col-span-7">
                            <div className="glass-strong p-12 md:p-20 rounded-[4rem] border border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/5 rounded-full blur-3xl"></div>

                                <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
                                    <Cpu className="w-10 h-10 text-wl-accent" />
                                    The Architecture
                                </h3>

                                <div className="space-y-12">
                                    {techSpecs.map((spec, i) => (
                                        <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-wl-accent/20 transition-all">
                                            <p className="text-xs font-black uppercase tracking-widest text-wl-accent mb-4">{spec.label}</p>
                                            <p className="text-lg font-medium text-white">{spec.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 pt-12 border-t border-white/5">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-wl-accent text-black flex items-center justify-center">
                                            <Database className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-wl-muted-dark uppercase tracking-widest">Data Sovereignty</p>
                                            <p className="font-bold">Enterprise Encryption Built-in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Conversion Sub-section */}
            <section className="container-custom">
                <div className="bg-gradient-to-br from-wl-accent/20 to-transparent p-1 px-1 rounded-[4rem]">
                    <div className="bg-wl-dark p-12 md:p-24 rounded-[3.9rem] text-center">
                        <Sparkles className="w-12 h-12 text-wl-accent mx-auto mb-10" />
                        <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">Transform Your Hiring Pipeline Today</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="btn-primary h-16 px-12">
                                Request a Trial
                            </Link>
                            <Link href="/about" className="btn-secondary h-16 px-12">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
