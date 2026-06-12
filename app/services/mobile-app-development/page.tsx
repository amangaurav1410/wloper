import { Metadata } from 'next';
import MobileAppDevelopmentClient from './MobileAppDevelopmentClient';

export const metadata: Metadata = {
    title: 'Mobile App Development Services | React Native & Flutter | Wloper',
    description: 'Premier mobile app development company. We build high-performance, secure iOS and Android apps using React Native and Flutter with native performance.',
    keywords: ['mobile app development company', 'iOS app development', 'Android app development', 'React Native development', 'Flutter development agency', 'best app developers India'],
    openGraph: {
        title: 'Mobile App Development Services | Wloper — Best IT Company',
        description: 'Scalable iOS and Android mobile app engineering with React Native, Flutter, and embedded AI logic.',
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
                        }
                    ])
                }}
            />
            <MobileAppDevelopmentClient />
        </>
    );
}
