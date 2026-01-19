'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Mail, Phone, MapPin, MessageSquare, Globe, Sparkles,
    Send, ShieldCheck, Clock, Zap, ArrowRight, CheckCircle2,
    Calendar, Bot, ChevronDown, Plus, Minus
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
    const [interest, setInterest] = useState('');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "How fast can we start?",
            a: "We usually kick off within 48-72 hours of the strategy alignment call. Our agile structure allows us to scale teams rapidly."
        },
        {
            q: "Do you offer post-launch support?",
            a: "Absolutely. We provide 24/7 managed services and continuous optimization packages to ensure your product evolves with the market."
        },
        {
            q: "What industries do you specialize in?",
            a: "While we are industry-agnostic, we have deep expertise in Fintech, Healthcare AI, SaaS, and E-commerce automation."
        }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="section-padding relative pt-40 lg:pt-64 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                        alt="Contact Background"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/80 to-wl-dark"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="tag-label"
                            >
                                <Zap className="w-4 h-4 text-wl-accent" />
                                Priority Access 2026
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="heading-xl mb-10"
                            >
                                Let's Build <br /><span className="heading-gradient">Something Iconic.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="subtitle-lg"
                            >
                                Don't just hire a vendor. Partner with a team that thinks like founders and builds like visionaries.
                            </motion.p>

                            <div className="mt-12 flex items-center gap-6">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-14 h-14 rounded-full border-4 border-wl-dark overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex text-wl-accent mb-1">
                                        {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} className="w-3 h-3 fill-current" />)}
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-wl-muted-dark">Trusted by 850+ global brands</p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="glass-strong border border-white/10 rounded-[4rem] p-10 md:p-14 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/5 rounded-full blur-3xl pointer-events-none"></div>

                            <form className="space-y-8 relative z-10">
                                <div className="space-y-6">
                                    <label className="text-xs font-black uppercase tracking-widest text-wl-muted-dark ml-1">What's your project about?</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['AI Solution', 'Web Platform', 'Strategy', 'Growth'].map((cat) => (
                                            <button
                                                key={cat}
                                                type="button"
                                                onClick={() => setInterest(cat)}
                                                className={`py-4 px-6 rounded-2xl font-bold text-sm border transition-all ${interest === cat
                                                    ? 'bg-wl-accent text-black border-wl-accent shadow-[0_0_30px_rgba(202,246,72,0.3)]'
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
                                            placeholder="John Wick"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-wl-muted-dark ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20 font-medium"
                                            placeholder="john@high-table.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-wl-muted-dark ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20 font-medium resize-none text-lg"
                                        placeholder="Tell us about your mission..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full h-20 text-xl group relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Initialize Discovery <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </button>

                                <div className="flex items-center justify-center gap-2 text-wl-accent mt-6">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Secure Data Encryption Active</span>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Info */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Mail, label: "Direct Email", value: "hello@wloper.com" },
                            { icon: Phone, label: "Hotline", value: "+1 (555) 000-WLOP" },
                            { icon: MapPin, label: "Hub", value: "Silicon Valley / Punjab" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-strong p-8 rounded-[2.5rem] border border-white/5 flex items-center gap-6"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-wl-accent/10 flex items-center justify-center text-wl-accent shrink-0">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-wl-muted-dark mb-1">{item.label}</p>
                                    <p className="heading-sm !text-xl">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-wl-dark/50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="heading-lg">Common <span className="text-wl-accent">Questions</span></h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    className="glass-strong rounded-[2rem] border border-white/5 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                        className="w-full px-10 py-8 flex items-center justify-between text-left transition-colors hover:bg-white/5"
                                    >
                                        <span className="text-xl font-bold">{faq.q}</span>
                                        {activeFaq === idx ? <Minus className="text-wl-accent" /> : <Plus className="text-wl-accent" />}
                                    </button>
                                    {activeFaq === idx && (
                                        <div className="px-10 pb-8 text-wl-muted-dark text-lg font-medium leading-relaxed">
                                            {faq.a}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center">
                        <h3 className="heading-sm mb-8">Prefer a direct call?</h3>
                        <Link href="#" className="inline-flex items-center gap-4 bg-white text-black px-12 h-20 rounded-full font-bold text-lg hover:bg-wl-accent transition-all">
                            <Calendar className="w-6 h-6" /> Schedule on Calendly
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
