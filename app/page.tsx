import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
    title: "Wloper – Premier AI, Blockchain & Marketing Engineering Powerhouse",
    description: "Wloper builds the future of digital presence through high-performance AI products, secure blockchain solutions, and conversion-focused growth engineering. Explore our institutional-grade tech for modern enterprises.",
    keywords: ["AI solutions", "blockchain development", "marketing engineering", "enterprise software", "Web3 ecosystem", "growth optimization", "high-performance web apps"],
    openGraph: {
        title: "Wloper | Premier AI, Blockchain & Marketing Engineering Hub",
        description: "Transforming ambitious visions into scalable digital assets with cutting-edge technology and data-driven strategies.",
        images: [{ url: '/images/hero-bg.png' }]
    }
};

export default function Home() {
    return <HomeClient />;
}
