import { Metadata } from 'next';
import CustomWebDevClient from './CustomWebDevClient';

export const metadata: Metadata = {
    title: 'Custom Website Development | Bespoke Web Solutions | Wloper',
    description: 'Bespoke custom website development by Wloper — built from scratch to your exact specifications. Enterprise portals, SaaS platforms, booking systems, and complex web applications with scalable architecture.',
    keywords: ['custom website development', 'bespoke web development', 'custom web application', 'enterprise web development', 'web portal development India'],
    openGraph: {
        title: 'Custom Website Development | Enterprise Web Solutions — Wloper',
        description: 'Fully bespoke web development — no templates, no shortcuts. Built precisely to your business requirements with scalable, maintainable code.',
    },
    alternates: { canonical: 'https://wloper.com/services/custom-website-development' }
};

export default function CustomWebDevPage() {
    return <CustomWebDevClient />;
}
