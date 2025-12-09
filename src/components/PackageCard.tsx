import { Button } from './Button';
import type { PackageCard as PackageCardType } from '../types';

interface PackageCardProps extends PackageCardType {
  className?: string;
}

export function PackageCard({
  title,
  description,
  price,
  ctaText = 'Book Now',
  ctaHref = '/bookings',
  className = '',
}: PackageCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 border-2 border-[var(--color-primary)] hover:border-[var(--color-secondary)] transition-colors duration-200 ${className}`}>
      <h3 className="text-2xl font-heading font-bold text-[var(--color-neutral)] mb-2">{title}</h3>
      <p className="text-base text-[var(--color-neutral)] mb-4 min-h-[60px]">{description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl font-heading font-bold text-[var(--color-tertiary)]">{price}</span>
      </div>
      <Button to={ctaHref} variant="primary" size="md" className="w-full">
        {ctaText}
      </Button>
    </div>
  );
}

