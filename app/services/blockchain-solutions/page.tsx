import { Metadata } from 'next';
import BlockchainSolutionsClient from './BlockchainSolutionsClient';

export const metadata: Metadata = {
    title: 'Blockchain Engineering & Web3 Solutions | Wloper',
    description: 'Professional blockchain engineering services by Wloper. We build Smart Contracts (Solidity, Rust), DeFi infrastructure, NFT marketplaces, and private enterprise blockchain networks.',
    keywords: ['blockchain engineering services', 'smart contract audit', 'web3 solutions company', 'defi development', 'solidity developer India', 'rust smart contract developer'],
    openGraph: {
        title: 'Blockchain Engineering & Web3 Solutions | Wloper — Best IT Company',
        description: 'Secure smart contract development, layer-2 scalability, and decentralized finance architectures.',
    },
    alternates: { canonical: 'https://wloper.com/services/blockchain-solutions' }
};

export default function BlockchainSolutionsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wloper.com" },
                                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://wloper.com/services" },
                                { "@type": "ListItem", "position": 3, "name": "Blockchain Solutions", "item": "https://wloper.com/services/blockchain-solutions" }
                            ]
                        }
                    ])
                }}
            />
            <BlockchainSolutionsClient />
        </>
    );
}
