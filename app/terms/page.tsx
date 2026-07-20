import type { Metadata } from 'next';
import TermsPageClient from './TermsPageClient';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Wloper',
    description: 'Read Wloper\'s terms and conditions governing the use of our website and services.',
    alternates: { canonical: 'https://wloper.com/terms' },
    robots: { index: true, follow: true },
};

export default function TermsPage() {
    return <TermsPageClient />;
}
