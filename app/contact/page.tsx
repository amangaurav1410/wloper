import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Contact Wloper | Get Custom Mobile development Website & AI Solutions",
    description: "Connect with the WLOPER engineering center. Ready to start your next Website Development project or AI protocol? Initialize your project protocol here.",
    keywords: ["hire website developers", "AI consultation", "mobile app estimate", "contact wloper", "project initialization"],
    openGraph: {
        title: "Contact Wloper | Initialize Project Protocol",
        description: "Direct link to the WLOPER engineering command center. Start your digital dominance today.",
        images: [{ url: '/images/envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg' }]
    }
};

export default function ContactPage() {
    return <ContactClient />;
}
