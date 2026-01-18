'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap, Users, BarChart3, Globe, Sparkles } from 'lucide-react';

export default function WhyChoose() {
    const reasons = [
        {
            title: 'AI-First Product Mindset',
            desc: "We don't just add AI; we build products around it for maximum efficiency.",
            icon: Target,
        },
        {
            title: 'SEO-Optimized Builds',
            desc: 'Every line of code is written with search visibility and performance in mind.',
            icon: Globe,
        },
        {
            title: 'Conversion-Driven UI',
            desc: 'Designs that look beautiful and are engineered to convert visitors into customers.',
            icon: BarChart3,
        },
        {
            title: 'Fast & Scalable',
            desc: 'Built on modern stacks like Next.js for uncompromised speed and security.',
            icon: Zap,
        },
        {
            title: 'Startup Friendly',
            desc: 'Perfect for startups looking to launch fast without complex backend overhead.',
            icon: Users,
        },
        {
            title: 'Growth Partnership',
            desc: 'We grow with you, providing ongoing support and strategic evolution.',
            icon: ShieldCheck,
        }
    ];

    return (
        <section className="section-padding bg-wl-dark relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 right-0 w-1/4 h-1/2 bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-wl-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">The Wloper Edge</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-lg"
                    >
                        Why Businesses Trust <span className="text-wl-accent">WLOPER</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-10 rounded-[2.5rem] glass-strong border border-white/5 hover:border-wl-accent/20 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-wl-accent group-hover:bg-wl-accent group-hover:text-black transition-all duration-500">
                                <reason.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-wl-accent transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-lg text-wl-muted-dark leading-relaxed font-medium">
                                {reason.desc}
                            </p>

                            {/* Inner Glow */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-wl-accent/5 rounded-full blur-3xl group-hover:bg-wl-accent/10 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
