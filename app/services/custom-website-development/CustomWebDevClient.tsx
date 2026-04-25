'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Code2, Layout, Database, ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function CustomWebDevClient() {
    return (
        <ServicePageTemplate
            badge="⚙️ Custom Web Development"
            headline="Bespoke Websites Built"
            headlineAccent="Exactly to Your Vision"
            subtext="No templates. No shortcuts. Wloper builds fully custom websites and web applications from scratch — designed around your unique business requirements, with scalable architecture and maintainable code that grows with you."
            ctaText="Discuss Your Project"
            imageSrc="/images/envato-labs-ai-60bf7079-9412-429a-89f0-19949dc9ecc1.jpg"
            imageAlt="Custom Website Development Services"
            sectionLabel="🛠️ What We Build Custom"
            features={[
                {
                    icon: Layout,
                    title: 'Enterprise Web Portals',
                    desc: 'Complex multi-role portals for B2B businesses, employee intranets, client portals and partner ecosystems — with role-based access control and custom workflows.'
                },
                {
                    icon: Cpu,
                    title: 'SaaS Platform Development',
                    desc: 'Full-stack SaaS application development with subscription billing, multi-tenancy, dashboards and API integrations — built to scale from day one.'
                },
                {
                    icon: Database,
                    title: 'Custom Database Applications',
                    desc: 'Data-heavy web applications, CRM systems, inventory management tools and custom reporting dashboards tailored to your specific operational needs.'
                },
                {
                    icon: Code2,
                    title: 'API Development & Integration',
                    desc: 'Custom REST and GraphQL API development, third-party integrations, payment gateway setup and webhook automation that connects all your systems.'
                },
                {
                    icon: ShieldCheck,
                    title: 'Secure Web Applications',
                    desc: 'Security-first development with OWASP compliance, input validation, SQL injection protection, XSS prevention and regular penetration testing.'
                },
                {
                    icon: Layers,
                    title: 'Legacy System Modernisation',
                    desc: 'Migrate your old, slow, unmaintainable website or application to a modern tech stack — with zero data loss and minimal business disruption.'
                }
            ]}
            stats={[
                { value: '150+', label: 'Custom Projects' },
                { value: '100%', label: 'On-Time Delivery' },
                { value: '5★', label: 'Client Rating' },
                { value: '24h', label: 'Response Time' },
            ]}
            benefits={[
                'Built from scratch, no templates',
                'Full source code ownership',
                'Scalable cloud architecture',
                'Agile development process',
                'Weekly progress updates',
                '3 months post-launch support',
                'Comprehensive documentation',
                'Dedicated project manager',
            ]}
            techStack={['React / Next.js', 'Node.js', 'Django', 'Laravel', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS / Azure', 'Stripe', 'Twilio', 'Elasticsearch']}
        />
    );
}
