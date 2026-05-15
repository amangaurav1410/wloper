'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Activity, GraduationCap, TrendingUp,
    ShoppingBag, Bot, Building2, Layers,
    Target, Zap, Globe, Smartphone,
    Search, Filter, ChevronRight,
    Briefcase, Code2, Cpu, Database
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Web Application', 'AI Product', 'E-commerce', 'SEO & Growth', 'Blockchain'];

    const projects = [
        {
            title: 'Moda Luxe E-commerce',
            category: 'E-commerce',
            tag: 'Shopify Plus + Next.js',
            problem: 'Template-based store with 1.2% conversion and slow performance.',
            solution: 'Architected a Headless Shopify store using Next.js for blazing fast performance.',
            result: '40% ↑ Conversion, 65% ↓ Load Time, 30% ↑ AOV.',
            tech: ['Shopify Plus', 'Next.js', 'Tailwind CSS'],
            icon: ShoppingBag,
            image: '/images/portfolio-ecommerce.png',
            alt: 'Moda Luxe E-commerce Analytics Dashboard - Custom Shopify Plus Development'
        },
        {
            title: 'SkillytTalk AI Platform',
            category: 'AI Product',
            tag: 'OpenAI + Real-time Voice',
            problem: '100+ hours monthly lost on manual first-round interviews.',
            solution: 'Autonomous AI screening platform conducting real-time voice interviews.',
            result: '70% ↓ Time-to-hire, 50% ↓ Recruitment costs.',
            tech: ['GPT-4', 'Next.js', 'Node.js'],
            icon: Bot,
            image: '/images/portfolio-ai.png',
            alt: 'SkillytTalk AI Interview Screening Interface - Autonomous Recruitment Platform'
        },
        {
            title: 'Global Logistics SEO',
            category: 'SEO & Growth',
            tag: 'Organic Scale',
            problem: 'Invisible on Google for high-intent supply chain keywords.',
            solution: 'Technical SEO overhaul + buyer-intent content engine.',
            result: 'Rank #1 for 15+ keywords, 20k+ Organic traffic.',
            tech: ['SEO', 'Content', 'Backlinks'],
            icon: TrendingUp,
            image: '/images/portfolio-seo.png',
            alt: 'Global Logistics SEO Performance Dashboard - Search Engine Growth Strategy'
        },
        {
            title: 'HealthFlow Portal',
            category: 'Web Application',
            tag: 'Healthcare SAAS',
            problem: 'Fragmented patient data and manual appointment bookings.',
            solution: 'HIPAA-compliant centralized portal with real-time scheduling.',
            result: '50% ↑ Admin efficiency, 95% Satisfaction.',
            tech: ['React', 'PostgreSQL', 'AWS'],
            icon: Activity,
            useIconAsImage: true,
            iconBg: 'bg-blue-500/10',
            alt: 'HealthFlow Medical Portal - Custom Web Application Development'
        },
        {
            title: 'Prime Estate Realty',
            category: 'Web Application',
            tag: 'Luxury Real Estate',
            problem: 'Old website failing to capture luxury leads on mobile.',
            solution: 'High-end WordPress theme with integrated MLS & maps.',
            result: '300% ↑ Lead generation, 4.8/5 UX rating.',
            tech: ['WordPress', 'PHP', 'Custom API'],
            icon: Building2,
            useIconAsImage: true,
            iconBg: 'bg-amber-500/10',
            alt: 'Prime Estate Luxury Real Estate Website - Custom WordPress Solutions'
        },
        {
            title: 'SaaS Google Ads Scale',
            category: 'SEO & Growth',
            tag: 'Paid Media',
            problem: 'Unprofitable CPA of $120 for B2B channels.',
            solution: 'Restructured Ads using PMax and high-intent funnels.',
            result: 'CPA ↓ $45 (62% decrease), 2x Lead volume.',
            tech: ['Google Ads', 'PMax', 'Tracking'],
            icon: Target,
            useIconAsImage: true,
            iconBg: 'bg-wl-accent/10',
            alt: 'SaaS Google Ads Performance Scale - Paid Advertising Management'
        },
        {
            title: 'EduSphere LMS',
            category: 'Web Application',
            tag: 'LMS Platform',
            problem: 'System crashing under 10,000+ concurrent learners.',
            solution: 'Engineered scalable LMS with global CDN video delivery.',
            result: 'Scaled to 15k active users with zero downtime.',
            tech: ['Next.js', 'Node.js', 'Mux Video'],
            icon: GraduationCap,
            useIconAsImage: true,
            iconBg: 'bg-purple-500/10',
            alt: 'EduSphere Learning Management System - Scalable Web Architecture'
        },
        {
            title: 'Zenith Blockchain Dex',
            category: 'Blockchain',
            tag: 'DeFi Engineering',
            problem: 'High gas fees and slow finality on Ethereum.',
            solution: 'Migrated to Layer 2 (Polygon) with optimized UI.',
            result: '98% ↓ Transaction costs, 5x Trade speed.',
            tech: ['Solidity', 'Web3.js', 'Polygon'],
            icon: Zap,
            useIconAsImage: true,
            iconBg: 'bg-wl-accent/10',
            alt: 'Zenith Blockchain DEX Interface - Layer 2 Scaling Solutions'
        }
    ];

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category.includes(activeFilter) || activeFilter.includes(p.category));

    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-wl-accent selection:text-black">
            
            <div className="h-20 lg:h-24"></div>

            <section className="relative pt-20 pb-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wl-accent/10 rounded-full blur-[120px] pointer-events-none -mr-64 opacity-50"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-wl-accent mb-6"
                        >
                            <div className="w-10 h-[1px] bg-wl-accent"></div>
                            <span className="text-xs font-black uppercase tracking-[0.4em]">Our Work</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]"
                        >
                            Engineering <br />
                            <span className="heading-gradient">Digital Success.</span>
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/40 max-w-2xl leading-relaxed font-medium"
                        >
                            Explore our latest success stories. We combine technical rigor with creative strategy to build products that rank, convert, and scale.
                        </motion.p>
                    </div>

                    <div className="mt-20 flex flex-wrap gap-4 border-b border-white/5 pb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                                    activeFilter === cat 
                                    ? 'bg-wl-accent text-black' 
                                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-32">
                <div className="container-custom">
                    <motion.div 
                        layout
                        className="grid md:grid-cols-2 gap-8 lg:gap-12"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="group flex flex-col h-full"
                                >
                                    <div className="glass-strong rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col h-full hover:border-wl-accent/30 transition-colors duration-500">
                                        <div className="relative h-72 sm:h-96 overflow-hidden flex items-center justify-center">
                                            {project.useIconAsImage ? (
                                                <div className={`w-full h-full ${project.iconBg} flex items-center justify-center relative`}>
                                                    <div className="absolute inset-0 opacity-10 bg-[url('/images/grid.svg')] bg-repeat"></div>
                                                    <div className="relative z-10 p-10 bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/5 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                                                        <project.icon className="w-24 h-24 text-wl-accent" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <Image
                                                    src={project.image || ''}
                                                    alt={project.alt || project.title}
                                                    fill
                                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-wl-dark via-wl-dark/20 to-transparent"></div>
                                            
                                            <div className="absolute top-6 left-6 flex gap-2">
                                                <span className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-wl-accent">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-8 left-8 right-8">
                                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">{project.tag}</div>
                                                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">{project.title}</h3>
                                            </div>
                                        </div>

                                        <div className="p-8 lg:p-10 flex flex-col flex-1">
                                            <div className="grid sm:grid-cols-2 gap-8 mb-10">
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-500/80">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" /> 
                                                        Challenge
                                                    </div>
                                                    <p className="text-sm text-white/50 leading-relaxed font-medium">
                                                        {project.problem}
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-wl-accent">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-wl-accent shadow-[0_0_8px_rgba(202,246,72,0.5)]" /> 
                                                        Solution
                                                    </div>
                                                    <p className="text-sm text-white/80 leading-relaxed font-medium">
                                                        {project.solution}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-wl-accent/10 flex items-center justify-center text-wl-accent border border-wl-accent/20">
                                                        <TrendingUp className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-0.5">Impact</div>
                                                        <div className="text-lg font-bold text-white leading-tight">{project.result}</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
                                                    {project.tech.slice(0, 3).map((t) => (
                                                        <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold text-white/30 uppercase tracking-widest">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <div className="mt-40">
                        <div className="glass-strong p-12 md:p-24 rounded-[4rem] border border-white/5 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-wl-accent/5 to-transparent pointer-events-none"></div>
                            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
                                Your Vision, <br />
                                <span className="text-wl-accent">Our Architecture.</span>
                            </h2>
                            <p className="text-xl text-white/40 max-w-2xl mx-auto mb-12 font-medium">
                                We are ready to build the next industry-leading product. Are you?
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="/contact" className="btn-primary px-16 h-20 text-lg">
                                    Start a Project
                                </Link>
                                <Link href="/services" className="px-12 h-20 rounded-[2rem] border border-white/10 flex items-center justify-center font-bold hover:bg-white/5 transition-all">
                                    Browse Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
