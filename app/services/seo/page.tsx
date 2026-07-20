import { Metadata } from 'next';
import SEOPageClient from './SEOPageClient';

export const metadata: Metadata = {
    title: 'SEO Services | Search Engine Optimization Company | Wloper',
    description: 'Dominate Google search rankings with Wloper\'s expert SEO services. Technical SEO, on-page optimization, link building, and content strategy that drives organic traffic and real revenue.',
    keywords: ['SEO company India', 'best SEO services', 'technical SEO', 'search engine optimization', 'organic traffic', 'local SEO'],
    openGraph: {
        title: 'SEO Services | Best Digital Marketing Company — Wloper',
        description: 'Rank #1 on Google with proven SEO strategies. Technical SEO, content marketing, and link building that drives measurable organic growth.',
    },
    alternates: { canonical: 'https://wloper.com/services/seo' }
};

export default function SEOPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://wloper.com/services/seo" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "SEO Services",
                            "serviceType": "Search Engine Optimization",
                            "provider": {
                                "@type": "Organization",
                                "name": "Wloper",
                                "url": "https://wloper.com"
                            },
                            "description": "Dominate Google search rankings with Wloper's expert SEO services. Technical SEO, on-page optimization, link building, and content strategy that drives organic traffic and real revenue.",
                            "url": "https://wloper.com/services/seo",
                            "areaServed": ["India", "United States", "United Kingdom", "UAE"],
                            "offers": {
                                "@type": "Offer",
                                "url": "https://wloper.com/services/seo",
                                "availability": "https://schema.org/InStock"
                            }
                        }
                    ])
                }}
            />
            <SEOPageClient />
        </>
    );
}
