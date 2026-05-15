import { Metadata } from 'next';
import AICallingAgentClient from './AICallingAgentClient';

export const metadata: Metadata = {
    title: "AI Calling Agent | Autonomous Voice Intelligence | Wloper",
    description: "Scale your outreach with Wloper's AI Calling Agent. Automated voice agents that call, qualify, and report in real-time. Ideal for marketing, research, and lead qualification.",
    keywords: ["AI calling agent", "autonomous voice intelligence", "automated lead qualification", "AI outbound calls", "voice AI for business", "SkillytTalk calling agent"],
    openGraph: {
        title: "AI Calling Agent | Scale Your Outreach with Autonomous Voice AI",
        description: "Deploy intelligent voice agents that handle outbound calls and data synthesis with human-like precision.",
        images: ['/images/envato-labs-ai-60bf7079-9412-429a-89f0-19949dc9ecc1.jpg']
    }
};

export default function AICallingAgentPage() {
    return <AICallingAgentClient />;
}
