'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Search, Target, Share2, Code2, TrendingUp, Sparkles, ArrowRight, Cpu, Blocks } from 'lucide-react';
import Link from 'next/link';
import SpotlightCard from './SpotlightCard';

const services = [
    {
        title: 'Website Development',
        desc: 'WordPress, Shopify, Next.js, Node.js, PHP, Python, Angular & .NET — professional websites built to rank and convert.',
        icon: Globe,
        href: '/services/website-development',
        badge: 'Most Popular'
    },
    {
        title: 'Mobile App Development',
        desc: 'High-performance iOS and Android applications built with React Native and Flutter for global scale.',
        icon: Smartphone,
        href: '/services/mobile-app-development',
        badge: null
    },
    {
        title: 'SEO Services',
        desc: 'Dominate Google search rankings with technical SEO, content marketing and authoritative link building.',
        icon: Search,
        href: '/services/seo',
        badge: null
    },
    {
        title: 'Google Ads Management',
        desc: 'Certified PPC specialists managing Search, Shopping and Performance Max campaigns for maximum ROI.',
        icon: Target,
        href: '/services/google-ads',
        badge: null
    },
    {
        title: 'Meta Ads Management',
        desc: 'Facebook and Instagram advertising that builds brand, generates leads and drives e-commerce sales.',
        icon: Share2,
        href: '/services/meta-ads',
        badge: null
    },
    {
        title: 'Custom Website Development',
        desc: 'Bespoke web applications, SaaS platforms and enterprise portals built from scratch to your exact spec.',
        icon: Code2,
        href: '/services/custom-website-development',
        badge: 'Enterprise'
    },
    {
        title: 'AI Based Web Development',
        desc: 'Websites supercharged with AI — chatbots, personalization engines, smart search and automation built in.',
        icon: Cpu,
        href: '/services/software-engineering',
        badge: 'AI Powered'
    },
    {
        title: 'Digital Marketing & SEO',
        desc: 'Full-funnel digital marketing strategies that grow traffic, leads and revenue across all channels.',
        icon: TrendingUp,
        href: '/services/digital-growth',
        badge: null
    },
];

export default function Services() {
    return (
        <section className="pt-20 pb-24 md:pt-28 md:pb-32 bg-wl-dark relative overflow-hidden" id="services">
            <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
                    <div className="max-w-2xl text-left">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} className="tag-label">
                            <Sparkles className="w-4 h-4 text-wl-accent" />
                            Our Services
                        </motion.div>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} className="heading-lg">
                            Complete Digital Services for <span className="heading-gradient">Growing Businesses</span>
                        </motion.h2>
                    </div>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="subtitle-md max-w-sm mb-2 text-left">
                        From stunning websites to AI products and performance marketing — we provide every digital service your business needs to thrive.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            className="group/card"
                        >
                            <Link href={service.href}>
                                <SpotlightCard className="p-8 md:p-10 h-full relative overflow-hidden">
                                    {service.badge && (
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-wl-accent/20 border border-wl-accent/30 text-[9px] font-black uppercase tracking-widest text-wl-accent">
                                            {service.badge}
                                        </div>
                                    )}
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover/card:bg-wl-accent group-hover/card:text-black transition-all duration-300 text-wl-accent">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover/card:text-wl-accent transition-colors leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                                        {service.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-wl-accent font-bold text-xs">
                                        Learn More <ArrowRight className="w-3 h-3 transition-transform group-hover/card:translate-x-2" />
                                    </div>
                                </SpotlightCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
