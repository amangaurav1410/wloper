import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Contact Us | Best IT Company & Best Digital Marketing Company",
    description: "Connect with the best IT company for your next project. We are a leading tech company for website development and AI based web development specialized in scaling businesses.",
    keywords: ["Best IT Company contact", "Best Digital Marketing company experts", "AI based web development consultation", "tech company for website development"],
    openGraph: {
        title: "Contact Wloper | Best IT Company & Digital Marketing experts",
        description: "Connect with the best IT company specialized in AI and website development. Start your project with Wloper experts today.",
        images: [{ url: '/images/envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg' }]
    }
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
