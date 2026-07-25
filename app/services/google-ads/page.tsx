import { Metadata } from 'next';
import GoogleAdsPageClient from './GoogleAdsPageClient';

export const metadata: Metadata = {
    title: 'Google Ads Management Services | PPC Agency | Wloper',
    description: 'Maximize your ROI with expert Google Ads management by Wloper. Certified PPC specialists managing Search, Display, Shopping, and Performance Max campaigns for businesses in India and globally.',
    keywords: ['google ads management', 'PPC agency India', 'google ads company', 'search ads', 'performance max', 'adwords management'],
    openGraph: {
        title: 'Google Ads Management | PPC Agency — Wloper',
        description: 'Expert Google Ads PPC management. Search, Display, Shopping & Performance Max campaigns that drive real conversions at the lowest cost.',
        url: 'https://wloper.com/services/google-ads',
    },
    alternates: { canonical: 'https://wloper.com/services/google-ads' }
};

export default function GoogleAdsPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://wloper.com/services/google-ads" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Google Ads Management Services",
                            "serviceType": "Pay-Per-Click Advertising",
                            "provider": { "@type": "Organization", "name": "Wloper", "url": "https://wloper.com" },
                            "description": "Certified PPC specialists managing Search, Display, Shopping, and Performance Max campaigns for businesses in India and globally.",
                            "url": "https://wloper.com/services/google-ads",
                            "areaServed": ["India", "United States", "United Kingdom", "UAE"],
                            "offers": { "@type": "Offer", "url": "https://wloper.com/services/google-ads", "availability": "https://schema.org/InStock" }
                        }
                    ])
                }}
            />
            <GoogleAdsPageClient />
        </>
    );
}
