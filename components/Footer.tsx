'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Linkedin, Twitter, Github, Globe, ArrowUpRight,
    Mail, Phone, MapPin, Instagram, Youtube, Sparkles,
    ShieldCheck, Zap, Code, BarChart, Cpu
} from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Products",
            links: [
                { name: "Interview Screening", href: "/products/interview-screening" },
                { name: "AI Chatbot", href: "/products/ai-chatbot" },
                { name: "HCM System", href: "/products/hcm-system" },
                { name: "Recruitment Automation", href: "/products/interview-screening" },
                { name: "AI Customer Support", href: "/products/ai-chatbot" }
            ]
        },
        {
            title: "Services",
            links: [
                { name: "AI Strategy", href: "/services/ai-strategy" },
                { name: "AI Integration", href: "/services/ai-integration" },
                { name: "Software Engineering", href: "/services/software-engineering" },
                { name: "Digital Growth", href: "/services/digital-growth" },
                { name: "Blockchain Development", href: "/services/digital-growth" } // Mapping to nearest for now
            ]
        },
        {
            title: "Industries",
            links: [
                { name: "E-commerce", href: "/industries" },
                { name: "SaaS & Tech", href: "/industries" },
                { name: "Fintech", href: "/industries" },
                { name: "Real Estate", href: "/industries" },
                { name: "Healthcare AI", href: "/industries" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Our Blog", href: "/blog" },
                { name: "Case Studies", href: "/about" },
                { name: "Tech Stack", href: "/services/software-engineering" },
                { name: "Developer Docs", href: "/contact" },
                { name: "API Reference", href: "/contact" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Wloper", href: "/about" },
                { name: "Our Process", href: "/about" },
                { name: "Global Offices", href: "/contact" },
                { name: "Careers", href: "/contact" },
                { name: "Press Kit", href: "/contact" }
            ]
        }
    ];

    const socials = [
        { name: 'X', icon: Twitter, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'YouTube', icon: Youtube, href: '#' },
        { name: 'GitHub', icon: Github, href: '#' }
    ];

    return (
        <footer className="bg-wl-dark pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* SEO Keyword Cloud (Transparent) */}
            <div className="sr-only">
                Best AI Development Company India, Top Software Engineering Punjab,
                Blockchain Development Services, Digital Growth Marketing Agency,
                AI Recruitment Platforms, Next.js Experts 2026.
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-wl-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Top Section: Brand & Newsletter */}
                <div className="grid lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block group">
                            <Image
                                src="/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png"
                                alt="Wloper Logo"
                                width={160}
                                height={50}
                                className="h-10 w-auto brightness-0 invert group-hover:scale-105 transition-transform"
                            />
                        </Link>
                        <p className="text-wl-muted-dark text-xl leading-relaxed max-w-md font-medium">
                            Wloper is where AI development meets digital growth. We build high-performance products that redefine industries.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                <ShieldCheck className="w-4 h-4 text-wl-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white">GDPR Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                <Zap className="w-4 h-4 text-wl-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white">AI-First 2026</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3 pt-6">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-300 hover:bg-wl-accent hover:border-wl-accent hover:text-black text-wl-muted-dark"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1 hidden lg:block"></div>

                    <div className="lg:col-span-6">
                        <div className="glass-strong p-10 rounded-[3rem] border border-wl-accent/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-wl-accent/5 blur-3xl rounded-full group-hover:bg-wl-accent/10 transition-all"></div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-wl-accent" />
                                Join the AI Revolution
                            </h3>
                            <p className="text-wl-muted-dark mb-8 font-medium">Get the latest industry insights and technical breakdowns delivered to your inbox.</p>
                            <form className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all font-medium"
                                />
                                <button className="bg-wl-accent text-black px-10 py-4 rounded-2xl font-black hover:brightness-110 transition-all hover:scale-105 active:scale-95">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-24 border-y border-white/5 py-16">
                    {footerSections.map((section) => (
                        <div key={section.title} className="space-y-8">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">{section.title}</h4>
                            <ul className="space-y-5">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center text-wl-muted-dark hover:text-wl-accent transition-colors duration-200 text-base font-medium"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Global Presence & Legal */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center mb-12">
                    <div className="flex items-start gap-4 text-wl-muted-dark">
                        <MapPin className="w-6 h-6 text-wl-accent shrink-0" />
                        <div>
                            <p className="text-sm font-bold text-white mb-1">Global HQ (India)</p>
                            <p className="text-xs leading-relaxed">53, Arya College Road, Kharar, Punjab 140301</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 text-wl-muted-dark">
                        <Globe className="w-6 h-6 text-wl-accent shrink-0" />
                        <div>
                            <p className="text-sm font-bold text-white mb-1">Worldwide Reach</p>
                            <p className="text-xs leading-relaxed">Serving clients in UK, USA, UAE, and APAC regions.</p>
                        </div>
                    </div>
                    <div className="flex justify-start lg:justify-end gap-10">
                        <Link href="/privacy" className="text-xs font-bold uppercase tracking-widest text-wl-muted-dark hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs font-bold uppercase tracking-widest text-wl-muted-dark hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12 text-center">
                    <p className="text-wl-muted-dark text-sm font-medium">
                        © {currentYear} Wloper Technologies. All Rights Reserved. Engineered with AI in Kharar, Punjab.
                    </p>
                </div>
            </div>
        </footer>
    );
}
