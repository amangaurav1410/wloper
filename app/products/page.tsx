'use client';

import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';
import { Smartphone, RotateCcw, Globe, BarChart3, LayoutDashboard, Video, Users, Building, Rocket, GraduationCap, Check } from 'lucide-react';

export default function ProductsPage() {
    const features = [
        {
            title: 'Live AI Interviewer',
            description: 'Conduct real-time interviews with intelligent AI that adapts to candidate responses seamlessly.',
            icon: Smartphone,
        },
        {
            title: 'Custom Interview Flows',
            description: 'Design interview processes tailored to your specific role requirements and company culture.',
            icon: RotateCcw,
        },
        {
            title: 'Multi-Language Support',
            description: 'Interview candidates in their preferred language with real-time AI translation capabilities.',
            icon: Globe,
        },
        {
            title: 'Real-Time Scoring',
            description: 'Get instant evaluation scores based on predefined technical and soft-skill criteria.',
            icon: BarChart3,
        },
        {
            title: 'Candidate Dashboard',
            description: 'Compare candidates side-by-side with comprehensive analytics and performance insights.',
            icon: LayoutDashboard,
        },
        {
            title: 'Interview Recordings',
            description: 'Access full playback, transcripts, and sentiment analysis for thorough review.',
            icon: Video,
        },
    ];

    const targetAudience = [
        { title: 'HR Teams', icon: Users, description: 'Streamline High-Volume Recruitment' },
        { title: 'Agencies', icon: Building, description: 'Scale Operations Efficiently' },
        { title: 'Startups', icon: Rocket, description: 'Find Top Talent Fast' },
        { title: 'EdTech', icon: GraduationCap, description: 'Assess Student Capabilities' },
    ];

    const benefits = [
        'Reduce hiring time by up to 70%',
        'Eliminate scheduling conflicts completely',
        'Consistent interview experience for all',
        'Data-driven hiring decisions with AI insights',
        'Scalable solution for mass hiring campaigns',
        'Reduce unconscious bias in recruitment',
        'Lower cost-per-hire significantly',
        'Improve overall candidate experience',
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden">
            {/* Hero Section */}
            <section className="section-padding relative pt-32 lg:pt-48">
                {/* Background Glow */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-8"
                        >
                            <Rocket className="w-4 h-4 text-wl-accent" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">AI-Powered Product</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-xl mb-6"
                        >
                            Wloper AI <span className="heading-gradient">Interview Platform</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-wl-muted-dark mb-10 leading-relaxed max-w-2xl mx-auto"
                        >
                            An AI-powered platform that conducts live interviews for technical and non-technical
                            roles using intelligent questioning and real-time evaluation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <CTAButton href="/contact" variant="primary">
                                Book a Live Demo
                            </CTAButton>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Product Visual Showcase */}
            <section className="pb-24 bg-wl-dark">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-strong rounded-[4rem] overflow-hidden border border-white/10 aspect-[16/9] relative group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bbbda51658f7?q=80&w=2070&auto=format&fit=crop"
                            alt="AI Interview Platform Dashboard"
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-wl-dark/60 via-transparent to-transparent opacity-40"></div>

                        {/* Floating Status Badge */}
                        <div className="absolute top-10 left-10 glass px-6 py-3 rounded-2xl border border-wl-accent/20 flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-wl-accent animate-pulse"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Live AI Analysis Engine</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom relative z-10">
                    <h2 className="heading-md text-center mb-16">
                        Who It's For
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {targetAudience.map((audience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-[2rem] border border-white/5 text-center hover:border-wl-accent/30 hover:-translate-y-1 transition-all group"
                            >
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-wl-accent group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <audience.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {audience.title}
                                </h3>
                                <p className="text-wl-muted-dark text-sm font-medium">
                                    {audience.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="section-padding bg-wl-dark relative">
                <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <h2 className="heading-md text-center mb-16">
                        Core Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-strong p-10 rounded-[2.5rem] border border-white/10 hover:border-wl-accent/20 transition-all"
                            >
                                <div className="w-12 h-12 bg-wl-accent/10 rounded-xl flex items-center justify-center mb-6 text-wl-accent">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-wl-muted-dark leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="heading-md text-center mb-16">
                            Benefits That Matter
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 glass p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-all"
                                >
                                    <div className="w-8 h-8 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0 text-wl-accent">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-wl-muted-dark font-medium text-lg">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-wl-dark relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong border border-wl-accent/20 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-wl-accent/5 pointer-events-none"></div>
                        <h2 className="heading-md mb-6">
                            Ready to Transform Your Hiring?
                        </h2>
                        <p className="text-xl text-wl-muted-dark mb-10 max-w-2xl mx-auto font-medium">
                            See how our AI Interview Platform can revolutionize your recruitment process
                        </p>
                        <CTAButton href="/contact" variant="primary">
                            Schedule Your Demo Today
                        </CTAButton>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
