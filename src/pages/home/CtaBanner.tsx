import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { getWhatsAppUrl, buildGreetingMessage } from '../../utils/whatsapp';

export function CtaBanner() {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <img
        src="/cab-images-repository/outstation-destinations/mathura.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-saffron-700/90 to-saffron-600/85" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          {t(translations.cta.readyToExplore)}
        </h2>
        <p className="text-lg text-saffron-100 mb-8 max-w-2xl mx-auto">
          {t(translations.cta.readyDesc)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppUrl(buildGreetingMessage(language))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-saffron-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-cream-50 transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            {t(translations.cta.bookOnWhatsApp)}
          </a>
          <a
            href="tel:+919821164208"
            className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/25 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {t(translations.cta.callNow)} - 9821164208
          </a>
        </div>
      </div>
    </section>
  );
}
