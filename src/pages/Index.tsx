import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ResearchSection from '@/components/sections/ResearchSection';
import TechnologySection from '@/components/sections/TechnologySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ResearchSection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
