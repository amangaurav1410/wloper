'use client';

import { motion } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, MessageSquare, Zap } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "What makes Wloper the leading Website Development company?",
        answer: "Wloper stands out by combining high-end engineering with conversion-first design. Unlike traditional agencies, we treat every website as a performance engine, focusing on sub-millisecond response times, scalable cloud architecture, and intuitive user experiences that drive actual business growth."
    },
    {
        question: "Do you offer Custom Mobile development Website services?",
        answer: "Yes, we specialize in high-performance custom mobile development. Our approach ensures that your mobile presence is not just a responsive version of your site, but a dedicated, high-speed ecosystem designed for touch interfaces, low-latency interactions, and full integration with your backend systems."
    },
    {
        question: "How do your Digital Marketing Services differ from others?",
        answer: "Our digital marketing is lead by data and engineering. We don't just 'run ads'; we build intelligent growth protocols. This includes automated lead capture systems, deep-funnel tracking, and AI-driven content distribution that ensures your brand dominates the market with technical precision."
    },
    {
        question: "What is an AI product and how can it help my business?",
        answer: "An AI product is a specialized software tool designed to automate complex reasoning and tasks. For businesses, this means deploying intelligent chatbots, automated recruitment screening (like our Interview AI), or predictive analytics engines that reduce operational costs and increase decision-making speed."
    },
    {
        question: "How long does a typical Website Development project take?",
        answer: "A custom high-performance website typically takes 4 to 8 weeks, depending on the complexity of the architecture. We follow a strict 'Rapid Deployment Protocol' that ensures we hit milestones quickly without sacrificing the structural integrity of the code."
    },
    {
        question: "Is SEO included in your Website Development services?",
        answer: "Absolutely. We build every site with 'SEO-First' architecture. This includes server-side rendering (SSR), optimized schema markups, sub-second load times, and semantic HTML structures that ensure search engines can easily crawl and rank your content."
    },
    {
        question: "Can you build AI products for specific industries?",
        answer: "Yes, we build domain-specific AI solutions. Whether it's healthcare diagnostics, fintech fraud detection, or retail recommendation engines, we customize the LLM and vector database architecture to meet industry-specific compliance and performance requirements."
    },
    {
        question: "What technologies do you use for mobile development?",
        answer: "We primarily use Next.js, React Native, and Flutter for mobile ecosystems, depending on the project requirements. Our focus is always on high frame rates, smooth animations (Framer Motion), and robust data synchronization."
    },
    {
        question: "How do you ensure the security of custom websites?",
        answer: "Security is baked into our DNA. We implement AES-256 encryption, secure API gateways, multi-factor authentication, and regular penetration testing. Our architectures are designed to be 'Zero-Trust' by default."
    },
    {
        question: "Do you provide ongoing maintenance for AI products?",
        answer: "Yes, our 'System Continuity' program provides 24/7 monitoring, regular model retraining, and infrastructure scaling to ensure your AI products remain stable and accurate as your data evolves."
    },
    {
        question: "How can Digital Marketing Services improve my ROI?",
        answer: "We focus on 'Conversion Rate Optimization' (CRO). By engineering better landing pages and using AI to target high-intent audiences, we minimize spend waste and maximize the value of every visitor, leading to a significantly higher ROI."
    },
    {
        question: "Can you integrate AI into my existing website?",
        answer: "Yes, we specializes in 'Legacy System Infusion'. We can add intelligent features like neural search, customer service bots, or automated data processing layers to your existing platform without requiring a full rebuild."
    },
    {
        question: "What is Wloper's 'Interview AI' product?",
        answer: "Interview AI is our flagship recruitment product that uses advanced NLP to screen, vet, and rank candidates automatically. It reduces hiring time by up to 70% while eliminating unconscious human bias from the initial screening process."
    },
    {
        question: "Why should I choose a Custom Mobile development Website over a template?",
        answer: "Templates are limited in performance and scalability. A custom build allows for unique brand identity, proprietary features, and most importantly, performance optimization that templates simply cannot match. It’s an investment in long-term technical debt reduction."
    },
    {
        question: "How does a Website Development company manage global traffic?",
        answer: "We use Edge Computing and globally distributed CDNs. This means your website's logic and content are served from the node closest to the user, ensuring fast load times whether your customer is in New York, London, or Punjab."
    },
    {
        question: "What industries benefit most from Digital Marketing Services?",
        answer: "Technically advanced industries like SaaS, Fintech, Healthcare, and E-commerce benefit most. These sectors require a sophisticated mix of authority building, technical SEO, and data-driven lead generation to stay competitive."
    },
    {
        question: "How do you handle data privacy in AI products?",
        answer: "We are strictly committed to GDPR and SOC2 compliance. Our AI products utilize anonymized data processing and localized data storage options to ensure that sensitive user information never exposure to public models."
    },
    {
        question: "What is 'Growth Engineering'?",
        answer: "Growth Engineering is the intersection of marketing and software development. Instead of just buying ads, we build viral loops, referral systems, and automated engagement tools directly into your product to drive organic, exponential growth."
    },
    {
        question: "Can Wloper help with Blockchain development?",
        answer: "Yes, we have deep expertise in Web3 solutions, including smart contract development, decentralized IDs, and private blockchain ecosystems for institutional clients looking for secure, transparent data management."
    },
    {
        question: "What is your pricing model for Website Development?",
        answer: "We offer project-based pricing for initial builds and monthly retainers for ongoing engineering and growth support. Every quote is customized based on the technical complexity and the scale of the required infrastructure."
    },
    {
        question: "Do you provide branding and design services?",
        answer: "Yes, our 'Design Protocol' involves creating premium, high-tech brand identities that resonate with modern audiences. This includes logo design, typography systems, and high-fidelity UI/UX mockups."
    },
    {
        question: "What is the importance of 'Sub-Millisecond' response times?",
        answer: "In 2026, speed is a core ranking factor and a psychological trigger for trust. Every millisecond of delay leads to a drop in conversion. We optimize our code to ensure that interactions feel instantaneous, keeping users engaged."
    },
    {
        question: "Can I manage the content of my website myself?",
        answer: "Yes, we integrate headless CMS solutions like Sanity or Contentful, allowing you to update text, blogs, and images without touching a single line of code, while maintaining the performance of a hard-coded site."
    },
    {
        question: "How does AI impact modern Digital Marketing Services?",
        answer: "AI allows for hyper-personalization. It can predict what a user wants to see before they even ask, automate content generation across multiple channels, and optimize bidding in real-time, making marketing more efficient than ever."
    },
    {
        question: "What is Wloper's 'HCM Cloud'?",
        answer: "HCM Cloud is an enterprise-grade Human Capital Management system. It streamlines everything from payroll and benefits to performance tracking and employee engagement, all within a high-security cloud environment."
    },
    {
        question: "Do you develop e-commerce platforms?",
        answer: "Yes, we build high-performance, custom e-commerce stores that are optimized for high volume. We focus on checkout speed, secure payment integrations, and advanced inventory management systems."
    },
    {
        question: "How do you approach Custom Mobile development Website testing?",
        answer: "We use a 'Rigorous Validation Protocol' that includes automated unit testing, end-to-end testing on physical devices, and performance stress tests to ensure the application holds up under heavy load."
    },
    {
        question: "What is a 'Neural Chat' agent?",
        answer: "Neural Chat is an advanced AI service agent that goes beyond simple scripts. It uses a custom-trained vector database of your company’s knowledge to provide accurate, human-like support 24/7."
    },
    {
        question: "How can I get started with Wloper's services?",
        answer: "You can book a demo or a strategy session through our 'Get a Demo' button. We'll start with a technical audit of your current presence and then outline a roadmap for your digital dominance."
    },
    {
        question: "Where is Wloper located?",
        answer: "Our main engineering hub is located in Punjab, India, but we operate globally with nodes and team members serving clients across North America, Europe, and Asia."
    },
    {
        question: "Does Wloper work with startups?",
        answer: "Yes, we love working with ambitious startups. We help them build their 'V1' products with institutional-grade tech, ensuring they have the scalability needed to handle rapid growth and future funding rounds."
    },
    {
        question: "What is 'Conversion-First' architecture?",
        answer: "It means every design decision is based on one goal: getting the user to take action. From placement of CTA buttons to the speed of the checkout process, everything is engineered to maximize conversion rates."
    },
    {
        question: "Can you help with app store optimization (ASO)?",
        answer: "Yes, as part of our Digital Marketing Services, we optimize your mobile app’s visibility in the Apple App Store and Google Play Store through keyword optimization, premium visual assets, and review management."
    },
    {
        question: "What is the future of AI product development?",
        answer: "The future is 'Agentic'. We are moving from tools that assist humans to agents that can act on behalf of humans, autonomously handling complex workflows and making decisions within predefined parameters."
    },
    {
        question: "How do you ensure cross-browser compatibility?",
        answer: "We use modern CSS frameworks and polyfills to ensure that your website looks and functions perfectly on all modern browsers (Chrome, Safari, Firefox, Edge) and across all operating systems."
    },
    {
        question: "What is 'Technical Debt' and how do you avoid it?",
        answer: "Technical debt is the cost of choosing an easy, low-quality solution now that requires fixing later. We avoid it by using clean code practices, robust architecture patterns, and comprehensive documentation from day one."
    },
    {
        question: "Do you offer cloud migration services?",
        answer: "Yes, we help businesses move their legacy infrastructure to modern cloud providers like AWS, Azure, or Vercel, ensuring a smooth transition with zero downtime and improved performance."
    },
    {
        question: "How do you measure success in Digital Marketing Services?",
        answer: "We measure success through 'Hard Metrics': Lead volume, Customer Acquisition Cost (CAC), Conversion Rate, and overall Revenue Growth. We provide transparent, real-time dashboards so you always know your status."
    },
    {
        question: "Is my data safe with Wloper's custom websites?",
        answer: "We implement multiple layers of protection, including data encryption in transit and at rest, secure user authentication, and strict access controls. Your data security is our highest priority."
    },
    {
        question: "Why is Wloper a 'Next-Gen' engineering hub?",
        answer: "Because we don't just build websites; we build ecosystems. We integrate AI, Blockchain, and advanced Web Engineering into a single coherent strategy that gives our clients a definitive edge in the digital economy."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="bg-wl-dark text-white min-h-screen pb-32 pt-40 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Background Art */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-wl-accent/5 rounded-full blur-[100px] pointer-events-none -ml-40 -mb-40" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-wl-accent/10 border border-wl-accent/20 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6"
                        >
                            <HelpCircle className="w-4 h-4 text-wl-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-wl-accent">Support Protocol</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                        >
                            Knowledge <span className="text-wl-accent">Base</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/40 text-xl font-medium max-w-2xl mx-auto"
                        >
                            Everything you need to know about our engineering standards, AI products, and growth strategies.
                        </motion.p>
                    </div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative mb-16"
                    >
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-white/20" />
                        </div>
                        <input
                            type="text"
                            placeholder="Query the database..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-6 text-xl focus:outline-none focus:border-wl-accent/30 transition-all placeholder:text-white/10"
                        />
                    </motion.div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {filteredFaqs.map((faq, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                key={index}
                                className={`glass-strong rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-wl-accent/30 bg-wl-accent/5' : 'border-white/5 hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-wl-accent' : 'text-white/80 group-hover:text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-lg transition-all ${openIndex === index ? 'bg-wl-accent text-black rotate-180' : 'bg-white/5 text-white/40'}`}>
                                        {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div className="px-8 pb-8">
                                        <div className="h-px bg-white/5 mb-6" />
                                        <p className="text-white/50 leading-relaxed text-lg font-medium">
                                            {faq.answer}
                                        </p>
                                        <div className="mt-8 flex items-center gap-4">
                                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                                <Zap className="w-3 h-3 text-wl-accent" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Technical Insight</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredFaqs.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                <HelpCircle className="w-10 h-10 text-white/10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">No results found</h3>
                            <p className="text-white/30">Try searching for other keywords like "AI", "SEO", or "Mobile".</p>
                        </div>
                    )}

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-24 p-12 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent text-center"
                    >
                        <MessageSquare className="w-12 h-12 text-wl-accent mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
                        <p className="text-white/40 mb-10 max-w-sm mx-auto">Our engineering specialists are ready to discuss your unique technical requirements.</p>
                        <button className="bg-wl-accent hover:bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all">
                            Initialize Protocol
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
