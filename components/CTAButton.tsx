import Link from 'next/link';

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export default function CTAButton({
    href,
    children,
    variant = 'primary',
    className = '',
}: CTAButtonProps) {
    if (variant === 'primary') {
        return (
            <Link
                href={href}
                className={`btn-primary ${className}`}
            >
                {children}
            </Link>
        );
    }

    // Secondary variant
    return (
        <Link
            href={href}
            className={`btn-secondary ${className}`}
        >
            {children}
        </Link>
    );
}
