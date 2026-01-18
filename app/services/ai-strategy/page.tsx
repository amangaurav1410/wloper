'use client';

import { motion } from 'framer-motion';
import { Compass, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AIStrategyPage() {
    return (
        <div className="bg-wl-dark min-h-screen text-white pt-32 pb-20">
            <div className="container-custom relative z-10 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-8">
                        <Compass className="w-4 h-4 text-wl-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">Service Focus</span>
                    </div>
                    <h1 className="heading-xl mb-8">
                        AI Strategy & <span className="text-wl-accent">Consulting</span>
                    </h1>
                    <p className="text-xl text-wl-muted-dark max-w-3xl mx-auto mb-10 leading-relaxed">
                        We help organizations identify high-impact AI opportunities, define clear technical roadmaps, and navigate the complexity of AI adoption.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/contact" className="btn-primary">
                            Talk to Experts <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "AI Maturity Assessment",
                        "Strategic Roadmap",
                        "Vendor Selection",
                        "Use Case Definition",
                        "ROI Analysis",
                        "Risk Management"
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-strong p-8 rounded-[2rem] border border-white/5 flex items-start gap-4"
                        >
                            <div className="bg-wl-accent/10 p-3 rounded-xl text-wl-accent">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-white">{feature}</h3>
                                <p className="text-wl-muted-dark text-sm">Expert guidance for {feature.toLowerCase()}.</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
