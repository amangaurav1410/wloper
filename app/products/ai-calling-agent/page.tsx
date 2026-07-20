import { Metadata } from 'next';
import AICallingAgentClient from './AICallingAgentClient';

export const metadata: Metadata = {
    title: "AI Calling Agent | Autonomous Voice Intelligence | Wloper",
    description: "Scale your outreach with Wloper's AI Calling Agent. Automated voice agents that call, qualify, and report in real-time. Ideal for marketing, research, and lead qualification.",
    keywords: ["AI calling agent", "autonomous voice intelligence", "automated lead qualification", "AI outbound calls", "voice AI for business", "SkillytTalk calling agent"],
    alternates: { canonical: 'https://wloper.com/products/ai-calling-agent' },
    openGraph: {
        title: "AI Calling Agent | Scale Your Outreach with Autonomous Voice AI",
        description: "Deploy intelligent voice agents that handle outbound calls and data synthesis with human-like precision.",
        url: 'https://wloper.com/products/ai-calling-agent',
        images: ['/images/envato-labs-ai-60bf7079-9412-429a-89f0-19949dc9ecc1.jpg']
    }
};

export default function AICallingAgentPage() {
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
                                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://wloper.com/products" },
                                { "@type": "ListItem", "position": 3, "name": "AI Calling Agent", "item": "https://wloper.com/products/ai-calling-agent" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "AI Calling Agent",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web",
                            "url": "https://wloper.com/products/ai-calling-agent",
                            "description": "Scale your outreach with Wloper's AI Calling Agent. Automated voice agents that call, qualify, and report in real-time.",
                            "author": {
                                "@type": "Organization",
                                "name": "Wloper",
                                "url": "https://wloper.com"
                            }
                        }
                    ])
                }}
            />
            <AICallingAgentClient />
        </>
    );
}
