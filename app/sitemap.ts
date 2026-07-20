import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wloper.com'
    const now = new Date()

    // 1. Core Pages
    const corePages = [
        { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
        { url: `${baseUrl}/hire-ai-employee`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ]

    // 2. Main Services
    const servicePages = [
        { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
        { url: `${baseUrl}/services/website-development`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
        { url: `${baseUrl}/services/seo`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/google-ads`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/meta-ads`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/custom-website-development`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/mobile-app-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/ai-integration`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/ai-strategy`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/blockchain-solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/digital-growth`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/software-engineering`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    ]

    // 3. Product Sub-pages
    const productPages = [
        { url: `${baseUrl}/products/ai-calling-agent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/products/ai-chatbot`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/products/hcm-system`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/products/interview-screening`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ]

    // 4. Dedicated Ad Landing Pages
    const landingPages = [
        { url: `${baseUrl}/best-it-company-india`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ]

    // 5. Dynamic Blog Posts
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [
        ...corePages,
        ...servicePages,
        ...productPages,
        ...landingPages,
        ...blogPages,
    ] as MetadataRoute.Sitemap
}
