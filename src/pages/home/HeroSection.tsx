import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { getWhatsAppUrl, buildGreetingMessage } from '../../utils/whatsapp';

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <img
        src="/hero/hero.jpg"
        alt="Vrindavan"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <img
        src="/hero/hero-mobile.jpg"
        alt="Vrindavan"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/50 to-charcoal-950/80" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-saffron-500/20 backdrop-blur-sm border border-saffron-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-forest-400 rounded-full animate-pulse" />
            <span className="text-saffron-200 text-sm font-medium">
              {language === 'hi' ? '2012 से सेवा में' : 'Serving since 2012'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            {t(translations.hero.title)}
          </h1>

          <p className="text-lg md:text-xl text-charcoal-200 mb-8 leading-relaxed max-w-xl">
            {t(translations.hero.subtitle)}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href={getWhatsAppUrl(buildGreetingMessage(language))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              {t(translations.hero.bookNow)}
            </a>
            <a
              href="tel:+919821164208"
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              {t(translations.hero.callUs)}
            </a>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t(translations.hero.exploreServices)}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex items-center gap-6 text-sm text-charcoal-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-forest-400 rounded-full" />
              {language === 'hi' ? '24/7 उपलब्ध' : '24/7 Available'}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-saffron-400 rounded-full" />
              {language === 'hi' ? 'GPS ट्रैक्ड' : 'GPS Tracked'}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              {language === 'hi' ? 'AC वाहन' : 'AC Vehicles'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
