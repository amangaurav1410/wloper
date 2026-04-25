'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Share2, Target, TrendingUp, BarChart3, Users, Zap } from 'lucide-react';

export default function MetaAdsPageClient() {
    return (
        <ServicePageTemplate
            badge="📱 Meta Ads Management"
            headline="Grow Your Business with"
            headlineAccent="Facebook & Instagram Ads"
            subtext="Wloper's Meta Ads experts create data-driven Facebook and Instagram campaigns that reach your ideal customers, build brand awareness, and drive real conversions — at the lowest possible cost per result."
            ctaText="Get Free Meta Ads Audit"
            imageSrc="/images/envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg"
            imageAlt="Meta Ads Facebook Instagram Advertising Services"
            sectionLabel="📊 Our Meta Ads Services"
            features={[
                {
                    icon: Target,
                    title: 'Audience Targeting',
                    desc: 'Advanced audience targeting using custom audiences, lookalike audiences and detailed demographic, interest and behavior targeting to reach people most likely to buy.'
                },
                {
                    icon: Share2,
                    title: 'Facebook & Instagram Ads',
                    desc: 'Full-funnel ad campaigns across Facebook and Instagram — from awareness to consideration to conversion — using the right ad format at every stage.'
                },
                {
                    icon: TrendingUp,
                    title: 'Lead Generation Ads',
                    desc: 'Meta Lead Ads with instant forms that capture qualified leads directly within Facebook and Instagram — reducing friction and lowering CPL significantly.'
                },
                {
                    icon: Users,
                    title: 'Retargeting Campaigns',
                    desc: 'Powerful retargeting using Meta Pixel data — re-engage website visitors, video viewers and past customers with personalised ads that bring them back to convert.'
                },
                {
                    icon: BarChart3,
                    title: 'E-commerce Catalog Ads',
                    desc: 'Dynamic product catalog ads for Shopify, WooCommerce and other e-commerce platforms — automatically showing the right products to the right audience.'
                },
                {
                    icon: Zap,
                    title: 'Creative Strategy & Ad Copy',
                    desc: 'Scroll-stopping ad creatives, compelling video ads, and high-converting copy written by our specialists — because great targeting alone is not enough.'
                }
            ]}
            stats={[
                { value: '4x', label: 'Average ROAS' },
                { value: '-35%', label: 'Cost Per Lead' },
                { value: '2M+', label: 'Reach Per Month' },
                { value: '100+', label: 'Campaigns Run' },
            ]}
            benefits={[
                'Meta Blueprint certified team',
                'Creative + strategy in one',
                'Weekly performance reports',
                'Full ad account access',
                'No long-term contracts',
                'A/B testing every ad',
                'Pixel & CAPI setup',
                'Dedicated account manager',
            ]}
            techStack={['Meta Business Suite', 'Meta Ads Manager', 'Facebook Pixel', 'Conversions API', 'Meta Catalog Manager', 'Canva Pro', 'Adobe Premiere', 'Google Analytics 4']}
        />
    );
}
