import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Wloper – We Are Next-Gen Developers",
    description: "Next-generation tech company building scalable web solutions, digital marketing, and AI-powered products including an AI-powered live interview platform.",
    keywords: ["web development", "digital marketing", "AI products", "AI interview platform", "next-gen developers"],
    authors: [{ name: "Wloper" }],
    openGraph: {
        title: "Wloper – We Are Next-Gen Developers",
        description: "Building the future with web development, digital marketing, and AI-powered solutions.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
