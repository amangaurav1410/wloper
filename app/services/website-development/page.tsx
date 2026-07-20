import { Metadata } from 'next';
import WebsiteDevelopmentClient from './WebsiteDevelopmentClient';

export const metadata: Metadata = {
    title: 'Website Development Services | WordPress, Shopify, Next.js | Wloper',
    description: 'Professional website development services by Wloper — the best IT company. We build WordPress, Shopify, Next.js, Node.js, PHP, Python, Angular and .NET websites that drive real business results.',
    keywords: ['website development company', 'wordpress development', 'shopify development', 'nextjs development', 'custom website development', 'best website development company in India'],
    openGraph: {
        title: 'Website Development Services | Wloper — Best IT Company',
        description: 'Expert website development using WordPress, Shopify, Next.js, Node.js, PHP, Python, Angular & .NET. Tailored solutions for businesses of all sizes.',
    },
    alternates: { canonical: 'https://wloper.com/services/website-development' }
};

export default function WebsiteDevelopmentPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "Website Development", "item": "https://wloper.com/services/website-development" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Website Development Services",
                            "serviceType": "Web Development",
                            "provider": {
                                "@type": "Organization",
                                "name": "Wloper",
                                "url": "https://wloper.com"
                            },
                            "description": "Professional website development services by Wloper. We build WordPress, Shopify, Next.js, Node.js, PHP, Python, Angular and .NET websites.",
                            "url": "https://wloper.com/services/website-development",
                            "areaServed": ["India", "United States", "United Kingdom", "UAE"]
                        }
                    ])
                }}
            />
            <WebsiteDevelopmentClient />
        </>
    );
}
