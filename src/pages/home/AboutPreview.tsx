import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { Section } from '../../components/ui/Section';

export function AboutPreview() {
  const { t } = useLanguage();

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img
            src="/our-story-vrindavan.webp"
            alt="Vrindavan Cab Service"
            className="rounded-2xl w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute -bottom-4 -right-4 bg-saffron-500 text-white rounded-xl px-5 py-3 shadow-lg">
            <p className="text-2xl font-bold">12+</p>
            <p className="text-xs">{t(translations.stats.years)}</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
            {t(translations.about.ourStory)}
          </h2>
          <div className="w-16 h-1 bg-saffron-500 rounded-full mb-6" />
          <p className="text-charcoal-600 leading-relaxed mb-4">
            {t(translations.about.storyText)}
          </p>
          <p className="text-charcoal-600 leading-relaxed mb-6">
            {t(translations.about.storyText2)}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            {t(translations.common.readMore)}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
