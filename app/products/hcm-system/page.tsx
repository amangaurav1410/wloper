import { Metadata } from 'next';
import HCMSystemClient from './HCMSystemClient';

export const metadata: Metadata = {
    title: "AI-Based HCM System | Enterprise Human Capital Management | Wloper",
    description: "Modernize your workforce management with Wloper's AI-Based HCM System. Features include automated skills evaluation, talent assessment, and predictive workforce analytics for large organizations.",
    keywords: ["AI based HCM system", "enterprise HR software", "human capital management AI", "automated talent evaluation", "workforce analytics platform", "AI for HR departments"],
    openGraph: {
        title: "AI-Based HCM System | Data-Driven Talent Management",
        description: "Scale your organization with intelligent workforce insights and autonomous skills mapping.",
        images: ['/images/envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg']
    }
};

export default function HCMSystemPage() {
    return <HCMSystemClient />;
}
