import { Metadata } from 'next';
import InterviewScreeningClient from './InterviewScreeningClient';

export const metadata: Metadata = {
    title: "AI Interview Screening Platform | SkillytTalk | Wloper",
    description: "Screen candidates 5x faster with Wloper's AI Interview Screening Platform (SkillytTalk). Automatically conduct first-round interviews and shortlist the best talent using advanced NLP and sentiment analysis.",
    keywords: ["AI interview screening platform", "automated recruitment software", "SkillytTalk", "AI candidate vetting", "automated first round interviews", "HR tech AI solutions"],
    alternates: { canonical: 'https://wloper.com/products/interview-screening' },
    openGraph: {
        title: "AI Interview Screening | Hire Smarter with SkillytTalk",
        description: "Reduce HR workload by 60% with autonomous candidate screening and intelligent ranking.",
        url: 'https://wloper.com/products/interview-screening',
        images: ['/images/envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg']
    }
};

export default function InterviewScreeningPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wloper.com" },
                                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://wloper.com/products" },
                                { "@type": "ListItem", "position": 3, "name": "Interview Screening", "item": "https://wloper.com/products/interview-screening" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "SkillytTalk AI Interview Screening Platform",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web",
                            "url": "https://wloper.com/products/interview-screening",
                            "description": "Screen candidates 5x faster with Wloper's AI Interview Screening Platform (SkillytTalk).",
                            "author": {
                                "@type": "Organization",
                                "name": "Wloper",
                                "url": "https://wloper.com"
                            }
                        }
                    ])
                }}
            />
            <InterviewScreeningClient />
        </>
    );
}
