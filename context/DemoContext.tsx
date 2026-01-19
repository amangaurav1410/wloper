'use client';

import React, { createContext, useContext, useState } from 'react';
import DemoModal from '@/components/DemoModal';

interface DemoContextType {
    openDemoModal: () => void;
    closeDemoModal: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: React.ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openDemoModal = () => setIsModalOpen(true);
    const closeDemoModal = () => setIsModalOpen(false);

    return (
        <DemoContext.Provider value={{ openDemoModal, closeDemoModal }}>
            {children}
            <DemoModal isOpen={isModalOpen} onClose={closeDemoModal} />
        </DemoContext.Provider>
    );
}

export function useDemo() {
    const context = useContext(DemoContext);
    if (context === undefined) {
        throw new Error('useDemo must be used within a DemoProvider');
    }
    return context;
}
