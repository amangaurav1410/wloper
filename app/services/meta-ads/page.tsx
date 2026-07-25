import { Metadata } from 'next';
import MetaAdsPageClient from './MetaAdsPageClient';

export const metadata: Metadata = {
    title: 'Meta Ads Management | Facebook & Instagram Advertising | Wloper',
    description: 'Scale your business with expert Meta Ads management by Wloper. Facebook and Instagram advertising campaigns designed to maximise ROAS, reduce CPL, and grow your brand across social media.',
    keywords: ['meta ads agency', 'facebook ads management', 'instagram advertising', 'social media ads India', 'ROAS optimization', 'facebook marketing company'],
    openGraph: {
        title: 'Meta Ads Management | Facebook & Instagram Ads — Wloper',
        description: 'Facebook & Instagram ad campaigns that convert. Expert Meta Ads management for e-commerce, lead generation, and brand awareness.',
        url: 'https://wloper.com/services/meta-ads',
    },
    alternates: { canonical: 'https://wloper.com/services/meta-ads' }
};

export default function MetaAdsPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "Meta Ads", "item": "https://wloper.com/services/meta-ads" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Meta Ads Management",
                            "serviceType": "Social Media Advertising",
                            "provider": { "@type": "Organization", "name": "Wloper", "url": "https://wloper.com" },
                            "description": "Facebook and Instagram advertising campaigns designed to maximise ROAS, reduce CPL, and grow your brand across social media.",
                            "url": "https://wloper.com/services/meta-ads",
                            "areaServed": ["India", "United States", "United Kingdom", "UAE"],
                            "offers": { "@type": "Offer", "url": "https://wloper.com/services/meta-ads", "availability": "https://schema.org/InStock" }
                        }
                    ])
                }}
            />
            <MetaAdsPageClient />
        </>
    );
}
