'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import AIProductShowcase from '@/components/AIProductShowcase';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import Industries from '@/components/Industries';
import BlogPreview from '@/components/BlogPreview';
import LeadCapture from '@/components/LeadCapture';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <div className="bg-wl-dark text-white selection:bg-wl-accent selection:text-black">
            <Hero />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <AIProductShowcase />
                <WhoWeAre />
                <Services />
                <WhyChoose />
                <Process />
                <Industries />
                <BlogPreview />
                <LeadCapture />
            </motion.div>

            {/* Final CTA Section */}
            <section className="section-padding bg-wl-dark relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-wl-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto glass-strong p-12 md:p-24 rounded-[4rem] border border-white/10 group"
                    >
                        <h2 className="heading-lg mb-10">
                            Ready to Craft Your <span className="text-wl-accent">AI Future</span> with WLOPER?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="btn-primary group h-14">
                                Get Started with AI
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/contact" className="btn-secondary h-14">
                                Talk to an Expert
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
