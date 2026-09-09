import { useLanguage } from '../../context/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center h-8 w-[72px] rounded-full bg-charcoal-100 p-0.5 transition-colors hover:bg-charcoal-200"
      aria-label="Toggle language"
    >
      <div
        className={`absolute h-7 w-9 rounded-full bg-saffron-500 shadow-sm transition-transform duration-300 ${
          language === 'hi' ? 'translate-x-[32px]' : 'translate-x-0'
        }`}
      />
      <span
        className={`relative z-10 flex-1 text-center text-xs font-bold transition-colors ${
          language === 'en' ? 'text-white' : 'text-charcoal-600'
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex-1 text-center text-xs font-bold transition-colors ${
          language === 'hi' ? 'text-white' : 'text-charcoal-600'
        }`}
      >
        HI
      </span>
    </button>
  );
}
