import {
  Shield,
  Clock,
  BadgeCheck,
  Banknote,
  Headphones,
  Navigation,
  Sparkles,
  Users,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

export function WhyChooseUs() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: language === 'hi' ? 'सुरक्षित यात्रा' : 'Safe Travel',
      desc: language === 'hi' ? 'सत्यापित ड्राइवर और GPS ट्रैक्ड वाहन' : 'Verified drivers & GPS tracked vehicles',
    },
    {
      icon: Clock,
      title: language === 'hi' ? '24/7 उपलब्ध' : '24/7 Available',
      desc: language === 'hi' ? 'साल के हर दिन, दिन-रात सेवा' : 'Round-the-clock service, every day of the year',
    },
    {
      icon: BadgeCheck,
      title: language === 'hi' ? 'अनुभवी ड्राइवर' : 'Experienced Drivers',
      desc: language === 'hi' ? 'स्थानीय और हाईवे मार्गों के जानकार' : 'Expert in local & highway routes',
    },
    {
      icon: Banknote,
      title: language === 'hi' ? 'कोई छिपे शुल्क नहीं' : 'No Hidden Charges',
      desc: language === 'hi' ? 'पारदर्शी मूल्य निर्धारण, बिल में कोई आश्चर्य नहीं' : 'Transparent pricing with no bill surprises',
    },
    {
      icon: Sparkles,
      title: language === 'hi' ? 'स्वच्छ वाहन' : 'Clean Vehicles',
      desc: language === 'hi' ? 'नियमित रूप से सर्विस और सैनिटाइज़ किए गए' : 'Regularly serviced & sanitized fleet',
    },
    {
      icon: Navigation,
      title: language === 'hi' ? 'GPS ट्रैक्ड' : 'GPS Tracked',
      desc: language === 'hi' ? 'सभी वाहन रियल-टाइम GPS से लैस' : 'All vehicles equipped with real-time GPS',
    },
    {
      icon: Headphones,
      title: language === 'hi' ? 'बहुभाषी सहायता' : 'Multilingual Support',
      desc: language === 'hi' ? 'हिंदी और अंग्रेजी में सहायता' : 'Support available in Hindi & English',
    },
    {
      icon: Users,
      title: language === 'hi' ? 'किफायती दरें' : 'Affordable Rates',
      desc: language === 'hi' ? 'क्षेत्र में सबसे प्रतिस्पर्धी कीमतें' : 'Most competitive prices in the region',
    },
  ];

  return (
    <Section dark>
      <SectionHeader
        title={t(translations.whyUs.title)}
        subtitle={t(translations.whyUs.subtitle)}
        light
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-2xl bg-charcoal-800/50 border border-charcoal-700/50 hover:border-saffron-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-saffron-500/10 group-hover:bg-saffron-500/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Icon className="w-6 h-6 text-saffron-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-charcoal-400">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
