'use client';

import { motion } from 'framer-motion';

export default function TrustStrip() {
    const stats = [
        { label: 'Successful Projects', value: '100+' },
        { label: 'Happy Clients', value: '50+' },
        { label: 'Client Rating', value: '5.0' },
        { label: 'Years of Experience', value: '5+' },
    ];

    return (
        <section className="py-20 bg-wl-dark relative overflow-hidden border-y border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-wl-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-1/4 h-1/2 bg-wl-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            className="text-center group"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-wl-accent transition-colors duration-300"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-wl-muted-dark font-bold">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
