import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function Card({ children, className = '', imageUrl, imageAlt }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt || ''}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

