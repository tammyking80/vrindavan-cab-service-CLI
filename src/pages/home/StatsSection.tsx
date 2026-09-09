import { Calendar, Users, Car, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  start,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);

  return (
    <div className="text-center p-4">
      <div className="w-14 h-14 bg-saffron-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
        <Icon className="w-7 h-7 text-saffron-600" />
      </div>
      <p className="text-3xl md:text-4xl font-display font-bold text-charcoal-900">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-charcoal-500 mt-1">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Calendar, value: 12, suffix: '+', label: t(translations.stats.years) },
    { icon: Users, value: 10000, suffix: '+', label: t(translations.stats.customers) },
    { icon: Car, value: 50, suffix: '+', label: t(translations.stats.vehicles) },
    { icon: Clock, value: 24, suffix: '/7', label: t(translations.stats.service) },
    { icon: MapPin, value: 100, suffix: '+', label: t(translations.stats.cities) },
    { icon: CheckCircle, value: 25000, suffix: '+', label: t(translations.stats.trips) },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} start={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
