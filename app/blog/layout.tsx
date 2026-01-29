import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog | AI Based Web Development & Digital Trends | Wloper",
    description: "Insights from the best IT company on AI based web development, latest digital marketing trends, and tech innovations. Stay updated with the leading tech company for website development.",
    keywords: ["AI web development blog", "tech industry insights", "digital marketing trends", "website engineering tips", "IT company blog"],
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
