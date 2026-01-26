import { Metadata } from 'next';
import IndustriesPage from './page';

export const metadata: Metadata = {
    title: "Industries | Specialized AI & Engineering Solutions for Every Sector",
    description: "Wloper delivers custom website development and AI products across diverse industries including Healthcare, Fintech, and Retail. High-performance tech tailored to your sector.",
    keywords: ["healthcare AI", "fintech development", "retail automation", "real estate tech", "custom industry solutions", "enterprise AI deployment"],
    openGraph: {
        title: "Industries | Specialized Engineering Solutions",
        description: "Delivering technical supremacy across Healthcare, Finance, E-commerce, and more.",
        images: [{ url: '/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg' }]
    }
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
