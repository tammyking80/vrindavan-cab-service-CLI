import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Car, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const tabs = [
  { path: '/', icon: Home, label: translations.nav.home },
  { path: '/services', icon: Briefcase, label: translations.nav.services },
  { path: '/fleet', icon: Car, label: translations.nav.fleet },
  { path: '/packages', icon: MapPin, label: translations.nav.packages },
  { path: '/contact', icon: Phone, label: translations.nav.contact },
];

export function BottomNav() {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-charcoal-100 safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1 transition-colors ${
                isActive ? 'text-saffron-600' : 'text-charcoal-400'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-all ${
                  isActive ? 'bg-saffron-50 scale-110' : ''
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-medium">{t(tab.label)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
