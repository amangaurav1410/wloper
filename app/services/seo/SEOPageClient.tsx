'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Search, FileText, Link2, BarChart3, Map, Zap } from 'lucide-react';

export default function SEOPageClient() {
    return (
        <ServicePageTemplate
            badge="🔍 SEO Services"
            headline="Rank #1 on Google with"
            headlineAccent="Expert SEO Services"
            subtext="Wloper's SEO specialists use proven strategies — technical SEO, content marketing, and authoritative link building — to grow your organic traffic and crush your competition on search engines."
            ctaText="Free SEO Audit + 10 Quick Wins"
            imageSrc="/images/envato-labs-ai-fccc6df9-0659-4f2e-9c05-9c652f034c3f.jpg"
            imageAlt="SEO Services - Search Engine Optimization"
            sectionLabel="🎯 Our SEO Services"
            features={[
                {
                    icon: Zap,
                    title: 'Technical SEO',
                    desc: 'Site speed optimization, Core Web Vitals, XML sitemaps, schema markup, crawl error fixes and mobile-first indexing — we fix everything Google cares about under the hood.'
                },
                {
                    icon: FileText,
                    title: 'On-Page SEO & Content',
                    desc: 'Keyword research, title tags, meta descriptions, heading optimization, internal linking and E-E-A-T content strategy that ranks and converts.'
                },
                {
                    icon: Link2,
                    title: 'Link Building',
                    desc: 'High-authority backlink acquisition through guest posting, digital PR, and niche edits — building domain authority that stands the test of algorithm updates.'
                },
                {
                    icon: Map,
                    title: 'Local SEO',
                    desc: 'Google Business Profile optimization, local citations, and geo-targeted content to dominate "near me" searches in your city and region.'
                },
                {
                    icon: BarChart3,
                    title: 'SEO Analytics & Reporting',
                    desc: 'Monthly transparent reports with keyword rankings, traffic data, conversion tracking and actionable insights — you always know where your money is going.'
                },
                {
                    icon: Search,
                    title: 'Competitor SEO Analysis',
                    desc: 'Deep analysis of your top competitors — what keywords they rank for, what links they have, and exactly how to outrank them.'
                }
            ]}
            stats={[
                { value: '3x', label: 'Avg Traffic Growth' },
                { value: '95%', label: 'Client Retention' },
                { value: '150+', label: 'Keywords Ranked' },
                { value: '6 Mo', label: 'Avg to Page 1' },
            ]}
            benefits={[
                'Free website SEO audit',
                'Dedicated SEO specialist',
                'White-hat techniques only',
                'Monthly ranking reports',
                'No long-term lock-in',
                'Google algorithm compliant',
                'Local & national SEO',
                'ROI-focused strategy',
            ]}
            techStack={['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'PageSpeed Insights', 'Schema.org', 'Google Analytics 4', 'Surfer SEO']}
        />
    );
}
