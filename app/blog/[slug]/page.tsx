'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Calendar, Clock, Share2,
    MessageSquare, Twitter, Linkedin, Copy, CheckCircle2,
    Sparkles, Zap, Bot
} from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import Image from 'next/image';

export default function BlogPost() {
    const { slug } = useParams();
    const router = useRouter();

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-wl-dark text-white flex flex-col items-center justify-center p-6">
                <div className="text-center">
                    <h1 className="text-6xl font-black mb-4">Post Not Found</h1>
                    <p className="text-wl-muted-dark mb-8">The article you are looking for has been archived or moved.</p>
                    <Link href="/blog" className="btn-primary">Back to knowledge base</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="bg-wl-dark text-white min-h-screen pb-32">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-wl-accent z-[60] origin-left"
                style={{ scaleX: 0 }} // Simplified for now
            />

            {/* Post Hero */}
            <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 text-wl-muted-dark hover:text-white transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Library
                    </button>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 text-[10px] font-black uppercase tracking-widest text-wl-accent">
                                {post.category}
                            </span>
                            <div className="h-[1px] w-8 bg-white/20"></div>
                            <span className="text-xs font-bold text-wl-muted-dark uppercase tracking-widest">
                                {post.readTime}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black leading-[1.1] mb-12"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-white/10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-wl-accent/20 flex items-center justify-center font-black text-xl italic text-wl-accent">
                                    {post.author[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{post.author}</div>
                                    <div className="text-xs text-wl-muted-dark flex items-center gap-2">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all">
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all">
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Body */}
            <section className="section-padding py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Main Text */}
                        <div className="lg:col-span-8 space-y-12">
                            <div className="glass-strong p-8 md:p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden mb-12">
                                <p className="text-2xl text-white font-medium italic leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="prose prose-invert prose-lg max-w-none text-wl-muted-dark font-medium leading-[1.8]">
                                <h3 className="text-3xl font-black text-white mt-16 mb-8">The Strategy for 2026</h3>
                                <p>
                                    As we move deeper into the age of decentralized intelligence and autonomous systems, the role of {post.category} has fundamentally shifted. It’s no longer about just delivering features; it’s about creating resilient, AI-native ecosystems that adapt to user behavior in real-time.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 my-16">
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                        <Zap className="w-8 h-8 text-wl-accent mb-4" />
                                        <h4 className="text-white font-bold mb-2">High Efficiency</h4>
                                        <p className="text-sm">Optimized protocols reduce latency by up to 40% in enterprise environments.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                        <Bot className="w-8 h-8 text-wl-accent mb-4" />
                                        <h4 className="text-white font-bold mb-2">AI Integration</h4>
                                        <p className="text-sm">Seamless connection to LLM models for intelligent decision making.</p>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-black text-white mt-16 mb-8">Execution & Roadmap</h3>
                                <p>
                                    At Wloper, we approach every {post.category} challenge with a "Product First" mindset. This means our engineering team works alongside growth strategists to ensure that every line of code contributes directly to the bottom line. Our 2026 roadmap reflects this commitment to excellence.
                                </p>

                                <div className="my-16 p-10 bg-wl-accent/5 border border-wl-accent/20 rounded-[3rem] relative space-y-6">
                                    <h4 className="text-xl font-bold flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-wl-accent" />
                                        Key Takeaways
                                    </h4>
                                    <ul className="space-y-4 text-white">
                                        <li className="flex gap-3">
                                            <span className="text-wl-accent">•</span>
                                            Build for scalability using Next.js 15 frameworks.
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-wl-accent">•</span>
                                            Integrate real-time AI analytics for user behavior tracking.
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-wl-accent">•</span>
                                            Prioritize security through blockchain-validated protocols.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Related / Newsletter */}
                        <div className="lg:col-span-4 space-y-12">
                            <div className="sticky top-32">
                                <div className="glass-strong p-10 rounded-[3rem] border border-wl-accent/10 mb-12">
                                    <h4 className="text-xl font-black mb-6">Need a similar solution?</h4>
                                    <p className="text-sm text-wl-muted-dark mb-8 font-medium">
                                        Our engineers specialize in {post.category}. Let's build your next project together.
                                    </p>
                                    <Link href="/contact" className="btn-primary w-full text-center">
                                        Talk to Experts
                                    </Link>
                                </div>

                                <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10">
                                    <h4 className="text-xl font-black mb-6">Trending in {post.category}</h4>
                                    <div className="space-y-6">
                                        {blogPosts.slice(1, 4).map(p => (
                                            <Link href={`/blog/${p.slug}`} key={p.id} className="block group">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-wl-accent mb-1">{p.date}</div>
                                                <div className="font-bold text-white group-hover:text-wl-accent transition-colors line-clamp-2">{p.title}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </article>
    );
}
