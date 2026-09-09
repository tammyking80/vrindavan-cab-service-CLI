import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal-950 text-charcoal-300 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-saffron-500 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg block leading-tight">
                  Vrindavan
                </span>
                <span className="text-saffron-400 text-sm font-medium block -mt-0.5">
                  Cab Service
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              {t(translations.footer.tagline)}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-saffron-400" />
              <span>{t(translations.contact.available247)}</span>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              {t(translations.footer.quickLinks)}
            </h3>
            <ul className="space-y-2.5">
              {[
                { path: '/about', label: translations.nav.about },
                { path: '/services', label: translations.nav.services },
                { path: '/fleet', label: translations.nav.fleet },
                { path: '/packages', label: translations.nav.packages },
                { path: '/outstation', label: translations.nav.outstation },
                { path: '/gallery', label: translations.nav.gallery },
                { path: '/faq', label: translations.nav.faq },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-saffron-400 transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              {t(translations.footer.ourServices)}
            </h3>
            <ul className="space-y-2.5">
              {[
                translations.services.airport.name,
                translations.services.sightseeing.name,
                translations.services.corporate.name,
                translations.services.wedding.name,
                translations.services.railway.name,
                translations.services.outstation.name,
              ].map((label, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-sm hover:text-saffron-400 transition-colors"
                  >
                    {t(label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              {t(translations.footer.contactInfo)}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-saffron-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>9821164208 - Arvind Chaudhary ({t(translations.common.primary)})</p>
                  <p>9758737032 - Jayveer Chaudhary ({t(translations.common.secondary)})</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-saffron-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@vrindavancabs.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-saffron-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t(translations.contact.address)}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-6 text-center">
          <p className="text-sm text-charcoal-500">
            &copy; {t(translations.footer.rights)}
          </p>
        </div>
      </div>
    </footer>
  );
}
