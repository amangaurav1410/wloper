import { blogPosts } from '@/data/blogPosts';

export async function GET() {
    const siteUrl = 'https://wloper.com';

    // Sort posts by date, descending (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const items = sortedPosts.map((post) => {
        const url = `${siteUrl}/blog/${post.slug}`;
        const pubDate = new Date(post.date).toUTCString();

        // Use post image or a default one
        const imageUrl = post.image
            ? (post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`)
            : `${siteUrl}/og-image.png`;

        return `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${url}</link>
            <guid isPermaLink="true">${url}</guid>
            <pubDate>${pubDate}</pubDate>
            <category><![CDATA[${post.category}]]></category>
            <description><![CDATA[${post.excerpt}]]></description>
            <enclosure url="${imageUrl}" length="0" type="image/jpeg" />
        </item>`;
    }).join('');

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Wloper Blog | AI &amp; Web Engineering Insights</title>
    <link>${siteUrl}/blog</link>
    <description>Technical breakdowns and strategic insights from the frontier of AI and Web Engineering.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
</channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
    });
}
