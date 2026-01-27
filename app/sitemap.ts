import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wloper.com'

    // Static routes
    const staticRoutes = [
        '',
        '/about-us',
        '/contact',
        '/services',
        '/services/ai-strategy',
        '/services/blockchain-solutions',
        '/services/digital-growth',
        '/services/software-engineering',
        '/services/distributed-systems',
        '/services/growth-protocol',
        '/services/mobile-app-development',
        '/products',
        '/products/interview-screening',
        '/products/hcm-system',
        '/products/neural-chat',
        '/blog',
        '/portfolio',
        '/pricing',
        '/industries',
        '/faq',
    ]

    const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`)

    const allRoutes = [...staticRoutes, ...blogRoutes]

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route.startsWith('/blog/') ? 'monthly' : 'weekly',
        priority: route === '' ? 1 : route.startsWith('/services/') || route.startsWith('/products/') ? 0.9 : 0.7,
    }))
}
