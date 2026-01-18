'use client';

import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';
import { Laptop, Megaphone, Palette, ShoppingCart, Rocket, Bot, Check, ArrowUpRight, Layers } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            icon: Laptop,
            title: 'Website Development',
            description: 'Custom, scalable, and high-performance web solutions built with cutting-edge technologies.',
            features: [
                'Custom Web Applications',
                'E-commerce Platforms',
                'Progressive Web Apps (PWA)',
                'API Development & Integration',
                'CMS Development',
                'Responsive Design',
            ],
        },
        {
            icon: Megaphone,
            title: 'Digital Marketing',
            description: 'Growth-driven strategies to amplify your brand and reach your target audience effectively.',
            features: [
                'Social Media Marketing',
                'Content Marketing',
                'Email Campaigns',
                'PPC Advertising',
                'Brand Strategy',
                'Analytics & Reporting',
            ],
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces that deliver exceptional user experiences.',
            features: [
                'User Research',
                'Wireframing & Prototyping',
                'Visual Design',
                'Interaction Design',
                'Usability Testing',
                'Design Systems',
            ],
        },
        {
            icon: ShoppingCart,
            title: 'E-commerce Solutions',
            description: 'Complete online store solutions with seamless payment integration and inventory management.',
            features: [
                'Custom E-commerce Platforms',
                'Payment Gateway Integration',
                'Inventory Management',
                'Shopping Cart Optimization',
                'Product Catalog Management',
                'Order Fulfillment Systems',
            ],
        },
        {
            icon: Rocket,
            title: 'SEO & Performance',
            description: 'Optimize your digital presence for search engines and lightning-fast performance.',
            features: [
                'Technical SEO Audits',
                'On-Page Optimization',
                'Performance Optimization',
                'Core Web Vitals',
                'Schema Markup',
                'Link Building Strategy',
            ],
        },
        {
            icon: Bot,
            title: 'AI Products',
            description: 'Innovative AI-powered solutions including our flagship live interview platform.',
            features: [
                'AI Interview Platform',
                'Custom AI Solutions',
                'Machine Learning Integration',
                'Natural Language Processing',
                'Chatbot Development',
                'AI Consulting',
            ],
        },
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden">
            {/* Hero Section */}
            <section className="section-padding relative pt-32 lg:pt-48">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                        alt="Services Hero Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-wl-dark/60"></div>
                </div>

                {/* Background Glow */}
                <div className="absolute top-0 right-1/4 w-[50%] h-[50%] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-6"
                        >
                            Our <span className="heading-gradient">Services</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-wl-muted-dark leading-relaxed max-w-2xl mx-auto"
                        >
                            Comprehensive digital solutions designed to power your business growth
                            and drive measurable results.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-wl-dark relative">
                <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-strong border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-wl-accent/20 transition-all group"
                            >
                                <div className="grid lg:grid-cols-3 gap-10">
                                    <div className="lg:col-span-1">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-wl-accent group-hover:bg-wl-accent group-hover:text-black transition-all">
                                            <service.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="heading-sm mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-wl-muted-dark leading-relaxed text-lg font-medium">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <h4 className="text-wl-accent font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                                            <ArrowUpRight className="w-4 h-4" />
                                            What We Offer
                                        </h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                                                    <Check className="w-5 h-5 text-wl-accent shrink-0" />
                                                    <span className="text-wl-muted-dark font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics Section */}
            <section className="section-padding bg-wl-dark relative">
                <div className="absolute top-1/2 right-0 w-[40%] h-[40%] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="heading-lg mb-8">
                                Proven Results <span className="text-wl-accent">Across Industries</span>
                            </h2>
                            <p className="text-xl text-wl-muted-dark leading-relaxed mb-12 font-medium">
                                Our comprehensive service portfolio has delivered measurable success for clients worldwide. From startups to Fortune 500 companies, we drive growth through innovation.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { value: '250+', label: 'Projects Delivered' },
                                    { value: '98%', label: 'Client Satisfaction' },
                                    { value: '3.5x', label: 'Average ROI' },
                                    { value: '24/7', label: 'Support Available' }
                                ].map((metric, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-5xl font-black text-wl-accent mb-2">{metric.value}</div>
                                        <div className="text-sm font-bold uppercase tracking-wider text-wl-muted-dark">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-strong rounded-[3rem] overflow-hidden border border-white/10 h-[450px] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                    alt="Services Illustration"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark/60 to-transparent"></div>
                            </div>
                        </motion.div>
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
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-wl-muted-dark mb-10 max-w-2xl mx-auto font-medium">
                            Let's discuss how our services can help you achieve your business goals
                        </p>
                        <CTAButton href="/contact" variant="primary">
                            Get a Free Consultation
                        </CTAButton>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
