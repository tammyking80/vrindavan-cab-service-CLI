import { useState } from 'react';
import { Phone, MessageCircle, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { faqData, faqCategories } from '../data/faq';
import { testimonials } from '../data/testimonials';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Accordion } from '../components/ui/Accordion';
import { getWhatsAppUrl, buildGreetingMessage } from '../utils/whatsapp';

export function FaqPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((faq) => faq.category === activeCategory);

  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <>
      <PageHero
        title={t(translations.faq.title)}
        subtitle={t(translations.faq.subtitle)}
        image="/cab-images-repository/outstation-destinations/mathura.webp"
      />

      <Section>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-saffron-500 text-white shadow-md'
                  : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
              }`}
            >
              {t(cat.label)}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            items={filtered.map((faq) => ({
              question: t(faq.question),
              answer: t(faq.answer),
            }))}
          />
        </div>
      </Section>

      <Section cream>
        <SectionHeader
          title={t(translations.testimonials.title)}
          subtitle={t(translations.testimonials.subtitle)}
        />
        <div className="max-w-lg mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-8 h-8 ${
                  i < Math.round(avgRating) ? 'text-saffron-400 fill-saffron-400' : 'text-charcoal-200'
                }`}
              />
            ))}
          </div>
          <p className="text-3xl font-bold text-charcoal-900">
            {avgRating.toFixed(1)} / 5.0
          </p>
          <p className="text-charcoal-500 text-sm mt-1">
            {language === 'hi'
              ? `${testimonials.length} समीक्षाओं पर आधारित`
              : `Based on ${testimonials.length} reviews`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-charcoal-100 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-saffron-400 fill-saffron-400' : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
                "{t(review.text)}"
              </p>
              <div className="border-t border-charcoal-100 pt-3">
                <p className="font-semibold text-charcoal-800 text-sm">{t(review.name)}</p>
                <p className="text-xs text-charcoal-400">{t(review.trip)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-16 bg-charcoal-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            {t(translations.faq.stillQuestions)}
          </h2>
          <p className="text-charcoal-400 mb-8">
            {t(translations.faq.stillQuestionsDesc)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl(buildGreetingMessage(language))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="tel:+919821164208"
              className="flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              {t(translations.cta.callNow)}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
