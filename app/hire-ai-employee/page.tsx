import type { Metadata } from 'next';
import HireAIClient from './HireAIClient';

export const metadata: Metadata = {
    title: 'Hire An AI Employee | AI HR, Sales, Support & Marketing Agents | Wloper',
    description: 'Hire AI employees for HR, Sales, Customer Support, Marketing and Operations — starting at $29/mo. No sick days, 24/7 availability, zero onboarding time.',
    keywords: ['hire AI employee', 'AI HR manager', 'AI sales executive', 'AI customer support', 'AI marketing executive', 'AI agents for business'],
    alternates: { canonical: 'https://wloper.com/hire-ai-employee' },
    openGraph: {
        title: 'Hire An AI Employee — Starting at $29/mo | Wloper',
        description: 'Deploy AI employees for HR, Sales, Support, Marketing and Operations in minutes. Available 24/7, from $29/mo.',
        url: 'https://wloper.com/hire-ai-employee',
        type: 'website',
    },
};

export default function HireAIEmployeePage() {
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
                                { "@type": "ListItem", "position": 2, "name": "Hire AI Employee", "item": "https://wloper.com/hire-ai-employee" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "AI Workforce Deployment",
                            "serviceType": "AI Employees and Autonomous Agents",
                            "provider": {
                                "@type": "Organization",
                                "name": "Wloper",
                                "url": "https://wloper.com"
                            },
                            "description": "Hire autonomous AI employees for HR, Sales, Customer Support, Marketing and Operations starting at $29/mo.",
                            "url": "https://wloper.com/hire-ai-employee",
                            "offers": {
                                "@type": "Offer",
                                "price": "29.00",
                                "priceCurrency": "USD",
                                "url": "https://wloper.com/hire-ai-employee",
                                "availability": "https://schema.org/InStock"
                            }
                        }
                    ])
                }}
            />
            <HireAIClient />
        </>
    );
}
