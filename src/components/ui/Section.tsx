import type { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  cream?: boolean;
}

export function Section({ children, className = '', id, dark, cream }: SectionProps) {
  const { ref, isVisible } = useScrollAnimation();
  const bg = dark
    ? 'bg-charcoal-900 text-white'
    : cream
      ? 'bg-cream-50'
      : 'bg-white';

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-20 ${bg} ${className} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
