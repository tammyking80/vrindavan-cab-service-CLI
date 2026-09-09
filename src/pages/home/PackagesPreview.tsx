import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { sightseeingPackages } from '../../data/packages';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { openWhatsApp, buildPackageBookingMessage } from '../../utils/whatsapp';

export function PackagesPreview() {
  const { language, t } = useLanguage();

  return (
    <Section cream>
      <SectionHeader
        title={t(translations.packages.title)}
        subtitle={t(translations.packages.subtitle)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sightseeingPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl overflow-hidden border border-charcoal-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={pkg.image}
                alt={t(pkg.name)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="font-display font-bold text-white text-lg">{t(pkg.name)}</h3>
                <div className="flex items-center gap-4 text-charcoal-200 text-sm mt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {t(pkg.duration)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {pkg.stops.length} {t(translations.packages.stops)}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.stops.map((stop, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cream-100 text-charcoal-700 px-2.5 py-1 rounded-full"
                  >
                    {t(stop.name)}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link
                  to="/packages"
                  className="flex-1 py-2.5 rounded-xl border border-charcoal-200 text-charcoal-700 hover:border-saffron-400 hover:text-saffron-600 text-sm font-semibold transition-colors text-center"
                >
                  {t(translations.packages.viewDetails)}
                </Link>
                <button
                  onClick={() =>
                    openWhatsApp(
                      buildPackageBookingMessage(
                        language,
                        t(pkg.name),
                        pkg.stops.map((s) => t(s.name))
                      )
                    )
                  }
                  className="flex-1 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-1"
                >
                  {t(translations.packages.bookPackage)}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
