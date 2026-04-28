'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Target, TrendingUp, BarChart3, Search, Zap, ShieldCheck } from 'lucide-react';

export default function GoogleAdsPageClient() {
    return (
        <ServicePageTemplate
            badge="📈 Google Ads Management"
            headline="Maximum ROI from Every"
            headlineAccent="Google Ads Rupee"
            subtext="Our certified Google Ads specialists manage Search, Display, Shopping, YouTube and Performance Max campaigns that drive qualified leads and sales — not just clicks. Stop wasting budget on ads that don't convert."
            ctaText="Free Ad Account Audit"
            imageSrc="/images/envato-labs-ai-a4698812-b585-46ab-b841-f3ece58a93a5.jpg"
            imageAlt="Google Ads PPC Management Services"
            sectionLabel="⚡ Our Google Ads Services"
            features={[
                {
                    icon: Search,
                    title: 'Search Ads',
                    desc: 'Highly targeted keyword campaigns that put your business at the top of Google when potential customers are actively searching for your product or service.'
                },
                {
                    icon: Target,
                    title: 'Performance Max',
                    desc: 'AI-powered Performance Max campaigns across all Google channels — Search, Display, YouTube, Gmail and Maps — for maximum reach and conversions.'
                },
                {
                    icon: BarChart3,
                    title: 'Shopping Ads',
                    desc: 'Product listing ads for e-commerce businesses that showcase your products directly in search results — with optimized product feeds and smart bidding.'
                },
                {
                    icon: TrendingUp,
                    title: 'Remarketing Campaigns',
                    desc: 'Re-engage visitors who left your website without converting with strategic remarketing ads across Google Display Network and YouTube.'
                },
                {
                    icon: Zap,
                    title: 'Landing Page Optimization',
                    desc: 'Conversion-optimized landing pages designed to turn ad clicks into actual leads and sales — reducing your cost per acquisition significantly.'
                },
                {
                    icon: ShieldCheck,
                    title: 'Conversion Tracking',
                    desc: 'Precise conversion tracking setup with Google Tag Manager so you know exactly which keywords and ads are generating real business value.'
                }
            ]}
            stats={[
                { value: '3.5x', label: 'Average ROAS' },
                { value: '-40%', label: 'Cost Per Lead' },
                { value: '₹5Cr+', label: 'Ad Spend Managed' },
                { value: '98%', label: 'Client Satisfaction' },
            ]}
            benefits={[
                'Google Certified specialists',
                'No minimum ad spend',
                'Weekly performance reports',
                'Full account transparency',
                'Zero long-term contracts',
                'Negative keyword management',
                'A/B ad copy testing',
                'Dedicated account manager',
            ]}
            techStack={['Google Ads', 'Google Analytics 4', 'Google Tag Manager', 'Google Merchant Center', 'Google Keyword Planner', 'Data Studio', 'Looker Studio', 'Optmyzr']}
        />
    );
}
