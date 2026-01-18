'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Mail, Phone, MapPin, MessageSquare, Globe, Sparkles,
    Send, ShieldCheck, Clock, Zap, ArrowRight, CheckCircle2,
    Calendar, Bot
} from 'lucide-react';

export default function ContactPage() {
    const [formStep, setFormStep] = useState(1);
    const [interest, setInterest] = useState('');

    const milestones = [
        { title: "Discovery Audit", desc: "48-hour deep analysis" },
        { title: "Strategy Session", desc: "15-min expert call" },
        { title: "Project Launch", desc: "Scale with confidence" }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="section-padding relative pt-32 lg:pt-48 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-8"
                    >
                        <Zap className="w-4 h-4 text-wl-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">Fast-Track Onboarding</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black mb-6 leading-tight"
                    >
                        Let's Built What's <br /><span className="heading-gradient">Next, Together.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-wl-muted-dark leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        Don’t just contact us—start your journey to market dominance with an AI-first strategy.
                    </motion.p>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="pb-24">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {milestones.map((m, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <span className="font-black text-2xl">0{idx + 1}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">{m.title}</h4>
                                <p className="text-sm text-wl-muted-dark font-medium">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Content Grid */}
            <section className="bg-wl-dark relative">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                        {/* Left Side: Trust & Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="glass-strong p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-wl-accent/5 blur-3xl rounded-full"></div>
                                <h3 className="text-4xl font-black mb-8 leading-tight">Why companies choose <span className="text-wl-accent">Wloper</span></h3>
                                <div className="space-y-8">
                                    {[
                                        "Strategy before code—we think like founders.",
                                        "AI integration that actually moves the needle.",
                                        "Global support with local Punjab efficiency."
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-5 items-start">
                                            <div className="w-8 h-8 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-wl-accent" />
                                            </div>
                                            <p className="text-lg font-medium text-wl-muted-dark">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center">
                                    <Mail className="w-8 h-8 text-wl-accent mx-auto mb-4" />
                                    <div className="text-xs font-black uppercase tracking-widest text-wl-muted-dark mb-1">Email Support</div>
                                    <div className="font-bold">hello@wloper.com</div>
                                </div>
                                <div className="p-8 rounded-[2rem] bg-wl-accent text-black text-center group cursor-pointer">
                                    <Calendar className="w-8 h-8 mx-auto mb-4" />
                                    <div className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Book A Call</div>
                                    <div className="font-bold group-hover:underline">Schedule Discovery</div>
                                </div>
                            </div>

                            <div className="text-center p-8 border border-dashed border-white/10 rounded-3xl">
                                <p className="text-sm font-bold text-wl-muted-dark">
                                    Head Office: 53, Arya College Road, Kharar, Punjab, India
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Side: Interactive Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-strong border border-white/10 rounded-[4rem] p-10 md:p-14 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/5 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="mb-12">
                                <h2 className="text-3xl md:text-5xl font-black mb-6">Start Discovery</h2>
                                <p className="text-wl-muted-dark text-lg font-medium leading-relaxed">
                                    Fill out the quick briefing form below and our specialists will analyze your project within 24 hours.
                                </p>
                            </div>

                            <form className="space-y-8 relative z-10">
                                <div className="space-y-6">
                                    <label className="text-xs font-black uppercase tracking-widest text-wl-muted-dark ml-1">What are you looking for?</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['AI Platform', 'Mobile App', 'Marketing', 'Automation'].map((cat) => (
                                            <button
                                                key={cat}
                                                type="button"
                                                onClick={() => setInterest(cat)}
                                                className={`py-4 px-6 rounded-2xl font-black text-sm border transition-all ${interest === cat
                                                    ? 'bg-wl-accent text-black border-wl-accent shadow-[0_0_20px_rgba(202,246,72,0.2)]'
                                                    : 'bg-white/5 border-white/5 text-wl-muted-dark hover:border-white/20'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-wl-muted-dark ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20 font-medium"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-wl-muted-dark ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20 font-medium"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-wl-muted-dark ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20 font-medium resize-none text-lg"
                                        placeholder="Briefly describe your goals..."
                                    />
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        className="btn-primary w-full h-20 text-2xl group relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            Send Discovery Request <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </span>
                                    </button>
                                    <div className="flex items-center justify-center gap-4 mt-10">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-wl-dark bg-wl-accent/20 flex items-center justify-center font-bold text-xs text-wl-accent italic">
                                                    W
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs font-bold text-wl-muted-dark uppercase tracking-widest">
                                            Join our 2,000+ happy clients
                                        </p>
                                    </div>
                                    <div className="mt-8 flex items-center justify-center gap-2 text-wl-accent">
                                        <ShieldCheck className="w-5 h-5" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Privacy Secure • Zero Spam Guarantee</span>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Reach Section */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-6">
                            Global Expertise, <span className="text-wl-accent">Local Presence</span>
                        </h2>
                        <p className="text-xl text-wl-muted-dark max-w-3xl mx-auto font-medium leading-relaxed">
                            Based in Punjab, India, we serve clients worldwide with 24/7 support and a commitment to excellence. Our modern office space fosters innovation and collaboration.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong rounded-[4rem] overflow-hidden border border-white/10 mb-16 h-[400px] relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                            alt="WLOPER Global Office"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-wl-dark/60 to-transparent"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: 'Global Clients',
                                desc: 'Serving 50+ countries across 6 continents'
                            },
                            {
                                icon: Clock,
                                title: '24/7 Support',
                                desc: 'Round-the-clock assistance for all time zones'
                            },
                            {
                                icon: Zap,
                                title: 'Fast Response',
                                desc: 'Average 2-hour response time for queries'
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-[2rem] border border-white/5 text-center hover:border-wl-accent/20 transition-all"
                            >
                                <div className="w-16 h-16 bg-wl-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-8 h-8 text-wl-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-wl-muted-dark font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
