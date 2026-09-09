import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { galleryImages } from '../data/gallery';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { getWhatsAppUrl, buildGreetingMessage } from '../utils/whatsapp';

const categories = [
  { key: 'all', label: translations.gallery.all },
  { key: 'gallery', label: translations.gallery.photos },
  { key: 'vehicles', label: translations.gallery.vehicles },
  { key: 'vrindavan', label: translations.gallery.vrindavan },
  { key: 'trips', label: translations.gallery.trips },
  { key: 'events', label: translations.gallery.events },
];

export function GalleryPage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null
    );
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      <PageHero
        title={t(translations.gallery.title)}
        subtitle={t(translations.gallery.subtitle)}
        image="/cab-images-repository/outstation-destinations/mathura-vrindawan.avif"
      />

      <Section>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveFilter(cat.key);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat.key
                  ? 'bg-saffron-500 text-white shadow-md'
                  : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
              }`}
            >
              {t(cat.label)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((img, i) => (
            <button
              key={img.id}
              onClick={() => openLightbox(i)}
              className="relative group overflow-hidden rounded-xl aspect-square focus:outline-none focus:ring-2 focus:ring-saffron-400"
            >
              <img
                src={img.src}
                alt={t(img.alt)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t(img.alt)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </Section>

      <section className="py-16 bg-saffron-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            {language === 'hi'
              ? 'अपनी खुद की यादें बनाएं!'
              : 'Create Your Own Memories!'}
          </h2>
          <p className="text-saffron-100 mb-6">
            {language === 'hi'
              ? 'आज ही अपनी सवारी बुक करें और वृंदावन की खूबसूरती का अनुभव करें'
              : 'Book your ride today and experience the beauty of Vrindavan'}
          </p>
          <a
            href={getWhatsAppUrl(buildGreetingMessage(language))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-saffron-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-cream-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {t(translations.common.bookNow)}
          </a>
        </div>
      </section>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="fixed inset-0 z-[100] bg-charcoal-950/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={t(filtered[lightboxIndex].alt)}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
          />
          <p className="absolute bottom-6 text-white text-sm font-medium">
            {t(filtered[lightboxIndex].alt)} &mdash; {lightboxIndex + 1}/{filtered.length}
          </p>
        </div>
      )}
    </>
  );
}
