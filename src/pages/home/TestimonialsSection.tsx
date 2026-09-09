import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { testimonials } from '../../data/testimonials';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const visible = testimonials.slice(current * perPage, current * perPage + perPage);

  return (
    <Section cream>
      <SectionHeader
        title={t(translations.testimonials.title)}
        subtitle={t(translations.testimonials.subtitle)}
      />
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 text-saffron-400 fill-saffron-400" />
          ))}
        </div>
        <span className="text-2xl font-bold text-charcoal-900">4.9</span>
        <span className="text-sm text-charcoal-500">{t({ en: 'on Google', hi: 'गूगल पर' })}</span>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((review) => (
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

        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + totalPages) % totalPages)}
            className="w-9 h-9 rounded-full border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:border-saffron-400 hover:text-saffron-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? 'bg-saffron-500 w-6' : 'bg-charcoal-300'
              }`}
            />
          ))}
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % totalPages)}
            className="w-9 h-9 rounded-full border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:border-saffron-400 hover:text-saffron-600 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://share.google/Q1iUA5PMFasq1qAGw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-semibold transition-colors"
          >
            {t({ en: 'View all reviews on Google', hi: 'गूगल पर सभी समीक्षाएं देखें' })}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
