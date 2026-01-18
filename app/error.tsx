'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-wl-dark text-white flex items-center justify-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-red-500/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto glass-strong p-12 rounded-[3rem] border border-white/10"
                >
                    <h2 className="heading-md mb-6">Something went wrong!</h2>
                    <p className="text-wl-muted-dark mb-10 text-lg">
                        We apologize for the inconvenience. An unexpected error has occurred.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={reset}
                            className="btn-primary"
                        >
                            <RefreshCw className="w-5 h-5 mr-2" />
                            Try Again
                        </button>
                        <Link href="/" className="btn-secondary">
                            <Home className="w-5 h-5 mr-2" />
                            Back to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
