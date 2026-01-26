'use client';

import React, { useState, useEffect } from 'react';

export default function DesktopOnly({ children }: { children: React.ReactNode }) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            const isDesktopView = window.innerWidth >= 1024;
            setIsDesktop(isDesktopView);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    if (!isDesktop) return null;

    return <>{children}</>;
}
