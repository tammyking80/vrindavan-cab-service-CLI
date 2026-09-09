import { useState, useMemo } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { openWhatsApp, buildBookingMessage } from '../../utils/whatsapp';
import { vehicles } from '../../data/fleet';

export function BookingWidget() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    vehicle: '',
  });

  const todayStr = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(buildBookingMessage(language, form));
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-charcoal-100"
        >
          <h2 className="font-display font-bold text-xl text-charcoal-900 mb-6">
            {t(translations.booking.title)}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder={t(translations.booking.name)}
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
            />
            <input
              type="tel"
              placeholder={t(translations.booking.phone)}
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
            />
            <input
              type="text"
              placeholder={t(translations.booking.pickup)}
              value={form.pickup}
              onChange={(e) => update('pickup', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
            />
            <input
              type="text"
              placeholder={t(translations.booking.destination)}
              value={form.destination}
              onChange={(e) => update('destination', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
            />
            <input
              type="date"
              value={form.date}
              min={todayStr}
              onChange={(e) => update('date', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
            />
            <select
              value={form.vehicle}
              onChange={(e) => update('vehicle', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm text-charcoal-700"
              required
            >
              <option value="">{t(translations.booking.selectVehicle)}</option>
              {vehicles.map((v) => (
                <option key={v.id} value={t(v.name)}>
                  {t(v.name)}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
            {t(translations.booking.getQuote)}
          </button>
        </form>
      </div>
    </section>
  );
}
