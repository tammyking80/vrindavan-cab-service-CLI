import { User, Target, Eye, Heart, Shield, Banknote, Users, Award, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

function StatBlock({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-display font-bold text-saffron-500">
        {count}{suffix}
      </p>
      <p className="text-sm text-charcoal-500 mt-1">{label}</p>
    </div>
  );
}

export function AboutPage() {
  const { language, t } = useLanguage();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const timeline = [
    {
      year: '2012',
      title: language === 'hi' ? 'शुरुआत' : 'Founded',
      desc: language === 'hi'
        ? 'अरविंद चौधरी ने कुछ वाहनों के साथ वृंदावन कैब सर्विस की शुरुआत की'
        : 'Arvind Chaudhary started Vrindavan Cab Service with a few vehicles',
    },
    {
      year: '2015',
      title: language === 'hi' ? 'बेड़े का विस्तार' : 'Fleet Expansion',
      desc: language === 'hi'
        ? 'SUV और टेम्पो ट्रैवलर जोड़कर बेड़े का विस्तार किया'
        : 'Expanded fleet with SUVs and Tempo Travellers',
    },
    {
      year: '2018',
      title: language === 'hi' ? 'बाहरी सेवा शुरू' : 'Outstation Service Launch',
      desc: language === 'hi'
        ? 'दिल्ली, राजस्थान, उत्तराखंड के लिए बाहरी सेवा शुरू की'
        : 'Launched outstation services to Delhi, Rajasthan, Uttarakhand',
    },
    {
      year: '2020',
      title: language === 'hi' ? 'कॉर्पोरेट सेवा' : 'Corporate Services',
      desc: language === 'hi'
        ? 'व्यावसायिक ग्राहकों के लिए कॉर्पोरेट रेंटल सेवा शुरू की'
        : 'Introduced corporate rental service for business clients',
    },
    {
      year: '2022',
      title: language === 'hi' ? '10 साल पूरे' : '10 Years Milestone',
      desc: language === 'hi'
        ? '10,000+ खुश ग्राहकों और 50+ वाहनों के साथ दशक पूरा किया'
        : 'Completed a decade with 10,000+ happy customers and 50+ vehicles',
    },
    {
      year: '2024',
      title: language === 'hi' ? 'प्रीमियम बेड़ा' : 'Premium Fleet',
      desc: language === 'hi'
        ? 'अर्बेनिया और वॉल्वो बस को बेड़े में जोड़ा'
        : 'Added Urbania and Volvo Bus to the fleet',
    },
  ];

  const values = [
    { icon: Shield, title: language === 'hi' ? 'सुरक्षा' : 'Safety', desc: language === 'hi' ? 'आपकी सुरक्षा हमारी सर्वोच्च प्राथमिकता' : 'Your safety is our highest priority' },
    { icon: Star, title: language === 'hi' ? 'विश्वसनीयता' : 'Reliability', desc: language === 'hi' ? 'समय पर, हर बार' : 'On time, every time' },
    { icon: Eye, title: language === 'hi' ? 'पारदर्शिता' : 'Transparency', desc: language === 'hi' ? 'कोई छिपे शुल्क या आश्चर्य नहीं' : 'No hidden charges or surprises' },
    { icon: Heart, title: language === 'hi' ? 'आराम' : 'Comfort', desc: language === 'hi' ? 'साफ, आरामदायक वाहन' : 'Clean, comfortable vehicles' },
    { icon: Banknote, title: language === 'hi' ? 'किफायती' : 'Affordability', desc: language === 'hi' ? 'क्षेत्र में सबसे अच्छी दरें' : 'Best rates in the region' },
    { icon: Users, title: language === 'hi' ? 'ग्राहक प्रथम' : 'Customer First', desc: language === 'hi' ? 'आपकी संतुष्टि ही हमारा लक्ष्य' : 'Your satisfaction is our goal' },
  ];

  return (
    <>
      <PageHero
        title={t(translations.about.title)}
        subtitle={t(translations.about.subtitle)}
        image="/cab-images-repository/outstation-destinations/mathura-vrindawan.avif"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-4">
              {t(translations.about.ourStory)}
            </h2>
            <div className="w-16 h-1 bg-saffron-500 rounded-full mb-6" />
            <p className="text-charcoal-600 leading-relaxed mb-4">
              {t(translations.about.storyText)}
            </p>
            <p className="text-charcoal-600 leading-relaxed">
              {t(translations.about.storyText2)}
            </p>
          </div>
          <img
            src="/our-story-vrindavan.webp"
            alt="Our Story"
            className="rounded-2xl w-full h-72 md:h-96 object-cover"
          />
        </div>
      </Section>

      <Section cream>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
            <Target className="w-10 h-10 text-saffron-500 mb-4" />
            <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3">
              {t(translations.about.mission)}
            </h3>
            <p className="text-charcoal-600 leading-relaxed">{t(translations.about.missionText)}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
            <Eye className="w-10 h-10 text-saffron-500 mb-4" />
            <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3">
              {t(translations.about.vision)}
            </h3>
            <p className="text-charcoal-600 leading-relaxed">{t(translations.about.visionText)}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title={t(translations.about.founder)} />
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-charcoal-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-saffron-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <User className="w-16 h-16 text-saffron-500" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-1">
                {t(translations.about.founderName)}
              </h3>
              <p className="text-saffron-600 font-medium mb-4">{t(translations.about.founderRole)}</p>
              <p className="text-charcoal-600 leading-relaxed">{t(translations.about.founderBio)}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section cream>
        <SectionHeader title={t(translations.about.journey)} />
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-saffron-200 -translate-x-1/2" />
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex gap-6 mb-8 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center z-10">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 bg-white rounded-xl p-5 border border-charcoal-100 shadow-sm">
                  <span className="inline-block bg-saffron-100 text-saffron-700 text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-semibold text-charcoal-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-charcoal-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section ref={statsRef} className="py-16 bg-charcoal-900">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBlock value={12} suffix="+" label={language === 'hi' ? 'वर्षों का अनुभव' : 'Years Experience'} start={statsVisible} />
          <StatBlock value={25000} suffix="+" label={language === 'hi' ? 'यात्राएं पूरी' : 'Trips Completed'} start={statsVisible} />
          <StatBlock value={50} suffix="+" label={language === 'hi' ? 'वाहन' : 'Vehicles'} start={statsVisible} />
          <StatBlock value={100} suffix="+" label={language === 'hi' ? 'शहर कवर' : 'Cities Covered'} start={statsVisible} />
        </div>
      </section>

      <Section>
        <SectionHeader title={t(translations.about.values)} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="text-center p-6 rounded-2xl bg-cream-50 border border-charcoal-100 hover:border-saffron-300 transition-colors">
                <div className="w-14 h-14 bg-saffron-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-saffron-600" />
                </div>
                <h3 className="font-semibold text-charcoal-900 mb-1">{val.title}</h3>
                <p className="text-sm text-charcoal-500">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
