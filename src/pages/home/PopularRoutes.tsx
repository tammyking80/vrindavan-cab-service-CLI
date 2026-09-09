import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { outstationRoutes } from '../../data/routes';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { openWhatsApp, buildRouteBookingMessage, buildRouteEnquiryMessage } from '../../utils/whatsapp';

export function PopularRoutes() {
  const { language, t } = useLanguage();
  const popular = outstationRoutes.filter((r) => r.highlight);

  return (
    <Section>
      <SectionHeader
        title={t(translations.outstation.routes)}
        subtitle={t(translations.outstation.subtitle)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popular.map((route) => (
          <div
            key={route.id}
            className="group rounded-2xl overflow-hidden border border-charcoal-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={route.image}
                alt={t(route.city)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <h3 className="font-display font-bold text-white text-xl">{t(route.city)}</h3>
                <p className="text-charcoal-200 text-sm">{t(route.state)}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-sm text-charcoal-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-saffron-500" />
                  {route.distanceKm} km
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-saffron-500" />
                  {t(route.approxTime)}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    openWhatsApp(buildRouteBookingMessage(language, t(route.city)))
                  }
                  className="flex-1 py-2.5 rounded-xl bg-charcoal-900 hover:bg-saffron-600 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  {t(translations.outstation.bookRoute)}
                </button>
                <button
                  onClick={() =>
                    openWhatsApp(buildRouteEnquiryMessage(language, t(route.city)))
                  }
                  className="flex-1 py-2.5 rounded-xl border border-charcoal-200 hover:border-saffron-400 hover:text-saffron-600 text-charcoal-700 text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  {t(translations.outstation.enquireRoute)}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/outstation"
          className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-semibold transition-colors"
        >
          {t(translations.common.viewAll)} &rarr;
        </Link>
      </div>
    </Section>
  );
}
