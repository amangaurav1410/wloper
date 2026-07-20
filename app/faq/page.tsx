import type { Metadata } from 'next';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
    title: 'FAQ | Frequently Asked Questions | Wloper',
    description: 'Get answers to common questions about Wloper\'s website development, SEO, Google Ads, Meta Ads, AI solutions and digital marketing services.',
    keywords: ['website development FAQ', 'IT company questions', 'digital marketing FAQ', 'Wloper help'],
    alternates: { canonical: 'https://wloper.com/faq' },
    openGraph: {
        title: 'FAQ — Wloper Website Development & Digital Marketing Questions',
        description: 'Find answers to your questions about our website development, SEO, Ads and AI services.',
        url: 'https://wloper.com/faq',
    },
};

export default function FAQPage() {
    return <FAQPageClient />;
}
