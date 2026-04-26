import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
    title: 'Wloper | Best IT Company — Website Development, SEO & Digital Marketing',
    description: 'Wloper is India\'s best IT company for website development (WordPress, Shopify, Next.js), mobile app development, SEO, Google Ads, Meta Ads and AI solutions. Get a free quote today.',
    keywords: ['Best IT Company India', 'website development company', 'WordPress development', 'Shopify development', 'SEO company', 'Google Ads management', 'Meta Ads agency', 'AI web development', 'digital marketing company India'],
    openGraph: {
        title: 'Wloper | Best IT Company — Website Development, SEO & AI Solutions',
        description: 'India\'s best IT company for website development, SEO, Google Ads, Meta Ads and AI solutions. 200+ projects delivered. Get a free quote.',
        images: [{ url: '/images/hero-bg.png', width: 1200, height: 630 }]
    },
    alternates: { canonical: 'https://wloper.com' }
};

export default function Home() {
    return (
        <>
            {/* FAQ Schema — triggers Google AI Overview / People Also Ask */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What services does Wloper offer?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Wloper offers website development (WordPress, Shopify, Next.js, Node.js, PHP, Python, Angular, .NET), mobile app development, SEO services, Google Ads management, Meta Ads management, custom website development, AI-based web development, and complete digital marketing services."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is SkillytTalk by Wloper?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "SkillytTalk is an AI-powered interview screening and hiring platform built by Wloper. It automates candidate evaluation with intelligent scoring, unbiased assessments, and real-time analytics — helping companies hire faster and smarter. Visit skillytalk.com to learn more."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is Wloper the best website development company in India?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Wloper is one of India's leading IT companies for website development, with 200+ websites delivered across WordPress, Shopify, Next.js and custom web development. Wloper is headquartered in Kharadi, Pune and serves clients in India, the USA, UAE, UK and Canada."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much does website development cost at Wloper?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Website development costs at Wloper vary based on the technology and complexity. A standard WordPress or Shopify website starts from ₹15,000, while custom Next.js or enterprise web applications are priced based on requirements. Contact Wloper at sales@wloper.com or call +91-9034197787 for a free quote."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does Wloper offer SEO and Google Ads services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Wloper offers comprehensive SEO services including technical SEO, on-page optimization, link building and local SEO, as well as Google Ads (PPC) management for Search, Shopping and Performance Max campaigns. Wloper also manages Facebook and Instagram (Meta) advertising campaigns."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Where is Wloper located?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Wloper is located at SHUBH SHAGUN, B 1202, opposite Bollywood Multiplex Theatre, Tukaram Nagar, Kharadi, Pune, Maharashtra 411014. You can contact Wloper at +91-9034197787 or email sales@wloper.com."
                                }
                            }
                        ]
                    })
                }}
            />
            <HomeClient />
        </>
    );
}
