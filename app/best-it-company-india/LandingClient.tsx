'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Zap, 
    ShieldCheck, 
    Star, 
    CheckCircle2, 
    ArrowRight, 
    Globe, 
    Users, 
    BarChart3, 
    Send,
    Trophy,
    Target,
    Rocket,
    Layout,
    Cpu,
    Sparkles,
    MousePointer2
} from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const AROISimulator = dynamic(() => import('@/components/AROISimulator'), { ssr: false });
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const GlobalGlobe = dynamic(() => import('@/components/GlobalGlobe'), { ssr: false });

export default function LandingClient() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Website Development',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: `AD LEAD: ${formData.service}`,
                    message: `Service: ${formData.service}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', phone: '', service: 'Website Development', message: '' });
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-wl-dark text-white selection:bg-wl-accent selection:text-black overflow-hidden">
            
            {/* Header - ONLY LOGO as requested */}
            <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-wl-dark to-transparent backdrop-blur-sm">
                <Link href="/" className="flex items-center">
                    <Image 
                        src="/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png" 
                        alt="Wloper" 
                        width={70} 
                        height={70} 
                        className="hover:scale-110 transition-transform duration-500"
                    />
                </Link>
                <div className="flex items-center gap-6">
                    <a href="tel:+919034197787" className="hidden sm:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-wl-accent group">
                        <span className="w-2 h-2 rounded-full bg-wl-accent animate-pulse" />
                        Call Engineering: +91 9034197787
                    </a>
                    <a href="#claim" className="btn-primary !py-2.5 !px-6 !text-[10px]">Secure My Slot</a>
                </div>
            </header>

            {/* Premium Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
                {/* Visual Background Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 scale-125">
                        <GlobalGlobe />
                    </div>
                    {/* Deep Overlays */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--wl-dark)_80%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark via-wl-dark/80 to-wl-dark" />
                    
                    {/* Animated Neon Lines (Simulated) */}
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-wl-accent/20 to-transparent" />
                    <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-wl-accent/20 to-transparent" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        
                        {/* Left: Persuasion with higher-end typography */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="tag-label inline-flex border-wl-accent/40 bg-wl-accent/5 text-wl-accent"
                            >
                                <Sparkles className="w-3 h-3 animate-spin-slow" />
                                Ranked #1 for Institutional-Grade Growth
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-balance"
                            >
                                DOMINATE <br />
                                THE <span className="text-wl-accent">DIGITAL</span> <br />
                                FRONTIER.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl text-white/40 max-w-lg leading-snug font-medium"
                            >
                                We engineer aggressive digital assets that automate your growth and bankrupt your competition's relevance.
                            </motion.p>

                            <div className="grid sm:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-xl bg-wl-accent/10 flex items-center justify-center text-wl-accent">
                                        <Target className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-black uppercase tracking-tighter text-lg">Precision SEO</h4>
                                    <p className="text-xs text-white/30 leading-relaxed">Rank for keywords your buyers actually search for.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-xl bg-wl-accent/10 flex items-center justify-center text-wl-accent">
                                        <Cpu className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-black uppercase tracking-tighter text-lg">AI Neural Flow</h4>
                                    <p className="text-xs text-white/30 leading-relaxed">Automate 60% of your customer acquisition with AI.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: High-Converting Form Card */}
                        <motion.div
                            id="claim"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-10 bg-wl-accent/10 blur-[120px] pointer-events-none opacity-40 animate-pulse" />
                            <div className="relative glass-strong border border-white/10 rounded-[4rem] p-12 md:p-16 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                                
                                {isSuccess ? (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8 py-20">
                                        <div className="w-24 h-24 bg-wl-accent rounded-full flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(202,246,72,0.4)]">
                                            <CheckCircle2 className="w-12 h-12 text-black" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-4xl font-black tracking-tighter">MISSION INITIATED</h3>
                                            <p className="text-white/40 text-lg">Our growth pod is analyzing your data. Expect a secure uplink within 4 hours.</p>
                                        </div>
                                        <button onClick={() => setIsSuccess(false)} className="text-wl-accent text-[10px] font-black uppercase tracking-[0.4em] hover:opacity-100 transition-opacity">
                                            New Mission Request
                                        </button>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="mb-12">
                                            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-center">Request Growth Audit</h2>
                                            <div className="flex items-center justify-center gap-3">
                                                <div className="flex -space-x-2">
                                                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-wl-dark bg-wl-accent/20" />)}
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-wl-accent">Join 200+ brands scaling right now</span>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="space-y-2 group">
                                                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full Name" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-lg font-bold focus:outline-none focus:border-wl-accent/50 focus:bg-white/[0.06] transition-all placeholder:text-white/10" />
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Work Email" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-lg font-bold focus:outline-none focus:border-wl-accent/50 focus:bg-white/[0.06] transition-all placeholder:text-white/10" />
                                                <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="WhatsApp No." className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-lg font-bold focus:outline-none focus:border-wl-accent/50 focus:bg-white/[0.06] transition-all placeholder:text-white/10" />
                                            </div>
                                            <div className="space-y-2">
                                                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-lg font-bold focus:outline-none focus:border-wl-accent/50 focus:bg-white/[0.06] transition-all appearance-none cursor-pointer text-white/50">
                                                    <option value="Website Development" className="bg-wl-dark">Website Development</option>
                                                    <option value="SEO & Growth" className="bg-wl-dark">SEO & Growth</option>
                                                    <option value="AI Integration" className="bg-wl-dark">AI Integration</option>
                                                </select>
                                            </div>

                                            <button disabled={isSubmitting} type="submit" className="btn-primary w-full h-24 text-xl group relative overflow-hidden disabled:opacity-50 !rounded-3xl">
                                                <span className="relative z-10 flex items-center justify-center gap-3">
                                                    {isSubmitting ? 'ANALYZING MARKET DATA...' : 'RESERVE MY GROWTH AUDIT'}
                                                    {!isSubmitting && <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />}
                                                </span>
                                            </button>

                                            <div className="flex items-center justify-center gap-4 text-white/10">
                                                <ShieldCheck className="w-5 h-5 text-wl-accent/40" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">SECURE DATA UPLINK ACTIVE</span>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section Integration */}
            <Services />

            {/* Comparison Section */}
            <section className="section-padding bg-white/[0.02] border-y border-white/5">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
                                WHY THE WORLD'S <br /><span className="text-wl-accent">TOP 1%</span> TRUST US.
                            </h2>
                            <p className="text-xl text-white/40 leading-relaxed max-w-lg">
                                We've replaced the obsolete "agency" model with an aggressive engineering mindset. No fluff. Just institutional scale.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { us: "Custom Neural Architectures", them: "Standard Page Builders" },
                                    { us: "Real-time AI Growth Sync", them: "Manual SEO Updates" },
                                    { us: "24/7 Global Dev Pods", them: "9-to-5 Local Staff" },
                                    { us: "ROI-Focused Fixed Pricing", them: "Variable Hourly Billing" }
                                ].map((row, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-wl-accent/20 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-wl-accent" />
                                            <span className="text-lg font-black tracking-tighter">{row.us}</span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{row.them}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-20 bg-wl-accent/5 blur-[150px] pointer-events-none" />
                            <div className="glass-strong rounded-[5rem] border border-white/10 p-5 relative aspect-[4/5] overflow-hidden group">
                                <Image 
                                    src="/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg" 
                                    alt="Wloper Standards" 
                                    fill 
                                    className="object-cover rounded-[4.5rem] opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark to-transparent opacity-80" />
                                <div className="absolute bottom-12 left-12 right-12 p-12 glass-strong border border-white/10 rounded-[3rem] backdrop-blur-3xl">
                                    <p className="text-2xl font-black tracking-tighter mb-6">"Most agencies build to finish. Wloper builds to dominate. They are the only partner we trust with our core stack."</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10" />
                                        <div>
                                            <p className="text-sm font-black uppercase tracking-widest">Global CTO</p>
                                            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Fintech Unicorn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Simulation Section */}
            <section className="section-padding overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <div className="tag-label mx-auto mb-6">Neural Analytics</div>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">YOUR GROWTH, <br /><span className="heading-gradient">QUANTIFIED.</span></h2>
                        <p className="text-xl text-white/40 leading-relaxed">Calculate the exact mathematical advantage of switching to Wloper's AI Neural Flow.</p>
                    </div>
                    <AROISimulator />
                </div>
            </section>

            {/* Simplified Trust Footer */}
            <footer className="py-32 border-t border-white/5 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-wl-accent/5 blur-[120px] pointer-events-none" />
                <div className="container-custom relative z-10">
                    <Image 
                        src="/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png" 
                        alt="Wloper" 
                        width={60} 
                        height={60} 
                        className="mx-auto mb-12 opacity-20 hover:opacity-50 transition-opacity"
                    />
                    <p className="text-[11px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Engineering the Future of Digital Growth</p>
                    <div className="flex justify-center gap-12 text-white/40 mb-16">
                        <Link href="/privacy" className="text-xs font-black uppercase tracking-widest hover:text-wl-accent transition-colors">Privacy Protocol</Link>
                        <Link href="/terms" className="text-xs font-black uppercase tracking-widest hover:text-wl-accent transition-colors">Service Terms</Link>
                        <Link href="/contact" className="text-xs font-black uppercase tracking-widest hover:text-wl-accent transition-colors">Connect Hub</Link>
                    </div>
                    <p className="text-[10px] text-white/10 uppercase tracking-[0.4em]">&copy; {new Date().getFullYear()} Wloper Systems Private Limited. Institutional Rights Reserved.</p>
                </div>
            </footer>

            {/* Bottom Mobile Floating CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden p-6 bg-gradient-to-t from-wl-dark to-transparent">
                <a href="#claim" className="btn-primary w-full h-16 flex items-center justify-center gap-3 text-sm !rounded-2xl shadow-2xl">
                    Claim My Growth Audit <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
