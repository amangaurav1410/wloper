import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: "Our Services | Tech Company for Website Development | Wloper",
    description: "Explore elite services from the best IT company. From AI based web development to the best digital marketing services, we architect your digital transformation with high-performance tech.",
    keywords: ["best digital marketing services", "tech company for website development", "AI based web development services", "custom software engineering"],
    openGraph: {
        title: "Services | Best IT Company & Digital Growth Hub",
        description: "Institutional-grade tech for AI, Web3, and the best digital marketing strategies.",
    }
};

export default function ServicesPage() {
    return <ServicesClient />;
}
