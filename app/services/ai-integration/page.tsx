'use client';

import { motion } from 'framer-motion';
import { Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AIIntegrationPage() {
    return (
        <div className="bg-wl-dark min-h-screen text-white pt-32 pb-20">
            <div className="container-custom relative z-10 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-8">
                        <Cpu className="w-4 h-4 text-wl-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">Service Focus</span>
                    </div>
                    <h1 className="heading-xl mb-8">
                        AI Integration & <span className="text-wl-accent">Customization</span>
                    </h1>
                    <p className="text-xl text-wl-muted-dark max-w-3xl mx-auto mb-10 leading-relaxed">
                        Seamlessly integrate advanced AI capabilities into your existing systems. We build custom models and APIs tailored to your unique data dynamics.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/contact" className="btn-primary">
                            Request Consultation <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "LLM Fine-tuning",
                        "Custom API Development",
                        "Legacy System Upgrade",
                        "Data Pipeline Engineering",
                        "Model Deployment",
                        "Performance Optimization"
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-strong p-8 rounded-[2rem] border border-white/5 flex items-start gap-4"
                        >
                            <div className="bg-wl-accent/10 p-3 rounded-xl text-wl-accent">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-white">{feature}</h3>
                                <p className="text-wl-muted-dark text-sm">Technical excellence in {feature.toLowerCase()}.</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
