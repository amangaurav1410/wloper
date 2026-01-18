'use client';

import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, BarChart3, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LeadCapture() {
    const benefits = [
        {
            title: "Tech Stack Analysis",
            desc: "We analyze your current tools and identify AI automation gaps."
        },
        {
            title: "SEO Opportunity Map",
            desc: "Discover high-intent keywords your competitors are missing."
        },
        {
            title: "Performance Report",
            desc: "A detailed breakdown of speed, mobile scoring, and UX blockers."
        }
    ];

    return (
        <section className="section-padding bg-wl-dark relative overflow-hidden" id="audit">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-wl-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="glass-strong rounded-[4rem] border border-white/10 overflow-hidden relative group">
                    {/* Decorative Border Glow */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-wl-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2">
                        {/* Left Side: Content & Benefits */}
                        <div className="p-10 md:p-20 bg-white/[0.02]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-8"
                            >
                                <Zap className="w-4 h-4 text-wl-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">limited availability</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                                Get a Free <span className="heading-gradient">AI & Growth</span> Audit
                            </h2>
                            <p className="text-xl text-wl-muted-dark mb-12 font-medium leading-relaxed">
                                Our experts will spend 48 hours analyzing your digital presence to give you a roadmap for 10x growth.
                            </p>

                            <div className="space-y-8">
                                {benefits.map((benefit, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-5"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-wl-accent/10 flex items-center justify-center shrink-0 border border-wl-accent/20">
                                            <CheckCircle2 className="w-6 h-6 text-wl-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                                            <p className="text-sm text-wl-muted-dark font-medium leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-16 pt-10 border-t border-white/5 flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-wl-dark bg-wl-accent/20 flex items-center justify-center overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-br from-wl-accent/40 to-transparent"></div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-wl-muted-dark font-bold">Joined by 250+ companies this month</p>
                            </div>
                        </div>

                        {/* Right Side: High-Conversion Form */}
                        <div className="p-10 md:p-20 relative overflow-hidden bg-black/20">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/5 rounded-full blur-3xl pointer-events-none"></div>

                            <form
                                action="https://formspree.io/f/xyzkjwqz"
                                method="POST"
                                className="space-y-6 relative z-10"
                            >
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-wl-muted-dark ml-1">Your Industry</label>
                                    <select
                                        name="industry"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-wl-accent/50 focus:bg-white/10 focus:outline-none transition-all font-medium appearance-none"
                                    >
                                        <option value="ecommerce" className="bg-wl-dark text-white">E-commerce</option>
                                        <option value="saas" className="bg-wl-dark text-white">SaaS & Tech</option>
                                        <option value="realestate" className="bg-wl-dark text-white">Real Estate</option>
                                        <option value="other" className="bg-wl-dark text-white">Other</option>
                                    </select>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-wl-muted-dark ml-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-wl-accent/50 focus:bg-white/10 focus:outline-none transition-all font-medium placeholder:text-white/20"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-wl-muted-dark ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-wl-accent/50 focus:bg-white/10 focus:outline-none transition-all font-medium placeholder:text-white/20"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-wl-muted-dark ml-1">Website URL</label>
                                    <input
                                        type="url"
                                        name="website"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-wl-accent/50 focus:bg-white/10 focus:outline-none transition-all font-medium placeholder:text-white/20"
                                        placeholder="https://yourwebsite.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-wl-muted-dark ml-1">Main Challenge</label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-wl-accent/50 focus:bg-white/10 focus:outline-none transition-all font-medium placeholder:text-white/20 resize-none"
                                        placeholder="What's your #1 goal right now?"
                                    />
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="btn-primary w-full h-16 text-lg group">
                                        Claim My Free Audit
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <div className="flex items-center justify-center gap-3 mt-6 text-wl-muted-dark">
                                        <ShieldCheck className="w-4 h-4 text-wl-accent" />
                                        <span className="text-xs font-bold tracking-wider uppercase">100% Privacy Guaranteed. No Spam.</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
