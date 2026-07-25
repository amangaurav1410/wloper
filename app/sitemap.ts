import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wloper.com'

    // 1. Core Pages
    const corePages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date('2025-06-01'), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/about-us`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/contact`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/products`, lastModified: new Date('2025-06-01'), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/pricing`, lastModified: new Date('2025-06-01'), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/blog`, lastModified: new Date('2025-07-01'), changeFrequency: 'daily', priority: 0.8 },
        { url: `${baseUrl}/hire-ai-employee`, lastModified: new Date('2025-07-01'), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/faq`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/industries`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/portfolio`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/privacy`, lastModified: new Date('2025-01-01'), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: new Date('2025-01-01'), changeFrequency: 'yearly', priority: 0.3 },
    ]

    // 2. Main Services
    const servicePages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/services`, lastModified: new Date('2025-06-01'), changeFrequency: 'weekly', priority: 0.95 },
        { url: `${baseUrl}/services/website-development`, lastModified: new Date('2025-06-01'), changeFrequency: 'weekly', priority: 0.95 },
        { url: `${baseUrl}/services/seo`, lastModified: new Date('2025-06-01'), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/google-ads`, lastModified: new Date('2025-06-01'), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/meta-ads`, lastModified: new Date('2025-06-01'), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/custom-website-development`, lastModified: new Date('2025-06-01'), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/mobile-app-development`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/ai-integration`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/ai-strategy`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/blockchain-solutions`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/digital-growth`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/software-engineering`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.85 },
    ]

    // 3. Product Sub-pages
    const productPages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/products/ai-calling-agent`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/products/ai-chatbot`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/products/hcm-system`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/products/interview-screening`, lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    ]

    // 4. Dynamic Blog Posts
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date('2025-07-01'),
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    return [
        ...corePages,
        ...servicePages,
        ...productPages,
        ...blogPages,
    ]
}
