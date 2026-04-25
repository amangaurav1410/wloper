'use client';

import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';

const AIProductShowcase = dynamic(() => import('@/components/AIProductShowcase'), { ssr: false, loading: () => null });
const Services = dynamic(() => import('@/components/Services'), { ssr: false, loading: () => null });
const Process = dynamic(() => import('@/components/Process'), { ssr: false, loading: () => null });
const Industries = dynamic(() => import('@/components/Industries'), { ssr: false, loading: () => null });
const BlogPreview = dynamic(() => import('@/components/BlogPreview'), { ssr: false, loading: () => null });

export default function HomeClient() {
    const { openDemoModal } = useDemo();
    return (
        <div className="bg-wl-dark text-white selection:bg-wl-accent selection:text-black">
            <Hero />
            <WhoWeAre />
            <AIProductShowcase />
            <Services />
            <Process />
            <Industries />
            <BlogPreview />

            {/* Final CTA Section */}
            <section className="section-padding bg-wl-dark relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-wl-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-6xl mx-auto glass-strong p-16 md:p-32 rounded-[4rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/10 blur-[100px]" />
                        <h2 className="heading-xl mb-8 tracking-tighter leading-none">
                            Ready to Craft Your <br /><span className="text-wl-accent">Build Protocol?</span>
                        </h2>
                        <p className="text-white/40 text-lg md:text-xl font-bold mb-12 max-w-3xl mx-auto uppercase tracking-widest">
                            Partner with the Best IT Company for your next <br /> AI based web development project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <button
                                onClick={openDemoModal}
                                className="btn-primary h-20 px-16 text-xl group"
                            >
                                Start Your Project
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <Link href="/contact" prefetch={false} className="text-white font-black uppercase tracking-[0.3em] text-xs hover:text-wl-accent transition-colors">
                                Talk to Lead Architect
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
