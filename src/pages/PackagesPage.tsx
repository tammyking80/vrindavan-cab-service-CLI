import { useState } from 'react';
import { Clock, MapPin, MessageCircle, ChevronDown, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { sightseeingPackages } from '../data/packages';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { openWhatsApp, buildPackageBookingMessage } from '../utils/whatsapp';

function PackageCard({ pkg }: { pkg: (typeof sightseeingPackages)[0] }) {
  const { language, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-charcoal-100 shadow-sm">
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={t(pkg.name)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <h2 className="text-2xl font-display font-bold text-white mb-1">{t(pkg.name)}</h2>
          <div className="flex items-center gap-4 text-charcoal-200 text-sm">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {t(pkg.duration)}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {pkg.stops.length} {t(translations.packages.stops)}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-3 mb-6">
          {pkg.stops.map((stop, i) => (
            <div
              key={i}
              className="flex gap-3"
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-saffron-100 rounded-full flex items-center justify-center text-xs font-bold text-saffron-700 flex-shrink-0">
                  {i + 1}
                </div>
                {i < pkg.stops.length - 1 && (
                  <div className="w-0.5 flex-1 bg-saffron-200 mt-1" />
                )}
              </div>
              <div className="pb-3">
                <h3 className="font-semibold text-charcoal-900">{t(stop.name)}</h3>
                {expanded && (
                  <p className="text-sm text-charcoal-500 mt-1">{t(stop.desc)}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm text-saffron-600 hover:text-saffron-700 font-medium mb-4 transition-colors"
        >
          {expanded
            ? (language === 'hi' ? 'कम दिखाएं' : 'Show Less')
            : (language === 'hi' ? 'विवरण दिखाएं' : 'Show Details')}
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <div className="flex gap-3">
          <span className="flex-1 py-3 rounded-xl border border-saffron-300 text-saffron-700 text-sm font-semibold text-center">
            {t(translations.packages.contactPrice)}
          </span>
          <button
            onClick={() =>
              openWhatsApp(
                buildPackageBookingMessage(language, t(pkg.name), pkg.stops.map((s) => t(s.name)))
              )
            }
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {t(translations.packages.bookPackage)}
          </button>
        </div>
      </div>
    </div>
  );
}

function CustomPackage() {
  const { language, t } = useLanguage();
  const allStops = sightseeingPackages.flatMap((p) => p.stops);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const handleBook = () => {
    const stops = Array.from(selected);
    openWhatsApp(
      buildPackageBookingMessage(language, language === 'hi' ? 'कस्टम पैकेज' : 'Custom Package', stops)
    );
  };

  return (
    <Section cream>
      <SectionHeader
        title={t(translations.packages.customPackage)}
        subtitle={t(translations.packages.customDesc)}
      />
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {allStops.map((stop, i) => {
            const name = t(stop.name);
            const isSelected = selected.has(name);
            return (
              <button
                key={i}
                onClick={() => toggle(name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-saffron-500 text-white shadow-md'
                    : 'bg-white text-charcoal-600 border border-charcoal-200 hover:border-saffron-300'
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>
        {selected.size > 0 && (
          <button
            onClick={handleBook}
            className="flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors mx-auto"
          >
            <MessageCircle className="w-5 h-5" />
            {t(translations.packages.bookPackage)} ({selected.size} {t(translations.packages.stops)})
          </button>
        )}
      </div>
    </Section>
  );
}

export function PackagesPage() {
  const { language, t } = useLanguage();

  const tips =
    language === 'hi'
      ? [
          'मंदिरों में जाते समय शालीन कपड़े पहनें',
          'पानी की बोतल साथ रखें, खासकर गर्मियों में',
          'सबसे अच्छा समय: अक्टूबर से मार्च',
          'सुबह जल्दी शुरू करें ताकि भीड़ कम मिले',
          'गोवर्धन परिक्रमा के लिए आरामदायक जूते पहनें',
          'कैमरा साथ रखें, कुछ मंदिरों में फोटो की अनुमति है',
        ]
      : [
          'Wear modest clothing when visiting temples',
          'Carry water bottles, especially in summer',
          'Best time to visit: October to March',
          'Start early morning to avoid crowds',
          'Wear comfortable shoes for Govardhan Parikrama',
          'Carry a camera, photography is allowed at some temples',
        ];

  return (
    <>
      <PageHero
        title={t(translations.packages.title)}
        subtitle={t(translations.packages.subtitle)}
        image="/cab-images-repository/outstation-destinations/mathura.webp"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sightseeingPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Section>

      <CustomPackage />

      <Section>
        <SectionHeader title={t(translations.packages.travelTips)} />
        <div className="max-w-2xl mx-auto">
          <div className="bg-cream-50 rounded-2xl p-6 border border-saffron-200">
            <div className="flex items-center gap-3 mb-5">
              <Lightbulb className="w-6 h-6 text-saffron-500" />
              <h3 className="font-display font-semibold text-charcoal-900">
                {language === 'hi' ? 'दर्शन के लिए उपयोगी सुझाव' : 'Useful Tips for Sightseeing'}
              </h3>
            </div>
            <ul className="space-y-3">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-charcoal-600">
                  <span className="w-6 h-6 bg-saffron-100 text-saffron-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
