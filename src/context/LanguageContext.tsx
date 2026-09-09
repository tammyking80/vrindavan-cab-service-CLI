import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { type Language } from '../data/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (obj: Record<string, string> | { en: string; hi: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  }, []);

  const t = useCallback(
    (obj: Record<string, string> | { en: string; hi: string }) => {
      return obj[language] || obj['en'] || '';
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
