'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="bg-wl-dark text-white min-h-screen pt-40 pb-20">
            <div className="container-custom max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-wl-accent font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="tag-label mb-6">
                        <Lock className="w-4 h-4 text-wl-accent" />
                        Legal & Compliance
                    </div>
                    <h1 className="heading-lg mb-8">Privacy <span className="text-wl-accent">Policy.</span></h1>
                    <p className="subtitle-lg mb-12">At Wloper, we prioritize the security and confidentiality of your data. This policy outlines how we handle information across our AI-driven products and services.</p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Eye className="w-6 h-6 text-wl-accent" />
                                1. Data Collection
                            </h2>
                            <p className="text-wl-muted-dark leading-relaxed font-normal">
                                We collect minimal information required to provide our enterprise AI services. This includes business contact details and technical telemetry data used solely for performance optimization.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-wl-accent" />
                                2. AI Data Processing
                            </h2>
                            <p className="text-wl-muted-dark leading-relaxed font-normal">
                                Your proprietary data used for model fine-tuning remains your property. We implement strict isolation protocols to ensure that data from one client is never used to train models for another.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-wl-accent" />
                                3. Security Standards
                            </h2>
                            <p className="text-wl-muted-dark leading-relaxed font-normal">
                                We utilize AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted on SOC2 Type II compliant providers.
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 p-8 glass-strong rounded-3xl border border-white/5 text-center">
                        <p className="text-sm text-wl-muted-dark">Last updated: January 19, 2026. For questions, contact <span className="text-wl-accent">privacy@wloper.com</span></p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
