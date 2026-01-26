import { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
    title: "AI products & Enterprise Solutions | Wloper",
    description: "Discover our suite of performance-driven AI products, including interview screening and HCM systems. Custom Mobile development Website solutions built for scale.",
    keywords: ["AI interview software", "HCM systems", "AI chatbot product", "enterprise AI solutions", "technical asset library"],
    openGraph: {
        title: "AI products | The WLOPER Build Engines",
        description: "Deploy autonomous AI assets at global enterprise scale.",
    }
};

export default function ProductsPage() {
    return <ProductsClient />;
}
