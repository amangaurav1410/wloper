'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface InterfaceContextType {
    isHUDActive: boolean;
    setHUDActive: (active: boolean) => void;
    isTerminalOpen: boolean;
    setTerminalOpen: (open: boolean) => void;
    toggleHUD: () => void;
    toggleTerminal: () => void;
}

const InterfaceContext = createContext<InterfaceContextType | undefined>(undefined);

export function InterfaceProvider({ children }: { children: React.ReactNode }) {
    const [isHUDActive, setHUDActive] = useState(false);
    const [isTerminalOpen, setTerminalOpen] = useState(false);

    const toggleHUD = () => setHUDActive(prev => !prev);
    const toggleTerminal = () => setTerminalOpen(prev => !prev);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // HUD Toggle: Alt + H
            if (e.altKey && e.key.toLowerCase() === 'h') {
                e.preventDefault();
                toggleHUD();
            }
            // Terminal Toggle: Ctrl + ` (Already handled in DevTerminal but good to have here for consistency if needed)
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <InterfaceContext.Provider value={{
            isHUDActive,
            setHUDActive,
            isTerminalOpen,
            setTerminalOpen,
            toggleHUD,
            toggleTerminal
        }}>
            {children}
        </InterfaceContext.Provider>
    );
}

export function useInterface() {
    const context = useContext(InterfaceContext);
    if (context === undefined) {
        throw new Error('useInterface must be used within an InterfaceProvider');
    }
    return context;
}
