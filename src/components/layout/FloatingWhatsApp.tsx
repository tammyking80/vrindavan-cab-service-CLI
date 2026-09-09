import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getWhatsAppUrl, buildGreetingMessage } from '../../utils/whatsapp';

export function FloatingWhatsApp() {
  const { language } = useLanguage();
  const url = getWhatsAppUrl(buildGreetingMessage(language));

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-20 lg:bottom-6 z-40 w-14 h-14 bg-forest-500 hover:bg-forest-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </a>
  );
}
