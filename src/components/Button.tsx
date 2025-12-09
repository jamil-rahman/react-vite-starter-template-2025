import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2';
  
  const variantClasses = {
    primary: 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-tertiary)] border-2 border-[var(--color-secondary)]',
    secondary: 'bg-transparent text-[var(--color-neutral)] border-2 border-[var(--color-neutral)] hover:bg-[var(--color-neutral)] hover:text-white',
    tertiary: 'bg-[var(--color-primary)] text-[var(--color-neutral)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-support)] hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} motion-safe`;
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

