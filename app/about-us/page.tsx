import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "About Wloper | A Leading Website Development company & AI Hub",
    description: "Wloper is an elite engineering DNA hub specializing in Custom Mobile development Websites and high-impact AI products. We architect the future of intelligent systems.",
    keywords: ["Wloper mission", "engineering team", "technical excellence", "AI innovation hub", "custom build protocols"],
    openGraph: {
        title: "About Wloper | Engineering DNA & Future Protocols",
        description: "Specialized production hub where elite engineering meets autonomous artificial intelligence.",
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
