'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, Type, Sun, Moon, Coffee, ChevronUp, ChevronDown } from 'lucide-react';

interface ReadingModeProps {
    isActive: boolean;
    onToggle: () => void;
}

export default function ReadingMode({ isActive, onToggle }: ReadingModeProps) {
    const [fontSize, setFontSize] = useState(18);
    const [theme, setTheme] = useState<'light' | 'dark' | 'sepia'>('dark');
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('reading-mode-active');
            // Applying theme styles directly to body or a wrapper is handled in the parent
            const root = document.documentElement;
            if (theme === 'sepia') {
                root.style.setProperty('--rm-bg', '#f4ecd8');
                root.style.setProperty('--rm-text', '#5b4636');
                root.style.setProperty('--rm-accent', '#8b4513');
            } else if (theme === 'light') {
                root.style.setProperty('--rm-bg', '#ffffff');
                root.style.setProperty('--rm-text', '#1a1a1a');
                root.style.setProperty('--rm-accent', '#000000');
            } else {
                root.style.setProperty('--rm-bg', '#050505');
                root.style.setProperty('--rm-text', '#e2e2e2');
                root.style.setProperty('--rm-accent', '#CAF648');
            }
            root.style.setProperty('--rm-font-size', `${fontSize}px`);
        } else {
            document.body.classList.remove('reading-mode-active');
        }
    }, [isActive, theme, fontSize]);

    return (
        <div className="fixed bottom-6 left-6 z-[100] md:left-auto md:right-32 lg:right-40">
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 glass-strong p-4 rounded-3xl border border-white/10 flex flex-col gap-4 shadow-2xl"
                    >
                        {/* Font Size Controls */}
                        <div className="flex items-center justify-between gap-6 px-2">
                            <div className="flex items-center gap-2">
                                <Type className="w-4 h-4 text-wl-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Size</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setFontSize(prev => Math.max(14, prev - 2))}
                                    className="p-1.5 hover:bg-white/5 rounded-lg transition-colors border border-white/5"
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                <span className="text-xs font-mono font-bold w-6 text-center">{fontSize}</span>
                                <button
                                    onClick={() => setFontSize(prev => Math.min(32, prev + 2))}
                                    className="p-1.5 hover:bg-white/5 rounded-lg transition-colors border border-white/5"
                                >
                                    <ChevronUp className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Theme Controls */}
                        <div className="flex items-center justify-between gap-6 px-2">
                            <div className="flex items-center gap-2">
                                <Sun className="w-4 h-4 text-wl-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Theme</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setTheme('dark')}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${theme === 'dark' ? 'border-wl-accent bg-black' : 'border-transparent bg-black/40'}`}
                                    title="Dark Mode"
                                />
                                <button
                                    onClick={() => setTheme('sepia')}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${theme === 'sepia' ? 'border-wl-accent bg-[#f4ecd8]' : 'border-transparent bg-[#f4ecd8]/40'}`}
                                    title="Sepia Mode"
                                />
                                <button
                                    onClick={() => setTheme('light')}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${theme === 'light' ? 'border-wl-accent bg-white' : 'border-transparent bg-white/40'}`}
                                    title="Light Mode"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onToggle}
                className={`flex items-center gap-3 px-6 h-14 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-500 shadow-2xl ${isActive
                        ? 'bg-wl-accent text-black'
                        : 'bg-white/5 text-white/50 border border-white/10 hover:border-wl-accent/50 hover:text-white backdrop-blur-md'
                    }`}
            >
                {isActive ? (
                    <>
                        <X className="w-4 h-4" />
                        Exit Protocol
                    </>
                ) : (
                    <>
                        <BookOpen className="w-4 h-4" />
                        Focus Mode
                    </>
                )}
            </motion.button>
        </div>
    );
}
