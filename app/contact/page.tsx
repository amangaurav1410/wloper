import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact Wloper | Get a Free Website Development & SEO Quote',
    description: 'Contact Wloper — India\'s best IT company in Kharadi, Pune. Get a free quote for website development, SEO, Google Ads, Meta Ads and mobile app development. Call +91-9034197787 or email sales@wloper.com.',
    keywords: ['contact Wloper', 'website development quote', 'free SEO audit', 'IT company Pune', 'digital marketing consultation India'],
    openGraph: {
        title: 'Contact Wloper | Free Quote for Website Development & Digital Marketing',
        description: 'Get a free quote from Wloper. Website development, SEO, Google Ads, Meta Ads & AI solutions. Call +91-9034197787.',
        images: [{ url: '/images/envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg', width: 1200, height: 630 }]
    },
    alternates: { canonical: 'https://wloper.com/contact' }
};


export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://wloper.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Contact",
                                "item": "https://wloper.com/contact"
                            }
                        ]
                    })
                }}
            />
            <ContactClient />
        </>
    );
}
