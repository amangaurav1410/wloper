import { Metadata } from 'next';
import LandingClient from './LandingClient';

export const metadata: Metadata = {
    title: 'Best Website Development & SEO Company in India | Wloper',
    description: 'Looking for the best IT company in India? Wloper offers premium website development, SEO, and AI solutions for global brands. 200+ projects delivered. Get a free consultation today.',
    keywords: ['best it company india', 'top website development company', 'best seo services india', 'ai web development', 'custom software development'],
    robots: {
        index: false, // Usually for ad landing pages, we might want to keep them indexable or hidden from general search
        follow: true,
    },
    alternates: { canonical: 'https://wloper.com/best-it-company-india' }
};

export default function AdsLandingPage() {
    return <LandingClient />;
}
