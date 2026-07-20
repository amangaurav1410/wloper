'use client';

import React, { useState } from 'react';
import { Cpu, Headset, TrendingUp, ArrowRight, CheckCircle2, Users, Phone, Megaphone, Settings } from 'lucide-react';
import MagneticWrapper from '@/components/MagneticWrapper';
import Link from 'next/link';
import HireAIModal from '@/components/HireAIModal';

const aiEmployees = [
    {
        id: 'hr-manager',
        role: 'AI HR Manager',
        icon: Users,
        description: 'Hire the Right Talent, Faster. Manages candidate screening and interviews effortlessly.',
        skills: ['Resume screening', 'AI interviews', 'Candidate scoring', 'Interview scheduling', 'Hiring reports'],
        price: '$29/mo'
    },
    {
        id: 'hr-executive',
        role: 'AI HR Executive',
        icon: Phone,
        description: 'Never Miss a Candidate Follow-up. Automates calls, reminders, and document collection.',
        skills: ['Consent calls', 'Interview reminders', 'Follow-up calls', 'Document collection', 'Joining reminders'],
        price: '$29/mo'
    },
    {
        id: 'sales-executive',
        role: 'AI Sales Executive',
        icon: TrendingUp,
        description: 'Convert More Leads with AI. Handles outbound calls, qualification, and scheduling.',
        skills: ['Outbound calling', 'Lead qualification', 'Demo scheduling', 'CRM updates', 'Pipeline management'],
        price: '$29/mo'
    },
    {
        id: 'customer-support',
        role: 'AI Customer Support Executive',
        icon: Headset,
        description: '24/7 Customer Support Without Hiring. Handles queries across voice, WhatsApp & Email.',
        skills: ['Answer queries', 'Omnichannel support', 'Ticket creation', 'Escalation handling', 'FAQ automation'],
        price: '$29/mo'
    },
    {
        id: 'marketing-executive',
        role: 'AI Marketing Executive',
        icon: Megaphone,
        description: 'Your Always-On Marketing Assistant. Generates content and manages campaigns.',
        skills: ['Content generation', 'SEO & AEO', 'Social media planning', 'Email marketing', 'Campaign analysis'],
        price: '$29/mo'
    },
    {
        id: 'operations-executive',
        role: 'AI Operations Executive',
        icon: Settings,
        description: 'Keep Your Business Running Efficiently. Monitors KPIs and automates workflows.',
        skills: ['Task tracking', 'Daily reports', 'Team reminders', 'SOP guidance', 'Workflow automation'],
        price: '$29/mo'
    }
];

export default function HireAIClient() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');

    const openModal = (role: string) => {
        setSelectedRole(role);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
            <HireAIModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                selectedRole={selectedRole} 
            />
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-wl-accent/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom mx-auto relative z-10">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-wl-accent/30 bg-wl-accent/5 text-wl-accent text-sm font-bold mb-6">
                        <Cpu className="w-4 h-4" />
                        <span>The Future of Work is Here</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Hire Your First <span className="text-wl-accent">AI Employee</span>
                    </h1>
                    <p className="text-xl text-white/60 mb-10 leading-relaxed">
                        Scale your business instantly. No sick days, zero training time, and 24/7 productivity. 
                        Choose the perfect AI agent for your team.
                    </p>
                </div>

                {/* AI Employees Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {aiEmployees.map((employee) => (
                        <div key={employee.id} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-wl-accent/50 transition-all duration-500 hover:bg-white/[0.07] overflow-hidden flex flex-col">
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-wl-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 flex-1">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-wl-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <employee.icon className="w-7 h-7" />
                                </div>
                                <h2 className="text-2xl font-bold mb-3">{employee.role}</h2>
                                <p className="text-white/60 mb-8 leading-relaxed h-[72px]">
                                    {employee.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {employee.skills.map((skill, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                                            <CheckCircle2 className="w-4 h-4 text-wl-accent shrink-0" />
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-6 border-t border-white/10 mt-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm text-white/50">Starting at</span>
                                    <span className="text-lg font-bold text-wl-accent">{employee.price}</span>
                                </div>
                                <MagneticWrapper>
                                    <button 
                                        onClick={() => openModal(employee.role)} 
                                        className="w-full flex items-center justify-center gap-2 p-4 bg-white text-black font-bold rounded-2xl hover:bg-wl-accent transition-colors duration-300"
                                    >
                                        Hire Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </MagneticWrapper>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="max-w-4xl mx-auto p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-black mb-6">Need a custom AI workforce?</h3>
                        <p className="text-white/60 mb-8 max-w-2xl mx-auto text-lg">
                            We can train and deploy specialized AI employees tailored to your exact business processes and workflows.
                        </p>
                        <MagneticWrapper>
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-wl-accent text-black font-bold rounded-full text-lg hover:shadow-[0_0_30px_rgba(202,246,72,0.3)] transition-all">
                                Talk to our Experts
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </MagneticWrapper>
                    </div>
                </div>
            </div>
        </main>
    );
}
