import { Metadata } from 'next';
import DigitalGrowthClient from './DigitalGrowthClient';

export const metadata: Metadata = {
    title: 'Digital Marketing & Growth Services | SEO & Ad Campaigns | Wloper',
    description: 'Accelerate your business revenue with Wloper\'s digital marketing and SEO services. Data-driven growth campaigns across search engines, social channels, and CRO architectures.',
    keywords: ['digital marketing services', 'SEO and growth agency', 'conversion rate optimization India', 'Google Ads management', 'revenue acceleration consulting'],
    openGraph: {
        title: 'Digital Marketing & Growth Services | Wloper — Best IT Company',
        description: 'Revenue acceleration through technical SEO, performance advertising, and behavior-driven conversion optimization.',
    },
    alternates: { canonical: 'https://wloper.com/services/digital-growth' }
};

export default function DigitalGrowthPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "Digital Growth", "item": "https://wloper.com/services/digital-growth" }
                            ]
                        }
                    ])
                }}
            />
            <DigitalGrowthClient />
        </>
    );
}
