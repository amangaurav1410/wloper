'use client';

// Lightweight CSS-only neural background — replaces Three.js WebGL canvas
// Zero GPU usage, no runtime JS animation loop, same visual feel.
export default function NeuralBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Animated dot grid */}
            <svg
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="neural-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <circle cx="30" cy="30" r="1" fill="#CAF648" opacity="0.6" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#neural-dots)" />
            </svg>
            {/* Radial accent glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(202,246,72,0.06)_0%,transparent_70%)]" />
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/30 via-transparent to-wl-dark" />
        </div>
    );
}

