'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle2, ArrowRight, Zap,
    ShieldCheck, BarChart3, Bot, Phone,
    Cpu, Database, Sparkles, PieChart,
    MessageCircle, Activity, Search
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export default function AICallingAgentPage() {
    const { openDemoModal } = useDemo();
    const featureGroups = [
        {
            title: "Data Acquisition Intelligence",
            features: [
                { name: "Autonomous Outreach", desc: "AI-driven voice agents that conduct structured data collection calls at scale." },
                { name: "Multilingual Support", desc: "Interact with global audiences in their native languages with perfect fluency." },
                { name: "Adaptive Scripting", desc: "Real-time conversation adjustments based on respondent answers and sentiment." }
            ]
        },
        {
            title: "Analytical Engine",
            features: [
                { name: "Instant Synthesis", desc: "Real-time conversion of voice data into structured, actionable insights." },
                { name: "Sentiment Mapping", desc: "Deep emotional analysis to understand the 'why' behind the data." },
                { name: "Predictive Modeling", desc: "Identify trends and patterns before they become obvious in raw data subsets." }
            ]
        }
    ];

    const techSpecs = [
        { label: "Voice Engine", value: "Ultra-low latency neural text-to-speech & speech-to-text." },
        { label: "Data Pipeline", value: "End-to-end encrypted real-time processing and analysis." },
        { label: "Analytics", value: "Custom LLM-driven synthesis for industry-specific data logic." }
    ];

    return (
        <div className="bg-wl-dark min-h-screen text-white selection:bg-wl-accent selection:text-black pb-32">

            {/* Cinematic Hero */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/envato-labs-ai-60bf7079-9412-429a-89f0-19949dc9ecc1.jpg"
                        alt="AI Calling Agent Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/40 to-wl-dark"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Phone className="w-4 h-4 text-wl-accent" />
                            Autonomous Data Intelligence
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            AI Calling Agent for <br /><span className="text-wl-accent">Data & Analysis</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/50"
                        >
                            Scale your data collection and market research with intelligent AI voice agents that conduct human-like conversations and provide instant analytical insights.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-20 px-12 group text-lg">
                                Launch Calling Agent
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4 text-white/40 border border-white/10 px-10 rounded-[2rem] glass-strong">
                                <Activity className="w-6 h-6 text-wl-accent" />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Real-time Analytics</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Product Snapshot: Three Pillars */}
            <section className="section-padding py-32 bg-wl-dark/50 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="group glass-strong p-12 rounded-[3rem] border border-white/5 hover:border-wl-accent/20 transition-all">
                            <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <Zap className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Mass Scale</h3>
                            <p className="text-white/40 font-medium leading-relaxed">Conduct thousands of simultaneous calls without any loss in conversation quality or data accuracy.</p>
                        </div>
                        <div className="group glass-strong p-12 rounded-[3rem] border border-white/5 hover:border-wl-accent/20 transition-all">
                            <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <BarChart3 className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Live Insights</h3>
                            <p className="text-white/40 font-medium leading-relaxed">Watch as raw conversations are instantly transformed into structured data points and visual reports.</p>
                        </div>
                        <div className="group glass-strong p-12 rounded-[3rem] border border-white/5 hover:border-wl-accent/20 transition-all">
                            <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <Search className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Deep Context</h3>
                            <p className="text-white/40 font-medium leading-relaxed">Our agents understand nuances, follow-up on interesting points, and dig deeper into respondent logic.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Breakdown Sections */}
            <section className="section-padding py-32 relative">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none -ml-64" />

                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-20">
                        {/* Sidebar: Feature List */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-32 space-y-12">
                                <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">Feature <br /><span className="text-wl-accent">Logic Map.</span></h2>
                                {featureGroups.map((group, idx) => (
                                    <div key={idx} className="space-y-8">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">{group.title}</h4>
                                        <div className="space-y-6">
                                            {group.features.map((f, i) => (
                                                <div key={i} className="flex gap-6 group">
                                                    <CheckCircle2 className="w-6 h-6 text-wl-accent shrink-0 group-hover:scale-125 transition-transform" />
                                                    <div>
                                                        <h5 className="text-xl font-bold mb-2">{f.name}</h5>
                                                        <p className="text-white/40 leading-relaxed">{f.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual representation: Architecture Image Inserted Here */}
                        <div className="lg:col-span-7">
                            <div className="glass-strong rounded-[4rem] border border-white/10 relative overflow-hidden h-[800px] mb-12">
                                <Image
                                    src="/images/envato-labs-ai-36c4ce64-9e58-4f59-a78e-403034b187ca.jpg"
                                    alt="Calling Agent Architecture"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark via-wl-dark/40 to-transparent" />

                                <div className="absolute bottom-12 left-12 right-12">
                                    <h3 className="text-4xl font-black mb-8 flex items-center gap-6">
                                        <Cpu className="w-12 h-12 text-wl-accent" />
                                        Advanced Synthesis
                                    </h3>
                                    <div className="grid gap-4">
                                        {techSpecs.map((spec, i) => (
                                            <div key={i} className="p-6 rounded-[2rem] bg-black/60 backdrop-blur-xl border border-white/10">
                                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-wl-accent mb-2">{spec.label}</p>
                                                <p className="text-base font-bold text-white/90">{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Conversion */}
            <section className="section-padding pt-0 pb-40">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-strong p-20 lg:p-40 rounded-[4rem] border border-wl-accent/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/envato-labs-ai-60bf7079-9412-429a-89f0-19949dc9ecc1.jpg"
                                alt="Final Call Image"
                                fill
                                className="object-cover opacity-20"
                            />
                            <div className="absolute inset-0 bg-wl-dark/60" />
                        </div>
                        <div className="relative z-10">
                            <Sparkles className="w-16 h-16 text-wl-accent mx-auto mb-10" />
                            <h2 className="text-5xl md:text-8xl font-black mb-12 leading-tight tracking-tighter">Accelerate <br /><span className="text-wl-accent">Data Strategy.</span></h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                <button onClick={openDemoModal} className="btn-primary h-20 px-16 text-xl">
                                    Start Data Campaign
                                </button>
                                <Link href="/contact" className="btn-secondary h-20 px-16 text-xl">
                                    Talk to Experts
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
