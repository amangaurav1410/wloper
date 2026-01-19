'use client';

import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';
import {
    Laptop, Megaphone, Palette, ShoppingCart, Rocket, Bot,
    Check, ArrowUpRight, Layers, Cpu, Globe, ShieldCheck,
    Fingerprint, BarChart3, Workflow
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export default function ServicesPage() {
    const { openDemoModal } = useDemo();
    const mainServices = [
        {
            icon: Bot,
            title: 'AI & Data Intelligence',
            description: 'Architecting neural networks and LLM-driven systems for predictive enterprise scaling.',
            features: ['Neural Architecture', 'LLM Fine-tuning', 'Predictive Analytics', 'Autonomous Agents'],
            link: '/services/ai-strategy'
        },
        {
            icon: Laptop,
            title: 'Enterprise Engineering',
            description: 'Mission-critical software systems designed for high-concurrency and resilience.',
            features: ['Cloud-Native Apps', 'Microservices', 'System Design', 'API Ecosystems'],
            link: '/services/software-engineering'
        },
        {
            icon: Palette,
            title: 'Design Systems',
            description: 'Scalable visual languages that bridge the gap between brand identity and product utility.',
            features: ['UI/UX Design', 'Brand Strategy', 'Interactive Motion', 'Prototyping'],
            link: '/services/digital-growth'
        }
    ];

    const processSteps = [
        { title: "Discovery", desc: "Deep audit of technical debt and market opportunities." },
        { title: "Blueprint", desc: "Architectural mapping and agile sprint planning." },
        { title: "Execute", desc: "Rapid CI/CD deployment with extreme testing." },
        { title: "Optimize", desc: "AI-driven monitoring and performance scaling." }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="section-padding relative pt-40 lg:pt-64 text-center min-h-[80vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop"
                        alt="Services Background"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/80 to-wl-dark"></div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="tag-label mx-auto"
                    >
                        <Layers className="w-4 h-4 text-wl-accent" />
                        Full Spectrum Digital
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-xl mb-12"
                    >
                        Our Engineering <br /><span className="heading-gradient">Capabilities.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="subtitle-lg mx-auto mb-16 h-auto"
                    >
                        We provide the technical horsepower and strategic depth needed for global dominance in the AI-first economy.
                    </motion.p>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {mainServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-strong border border-white/5 rounded-[3.5rem] p-10 hover:border-wl-accent/20 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-wl-accent/5 rounded-full blur-2xl group-hover:bg-wl-accent/10 transition-colors"></div>

                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black mb-4 group-hover:text-wl-accent transition-colors">{service.title}</h3>
                                <p className="text-wl-muted-dark leading-relaxed text-lg font-medium mb-10">
                                    {service.description}
                                </p>
                                <div className="space-y-4 mb-12">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-wl-accent"></div>
                                            <span className="text-sm font-bold uppercase tracking-widest text-wl-muted-dark opacity-80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link href={service.link} className="flex items-center gap-2 text-wl-accent font-black uppercase tracking-widest text-xs group/link">
                                    Explore Service <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Methodology */}
            <section className="section-padding bg-wl-dark/30 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="heading-lg mb-16">How We <span className="text-wl-accent">Deliver.</span></h2>
                            <div className="space-y-12">
                                {processSteps.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-10 group"
                                    >
                                        <div className="text-5xl font-black text-white/5 group-hover:text-wl-accent transition-colors leading-none">0{idx + 1}</div>
                                        <div>
                                            <h4 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">{step.title}</h4>
                                            <p className="subtitle-md mb-0">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="glass-strong rounded-[4rem] overflow-hidden border border-white/10 h-[600px] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                    alt="Methodology Illustration"
                                    className="w-full h-full object-cover grayscale opacity-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark/80 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="w-full h-full border-2 border-dashed border-wl-accent/20 rounded-3xl flex items-center justify-center">
                                        <Workflow className="w-24 h-24 text-wl-accent/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secondary Services */}
            <section className="section-padding">
                <div className="container-custom text-center mb-24">
                    <div className="tag-label mx-auto mb-8">Quality Standard</div>
                    <h2 className="heading-lg mb-8">Built-in <span className="text-wl-accent">Excellence.</span></h2>
                    <p className="subtitle-lg mx-auto">Every project includes our core quality parameters as standard.</p>
                </div>
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Zero Trust Security" },
                            { icon: Fingerprint, title: "Personalized Content" },
                            { icon: BarChart3, title: "Real-time Metrics" },
                            { icon: Globe, title: "Edge Performance" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="glass-strong p-12 rounded-[3.5rem] border border-white/5 text-center group hover:border-wl-accent/20 transition-all"
                            >
                                <item.icon className="w-12 h-12 text-wl-accent mx-auto mb-8 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold text-xl group-hover:text-wl-accent">{item.title}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong border border-white/10 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                            {[
                                { value: '250+', label: 'Engagements' },
                                { value: '98%', label: 'Loyalty' },
                                { value: '3.5x', label: 'ROI' },
                                { value: '24/7', label: 'Assistance' }
                            ].map((metric, idx) => (
                                <div key={idx}>
                                    <div className="text-5xl font-black text-wl-accent mb-2">{metric.value}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-wl-muted-dark">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong border border-wl-accent/20 rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden max-w-5xl mx-auto"
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-wl-accent/10 blur-[100px]"></div>
                        <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
                            Ready to Disrupt <br /><span className="text-wl-accent">Your Industry?</span>
                        </h2>
                        <CTAButton onClick={openDemoModal} variant="primary">
                            Get started with a Demo
                        </CTAButton>
                        <p className="mt-8 text-wl-muted-dark font-bold uppercase tracking-widest text-xs">Limited spots for Q1 2026</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
