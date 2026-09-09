import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Car } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { LanguageToggle } from './LanguageToggle';

const navLinks = [
  { path: '/', label: translations.nav.home },
  { path: '/services', label: translations.nav.services },
  { path: '/fleet', label: translations.nav.fleet },
  { path: '/packages', label: translations.nav.packages },
  { path: '/outstation', label: translations.nav.outstation },
  { path: '/about', label: translations.nav.about },
  { path: '/gallery', label: translations.nav.gallery },
  { path: '/contact', label: translations.nav.contact },
  { path: '/faq', label: translations.nav.faq },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-saffron-500 rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-charcoal-900 text-sm sm:text-base block">
                Vrindavan
              </span>
              <span className="text-saffron-600 text-xs font-medium -mt-1 block">
                Cab Service
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-saffron-600 bg-saffron-50'
                    : 'text-charcoal-600 hover:text-saffron-600 hover:bg-saffron-50/50'
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a
              href="tel:+919821164208"
              className="hidden sm:flex items-center gap-1.5 bg-saffron-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-saffron-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">{t(translations.hero.callUs)}</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-charcoal-700 hover:bg-charcoal-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-charcoal-100 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-saffron-600 bg-saffron-50'
                    : 'text-charcoal-700 hover:bg-charcoal-50'
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
            <a
              href="tel:+919821164208"
              className="flex items-center gap-2 px-4 py-3 mt-2 bg-saffron-500 text-white rounded-lg text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              {t(translations.hero.callUs)} - 9821164208
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
