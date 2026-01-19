'use client';

import { motion } from 'framer-motion';
import { Gavel, Scale, FileCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
                        <Scale className="w-4 h-4 text-wl-accent" />
                        Governance
                    </div>
                    <h1 className="heading-lg mb-8">Terms of <span className="text-wl-accent">Service.</span></h1>
                    <p className="subtitle-lg mb-12">By accessing Wloper's platforms or services, you agree to the following framework of professional conduct and service delivery.</p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Gavel className="w-6 h-6 text-wl-accent" />
                                1. Service Level Agreemements
                            </h2>
                            <p className="text-wl-muted-dark leading-relaxed font-normal">
                                We strive for 99.9% uptime on our AI API clusters. Maintenance windows are communicated at least 48 hours in advance to enterprise stakeholders.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <FileCheck className="w-6 h-6 text-wl-accent" />
                                2. Intellectual Property
                            </h2>
                            <p className="text-wl-muted-dark leading-relaxed font-normal">
                                While raw code developed specifically for a project is transferred to the client upon full payment, the underlying "Wloper Neural Framework" remains our exclusive property.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Scale className="w-6 h-6 text-wl-accent" />
                                3. Ethical AI Use
                            </h2>
                            <p className="text-wl-muted-dark leading-relaxed font-normal">
                                Our services must not be used to generate malicious code, deepfakes without consent, or to bypass security protocols. Violation leads to immediate termination.
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 p-8 glass-strong rounded-3xl border border-white/5 text-center">
                        <p className="text-sm text-wl-muted-dark">For complete legal inquiries, reach out to <span className="text-wl-accent">legal@wloper.com</span></p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
