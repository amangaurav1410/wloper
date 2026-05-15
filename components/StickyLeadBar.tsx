'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Star } from 'lucide-react';
import Link from 'next/link';

export default function StickyLeadBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show bar after scrolling 600px
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-[80] p-4 hidden md:block"
                >
                    <div className="container-custom">
                        <div className="glass-strong border border-wl-accent/20 rounded-full px-8 py-3 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-wl-dark bg-wl-accent/20 flex items-center justify-center overflow-hidden">
                                                <div className="w-full h-full bg-gradient-to-br from-wl-accent/40 to-transparent"></div>
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-white/60">Join 200+ global brands</span>
                                </div>
                                <div className="h-4 w-[1px] bg-white/10"></div>
                                <div className="flex items-center gap-2 text-wl-accent">
                                    <Star className="w-3 h-3 fill-wl-accent" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Top Rated IT Company</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-white/80">Ready to scale your digital presence?</span>
                                <Link 
                                    href="/contact"
                                    className="bg-wl-accent text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2"
                                >
                                    Get Free Quote
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
