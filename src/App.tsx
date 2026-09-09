import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { FleetPage } from './pages/FleetPage';
import { PackagesPage } from './pages/PackagesPage';
import { OutstationPage } from './pages/OutstationPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/outstation" element={<OutstationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
