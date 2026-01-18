'use client';

import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DigitalGrowthPage() {
    return (
        <div className="bg-wl-dark min-h-screen text-white pt-32 pb-20">
            <div className="container-custom relative z-10 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-8">
                        <TrendingUp className="w-4 h-4 text-wl-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">Service Focus</span>
                    </div>
                    <h1 className="heading-xl mb-8">
                        Growth, SEO & <span className="text-wl-accent">Digital Enablement</span>
                    </h1>
                    <p className="text-xl text-wl-muted-dark max-w-3xl mx-auto mb-10 leading-relaxed">
                        Data-driven growth strategies to boost your online visibility. We combine technical SEO, content strategy, and analytics to drive organic traffic.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/contact" className="btn-primary">
                            Boost Visibility <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Technical SEO Audits",
                        "Content Marketing Strategy",
                        "Conversion Rate Optimization",
                        "Analytics & Reporting",
                        "PPC Management",
                        "Search Intent Analysis"
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
                                <p className="text-wl-muted-dark text-sm">Grow faster with {feature.toLowerCase()}.</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
