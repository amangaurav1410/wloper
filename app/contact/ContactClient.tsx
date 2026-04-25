'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Zap, Mail, MessageSquare, Send, ShieldCheck, Clock, Layers, Loader2, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

const GlobalGlobe = dynamic(() => import('@/components/GlobalGlobe'), { ssr: false });

export default function ContactClient() {
    const [interest, setInterest] = useState('Website Development');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '', // hidden field — bots fill this, humans don't
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Anti-spam: honeypot check
        if (formData.honeypot) return;

        // Anti-spam: minimum message length
        if (formData.message.trim().length < 20) {
            setStatusMessage('Please describe your project in at least 20 characters so we can help you better.');
            return;
        }

        // Anti-spam: validate phone format (must be 10+ digits)
        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (phoneDigits.length < 10) {
            setStatusMessage('Please enter a valid phone number so we can contact you.');
            return;
        }

        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: `Interest in ${interest}`
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#caf648', '#ffffff', '#000000'] });
                setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                setStatusMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatusMessage('Connection error. Please check your internet and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* ... cinematic hero ... */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg"
                        alt="Contact Hub Background"
                        fill
                        className="object-cover opacity-40 brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/40 to-wl-dark" />
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(202,246,72,0.05),transparent_70%)]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Layers className="w-4 h-4 text-wl-accent" />
                            Command Center Interface
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 text-balance"
                        >
                            Initialize <br /><span className="text-wl-accent">Direct Protocol.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/50"
                        >
                            Connect with our engineering pod to transition your vision into a scalable production asset.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="section-padding pt-0 relative z-20 -mt-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-12">
                            <div className="glass-strong rounded-[4rem] border border-white/5 p-4 relative overflow-hidden h-[550px] group shadow-2xl">
                                <div className="absolute inset-0 z-0 scale-110">
                                    <GlobalGlobe />
                                </div>
                                <div className="relative z-10 p-10 flex flex-col h-full justify-between pointer-events-none">
                                    <div className="tag-label bg-black/50 backdrop-blur-xl border-white/10 w-fit">
                                        Live Operations Sync
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-bold uppercase tracking-tighter">Global Deployment Hub</h3>
                                        <p className="text-white/40 font-medium">Synchronizing distributed engineering pods across 4 continents for 24/7 delivery cycles.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="glass-strong p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Sales Inquiries</h4>
                                    <p className="text-sm text-wl-accent font-black tracking-tight uppercase">sales@wloper.com</p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="glass-strong p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Direct Call</h4>
                                    <p className="text-sm text-wl-accent font-black tracking-tight">+91 9034197787</p>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-strong border border-white/5 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden"
                        >
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 z-50 bg-wl-dark/80 backdrop-blur-md flex flex-col items-center justify-center text-center p-12"
                                >
                                    <div className="w-20 h-20 bg-wl-accent rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-black" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4">Transmission Successful</h3>
                                    <p className="text-white/60 font-medium">Your mission brief has been received. Our engineering pod will initialize sync within 24 hours.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-8 text-wl-accent font-black uppercase tracking-widest text-xs hover:underline"
                                    >
                                        Send Another Brief
                                    </button>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-10">
                                {/* HONEYPOT — hidden from humans, bots fill it */}
                                <input
                                    type="text"
                                    name="website_url"
                                    value={formData.honeypot}
                                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
                                />

                                <div className="space-y-6">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-wl-accent">I am interested in</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['Website Development', 'SEO', 'Google Ads', 'Meta Ads', 'Mobile App', 'Custom Development', 'AI Solution'].map((cat) => (
                                            <button
                                                key={cat}
                                                type="button"
                                                onClick={() => setInterest(cat)}
                                                className={`py-3 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest border transition-all ${interest === cat
                                                    ? 'bg-wl-accent text-black border-wl-accent shadow-xl shadow-wl-accent/20'
                                                    : 'bg-white/5 border-white/5 text-white/30 hover:border-white/10'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid gap-8">
                                    <div className="space-y-2 group">
                                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-wl-accent transition-colors">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            minLength={2}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 py-5 text-white focus:border-wl-accent focus:outline-none transition-all placeholder:text-white/10 font-bold text-xl"
                                            placeholder="Your Full Name"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-wl-accent transition-colors">Business Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 py-5 text-white focus:border-wl-accent focus:outline-none transition-all placeholder:text-white/10 font-bold text-xl"
                                            placeholder="your@company.com"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-wl-accent transition-colors">Phone Number * (for us to call you)</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 py-5 text-white focus:border-wl-accent focus:outline-none transition-all placeholder:text-white/10 font-bold text-xl"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-wl-accent transition-colors">Tell us about your project * (min 20 chars)</label>
                                        <textarea
                                            rows={4}
                                            required
                                            minLength={20}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 py-5 text-white focus:border-wl-accent focus:outline-none transition-all placeholder:text-white/10 font-bold text-xl resize-none"
                                            placeholder="Describe what you need..."
                                        />
                                        <div className="text-right text-[10px] text-white/20">{formData.message.length}/20 min</div>
                                    </div>
                                </div>

                                {statusMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold"
                                    >
                                        {statusMessage}
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full h-24 text-xl group relative shadow-2xl disabled:opacity-50"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        {isSubmitting ? (
                                            <>INITIALIZING... <Loader2 className="w-6 h-6 animate-spin" /></>
                                        ) : (
                                            <>INITIALIZE SYNC <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                        )}
                                    </span>
                                </button>

                                <div className="flex items-center justify-between text-white/20 border-t border-white/5 pt-10">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-wl-accent" />
                                        <span className="text-[9px] font-black uppercase tracking-widest">End-to-End Encrypted</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-wl-accent" />
                                        <span className="text-[9px] font-black uppercase tracking-widest">24h SLA</span>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
