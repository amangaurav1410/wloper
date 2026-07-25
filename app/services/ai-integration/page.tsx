import { Metadata } from 'next';
import AIIntegrationClient from './AIIntegrationClient';

export const metadata: Metadata = {
    title: 'AI Integration Services | Custom AI & Machine Learning Solutions | Wloper',
    description: 'Embed intelligent AI directly into your business with Wloper\'s AI integration services. We deploy LLMs, build autonomous agents, and integrate machine learning into your existing workflows.',
    keywords: ['AI integration services', 'LLM integration', 'machine learning solutions', 'AI workflow automation', 'autonomous AI agents', 'custom AI development India'],
    openGraph: {
        title: 'AI Integration Services | Wloper — Best IT Company',
        description: 'Deploy LLMs, autonomous agents, and custom ML models directly into your business workflows.',
        url: 'https://wloper.com/services/ai-integration',
    },
    alternates: { canonical: 'https://wloper.com/services/ai-integration' }
};

export default function AIIntegrationPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "AI Integration", "item": "https://wloper.com/services/ai-integration" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "AI Integration Services",
                            "serviceType": "Artificial Intelligence & Machine Learning",
                            "provider": { "@type": "Organization", "name": "Wloper", "url": "https://wloper.com" },
                            "description": "Embed intelligent AI directly into your business — LLMs, autonomous agents, and ML models integrated into your existing workflows.",
                            "url": "https://wloper.com/services/ai-integration",
                            "areaServed": ["India", "United States", "United Kingdom", "UAE"],
                            "offers": { "@type": "Offer", "url": "https://wloper.com/services/ai-integration", "availability": "https://schema.org/InStock" }
                        }
                    ])
                }}
            />
            <AIIntegrationClient />
        </>
    );
}
