import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutAurawaveSection from '@/components/AboutAurawaveSection';
import AboutSection from '@/components/AboutSection';
import FounderSection from '@/components/FounderSection';
import ServicesSection from '@/components/ServicesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutAurawaveSection />
        <AboutSection />
        <FounderSection />
        <ServicesSection />
        <HowWeWorkSection />
        <PricingSection />
        <CTASection />
        <ContactSection />
        
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
