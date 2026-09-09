import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { faqData } from '../../data/faq';
import { Accordion } from '../../components/ui/Accordion';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

export function FaqPreview() {
  const { t } = useLanguage();
  const preview = faqData.slice(0, 5);

  return (
    <Section cream>
      <SectionHeader
        title={t(translations.faq.title)}
        subtitle={t(translations.faq.subtitle)}
      />
      <div className="max-w-3xl mx-auto">
        <Accordion
          items={preview.map((faq) => ({
            question: t(faq.question),
            answer: t(faq.answer),
          }))}
        />
        <div className="text-center mt-8">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-semibold transition-colors"
          >
            {t(translations.common.viewAll)} &rarr;
          </Link>
        </div>
      </div>
    </Section>
  );
}
