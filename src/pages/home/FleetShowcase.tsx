import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { vehicles } from '../../data/fleet';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { openWhatsApp, buildVehicleBookingMessage } from '../../utils/whatsapp';

export function FleetShowcase() {
  const { language, t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = dir === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <Section cream>
      <SectionHeader
        title={t(translations.fleet.title)}
        subtitle={t(translations.fleet.subtitle)}
      />

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center text-charcoal-600 hover:text-saffron-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center text-charcoal-600 hover:text-saffron-600 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
        >
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex-shrink-0 w-[280px] snap-start bg-white rounded-2xl overflow-hidden border border-charcoal-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={t(vehicle.name)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {vehicle.badge && (
                  <span className="absolute top-3 right-3 bg-saffron-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {t(vehicle.badge)}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-charcoal-900 mb-2">
                  {t(vehicle.name)}
                </h3>
                <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {vehicle.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" /> {vehicle.luggage}
                  </span>
                </div>
                {vehicle.ratePerKm ? (
                  <p className="text-lg font-bold text-saffron-600 mb-3">
                    &#8377;{vehicle.ratePerKm}
                    <span className="text-sm font-normal text-charcoal-400">
                      {t(translations.fleet.perKm)}
                    </span>
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-saffron-600 mb-3">
                    {t(translations.fleet.contactForPrice)}
                  </p>
                )}
                <button
                  onClick={() =>
                    openWhatsApp(buildVehicleBookingMessage(language, t(vehicle.name)))
                  }
                  className="w-full py-2.5 rounded-xl bg-charcoal-900 hover:bg-saffron-600 text-white text-sm font-semibold transition-colors"
                >
                  {t(translations.fleet.bookVehicle)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <Link
          to="/fleet"
          className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          {t(translations.fleet.viewAll)}
        </Link>
      </div>
    </Section>
  );
}
