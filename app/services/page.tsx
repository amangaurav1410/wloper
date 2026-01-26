import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: "Digital Marketing Services & Custom Engineering | Wloper",
    description: "Explore our elite build protocols for AI Strategy, Blockchain Engineering, and Digital Marketing Services. We architect scalable infrastructure for global leaders.",
    keywords: ["digital marketing agency", "custom engineering services", "AI strategy consulting", "blockchain-as-a-service", "growth engineering"],
    openGraph: {
        title: "Services | Professional Engineering Hub & Digital Growth",
        description: "Institutional-grade tech for AI, Web3, and market dominance.",
    }
};

export default function ServicesPage() {
    return <ServicesClient />;
}
