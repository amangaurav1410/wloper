import type { Metadata } from 'next';
import BlogListClient from './BlogListClient';

export const metadata: Metadata = {
    title: 'Blog | AI, Blockchain, Web Development Insights | Wloper',
    description: 'Explore expert articles on AI, blockchain, website development, SEO, digital marketing, and more. Stay ahead with Wloper\'s knowledge hub.',
    keywords: ['AI blog', 'website development blog', 'SEO tips', 'blockchain articles', 'digital marketing insights', 'Wloper blog'],
    alternates: { canonical: 'https://wloper.com/blog' },
    openGraph: {
        title: 'Wloper Blog — AI, Web Development & Digital Growth Insights',
        description: 'Expert articles on AI, blockchain, website development, SEO and digital marketing from India\'s best IT company.',
        url: 'https://wloper.com/blog',
        type: 'website',
    },
};

export default function BlogPage() {
    return <BlogListClient />;
}
