import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About Wloper | India\'s Best IT Company — Website Development & AI Solutions',
    description: 'Wloper is India\'s leading IT company, headquartered in Mohali, Punjab. We specialise in website development (WordPress, Shopify, Next.js), mobile app development, SEO, Google Ads, Meta Ads, and AI-powered products including SkillytTalk — our AI interview screening platform.',
    keywords: [
        'About Wloper',
        'Wloper IT Company',
        'Best IT Company India',
        'Website Development Company Mohali',
        'AI Company India',
        'SkillytTalk',
        'AI Interview Platform',
        'Wloper Systems',
    ],
    openGraph: {
        title: 'About Wloper | India\'s Best IT Company',
        description: 'Wloper is India\'s leading IT company. Website development, mobile apps, SEO, Google Ads, Meta Ads, and AI products including SkillytTalk.',
        images: [{ url: '/images/envato-labs-ai-fccc6df9-0659-4f2e-9c05-9c652f034c3f.jpg', width: 1200, height: 630 }],
        type: 'profile',
    },
    alternates: { canonical: 'https://wloper.com/about-us' }
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        /* Breadcrumb */
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wloper.com" },
                                { "@type": "ListItem", "position": 2, "name": "About Wloper", "item": "https://wloper.com/about-us" }
                            ]
                        },
                        /* AboutPage schema — used by Google for KP */
                        {
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "@id": "https://wloper.com/about-us",
                            "url": "https://wloper.com/about-us",
                            "name": "About Wloper — India's Best IT Company",
                            "description": "Wloper is India's leading IT company headquartered in Mohali, Punjab, specialising in website development, mobile apps, SEO, Google Ads, Meta Ads, custom web development and AI solutions. Our flagship product SkillytTalk is an AI-powered interview and hiring platform.",
                            "isPartOf": { "@id": "https://wloper.com/#website" },
                            "about": { "@id": "https://wloper.com/#organization" },
                            "publisher": { "@id": "https://wloper.com/#organization" }
                        }
                    ])
                }}
            />
            <AboutClient />
        </>
    );
}
