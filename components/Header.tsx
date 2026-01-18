'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, ChevronRight, Layout, MessageSquare, Users, Sparkles,
    ChevronDown, Compass, Cpu, Code2, TrendingUp
} from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: '/' },
        {
            name: 'Products',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                {
                    title: 'AI Interview Screening Platform',
                    desc: 'An intelligent AI platform that automates candidate interviews and evaluates responses.',
                    icon: Layout,
                    href: '/products/interview-screening',
                    cta: 'Book Demo'
                },
                {
                    title: 'Customised AI Chatbot',
                    desc: 'Fully custom AI chatbots designed to automate customer support and internal workflows.',
                    icon: MessageSquare,
                    href: '/products/ai-chatbot',
                    cta: 'Get Started'
                },
                {
                    title: 'AI-Based HCM System',
                    desc: 'AI-powered Human Capital Management system for skills evaluation and talent hiring.',
                    icon: Users,
                    href: '/products/hcm-system',
                    cta: 'Request Demo'
                }
            ]
        },
        {
            name: 'Services',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                {
                    title: 'AI Strategy & Consulting',
                    desc: 'We help organizations identify high-impact AI opportunities and define clear roadmaps.',
                    icon: Compass,
                    href: '/services/ai-strategy',
                    cta: 'Talk to AI Experts'
                },
                {
                    title: 'AI Integration & Customization',
                    desc: 'We integrate AI capabilities into your existing systems and workflows.',
                    icon: Cpu,
                    href: '/services/ai-integration',
                    cta: 'Request Consultation'
                },
                {
                    title: 'Custom Software Engineering',
                    desc: 'End-to-end engineering for web and applications focused on performance and scale.',
                    icon: Code2,
                    href: '/services/software-engineering',
                    cta: 'Start a Project'
                },
                {
                    title: 'Growth, SEO & Digital Enablement',
                    desc: 'Data-driven growth strategies through SEO, analytics, and digital optimization.',
                    icon: TrendingUp,
                    href: '/services/digital-growth',
                    cta: 'Boost Visibility'
                }
            ]
        },
        { name: 'Blogs', href: '/blog' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-6 px-6">
            <nav className={`container-custom mx-auto transition-all duration-500 rounded-2xl relative ${isScrolled
                ? 'glass py-3 px-8 shadow-2xl border-white/10 bg-black/40 backdrop-blur-xl'
                : 'bg-transparent py-5 px-6'
                }`}>
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group relative shrink-0">
                        <div className="absolute -inset-2 bg-wl-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                            src="/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png"
                            alt="Wloper Logo"
                            width={130}
                            height={40}
                            className="h-8 w-auto relative z-10 transition-all duration-300 group-hover:scale-105 brightness-0 invert"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center justify-center flex-1 space-x-1">
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group/nav"
                                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                                </Link>

                                {/* Mega Menu Dropdown */}
                                {item.hasDropdown && (
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${activeDropdown === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                        <div className={`glass-strong rounded-3xl p-6 shadow-2xl border-white/10 bg-[#0A0A0A]/95 backdrop-blur-3xl grid gap-4 ${item.dropdownItems?.length && item.dropdownItems.length > 3 ? 'w-[900px] grid-cols-2' : 'w-[800px] grid-cols-3'
                                            }`}>
                                            {item.dropdownItems?.map((drop) => (
                                                <Link
                                                    key={drop.title}
                                                    href={drop.href}
                                                    className="group/card flex flex-col p-5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 h-full"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-wl-accent/10 flex items-center justify-center mb-4 text-wl-accent group-hover/card:scale-110 group-hover/card:bg-wl-accent group-hover/card:text-black transition-all">
                                                        <drop.icon className="w-5 h-5" />
                                                    </div>
                                                    <h4 className="text-sm font-bold text-white mb-2 group-hover/card:text-wl-accent transition-colors">
                                                        {drop.title}
                                                    </h4>
                                                    <p className="text-xs text-wl-muted-dark leading-relaxed mb-6 flex-1">
                                                        {drop.desc}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-[10px] font-bold text-wl-accent uppercase tracking-wider">
                                                        {drop.cta} <ChevronRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="hidden lg:flex shrink-0">
                        <Link
                            href="/contact"
                            className="group relative px-7 py-3 bg-wl-accent text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(202,246,72,0.4)] whitespace-nowrap"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get a Demo
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors shrink-0"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute top-full left-0 right-0 mt-4 px-6 lg:hidden"
                        >
                            <div className="glass rounded-2xl p-6 shadow-2xl border-white/10 bg-black/95 backdrop-blur-2xl">
                                <div className="flex flex-col space-y-2">
                                    {menuItems.map((item) => (
                                        <div key={item.name} className="flex flex-col">
                                            <button
                                                onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : setIsMobileMenuOpen(false)}
                                                className={`flex items-center justify-between p-3 rounded-xl text-lg font-medium transition-all ${activeDropdown === item.name ? 'text-wl-accent bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                                            >
                                                {item.name}
                                                {item.hasDropdown ? <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} /> : <ChevronRight className="w-5 h-5 opacity-50" />}
                                            </button>

                                            {item.hasDropdown && activeDropdown === item.name && (
                                                <div className="pl-4 py-2 space-y-2">
                                                    {item.dropdownItems?.map((drop) => (
                                                        <Link
                                                            key={drop.title}
                                                            href={drop.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block p-3 rounded-xl hover:bg-white/5 group"
                                                        >
                                                            <div className="flex items-center gap-3 mb-1">
                                                                <drop.icon className="w-4 h-4 text-wl-accent" />
                                                                <span className="text-sm font-bold text-white group-hover:text-wl-accent transition-colors">{drop.title}</span>
                                                            </div>
                                                            <p className="text-xs text-wl-muted-dark line-clamp-1">{drop.desc}</p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className="pt-4 mt-2 border-t border-white/10">
                                        <Link
                                            href="/contact"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="w-full flex items-center justify-center p-4 bg-wl-accent text-black font-bold rounded-xl shadow-[0_0_20px_rgba(202,246,72,0.2)]"
                                        >
                                            Get a Demo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
