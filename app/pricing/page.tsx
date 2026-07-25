import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
    title: 'Pricing | Transparent & Affordable IT Packages | Wloper',
    description: 'View Wloper\'s transparent pricing for website development, SEO, Google Ads, Meta Ads, mobile app development and AI solutions. Plans for every business size.',
    keywords: ['website development pricing', 'SEO pricing India', 'digital marketing packages', 'IT company pricing', 'Wloper plans'],
    alternates: { canonical: 'https://wloper.com/pricing' },
    openGraph: {
        title: 'Wloper Pricing — Transparent IT & Digital Marketing Packages',
        description: 'Affordable, transparent pricing for website development, SEO, ads, and AI solutions.',
        url: 'https://wloper.com/pricing',
    },
};

export default function PricingPage() {
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
                                { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://wloper.com/pricing" }
                            ]
                        }
                    ])
                }}
            />
            <PricingPageClient />
        </>
    );
}
