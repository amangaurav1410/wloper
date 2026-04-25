import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DemoProvider } from "@/context/DemoContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import dynamic from 'next/dynamic';
import { Space_Grotesk, Manrope } from 'next/font/google';
import { InterfaceProvider } from "@/context/InterfaceContext";
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

const AIAssistant = dynamic(() => import('@/components/AIAssistant'), { ssr: false, loading: () => null });
const NewsletterPopup = dynamic(() => import('@/components/NewsletterPopup'), { ssr: false, loading: () => null });

export const metadata: Metadata = {
    metadataBase: new URL('https://wloper.com'),
    title: {
        default: "Wloper | Best IT Company — Website Development, SEO, Google Ads & AI Solutions",
        template: "%s | Wloper"
    },
    description: "Wloper is India's best IT company offering professional website development (WordPress, Shopify, Next.js), mobile app development, SEO, Google Ads, Meta Ads, custom web development and AI-powered digital solutions that grow your business.",
    icons: {
        icon: [
            { url: '/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    keywords: [
        "Best IT Company",
        "Website Development Company",
        "Website Development Company in India",
        "WordPress Development Company",
        "Shopify Development Company",
        "Next.js Development Company",
        "Custom Website Development",
        "Mobile App Development Company",
        "SEO Company India",
        "Best SEO Services",
        "Google Ads Management",
        "PPC Agency India",
        "Meta Ads Agency",
        "Facebook Ads Management",
        "Instagram Advertising",
        "AI Based Web Development Company",
        "Digital Marketing Company",
        "Best Digital Marketing Services",
        "IT Company Mohali",
        "Software Development Company India",
        "AI product development",
        "AI interview platform",
        "Blockchain engineering",
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
                {/* dns-prefetch for analytics — fonts handled by next/font at build time */}
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                {/* Google Analytics */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=G-BPJND5P97V`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
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
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Wloper Systems",
                                "alternateName": "Wloper",
                                "url": "https://wloper.com",
                                "logo": "https://wloper.com/logo.png",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+91 9034197787",
                                    "contactType": "sales",
                                    "areaServed": "IN",
                                    "availableLanguage": ["en", "Hindi"]
                                },
                                "sameAs": [
                                    "https://linkedin.com/company/wloper",
                                    "https://twitter.com/wloper",
                                    "https://github.com/wloper"
                                ],
                                "description": "Wloper is a premier engineering powerhouse specializing in AI-driven products, enterprise blockchain solutions, and data-backed digital marketing."
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Wloper Systems",
                                "url": "https://wloper.com",
                                "potentialAction": {
                                    "@type": "SearchAction",
                                    "target": "https://wloper.com/search?q={search_term_string}",
                                    "query-input": "required name=search_term_string"
                                }
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                "name": "Wloper Systems",
                                "image": "https://wloper.com/logo.png",
                                "@id": "https://wloper.com",
                                "url": "https://wloper.com",
                                "telephone": "+91 9034197787",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Phase 8B, Industrial Area",
                                    "addressLocality": "Mohali",
                                    "addressRegion": "Punjab",
                                    "postalCode": "160055",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 30.7046,
                                    "longitude": 76.7179
                                },
                                "openingHoursSpecification": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday"
                                    ],
                                    "opens": "09:00",
                                    "closes": "18:00"
                                }
                            }
                        ])
                    }}
                />
            </head>
            <body className="antialiased bg-wl-dark text-white selection:bg-wl-accent selection:text-black">
                <InterfaceProvider>
                    <DemoProvider>
                        <ScrollProgress />
                        <Header />
                        <AIAssistant />
                        <NewsletterPopup />
                        <main className="min-h-screen">
                            {children}
                        </main>
                        <Footer />
                    </DemoProvider>
                </InterfaceProvider>
            </body>
        </html>
    );
}
