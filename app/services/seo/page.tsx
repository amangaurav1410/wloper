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
    return <SEOPageClient />;
}
