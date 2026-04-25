'use client';

// Lightweight CSS-only globe — replaces Three.js WebGL canvas
// Zero GPU usage, no runtime animation loop.
export default function GlobalGlobe() {
    return (
        <div className="w-full h-full min-h-[300px] flex items-center justify-center">
            <div className="relative w-64 h-64" style={{ animation: 'globeSpin 20s linear infinite' }}>
                {/* Globe rings */}
                <div className="absolute inset-0 rounded-full border border-[#CAF648]/10" />
                <div className="absolute inset-4 rounded-full border border-[#CAF648]/10 rotate-45" />
                <div className="absolute inset-4 rounded-full border border-[#CAF648]/10 -rotate-45" />
                <div className="absolute inset-8 rounded-full border border-[#CAF648]/15" />
                <div className="absolute inset-12 rounded-full border border-[#CAF648]/20" />
                {/* Center glow */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(202,246,72,0.08)_0%,transparent_70%)]" />
                {/* Dots */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-[#CAF648] opacity-60"
                        style={{
                            top: `calc(50% + ${Math.sin(deg * Math.PI / 180) * 120}px - 3px)`,
                            left: `calc(50% + ${Math.cos(deg * Math.PI / 180) * 120}px - 3px)`,
                        }}
                    />
                ))}
            </div>
            <style>{`
                @keyframes globeSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
}

