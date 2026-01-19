'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Code2, TrendingUp, Sparkles, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
    const services = [
        {
            title: 'AI Strategy & Consulting',
            desc: 'Identify high-impact AI opportunities and define clear tech roadmaps for your business.',
            icon: Brain,
            href: '/services/ai-strategy'
        },
        {
            title: 'AI Integration',
            desc: 'Seamlessly integrate custom AI models into your existing workflows and legacy systems.',
            icon: Cpu,
            href: '/services/ai-integration'
        },
        {
            title: 'Custom Engineering',
            desc: 'End-to-end scalable web and app development focused on performance and security.',
            icon: Code2,
            href: '/services/software-engineering'
        },
        {
            title: 'Growth & SEO',
            desc: 'Boost your visibility and organic traffic through data-driven digital growth strategies.',
            icon: TrendingUp,
            href: '/services/digital-growth'
        }
    ];

    return (
        <section className="section-padding bg-wl-dark relative overflow-hidden" id="services">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
                    <div className="max-w-2xl text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="tag-label"
                        >
                            <Sparkles className="w-4 h-4 text-wl-accent" />
                            Our Capabilities
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-lg"
                        >
                            Elevating Businesses Through <span className="heading-gradient">Strategic AI</span> & Growth
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="subtitle-md max-w-sm mb-2 text-left"
                    >
                        Beyond building products, we provide the engineering excellence and growth strategy needed to thrive in an AI-first economy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative ${index % 2 === 1 ? 'md:mt-12' : ''}`}
                        >
                            <Link href={service.href} className="block relative z-10 p-10 md:p-12 rounded-[3rem] glass-strong border border-white/5 hover:border-wl-accent/20 transition-all duration-500 overflow-hidden">
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-wl-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-wl-accent group-hover:text-black transition-all duration-500 text-wl-accent">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-wl-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-wl-muted-dark leading-relaxed mb-8 font-medium">
                                        {service.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-wl-accent/50 group-hover:text-wl-accent transition-colors">
                                        Learn More <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>

                            {/* Background Decorative Element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-wl-accent/5 rounded-full blur-[60px] group-hover:bg-wl-accent/10 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
