import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Portfolio | Best IT Company & Tech Success Stories | Wloper",
    description: "Explore the portfolio of the best IT company for website development and AI based web development. See how our tech company for website development scales businesses.",
    keywords: ["IT portfolio", "web development case studies", "AI product success", "tech company portfolio", "best digital marketing results"],
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
