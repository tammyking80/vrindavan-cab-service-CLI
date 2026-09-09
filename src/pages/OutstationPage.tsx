import { useState } from 'react';
import {
  MapPin,
  Clock,
  MessageCircle,
  AlertCircle,
  Calculator,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { outstationRoutes, stateFilters } from '../data/routes';
import { vehicles } from '../data/fleet';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { openWhatsApp, buildRouteBookingMessage, buildRouteEnquiryMessage } from '../utils/whatsapp';

export function OutstationPage() {
  const { language, t } = useLanguage();
  const [stateFilter, setStateFilter] = useState('all');
  const [calcVehicle, setCalcVehicle] = useState('sedan');
  const [calcDistance, setCalcDistance] = useState('');

  const filtered =
    stateFilter === 'all'
      ? outstationRoutes
      : outstationRoutes.filter((r) => r.stateKey === stateFilter);

  const selectedVehicle = vehicles.find((v) => v.id === calcVehicle);
  const estimatedFare =
    calcDistance && selectedVehicle?.ratePerKm
      ? Number(calcDistance) * selectedVehicle.ratePerKm * 2
      : null;

  const additionalCharges = [
    { label: translations.outstation.tollParking, value: translations.outstation.extra },
    { label: translations.outstation.stateTax, value: translations.outstation.extra },
    { label: translations.outstation.driverAllowance, value: translations.outstation.extra },
    { label: translations.outstation.nightCharges, value: translations.outstation.extra },
  ];

  return (
    <>
      <PageHero
        title={t(translations.outstation.title)}
        subtitle={t(translations.outstation.subtitle)}
        image="/cab-images-repository/services/outstation-tips.jpg"
      />

      <Section>
        <SectionHeader title={t(translations.outstation.rateCard)} subtitle={t(translations.outstation.roundTrip)} />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-charcoal-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal-900 text-white">
                    <th className="text-left p-4">{language === 'hi' ? 'वाहन' : 'Vehicle'}</th>
                    <th className="text-center p-4">{language === 'hi' ? 'क्षमता' : 'Capacity'}</th>
                    <th className="text-right p-4">{language === 'hi' ? 'दर (प्रति km)' : 'Rate (per km)'}</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((v, i) => (
                    <tr key={v.id} className={`border-b border-charcoal-50 ${i % 2 === 0 ? 'bg-white' : 'bg-cream-50'}`}>
                      <td className="p-4 font-medium text-charcoal-800">{t(v.name)}</td>
                      <td className="p-4 text-center text-charcoal-500">{v.capacity} {t(translations.fleet.seater)}</td>
                      <td className="p-4 text-right font-bold text-saffron-600">
                        {v.ratePerKm ? `₹${v.ratePerKm}` : t(translations.fleet.contactForPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section cream>
        <SectionHeader title={t(translations.outstation.additionalCharges)} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {additionalCharges.map((charge, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-charcoal-100 text-center">
              <AlertCircle className="w-6 h-6 text-saffron-500 mx-auto mb-2" />
              <p className="font-semibold text-charcoal-800 text-sm mb-1">{t(charge.label)}</p>
              <p className="text-saffron-600 text-sm font-medium">{t(charge.value)}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="inline-flex items-center gap-2 bg-saffron-100 text-saffron-800 px-4 py-2 rounded-full text-sm font-medium">
            <AlertCircle className="w-4 h-4" />
            {t(translations.outstation.dailyLimit)}
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader title={t(translations.outstation.routes)} />
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {stateFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setStateFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                stateFilter === f.key
                  ? 'bg-saffron-500 text-white shadow-md'
                  : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
              }`}
            >
              {t(f.label)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-xl border border-charcoal-100 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={route.image}
                  alt={t(route.city)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <h3 className="font-display font-bold text-white text-lg">{t(route.city)}</h3>
                  <p className="text-charcoal-200 text-xs">{t(route.state)}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-charcoal-500 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-saffron-500" />
                    {route.distanceKm} km
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-saffron-500" />
                    {t(route.approxTime)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      openWhatsApp(buildRouteBookingMessage(language, t(route.city)))
                    }
                    className="flex-1 py-2 rounded-lg bg-charcoal-900 hover:bg-saffron-600 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {t(translations.outstation.bookRoute)}
                  </button>
                  <button
                    onClick={() =>
                      openWhatsApp(buildRouteEnquiryMessage(language, t(route.city)))
                    }
                    className="flex-1 py-2 rounded-lg border border-charcoal-200 hover:border-saffron-400 hover:text-saffron-600 text-charcoal-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {t(translations.outstation.enquireRoute)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section cream>
        <SectionHeader title={t(translations.outstation.fareCalculator)} />
        <div className="max-w-md mx-auto bg-white rounded-2xl p-6 border border-charcoal-100 shadow-sm">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-1">
                {t(translations.outstation.distance)}
              </label>
              <input
                type="number"
                value={calcDistance}
                onChange={(e) => setCalcDistance(e.target.value)}
                placeholder="e.g. 180"
                className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-1">
                {t(translations.booking.vehicle)}
              </label>
              <select
                value={calcVehicle}
                onChange={(e) => setCalcVehicle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
              >
                {vehicles
                  .filter((v) => v.ratePerKm)
                  .map((v) => (
                    <option key={v.id} value={v.id}>
                      {t(v.name)} - ₹{v.ratePerKm}/km
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {estimatedFare && (
            <div className="bg-cream-50 rounded-xl p-5 text-center border border-saffron-200">
              <Calculator className="w-8 h-8 text-saffron-500 mx-auto mb-2" />
              <p className="text-sm text-charcoal-500 mb-1">{t(translations.outstation.estimatedFare)}</p>
              <p className="text-3xl font-bold text-saffron-600">
                ₹{estimatedFare.toLocaleString()}
              </p>
              <p className="text-xs text-charcoal-400 mt-1">
                ({language === 'hi' ? 'राउंड ट्रिप, अतिरिक्त शुल्क अलग' : 'Round trip, additional charges extra'})
              </p>
              <button
                onClick={() =>
                  openWhatsApp(
                    buildRouteBookingMessage(
                      language,
                      `${calcDistance}km trip`,
                      t(selectedVehicle!.name)
                    )
                  )
                }
                className="mt-4 flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors mx-auto"
              >
                <MessageCircle className="w-4 h-4" />
                {t(translations.cta.bookOnWhatsApp)}
              </button>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
