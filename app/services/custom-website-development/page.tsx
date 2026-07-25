import { Metadata } from 'next';
import CustomWebDevClient from './CustomWebDevClient';

export const metadata: Metadata = {
    title: 'Custom Website Development | Bespoke Web Solutions | Wloper',
    description: 'Bespoke custom website development by Wloper — built from scratch to your exact specifications. Enterprise portals, SaaS platforms, booking systems, and complex web applications with scalable architecture.',
    keywords: ['custom website development', 'bespoke web development', 'custom web application', 'enterprise web development', 'web portal development India'],
    openGraph: {
        title: 'Custom Website Development | Enterprise Web Solutions — Wloper',
        description: 'Fully bespoke web development — no templates, no shortcuts. Built precisely to your business requirements with scalable, maintainable code.',
        url: 'https://wloper.com/services/custom-website-development',
    },
    alternates: { canonical: 'https://wloper.com/services/custom-website-development' }
};

export default function CustomWebDevPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "Custom Website Development", "item": "https://wloper.com/services/custom-website-development" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Custom Website Development",
                            "serviceType": "Web Development",
                            "provider": { "@type": "Organization", "name": "Wloper", "url": "https://wloper.com" },
                            "description": "Bespoke custom website development — enterprise portals, SaaS platforms, booking systems, and complex web applications built from scratch.",
                            "url": "https://wloper.com/services/custom-website-development",
                            "areaServed": ["India", "United States", "United Kingdom", "UAE"],
                            "offers": { "@type": "Offer", "url": "https://wloper.com/services/custom-website-development", "availability": "https://schema.org/InStock" }
                        }
                    ])
                }}
            />
            <CustomWebDevClient />
        </>
    );
}
