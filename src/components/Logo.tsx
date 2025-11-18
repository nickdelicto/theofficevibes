import Link from 'next/link';
import { Coffee } from 'lucide-react';

/**
 * Logo Component - Brand Identity
 * 
 * Simple, fun, scalable logo that works everywhere:
 * - Website header
 * - Footer
 * - Social media
 * - Favicon
 * 
 * Uses coffee cup icon (☕ vibes) + brand name
 */

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark' | 'hero';
  showIcon?: boolean;
}

export default function Logo({ 
  size = 'medium', 
  variant = 'dark',
  showIcon = true 
}: LogoProps) {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-3xl sm:text-4xl',
  };

  const colorClasses = {
    light: 'text-white',
    dark: 'text-gray-900',
    hero: 'text-white', // Special variant for hero section
  };

  // For hero variant, make "VIBES" stand out with yellow/accent color
  const accentClass = variant === 'hero' ? 'text-accent' : 'text-primary';

  const iconSizes = {
    small: 'w-5 h-5',
    medium: 'w-6 h-6',
    large: 'w-8 h-8 sm:w-10 sm:h-10',
  };

  return (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 sm:gap-3 font-display font-bold transition-all duration-300 hover:scale-105 group"
    >
      {showIcon && (
        <div className="relative">
          {/* Coffee cup icon with subtle animation */}
          <Coffee 
            className={`${iconSizes[size]} text-accent group-hover:rotate-12 transition-transform duration-300`}
          />
        </div>
      )}
      
      {/* Brand text */}
      <span className={`${sizeClasses[size]} ${colorClasses[variant]} leading-tight`}>
        THE OFFICE
        <br className="sm:hidden" />{' '}
        <span className={accentClass}>VIBES</span>
      </span>
    </Link>
  );
}

/**
 * Compact version for mobile/small spaces
 */
export function LogoCompact({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
  const colorClasses = {
    light: 'text-white',
    dark: 'text-gray-900',
  };

  return (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 font-display font-bold text-xl transition-all duration-300 hover:scale-105 group"
    >
      <Coffee className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform duration-300" />
      <span className={colorClasses[variant]}>
        THE OFFICE <span className="text-primary">VIBES</span>
      </span>
    </Link>
  );
}

