import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // New Wloper Brand Colors
                'wl-accent': '#CAF648',
                'wl-accent-2': '#CAF649',
                'wl-accent-dark': '#9BC233',
                'wl-black': '#000000',
                'wl-dark': '#050505',
                'wl-dark-card': '#0D0D0D',
                'wl-bg': '#FFFFFF',
                'wl-card': '#F7F7F7',
                'wl-muted': '#6B6B6B',
                'wl-muted-dark': '#A1A1AA',

                // Legacy support (keeping for compatibility)
                'brand-yellow': '#CAF648',
                'brand-black': '#000000',
                'brand-white': '#FFFFFF',
                'brand-dark-grey': '#0b0b0b',
                'brand-light-grey': '#F7F7F7',
            },
            borderRadius: {
                'wl': '12px',
            },
            maxWidth: {
                'wl': '1200px',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            transitionTimingFunction: {
                'wl': 'cubic-bezier(.2,.9,.3,1)',
            },
            transitionDuration: {
                'wl': '180ms',
            },
            backgroundImage: {
                'ai-gradient': 'linear-gradient(135deg, rgba(202, 246, 72, 0.1) 0%, rgba(202, 246, 72, 0.0) 100%)',
                'ai-glow': 'radial-gradient(circle at center, rgba(202, 246, 72, 0.15) 0%, transparent 70%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
        },
    },
    plugins: [],
};

export default config;
