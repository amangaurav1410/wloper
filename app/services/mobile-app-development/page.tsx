import { Metadata } from 'next';
import MobileAppDevelopmentClient from './MobileAppDevelopmentClient';

export const metadata: Metadata = {
    title: 'Mobile App Development Services | React Native & Flutter | Wloper',
    description: 'Expert mobile app development by Wloper using React Native and Flutter. We build high-performance iOS and Android apps for startups and enterprises across India and globally.',
    keywords: ['mobile app development', 'react native development', 'flutter app development', 'iOS app development India', 'Android app development company'],
    openGraph: {
        title: 'Mobile App Development Services | Wloper — Best IT Company',
        description: 'High-performance iOS and Android apps built with React Native and Flutter.',
        url: 'https://wloper.com/services/mobile-app-development',
    },
    alternates: { canonical: 'https://wloper.com/services/mobile-app-development' }
};

export default function MobileAppDevelopmentPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "Mobile App Development", "item": "https://wloper.com/services/mobile-app-development" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Mobile App Development Services",
                            "serviceType": "Mobile Application Development",
                            "provider": { "@type": "Organization", "name": "Wloper", "url": "https://wloper.com" },
                            "description": "High-performance iOS and Android mobile app development using React Native and Flutter.",
                            "url": "https://wloper.com/services/mobile-app-development",
                            "areaServed": ["India", "United States", "United Kingdom", "UAE"],
                            "offers": { "@type": "Offer", "url": "https://wloper.com/services/mobile-app-development", "availability": "https://schema.org/InStock" }
                        }
                    ])
                }}
            />
            <MobileAppDevelopmentClient />
        </>
    );
}
