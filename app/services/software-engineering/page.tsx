import { Metadata } from 'next';
import SoftwareEngineeringClient from './SoftwareEngineeringClient';

export const metadata: Metadata = {
    title: 'Custom Software Engineering & Cloud Architectures | Wloper',
    description: 'Elite custom software engineering and cloud-native architecture services by Wloper. We build microservices (Go, Node, Rust) and Next.js SaaS platforms.',
    keywords: ['software engineering company', 'cloud native architecture', 'custom SaaS development', 'backend engineering services', 'Nextjs frontend engineers', 'microservices development agency'],
    openGraph: {
        title: 'Software Engineering & Cloud Architectures | Wloper — Best IT Company',
        description: 'Scalable backend engines, high-performance UI systems, and continuous delivery platforms.',
    },
    alternates: { canonical: 'https://wloper.com/services/software-engineering' }
};

export default function SoftwareEngineeringPage() {
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
                                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://wloper.com/services" },
                                { "@type": "ListItem", "position": 3, "name": "Software Engineering", "item": "https://wloper.com/services/software-engineering" }
                            ]
                        }
                    ])
                }}
            />
            <SoftwareEngineeringClient />
        </>
    );
}
