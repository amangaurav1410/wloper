'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-wl-dark text-white flex items-center justify-center relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto glass-strong p-12 md:p-24 rounded-[3rem] border border-white/10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[8rem] md:text-[12rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-wl-accent to-transparent opacity-50 select-none"
                    >
                        404
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="heading-md mb-6 relative -mt-10"
                    >
                        Page Not Found
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-wl-muted-dark mb-10 max-w-lg mx-auto"
                    >
                        The page you are looking for might have been moved, deleted, or possibly never existed.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/" prefetch={false} className="btn-primary group h-14">
                            <Home className="w-5 h-5 mr-2" />
                            Back to Home
                        </Link>
                        <button onClick={() => window.history.back()} className="btn-secondary h-14 group">
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
