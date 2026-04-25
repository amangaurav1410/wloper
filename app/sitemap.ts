import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wloper.com'
    const now = new Date()

    return [
        // Core Pages
        { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
        { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

        // Services — Main
        { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },

        // Services — New Pages (high priority for SEO)
        { url: `${baseUrl}/services/website-development`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
        { url: `${baseUrl}/services/seo`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/google-ads`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/meta-ads`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/custom-website-development`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

        // Services — Existing Pages
        { url: `${baseUrl}/services/mobile-app-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/ai-integration`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/ai-strategy`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/blockchain-solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/digital-growth`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/services/software-engineering`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    ]
}
