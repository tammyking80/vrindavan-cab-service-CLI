import { HeroSection } from './home/HeroSection';
import { BookingWidget } from './home/BookingWidget';
import { StatsSection } from './home/StatsSection';
import { ServicesOverview } from './home/ServicesOverview';
import { FleetShowcase } from './home/FleetShowcase';
import { PopularRoutes } from './home/PopularRoutes';
import { PackagesPreview } from './home/PackagesPreview';
import { PricingPreview } from './home/PricingPreview';
import { WhyChooseUs } from './home/WhyChooseUs';
import { HowItWorks } from './home/HowItWorks';
import { TestimonialsSection } from './home/TestimonialsSection';
import { AboutPreview } from './home/AboutPreview';
import { GalleryPreview } from './home/GalleryPreview';
import { CoverageArea } from './home/CoverageArea';
import { FaqPreview } from './home/FaqPreview';
import { CtaBanner } from './home/CtaBanner';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <BookingWidget />
      <StatsSection />
      <ServicesOverview />
      <FleetShowcase />
      <PopularRoutes />
      <PackagesPreview />
      <PricingPreview />
      <WhyChooseUs />
      <HowItWorks />
      <AboutPreview />
      <TestimonialsSection />
      <GalleryPreview />
      <CoverageArea />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
