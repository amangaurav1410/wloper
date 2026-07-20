import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
    title: 'Portfolio | Our Work & Case Studies | Wloper',
    description: 'Explore Wloper\'s portfolio of successful projects — websites, mobile apps, AI solutions, and digital marketing campaigns for clients across India and globally.',
    keywords: ['website development portfolio', 'IT company portfolio', 'web design work', 'app development projects', 'Wloper case studies'],
    alternates: { canonical: 'https://wloper.com/portfolio' },
    openGraph: {
        title: 'Wloper Portfolio — Website, App & AI Projects',
        description: 'See our work: websites, mobile apps, AI tools and digital marketing campaigns built for clients worldwide.',
        url: 'https://wloper.com/portfolio',
        type: 'website',
    },
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
