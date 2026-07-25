import type { Metadata } from 'next';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
    title: 'FAQ | Frequently Asked Questions | Wloper',
    description: 'Get answers to common questions about Wloper\'s website development, SEO, Google Ads, Meta Ads, AI solutions and digital marketing services.',
    keywords: ['website development FAQ', 'IT company questions', 'digital marketing FAQ', 'Wloper help'],
    alternates: { canonical: 'https://wloper.com/faq' },
    openGraph: {
        title: 'FAQ — Wloper Website Development & Digital Marketing Questions',
        description: 'Find answers to your questions about our website development, SEO, Ads and AI services.',
        url: 'https://wloper.com/faq',
    },
};

export default function FAQPage() {
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
                                { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://wloper.com/faq" }
                            ]
                        }
                    ])
                }}
            />
            <FAQPageClient />
        </>
    );
}
