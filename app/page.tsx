import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
    title: "Best IT Company for AI Based Web Development | Wloper",
    description: "Looking for the best tech company for website development? Wloper is an AI based web development company that builds high-performance apps and provides best digital marketing services for global scale.",
    keywords: ["Best IT Company", "Tech Company for website Development", "AI based Web Development Company", "Best Digital Marketing company", "AI solutions", "high-performance web apps"],
    openGraph: {
        title: "Wloper | Best IT Company & AI Web Development Experts",
        description: "Transforming ambitious visions into scalable digital assets with the best IT company specialized in AI and website development.",
        images: [{ url: '/images/hero-bg.png' }]
    }
};

export default function Home() {
    return <HomeClient />;
}
