import { Metadata } from 'next';
import AIChatbotClient from './AIChatbotClient';

export const metadata: Metadata = {
    title: "Custom AI Chatbot Development | WhatsApp & Web Automation | Wloper",
    description: "Automate your customer support and lead generation with Wloper's Custom AI Chatbots. Integrated with WhatsApp and your website to provide 24/7 intelligent responses.",
    keywords: ["custom AI chatbot", "WhatsApp AI automation", "web chatbot development", "AI lead generation bot", "automated customer support", "business AI chatbot"],
    openGraph: {
        title: "Custom AI Chatbots | Never Miss a Lead with 24/7 Automation",
        description: "Deploy intelligent conversational agents that qualify leads and book appointments autonomously.",
        images: ['/images/envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg']
    }
};

export default function AIChatbotPage() {
    return <AIChatbotClient />;
}
