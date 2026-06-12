import { Metadata } from 'next';
import AIIntegrationClient from './AIIntegrationClient';

export const metadata: Metadata = {
    title: 'AI Integration Services | Custom AI & Machine Learning Solutions | Wloper',
    description: 'Specialized AI integration services by Wloper. Embed cutting-edge AI, machine learning models, and custom data middleware layers directly into your enterprise infrastructure.',
    keywords: ['AI integration services', 'machine learning solutions', 'custom AI development', 'enterprise AI solutions', 'Llama fine-tuning', 'GPT-4 integration India'],
    openGraph: {
        title: 'AI Integration Services | Wloper — Best IT Company',
        description: 'Secure, high-performance enterprise AI integration. Bridge legacy databases with neural models.',
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
                        }
                    ])
                }}
            />
            <AIIntegrationClient />
        </>
    );
}
