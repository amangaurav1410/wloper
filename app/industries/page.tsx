import type { Metadata } from 'next';
import IndustriesPageClient from './IndustriesPageClient';

export const metadata: Metadata = {
    title: 'Industries We Serve | Healthcare, Retail, Finance & More | Wloper',
    description: 'Wloper delivers specialised IT solutions for healthcare, retail, finance, education, real estate and more. Discover how we serve your industry.',
    keywords: ['IT company for healthcare', 'retail website development', 'fintech solutions', 'education technology', 'industry-specific digital solutions'],
    alternates: { canonical: 'https://wloper.com/industries' },
    openGraph: {
        title: 'Industries We Serve — Wloper',
        description: 'Specialised website development, AI, and digital marketing solutions for healthcare, retail, finance, and more.',
        url: 'https://wloper.com/industries',
    },
};

export default function IndustriesPage() {
    return <IndustriesPageClient />;
}
