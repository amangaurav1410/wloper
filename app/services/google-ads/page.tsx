import { Metadata } from 'next';
import GoogleAdsPageClient from './GoogleAdsPageClient';

export const metadata: Metadata = {
    title: 'Google Ads Management Services | PPC Agency | Wloper',
    description: 'Maximize your ROI with expert Google Ads management by Wloper. Certified PPC specialists managing Search, Display, Shopping, and Performance Max campaigns for businesses in India and globally.',
    keywords: ['google ads management', 'PPC agency India', 'google ads company', 'search ads', 'performance max', 'adwords management'],
    openGraph: {
        title: 'Google Ads Management | PPC Agency — Wloper',
        description: 'Expert Google Ads PPC management. Search, Display, Shopping & Performance Max campaigns that drive real conversions at the lowest cost.',
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
                        }
                    ])
                }}
            />
            <GoogleAdsPageClient />
        </>
    );
}
