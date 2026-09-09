import { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  AlertTriangle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { openWhatsApp, buildContactMessage, buildServiceEnquiryMessage, getWhatsAppUrl, buildGreetingMessage } from '../utils/whatsapp';
import { vehicles } from '../data/fleet';

export function ContactPage() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    vehicle: '',
    date: '',
    message: '',
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(buildContactMessage(language, form));
  };

  const serviceOptions = [
    { value: 'airport', label: translations.services.airport.name },
    { value: 'sightseeing', label: translations.services.sightseeing.name },
    { value: 'corporate', label: translations.services.corporate.name },
    { value: 'wedding', label: translations.services.wedding.name },
    { value: 'railway', label: translations.services.railway.name },
    { value: 'outstation', label: translations.services.outstation.name },
  ];

  const quickEnquiries = [
    translations.services.airport.name,
    translations.services.sightseeing.name,
    translations.services.corporate.name,
    translations.services.wedding.name,
    translations.services.railway.name,
    translations.services.outstation.name,
  ];

  return (
    <>
      <PageHero
        title={t(translations.contact.title)}
        subtitle={t(translations.contact.subtitle)}
        image="/cab-images-repository/outstation-destinations/delhi.webp"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href="tel:+919821164208"
            className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-charcoal-100 hover:border-saffron-300 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-saffron-100 group-hover:bg-saffron-200 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
              <Phone className="w-7 h-7 text-saffron-600" />
            </div>
            <div>
              <h3 className="font-semibold text-charcoal-900">{t(translations.contact.callUs)}</h3>
              <p className="text-sm text-charcoal-500">9821164208 - Arvind Chaudhary</p>
              <p className="text-sm text-charcoal-500">9758737032 - Jayveer Chaudhary</p>
            </div>
          </a>

          <a
            href={getWhatsAppUrl(buildGreetingMessage(language))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-charcoal-100 hover:border-forest-300 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-forest-100 group-hover:bg-forest-200 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
              <MessageCircle className="w-7 h-7 text-forest-600" />
            </div>
            <div>
              <h3 className="font-semibold text-charcoal-900">{t(translations.contact.whatsapp)}</h3>
              <p className="text-sm text-charcoal-500">9821164208 - Arvind Chaudhary</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-charcoal-100">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-charcoal-900">{t(translations.contact.visitUs)}</h3>
              <p className="text-sm text-charcoal-500">{t(translations.contact.address)}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-display font-bold text-charcoal-900 mb-6">
              {t(translations.contact.sendMessage)}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t(translations.contact.yourName)}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder={t(translations.contact.yourPhone)}
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
                  required
                />
              </div>
              <input
                type="email"
                placeholder={t(translations.contact.yourEmail)}
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  value={form.service}
                  onChange={(e) => update('service', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm text-charcoal-700"
                >
                  <option value="">{t(translations.contact.selectService)}</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={t(opt.label)}>
                      {t(opt.label)}
                    </option>
                  ))}
                </select>
                <select
                  value={form.vehicle}
                  onChange={(e) => update('vehicle', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm text-charcoal-700"
                >
                  <option value="">{t(translations.booking.selectVehicle)}</option>
                  {vehicles.map((v) => (
                    <option key={v.id} value={t(v.name)}>
                      {t(v.name)}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm"
              />
              <textarea
                placeholder={t(translations.contact.yourMessage)}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100 outline-none transition-all text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white py-3.5 rounded-xl font-semibold transition-colors"
              >
                <Send className="w-5 h-5" />
                {t(translations.contact.sendMessage)}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-cream-50 rounded-2xl p-6 border border-charcoal-100">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-saffron-500" />
                <h3 className="font-display font-semibold text-charcoal-900">
                  {t(translations.contact.hours)}
                </h3>
              </div>
              <p className="text-charcoal-600 font-medium text-lg">
                {t(translations.contact.available247)}
              </p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="font-display font-semibold text-charcoal-900">
                  {t(translations.contact.emergency)}
                </h3>
              </div>
              <p className="text-charcoal-600 text-sm mb-4">
                {t(translations.contact.emergencyDesc)}
              </p>
              <a
                href="tel:+919821164208"
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                9821164208
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-charcoal-100 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14174.793847442562!2d77.6689!3d27.5799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371163d4f4795%3A0x440b13ba3a2a4279!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vrindavan Map"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section cream>
        <SectionHeader title={t(translations.contact.quickEnquiry)} />
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {quickEnquiries.map((service, i) => (
            <button
              key={i}
              onClick={() =>
                openWhatsApp(buildServiceEnquiryMessage(language, t(service)))
              }
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700 hover:border-saffron-400 hover:text-saffron-700 hover:shadow-md transition-all text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              {t(service)}
            </button>
          ))}
        </div>
      </Section>
    </>
  );
}
