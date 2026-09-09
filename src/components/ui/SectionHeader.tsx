interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, light }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl font-display font-bold mb-4 ${
          light ? 'text-white' : 'text-charcoal-900'
        }`}
      >
        {title}
      </h2>
      <div className="w-20 h-1 bg-saffron-500 rounded-full mx-auto mb-4" />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-charcoal-300' : 'text-charcoal-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
