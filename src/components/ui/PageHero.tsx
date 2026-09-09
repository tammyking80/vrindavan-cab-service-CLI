interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <div className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 to-charcoal-900/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-charcoal-200 text-lg max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
