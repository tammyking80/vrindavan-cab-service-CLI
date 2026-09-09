import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { galleryImages } from '../../data/gallery';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

export function GalleryPreview() {
  const { t } = useLanguage();
  const preview = galleryImages.slice(0, 8);

  return (
    <Section>
      <SectionHeader
        title={t(translations.gallery.title)}
        subtitle={t(translations.gallery.subtitle)}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {preview.map((img) => (
          <div key={img.id} className="relative group overflow-hidden rounded-xl aspect-square">
            <img
              src={img.src}
              alt={t(img.alt)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/30 transition-all duration-300" />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-semibold transition-colors"
        >
          {t(translations.common.viewAll)} &rarr;
        </Link>
      </div>
    </Section>
  );
}
