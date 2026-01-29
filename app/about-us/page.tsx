import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "About Wloper | Best IT Company & Tech Experts",
    description: "Wloper is the best IT company for innovative web solutions. As a leading AI based web development company, we specialize in high-growth technology and digital marketing services for enterprises.",
    keywords: ["Best IT Company", "AI tech experts", "website development leaders", "digital marketing powerhouse", "tech company for website development"],
    openGraph: {
        title: "About Wloper | Best IT Company & Future Protocols",
        description: "Specialized production hub where the best IT company expertise meets autonomous artificial intelligence.",
        images: [{ url: '/images/envato-labs-ai-fccc6df9-0659-4f2e-9c05-9c652f034c3f.jpg' }]
    }
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://wloper.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "About Us",
                                "item": "https://wloper.com/about-us"
                            }
                        ]
                    })
                }}
            />
            <AboutClient />
        </>
    );
}
