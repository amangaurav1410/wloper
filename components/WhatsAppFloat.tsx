'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setShowTooltip(true), 1500);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const whatsappNumber = "919034197787";
    const message = "Hi Wloper team, I'm interested in your services. Can we discuss?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end gap-4">
                    {/* Tooltip */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                className="relative bg-white text-black p-4 rounded-2xl shadow-2xl border border-white/20 text-sm font-bold max-w-[200px]"
                            >
                                <button 
                                    onClick={() => setShowTooltip(false)}
                                    className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-[10px]"
                                >
                                    <X size={10} />
                                </button>
                                <div className="flex flex-col gap-1">
                                    <span className="text-wl-accent uppercase tracking-tighter text-[10px]">Online Now</span>
                                    <span>How can we help you scale today?</span>
                                </div>
                                {/* Arrow */}
                                <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-black/5"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* WhatsApp Button */}
                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <MessageCircle className="w-8 h-8 relative z-10" />
                        
                        {/* Pulse effect */}
                        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></div>
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    );
}
