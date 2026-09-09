import { useState } from 'react';
import {
  Users,
  Briefcase,
  MessageCircle,
  Thermometer,
  Music,
  Armchair,
  Plug,
  Heart,
  Shield,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { vehicles } from '../data/fleet';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { openWhatsApp, buildVehicleBookingMessage } from '../utils/whatsapp';

const filters = [
  { key: 'all', label: translations.fleet.filterAll },
  { key: 'sedan', label: translations.fleet.filterSedan },
  { key: 'suv', label: translations.fleet.filterSuv },
  { key: 'luxury', label: translations.fleet.filterLuxury },
  { key: 'traveller', label: translations.fleet.filterTraveller },
  { key: 'bus', label: translations.fleet.filterBus },
];

export function FleetPage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? vehicles
      : vehicles.filter((v) => v.category === activeFilter);

  return (
    <>
      <PageHero
        title={t(translations.fleet.title)}
        subtitle={t(translations.fleet.subtitle)}
        image="/cab-images-repository/fleet/innvoa-crysta.jpg"
      />

      <Section>
        <div className="flex gap-2 justify-start sm:justify-center mb-10 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                activeFilter === f.key
                  ? 'bg-saffron-500 text-white shadow-md'
                  : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
              }`}
            >
              {t(f.label)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl overflow-hidden border border-charcoal-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={t(vehicle.name)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {vehicle.badge && (
                  <span className="absolute top-3 right-3 bg-saffron-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t(vehicle.badge)}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-charcoal-900 mb-2">
                  {t(vehicle.name)}
                </h3>
                <div className="flex items-center gap-5 text-sm text-charcoal-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> {vehicle.capacity} {t(translations.fleet.seater)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" /> {vehicle.luggage}
                  </span>
                </div>
                <p className="text-sm text-charcoal-500 mb-3">
                  <span className="font-medium">{t(translations.fleet.bestFor)}:</span>{' '}
                  {t(vehicle.bestFor)}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(language === 'hi' ? vehicle.features.hi : vehicle.features.en).map((f, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cream-100 text-charcoal-600 px-2 py-0.5 rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                {vehicle.ratePerKm ? (
                  <p className="text-2xl font-bold text-saffron-600 mb-4">
                    &#8377;{vehicle.ratePerKm}
                    <span className="text-sm font-normal text-charcoal-400">
                      {t(translations.fleet.perKm)}
                    </span>
                  </p>
                ) : (
                  <p className="text-base font-semibold text-saffron-600 mb-4">
                    {t(translations.fleet.contactForPrice)}
                  </p>
                )}
                <button
                  onClick={() =>
                    openWhatsApp(buildVehicleBookingMessage(language, t(vehicle.name)))
                  }
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-charcoal-900 hover:bg-saffron-600 text-white font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t(translations.fleet.bookVehicle)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section cream>
        <SectionHeader
          title={t(translations.fleet.comparison)}
        />
        <div className="hidden sm:block overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-charcoal-900 text-white">
                <th className="text-left p-4 rounded-tl-xl">{language === 'hi' ? 'वाहन' : 'Vehicle'}</th>
                <th className="text-center p-4">{language === 'hi' ? 'क्षमता' : 'Capacity'}</th>
                <th className="text-center p-4">{language === 'hi' ? 'सामान' : 'Luggage'}</th>
                <th className="text-center p-4">{language === 'hi' ? 'दर/km' : 'Rate/km'}</th>
                <th className="text-center p-4 rounded-tr-xl">{t(translations.fleet.bestFor)}</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((v, i) => (
                <tr key={v.id} className={i % 2 === 0 ? 'bg-white' : 'bg-cream-50'}>
                  <td className="p-4 font-medium text-charcoal-800">{t(v.name)}</td>
                  <td className="p-4 text-center text-charcoal-600">{v.capacity}</td>
                  <td className="p-4 text-center text-charcoal-600">{v.luggage}</td>
                  <td className="p-4 text-center font-semibold text-saffron-600">
                    {v.ratePerKm ? `₹${v.ratePerKm}` : '-'}
                  </td>
                  <td className="p-4 text-center text-charcoal-500">{t(v.bestFor)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden space-y-3">
          {vehicles.map((v) => (
            <div key={v.id} className="bg-white rounded-xl border border-charcoal-100 p-4">
              <h4 className="font-display font-semibold text-charcoal-900 mb-2">{t(v.name)}</h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-charcoal-400">{language === 'hi' ? 'क्षमता' : 'Capacity'}</p>
                  <p className="text-sm font-semibold text-charcoal-700">{v.capacity}</p>
                </div>
                <div>
                  <p className="text-xs text-charcoal-400">{language === 'hi' ? 'सामान' : 'Luggage'}</p>
                  <p className="text-sm font-semibold text-charcoal-700">{v.luggage}</p>
                </div>
                <div>
                  <p className="text-xs text-charcoal-400">{language === 'hi' ? 'दर/km' : 'Rate/km'}</p>
                  <p className="text-sm font-semibold text-saffron-600">{v.ratePerKm ? `₹${v.ratePerKm}` : '-'}</p>
                </div>
              </div>
              <p className="text-xs text-charcoal-500 mt-2">
                <span className="font-medium">{t(translations.fleet.bestFor)}:</span> {t(v.bestFor)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title={t(translations.fleet.amenities)} />
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {[
            { icon: Thermometer, label: language === 'hi' ? 'AC' : 'AC' },
            { icon: Music, label: language === 'hi' ? 'म्यूजिक सिस्टम' : 'Music System' },
            { icon: Heart, label: language === 'hi' ? 'फर्स्ट एड' : 'First Aid' },
            { icon: Armchair, label: language === 'hi' ? 'आरामदायक सीटें' : 'Comfortable Seats' },
            { icon: Briefcase, label: language === 'hi' ? 'सामान स्पेस' : 'Luggage Space' },
            { icon: Plug, label: language === 'hi' ? 'चार्जिंग पॉइंट' : 'Charging Points' },
          ].map((amenity, i) => {
            const Icon = amenity.icon;
            return (
              <div key={i} className="text-center p-4 rounded-xl bg-cream-50 border border-charcoal-100">
                <Icon className="w-8 h-8 text-saffron-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-charcoal-700">{amenity.label}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <section className="py-16 bg-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-12 h-12 text-saffron-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            {language === 'hi' ? 'सभी वाहन पूर्ण बीमित' : 'All Vehicles Fully Insured'}
          </h2>
          <p className="text-charcoal-400 max-w-xl mx-auto">
            {language === 'hi'
              ? 'हमारे सभी वाहन व्यापक बीमा कवरेज के साथ आते हैं। आपकी सुरक्षा हमारी प्राथमिकता है।'
              : 'All our vehicles come with comprehensive insurance coverage. Your safety is our top priority.'}
          </p>
        </div>
      </section>
    </>
  );
}
