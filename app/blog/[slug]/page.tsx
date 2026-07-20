import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import BlogPostClient from './BlogPostClient';

interface Props {
    params: { slug: string };
}

// Generate static params for all blog posts (enables static generation for SEO)
export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

// Generate unique metadata per blog post — THE key fix for search rankings
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find(p => p.slug === params.slug);
    if (!post) return { title: 'Post Not Found | Wloper Blog' };

    const description = post.excerpt.slice(0, 155);
    const imageUrl = post.image && !post.image.startsWith('/images/hero-bg') 
        ? post.image 
        : 'https://wloper.com/og-image.png';

    return {
        title: `${post.title} | Wloper Blog`,
        description,
        keywords: [post.category, 'Wloper', 'IT Company', 'AI Solutions', post.author],
        authors: [{ name: post.author }],
        alternates: {
            canonical: `https://wloper.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description,
            url: `https://wloper.com/blog/${post.slug}`,
            siteName: 'Wloper',
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description,
            images: [imageUrl],
        },
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find(p => p.slug === params.slug);
    if (!post) notFound();

    return (
        <>
            {/* Schema.org Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.excerpt,
                            "image": post.image || "https://wloper.com/og-image.png",
                            "datePublished": new Date(post.date).toISOString(),
                            "dateModified": new Date().toISOString(),
                            "author": {
                                "@type": "Person",
                                "name": post.author,
                                "url": "https://wloper.com/about-us"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Wloper",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wloper.com/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png"
                                }
                            },
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://wloper.com/blog/${post.slug}`
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wloper.com" },
                                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://wloper.com/blog" },
                                { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://wloper.com/blog/${post.slug}` }
                            ]
                        }
                    ])
                }}
            />
            <BlogPostClient slug={params.slug} />
        </>
    );
}
