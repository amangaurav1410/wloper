'use client';

import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';

// Lazy-load below-fold sections
const AIProductShowcase = dynamic(() => import('@/components/AIProductShowcase'), { ssr: false, loading: () => null });
const Services = dynamic(() => import('@/components/Services'), { ssr: false, loading: () => null });
const WhoWeAre = dynamic(() => import('@/components/WhoWeAre'), { ssr: false, loading: () => null });
const BlogPreview = dynamic(() => import('@/components/BlogPreview'), { ssr: false, loading: () => null });

export default function HomeClient() {
    const { openDemoModal } = useDemo();

    return (
        <div className="bg-wl-dark text-white selection:bg-wl-accent selection:text-black">
            {/* 1 — Hero */}
            <Hero />

            {/* 2 — Who We Are (short) */}
            <WhoWeAre />

            {/* 3 — AI Products + SkillytTalk */}
            <AIProductShowcase />

            {/* 4 — All Services */}
            <Services />

            {/* 5 — SkillytTalk CTA Banner */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="relative rounded-[3rem] overflow-hidden border border-wl-accent/20 bg-gradient-to-br from-wl-accent/10 via-transparent to-transparent p-12 md:p-20 backdrop-blur-sm"
                        style={{ transform: 'perspective(1000px) rotateX(1deg)', transformStyle: 'preserve-3d' }}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(202,246,72,0.08),transparent_60%)] pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-2 h-2 rounded-full bg-wl-accent animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-wl-accent">Live Product by Wloper</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                                    Hire Smarter with<br /><span className="text-wl-accent">SkillytTalk AI</span>
                                </h2>
                                <p className="text-white/50 max-w-lg leading-relaxed">
                                    Automate your entire interview process. SkillytTalk uses AI to screen, score and shortlist candidates — saving hundreds of interview hours every month.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0">
                                <a href="https://www.skillytalk.com/" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-wl-accent text-black font-black rounded-2xl hover:shadow-[0_0_30px_rgba(202,246,72,0.4)] transition-all hover:scale-105 whitespace-nowrap">
                                    Try SkillytTalk Free <ExternalLink className="w-4 h-4" />
                                </a>
                                <Link href="/products" className="text-center text-xs font-bold uppercase tracking-widest text-white/30 hover:text-wl-accent transition-colors">
                                    View All Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 — Blog Preview */}
            <BlogPreview />

            {/* 7 — Final CTA */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-wl-accent/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[3.5rem] border border-white/10 relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 0 80px rgba(202,246,72,0.05), inset 0 1px 0 rgba(255,255,255,0.1)',
                        }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/10 blur-[80px] pointer-events-none" />
                        <h2 className="heading-xl mb-6 tracking-tighter">
                            Ready to Grow<br /><span className="text-wl-accent">Your Business?</span>
                        </h2>
                        <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
                            Partner with India's best IT company for website development, digital marketing and AI solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={openDemoModal} className="btn-primary inline-flex items-center gap-3">
                                Start Your Project <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link href="/contact" prefetch={false} className="border border-white/10 px-8 py-4 rounded-2xl font-bold text-sm hover:border-wl-accent/40 transition-all">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
