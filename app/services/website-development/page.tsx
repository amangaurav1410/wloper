import { Metadata } from 'next';
import WebsiteDevelopmentClient from './WebsiteDevelopmentClient';

export const metadata: Metadata = {
    title: 'Website Development Services | WordPress, Shopify, Next.js | Wloper',
    description: 'Professional website development services by Wloper — the best IT company. We build WordPress, Shopify, Next.js, Node.js, PHP, Python, Angular and .NET websites that drive real business results.',
    keywords: ['website development company', 'wordpress development', 'shopify development', 'nextjs development', 'custom website development', 'best website development company in India'],
    openGraph: {
        title: 'Website Development Services | Wloper — Best IT Company',
        description: 'Expert website development using WordPress, Shopify, Next.js, Node.js, PHP, Python, Angular & .NET. Tailored solutions for businesses of all sizes.',
    },
    alternates: { canonical: 'https://wloper.com/services/website-development' }
};

export default function WebsiteDevelopmentPage() {
    return <WebsiteDevelopmentClient />;
}
