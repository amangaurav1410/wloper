import { Metadata } from 'next';
import HCMSystemClient from './HCMSystemClient';

export const metadata: Metadata = {
    title: "AI-Based HCM System | Enterprise Human Capital Management | Wloper",
    description: "Modernize your workforce management with Wloper's AI-Based HCM System. Features include automated skills evaluation, talent assessment, and predictive workforce analytics for large organizations.",
    keywords: ["AI based HCM system", "enterprise HR software", "human capital management AI", "automated talent evaluation", "workforce analytics platform", "AI for HR departments"],
    alternates: { canonical: 'https://wloper.com/products/hcm-system' },
    openGraph: {
        title: "AI-Based HCM System | Data-Driven Talent Management",
        description: "Scale your organization with intelligent workforce insights and autonomous skills mapping.",
        url: 'https://wloper.com/products/hcm-system',
        images: ['/images/envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg']
    }
};

export default function HCMSystemPage() {
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
                                { "@type": "ListItem", "position": 3, "name": "HCM System", "item": "https://wloper.com/products/hcm-system" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "AI-Based HCM System",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web",
                            "url": "https://wloper.com/products/hcm-system",
                            "description": "Enterprise Human Capital Management with automated skills evaluation and predictive analytics.",
                            "author": {
                                "@type": "Organization",
                                "name": "Wloper",
                                "url": "https://wloper.com"
                            }
                        }
                    ])
                }}
            />
            <HCMSystemClient />
        </>
    );
}
