import { Metadata } from 'next';
import MetaAdsPageClient from './MetaAdsPageClient';

export const metadata: Metadata = {
    title: 'Meta Ads Management | Facebook & Instagram Advertising | Wloper',
    description: 'Scale your business with expert Meta Ads management by Wloper. Facebook and Instagram advertising campaigns designed to maximise ROAS, reduce CPL, and grow your brand across social media.',
    keywords: ['meta ads agency', 'facebook ads management', 'instagram advertising', 'social media ads India', 'ROAS optimization', 'facebook marketing company'],
    openGraph: {
        title: 'Meta Ads Management | Facebook & Instagram Ads — Wloper',
        description: 'Facebook & Instagram ad campaigns that convert. Expert Meta Ads management for e-commerce, lead generation, and brand awareness.',
    },
    alternates: { canonical: 'https://wloper.com/services/meta-ads' }
};

export default function MetaAdsPage() {
    return <MetaAdsPageClient />;
}
