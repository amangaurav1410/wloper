import { Metadata } from 'next';
import InterviewScreeningClient from './InterviewScreeningClient';

export const metadata: Metadata = {
    title: "AI Interview Screening Platform | SkillytTalk | Wloper",
    description: "Screen candidates 5x faster with Wloper's AI Interview Screening Platform (SkillytTalk). Automatically conduct first-round interviews and shortlist the best talent using advanced NLP and sentiment analysis.",
    keywords: ["AI interview screening platform", "automated recruitment software", "SkillytTalk", "AI candidate vetting", "automated first round interviews", "HR tech AI solutions"],
    openGraph: {
        title: "AI Interview Screening | Hire Smarter with SkillytTalk",
        description: "Reduce HR workload by 60% with autonomous candidate screening and intelligent ranking.",
        images: ['/images/envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg']
    }
};

export default function InterviewScreeningPage() {
    return <InterviewScreeningClient />;
}
