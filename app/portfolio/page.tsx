'use client';

import { motion } from 'framer-motion';
import {
    Banknote, Activity, GraduationCap, TrendingUp,
    ShoppingBag, Bot, Building2, Layers, ArrowUpRight,
    Search, Target, Globe, Smartphone, Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
    const projects = [
        {
            title: 'Moda Luxe E-commerce',
            category: 'Shopify Development',
            problem: 'The client had a slow, template-based Shopify store with a 1.2% conversion rate and high cart abandonment.',
            solution: 'Architected a custom Headless Shopify store using Next.js for blazing fast performance and a tailored checkout experience.',
            result: '40% increase in Conversion Rate, 65% faster load times, and a 30% jump in Average Order Value.',
            tech: ['Shopify Plus', 'Next.js', 'Tailwind CSS'],
            icon: ShoppingBag,
            image: '/images/envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg'
        },
        {
            title: 'SkillytTalk AI Platform',
            category: 'AI Product Development',
            problem: 'Tech companies were spending 100+ hours monthly on manual first-round interviews.',
            solution: 'Built an autonomous AI screening platform that conducts voice interviews and scores candidates in real-time.',
            result: '70% reduction in time-to-hire and 50% lower recruitment costs for early-stage startups.',
            tech: ['OpenAI GPT-4', 'Next.js', 'Node.js'],
            icon: Bot,
            image: '/images/envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg'
        },
        {
            title: 'HealthFlow Portal',
            category: 'Web Application',
            problem: 'A multi-specialty clinic was struggling with fragmented patient data and manual appointment bookings.',
            solution: 'Developed a HIPAA-compliant centralized portal with real-time scheduling and automated patient reminders.',
            result: '50% increase in administrative efficiency and 95% patient satisfaction rating.',
            tech: ['React', 'PostgreSQL', 'AWS'],
            icon: Activity,
            image: '/images/hero-bg.png'
        },
        {
            title: 'Global Logistics SEO',
            category: 'SEO & Growth',
            problem: 'A logistics giant was invisible on Google for high-intent industry keywords, relying purely on cold outreach.',
            solution: 'Implemented a comprehensive technical SEO audit and a buyer-intent content engine targeting supply chain leaders.',
            result: 'Ranked #1 for 15+ high-volume keywords, driving 20k+ monthly organic visitors and 200+ SQLs.',
            tech: ['Technical SEO', 'Content Strategy', 'Backlinking'],
            icon: TrendingUp,
            image: '/images/envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg'
        },
        {
            title: 'Prime Estate Realty',
            category: 'WordPress Development',
            problem: 'Old, non-responsive website was failing to capture luxury real estate leads on mobile devices.',
            solution: 'Created a high-end custom WordPress theme with integrated MLS search and interactive map features.',
            result: '300% increase in mobile lead generation and 4.8/5 user experience rating.',
            tech: ['WordPress', 'PHP', 'Custom API'],
            icon: Building2,
            image: '/images/hero-bg.png'
        },
        {
            title: 'SaaS Google Ads Scale',
            category: 'Paid Advertising',
            problem: 'A B2B SaaS company had a $120 Cost Per Acquisition (CPA), making their paid channels unprofitable.',
            solution: 'Restructured the Google Ads account using Performance Max and highly targeted landing pages.',
            result: 'CPA reduced to $45 (62% decrease) while doubling the total lead volume.',
            tech: ['Google Ads', 'PMax', 'Conversion Tracking'],
            icon: Target,
            image: '/images/envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg'
        },
        {
            title: 'EduSphere LMS',
            category: 'Custom Development',
            problem: 'An education startup needed a platform capable of handling 10,000+ concurrent video learners.',
            solution: 'Engineered a scalable LMS with global CDN video delivery and real-time interactive quizzes.',
            result: 'Successfully scaled to 15,000 active users with zero downtime during peak exam seasons.',
            tech: ['Next.js', 'Node.js', 'Mux Video'],
            icon: GraduationCap,
            image: '/images/hero-bg.png'
        },
        {
            title: 'Zenith Blockchain Dex',
            category: 'Blockchain Solutions',
            problem: 'A decentralized exchange was suffering from high gas fees and slow transaction finality on Ethereum.',
            solution: 'Migrated the core protocol to a Layer 2 scaling solution (Polygon) with an optimized UI.',
            result: '98% reduction in transaction costs and 5x faster trade execution speeds.',
            tech: ['Solidity', 'Web3.js', 'Polygon'],
            icon: Zap,
            image: '/images/envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg'
        }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center pt-40 pb-20 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="tag-label"
                        >
                            <Layers className="w-4 h-4 text-wl-accent" />
                            Proven Excellence
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance tracking-tighter"
                        >
                            Our <span className="heading-gradient">Portfolio</span> of Impact.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60 max-w-3xl"
                        >
                            We don't just deliver projects; we deliver business results. From startups to enterprises,
                            here is how we help brands dominate their industries.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 2) * 0.1 }}
                                className="group relative"
                            >
                                {/* Project Card */}
                                <div className="glass-strong rounded-[3rem] border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-wl-accent/30 group-hover:shadow-[0_20px_50px_rgba(202,246,72,0.05)]">
                                    {/* Visual Header */}
                                    <div className="relative h-64 sm:h-80 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-wl-dark via-wl-dark/20 to-transparent"></div>

                                        {/* Icon Badge */}
                                        <div className="absolute bottom-8 left-8 flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-wl-accent flex items-center justify-center text-black shadow-2xl">
                                                <project.icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-wl-accent mb-1">{project.category}</div>
                                                <h3 className="text-2xl sm:text-3xl font-black text-white">{project.title}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-8 sm:p-12 space-y-10">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h4 className="text-xs font-black uppercase tracking-widest text-white/30 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> The Problem
                                                </h4>
                                                <p className="text-sm text-wl-muted-dark font-medium leading-relaxed italic">
                                                    "{project.problem}"
                                                </p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-xs font-black uppercase tracking-widest text-white/30 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> The Solution
                                                </h4>
                                                <p className="text-sm text-white/80 font-medium leading-relaxed">
                                                    {project.solution}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Result Section */}
                                        <div className="bg-wl-accent/[0.03] border border-wl-accent/10 rounded-2xl p-6 sm:p-8">
                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                                <div className="flex-1">
                                                    <h4 className="text-xs font-black uppercase tracking-widest text-wl-accent mb-3">Project Result</h4>
                                                    <p className="text-lg font-bold text-white leading-tight">{project.result}</p>
                                                </div>
                                                <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
                                                    {project.tech.map((t) => (
                                                        <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 p-12 md:p-20 glass-strong border border-wl-accent/20 rounded-[4rem] text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/10 blur-[100px] pointer-events-none" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to be our next <br /><span className="heading-gradient">Success Story?</span></h2>
                        <p className="subtitle-md mx-auto mb-10 max-w-2xl">Let's build a product that doesn't just look good, but works for your business. Get a free consultation today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">Start Your Project</Link>
                            <Link href="/services" className="border border-white/10 px-8 py-4 rounded-2xl font-bold text-sm hover:border-wl-accent/40 transition-all">Explore Services</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
