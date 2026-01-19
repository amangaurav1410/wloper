import Link from 'next/link';

interface CTAButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export default function CTAButton({
    href,
    onClick,
    children,
    variant = 'primary',
    className = '',
}: CTAButtonProps) {
    const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    const combinedClass = `${baseClass} ${className}`;

    if (onClick) {
        return (
            <button onClick={onClick} className={combinedClass}>
                {children}
            </button>
        );
    }

    return (
        <Link href={href || '#'} className={combinedClass}>
            {children}
        </Link>
    );
}
