import { Car, MessageCircle, Smile } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { icon: Car, title: t(translations.howItWorks.step1), desc: t(translations.howItWorks.step1Desc), num: '01' },
    { icon: MessageCircle, title: t(translations.howItWorks.step2), desc: t(translations.howItWorks.step2Desc), num: '02' },
    { icon: Smile, title: t(translations.howItWorks.step3), desc: t(translations.howItWorks.step3Desc), num: '03' },
  ];

  return (
    <Section>
      <SectionHeader title={t(translations.howItWorks.title)} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-saffron-200" />
              )}
              <div className="relative inline-flex">
                <div className="w-24 h-24 bg-saffron-50 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-saffron-600" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-saffron-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {step.num}
                </span>
              </div>
              <h3 className="font-display font-semibold text-charcoal-900 mb-2">{step.title}</h3>
              <p className="text-sm text-charcoal-500">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
