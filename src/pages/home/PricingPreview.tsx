import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { vehicles } from '../../data/fleet';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

export function PricingPreview() {
  const { language, t } = useLanguage();

  return (
    <Section>
      <SectionHeader
        title={t(translations.outstation.rateCard)}
        subtitle={t(translations.outstation.roundTrip)}
      />
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border border-charcoal-100 overflow-hidden">
          <div className="grid grid-cols-3 bg-charcoal-900 text-white p-4 text-sm font-semibold">
            <span>{language === 'hi' ? 'वाहन' : 'Vehicle'}</span>
            <span className="text-center">{language === 'hi' ? 'क्षमता' : 'Capacity'}</span>
            <span className="text-right">{language === 'hi' ? 'दर' : 'Rate'}</span>
          </div>
          {vehicles.map((v, i) => (
            <div
              key={v.id}
              className={`grid grid-cols-3 p-4 text-sm items-center ${
                i % 2 === 0 ? 'bg-white' : 'bg-cream-50'
              } border-b border-charcoal-50 last:border-0`}
            >
              <span className="font-medium text-charcoal-800">{t(v.name)}</span>
              <span className="text-center text-charcoal-500">{v.capacity} {t(translations.fleet.seater)}</span>
              <span className="text-right font-semibold text-saffron-600">
                {v.ratePerKm ? `₹${v.ratePerKm}/km` : t(translations.fleet.contactForPrice)}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/outstation"
            className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-semibold transition-colors"
          >
            {t(translations.cta.viewPricing)} &rarr;
          </Link>
        </div>
      </div>
    </Section>
  );
}
