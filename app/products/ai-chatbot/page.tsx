import { Metadata } from 'next';
import AIChatbotClient from './AIChatbotClient';

export const metadata: Metadata = {
    title: "Custom AI Chatbot Development | WhatsApp & Web Automation | Wloper",
    description: "Automate your customer support and lead generation with Wloper's Custom AI Chatbots. Integrated with WhatsApp and your website to provide 24/7 intelligent responses.",
    keywords: ["custom AI chatbot", "WhatsApp AI automation", "web chatbot development", "AI lead generation bot", "automated customer support", "business AI chatbot"],
    alternates: { canonical: 'https://wloper.com/products/ai-chatbot' },
    openGraph: {
        title: "Custom AI Chatbots | Never Miss a Lead with 24/7 Automation",
        description: "Deploy intelligent conversational agents that qualify leads and book appointments autonomously.",
        url: 'https://wloper.com/products/ai-chatbot',
        images: ['/images/envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg']
    }
};

export default function AIChatbotPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "AI Chatbot", "item": "https://wloper.com/products/ai-chatbot" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Custom AI Chatbots",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web",
                            "url": "https://wloper.com/products/ai-chatbot",
                            "description": "Automate customer support and lead generation with Wloper's Custom AI Chatbots.",
                            "author": {
                                "@type": "Organization",
                                "name": "Wloper",
                                "url": "https://wloper.com"
                            }
                        }
                    ])
                }}
            />
            <AIChatbotClient />
        </>
    );
}
