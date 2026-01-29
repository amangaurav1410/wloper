import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FAQ | Best IT Company & AI Web Development Questions | Wloper",
    description: "Common questions about the best IT company services. Learn about our AI based web development, best digital marketing strategies, and why we are the top tech company for website development.",
    keywords: ["IT company FAQ", "AI web development questions", "website development tech", "digital marketing services FAQ"],
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
