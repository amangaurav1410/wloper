import type { Metadata } from 'next';
import PrivacyPageClient from './PrivacyPageClient';

export const metadata: Metadata = {
    title: 'Privacy Policy | Wloper',
    description: 'Read Wloper\'s privacy policy to understand how we collect, use and protect your personal data across our website and services.',
    alternates: { canonical: 'https://wloper.com/privacy' },
    robots: { index: true, follow: true },
};

export default function PrivacyPage() {
    return <PrivacyPageClient />;
}
