import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DemoProvider } from "@/context/DemoContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import DesktopOnly from "@/components/DesktopOnly";
import dynamic from 'next/dynamic';
import { Space_Grotesk, Manrope } from 'next/font/google';

import { AnimatePresence } from 'framer-motion';
import { InterfaceProvider } from "@/context/InterfaceContext";
import { PersonaProvider } from "@/context/PersonaContext";
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
});

const DevTerminal = dynamic(() => import('@/components/DevTerminal'), { ssr: false });
const AIAssistant = dynamic(() => import('@/components/AIAssistant'), { ssr: false });
const NewsletterPopup = dynamic(() => import('@/components/NewsletterPopup'), { ssr: false });
const DNATransition = dynamic(() => import('@/components/DNATransition'), { ssr: false });
const CommandHUD = dynamic(() => import('@/components/CommandHUD'), { ssr: false });
const PersonaSwitcher = dynamic(() => import('@/components/PersonaSwitcher'), { ssr: false });

export const metadata: Metadata = {
    metadataBase: new URL('https://wloper.com'),
    title: {
        default: "Wloper – Next-Gen AI, Blockchain & Marketing Engineering Hub",
        template: "%s | Wloper"
    },
    description: "Wloper is a premier engineering powerhouse specializing in AI-driven products, enterprise blockchain solutions, and data-backed digital marketing. We build scalable Web3 ecosystems and high-performance technical assets for global innovative brands.",
    keywords: [
        "Website Developement company",
        "Custom Mobile developement Website",
        "Digital Marketing Services",
        "AI product",
        "AI development agency",
        "blockchain engineering",
        "Web3 solutions",
        "advanced web development",
        "digital marketing automation",
        "AI SaaS development",
        "enterprise software engineering",
        "next-gen technology hub"
    ],
    authors: [{ name: "Wloper Team" }],
    creator: "Wloper",
    publisher: "Wloper",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    verification: {
        google: "3gJpAY7ADAe7HSKJy9DuH_VouiJxFGut3pdveJh7I10",
    },
    openGraph: {
        title: "Wloper – Engineering the Future of AI & Blockchain",
        description: "Scale your vision with Wloper's specialized engineering for AI, Blockchain, and Growth. Institutional-grade solutions built for the future.",
        url: 'https://wloper.com',
        siteName: 'Wloper',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Wloper - Next-Gen Engineering Hub',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wloper – Next-Gen Tech Hub | AI & Blockchain',
        description: 'Building the infrastructure of the future. Specialized engineering for AI and Web3.',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
            <head>
                {/* Google Analytics */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=G-BPJND5P97V`}
                    strategy="lazyOnload"
                />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-BPJND5P97V');
                    `}
                </Script>
                {/* Schema.org for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Wloper",
                            "url": "https://wloper.com",
                            "logo": "https://wloper.com/logo.png",
                            "sameAs": [
                                "https://linkedin.com/company/wloper",
                                "https://twitter.com/wloper"
                            ],
                            "description": "High-end engineering hub for AI, Blockchain, and Digital Marketing.",
                            "services": [
                                "Website Developement company",
                                "Custom Mobile developement Website",
                                "Digital Marketing Services",
                                "AI product",
                                "AI Strategy",
                                "Blockchain Solutions",
                                "Mobile App Development",
                                "Growth & SEO"
                            ]
                        })
                    }}
                />
            </head>
            <body className="antialiased lg:cursor-none bg-wl-dark text-white selection:bg-wl-accent selection:text-black">
                <InterfaceProvider>
                    <PersonaProvider>
                        <DemoProvider>
                            <DesktopOnly>
                                <CustomCursor />
                                <DevTerminal />
                                <PersonaSwitcher />
                                <CommandHUD />
                            </DesktopOnly>
                            <ScrollProgress />
                            <Header />
                            <AIAssistant />
                            <NewsletterPopup />
                            <main className="min-h-screen">
                                <AnimatePresence mode="wait">
                                    <DNATransition>
                                        {children}
                                    </DNATransition>
                                </AnimatePresence>
                            </main>
                            <Footer />
                        </DemoProvider>
                    </PersonaProvider>
                </InterfaceProvider>
            </body>
        </html>
    );
}
