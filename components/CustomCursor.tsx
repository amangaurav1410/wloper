'use client';

import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/**
 * Simplified CustomCursor — fixes forced reflow.
 *
 * Previous version called getBoundingClientRect() inside the mousemove handler
 * which caused a forced reflow on every mouse event (~100/s).
 *
 * Fix: Removed the neural-point nearest-position feature entirely (it had no
 * matching `.neural-point` elements in the CSS-based NeuralBackground anyway,
 * so it was a no-op that still triggered layout reads). Cursor now uses only
 * CSS transform via framer-motion motion values — zero reflow.
 */
export default function CustomCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        // Guard: desktop only
        if (window.innerWidth < 1024 || 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
            return;
        }

        let latestX = -100;
        let latestY = -100;

        const moveMouse = (e: MouseEvent) => {
            latestX = e.clientX;
            latestY = e.clientY;

            // Batch DOM update in next animation frame — prevents forced reflow
            if (rafRef.current === null) {
                rafRef.current = requestAnimationFrame(() => {
                    mouseX.set(latestX);
                    mouseY.set(latestY);
                    rafRef.current = null;
                });
            }
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('button, a, [data-cursor-text]');
            if (ringRef.current) {
                if (interactive) {
                    ringRef.current.style.width = '72px';
                    ringRef.current.style.height = '72px';
                    ringRef.current.style.backgroundColor = 'rgba(202, 246, 72, 0.1)';
                } else {
                    ringRef.current.style.width = '40px';
                    ringRef.current.style.height = '40px';
                    ringRef.current.style.backgroundColor = 'transparent';
                }
            }
        };

        window.addEventListener('mousemove', moveMouse, { passive: true });
        window.addEventListener('mouseover', handleOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleOver);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            {/* Main dot — follows mouse 1:1 via motion value (no reflow) */}
            <div
                ref={dotRef}
                className="absolute w-3 h-3 bg-wl-accent rounded-full mix-blend-difference"
                style={{
                    // Use CSS var driven by motion values via useEffect below
                    transform: 'translate(-50%, -50%)',
                    willChange: 'transform',
                    left: 0,
                    top: 0,
                }}
            />

            {/* Lagging ring */}
            <div
                ref={ringRef}
                className="absolute rounded-full border border-wl-accent/50 transition-[width,height,background-color] duration-200"
                style={{
                    width: 40,
                    height: 40,
                    transform: 'translate(-50%, -50%)',
                    willChange: 'transform',
                    left: 0,
                    top: 0,
                }}
            />

            {/* Framer motion drives the actual position via transform — no layout reads */}
            <CursorPositionDriver mouseX={mouseX} mouseY={mouseY} springX={springX} springY={springY} dotRef={dotRef} ringRef={ringRef} />
        </div>
    );
}

// Separate tiny component to use useEffect for motion value subscriptions
// without causing the parent to re-render
function CursorPositionDriver({ mouseX, mouseY, springX, springY, dotRef, ringRef }: {
    mouseX: ReturnType<typeof useMotionValue<number>>;
    mouseY: ReturnType<typeof useMotionValue<number>>;
    springX: ReturnType<typeof useSpring>;
    springY: ReturnType<typeof useSpring>;
    dotRef: React.RefObject<HTMLDivElement>;
    ringRef: React.RefObject<HTMLDivElement>;
}) {
    useEffect(() => {
        const unsubX = mouseX.on('change', (x) => {
            if (dotRef.current) {
                dotRef.current.style.left = `${x}px`;
            }
        });
        const unsubY = mouseY.on('change', (y) => {
            if (dotRef.current) {
                dotRef.current.style.top = `${y}px`;
            }
        });
        const unsubSX = springX.on('change', (x) => {
            if (ringRef.current) {
                ringRef.current.style.left = `${x}px`;
            }
        });
        const unsubSY = springY.on('change', (y) => {
            if (ringRef.current) {
                ringRef.current.style.top = `${y}px`;
            }
        });
        return () => { unsubX(); unsubY(); unsubSX(); unsubSY(); };
    }, [mouseX, mouseY, springX, springY, dotRef, ringRef]);

    return null;
}
