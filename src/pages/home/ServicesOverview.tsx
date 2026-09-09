import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

const services = [
  {
    image: '/cab-images-repository/services/airport-transfer.jpg',
    name: translations.services.airport.name,
    desc: translations.services.airport.desc,
  },
  {
    image: '/cab-images-repository/services/local-sightseeing-vrindavan.jpg',
    name: translations.services.sightseeing.name,
    desc: translations.services.sightseeing.desc,
  },
  {
    image: '/cab-images-repository/services/coroporate-services.jpg',
    name: translations.services.corporate.name,
    desc: translations.services.corporate.desc,
  },
  {
    image: '/cab-images-repository/services/wedding-and-events.webp',
    name: translations.services.wedding.name,
    desc: translations.services.wedding.desc,
  },
  {
    image: '/cab-images-repository/services/Mathura_Junction_Railway_Station.jpg',
    name: translations.services.railway.name,
    desc: translations.services.railway.desc,
  },
  {
    image: '/cab-images-repository/services/outstation-tips.jpg',
    name: translations.services.outstation.name,
    desc: translations.services.outstation.desc,
  },
];

export function ServicesOverview() {
  const { t } = useLanguage();

  return (
    <Section>
      <SectionHeader
        title={t(translations.services.title)}
        subtitle={t(translations.services.subtitle)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Link
            key={i}
            to="/services"
            className="group relative rounded-2xl overflow-hidden bg-charcoal-900 shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={t(service.name)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-900/40 to-transparent transition-opacity duration-300" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-1 h-5 rounded-full bg-saffron-500" />
                <h3 className="font-display font-semibold text-white text-lg group-hover:text-saffron-300 transition-colors duration-300">
                  {t(service.name)}
                </h3>
              </div>
              <p className="text-sm text-charcoal-300 leading-relaxed pl-3 line-clamp-2">
                {t(service.desc)}
              </p>
              <div className="flex items-center gap-1.5 mt-3 pl-3 text-saffron-400 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span>{t(translations.services.learnMore)}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-500 hover:bg-saffron-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          {t(translations.common.viewAll)}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
