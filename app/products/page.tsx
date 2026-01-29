import { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
    title: "AI Products | AI Based Web Development Company | Wloper",
    description: "Discover powerful AI products from Wloper. As a premier tech company for website development and AI based web development, we build autonomous systems for enterprise efficiency.",
    keywords: ["AI based web development products", "tech company for website development", "enterprise AI solutions", "AI chatbot development", "autonomous AI agents"],
    openGraph: {
        title: "AI Products | AI Based Web Development Experts",
        description: "Deploy autonomous AI assets built by the best IT company for global enterprise scale.",
    }
};

export default function ProductsPage() {
    return <ProductsClient />;
}
