import { Plane, MapPin, Building2, PartyPopper, Brain as Train, Navigation, CheckCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { openWhatsApp, buildServiceEnquiryMessage } from '../utils/whatsapp';

interface ServiceBlockProps {
  icon: React.ElementType;
  name: string;
  desc: string;
  detail: string;
  features: string[];
  ctaLabel: string;
  onEnquire: () => void;
  reverse?: boolean;
  image: string;
}

function ServiceBlock({
  icon: Icon,
  name,
  desc,
  detail,
  features,
  ctaLabel,
  onEnquire,
  reverse,
  image,
}: ServiceBlockProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className={reverse ? 'lg:order-2' : ''}>
        <img
          src={image}
          alt={name}
          className="w-full h-64 md:h-80 object-cover rounded-2xl"
        />
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-saffron-100 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-saffron-600" />
          </div>
          <h2 className="text-2xl font-display font-bold text-charcoal-900">{name}</h2>
        </div>
        <p className="text-charcoal-500 font-medium mb-3">{desc}</p>
        <p className="text-charcoal-600 leading-relaxed mb-5">{detail}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-charcoal-600">
              <CheckCircle className="w-4 h-4 text-forest-500 flex-shrink-0" />
              {f}
            </div>
          ))}
        </div>
        <button
          onClick={onEnquire}
          className="flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

export function ServicesPage() {
  const { language, t } = useLanguage();

  const servicesData = [
    {
      icon: Plane,
      name: translations.services.airport.name,
      desc: translations.services.airport.desc,
      detail: translations.services.airport.detail,
      image: '/cab-images-repository/services/airport-transfer.jpg',
      features:
        language === 'hi'
          ? ['दिल्ली IGI एयरपोर्ट', 'आगरा एयरपोर्ट', 'फ्लाइट ट्रैकिंग', 'मीट & ग्रीट', 'बड़ा सामान स्पेस', 'समय पर पिकअप गारंटी']
          : ['Delhi IGI Airport', 'Agra Airport', 'Flight Tracking', 'Meet & Greet', 'Ample Luggage Space', 'On-time Pickup Guarantee'],
    },
    {
      icon: MapPin,
      name: translations.services.sightseeing.name,
      desc: translations.services.sightseeing.desc,
      detail: translations.services.sightseeing.detail,
      image: '/cab-images-repository/services/local-sightseeing-vrindavan.jpg',
      features:
        language === 'hi'
          ? ['4 क्यूरेटेड पैकेज', 'अनुभवी स्थानीय ड्राइवर', 'कस्टम कार्यक्रम', 'आधा दिन और पूरा दिन', 'मंदिर विशेषज्ञ मार्गदर्शन', 'आरामदायक वाहन']
          : ['4 Curated Packages', 'Experienced Local Drivers', 'Custom Itineraries', 'Half Day & Full Day', 'Temple Expert Guidance', 'Comfortable Vehicles'],
    },
    {
      icon: Building2,
      name: translations.services.corporate.name,
      desc: translations.services.corporate.desc,
      detail: translations.services.corporate.detail,
      image: '/cab-images-repository/services/coroporate-services.jpg',
      features:
        language === 'hi'
          ? ['मासिक पैकेज', 'समर्पित वाहन', 'कर्मचारी परिवहन', 'पेशेवर बिलिंग', 'खाता प्रबंधक', 'लचीले पैकेज']
          : ['Monthly Packages', 'Dedicated Vehicles', 'Employee Transport', 'Professional Billing', 'Account Manager', 'Flexible Packages'],
    },
    {
      icon: PartyPopper,
      name: translations.services.wedding.name,
      desc: translations.services.wedding.desc,
      detail: translations.services.wedding.detail,
      image: '/cab-images-repository/services/wedding-and-events.webp',
      features:
        language === 'hi'
          ? ['सजी कारें', 'बारात वाहन', 'मेहमान परिवहन', 'इवेंट समन्वय', 'लक्ज़री विकल्प', 'बड़ी बसें उपलब्ध']
          : ['Decorated Cars', 'Baraat Vehicles', 'Guest Transport', 'Event Coordination', 'Luxury Options', 'Large Buses Available'],
    },
    {
      icon: Train,
      name: translations.services.railway.name,
      desc: translations.services.railway.desc,
      detail: translations.services.railway.detail,
      image: '/cab-images-repository/services/Mathura_Junction_Railway_Station.jpg',
      features:
        language === 'hi'
          ? ['मथुरा जंक्शन', 'मथुरा कैंट', 'वृंदावन स्टेशन', 'नेम बोर्ड सेवा', 'समय पर गारंटी', 'ट्रेन ट्रैकिंग']
          : ['Mathura Junction', 'Mathura Cantt', 'Vrindavan Station', 'Name Board Service', 'On-time Guarantee', 'Train Tracking'],
    },
    {
      icon: Navigation,
      name: translations.services.outstation.name,
      desc: translations.services.outstation.desc,
      detail: translations.services.outstation.detail,
      image: '/cab-images-repository/services/outstation-tips.jpg',
      features:
        language === 'hi'
          ? ['प्रतिस्पर्धी प्रति-km दरें', 'अनुभवी हाईवे ड्राइवर', 'दिल्ली, राजस्थान, UK', 'हिमाचल, UP रूट', 'राउंड ट्रिप', 'अच्छी तरह रखे वाहन']
          : ['Competitive Per-km Rates', 'Experienced Highway Drivers', 'Delhi, Rajasthan, UK Routes', 'Himachal, UP Routes', 'Round Trip Service', 'Well-maintained Vehicles'],
    },
  ];

  return (
    <>
      <PageHero
        title={t(translations.services.title)}
        subtitle={t(translations.services.subtitle)}
        image="/cab-images-repository/services/local-rental.jpg"
      />

      {servicesData.map((service, i) => (
        <Section key={i} cream={i % 2 === 1}>
          <ServiceBlock
            icon={service.icon}
            name={t(service.name)}
            desc={t(service.desc)}
            detail={t(service.detail)}
            features={service.features}
            image={service.image}
            reverse={i % 2 === 1}
            ctaLabel={t(translations.services.enquireNow)}
            onEnquire={() =>
              openWhatsApp(buildServiceEnquiryMessage(language, t(service.name)))
            }
          />
        </Section>
      ))}

      <section className="py-16 bg-saffron-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            {language === 'hi'
              ? 'जो सेवा चाहिए वो नहीं मिली?'
              : "Don't see what you need?"}
          </h2>
          <p className="text-saffron-100 mb-6">
            {language === 'hi'
              ? 'हम कस्टम आवश्यकताओं को भी पूरा करते हैं। बस हमसे संपर्क करें!'
              : 'We handle custom requirements too. Just reach out!'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-saffron-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-cream-50 transition-colors"
          >
            {t(translations.common.contactUs)}
          </Link>
        </div>
      </section>
    </>
  );
}
