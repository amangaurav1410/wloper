import { Metadata } from 'next';
import AIStrategyClient from './AIStrategyClient';

export const metadata: Metadata = {
    title: 'AI Strategy & Consulting | Enterprise AI Transformation | Wloper',
    description: 'Elite AI consulting services by Wloper. We audit workflows, design custom model fine-tuning roadmaps, and engineer deployment strategies that drive real enterprise ROI.',
    keywords: ['AI strategy consulting', 'artificial intelligence roadmap', 'enterprise AI transition', 'predictive modeling services', 'neural roadmap architect', 'AI business consultants'],
    openGraph: {
        title: 'AI Strategy & Consulting | Wloper — Best IT Company',
        description: 'Elite AI consulting and architectural blueprints for integrating LLMs and autonomous agents into enterprise workflows.',
    },
    alternates: { canonical: 'https://wloper.com/services/ai-strategy' }
};

export default function AIStrategyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wloper.com" },
                                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://wloper.com/services" },
                                { "@type": "ListItem", "position": 3, "name": "AI Strategy & Consulting", "item": "https://wloper.com/services/ai-strategy" }
                            ]
                        }
                    ])
                }}
            />
            <AIStrategyClient />
        </>
    );
}
