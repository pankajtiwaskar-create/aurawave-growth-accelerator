import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';

// TypeScript declaration for spline-viewer web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}
const HeroSection = () => {
  const [splineError, setSplineError] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  
  useEffect(() => {
    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebglSupported(false);
    }

    // Track scroll position to hide globe when not in hero section
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        setIsHeroVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex flex-col relative overflow-hidden bg-gray-900">
      {/* 3D Spline Background - Scrolls with page, 25% larger */}
      {isHeroVisible && (
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            willChange: 'transform',
            transform: 'scale(1.25) translateZ(0)',
            backfaceVisibility: 'hidden',
            contain: 'layout style paint'
          }}
        >
          <spline-viewer 
            url="https://prod.spline.design/4801VJdy440W2CV4/scene.splinecode"
            style={{ 
              width: '100%', 
              height: '100%', 
              pointerEvents: 'none',
              transformStyle: 'preserve-3d'
            }}
          ></spline-viewer>
        </div>
      )}
      
      {/* Dark overlay for consistent dark theme */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Main Content */}
      <div className="content-container relative z-10 text-center mt-auto mb-lg">
        {/* Small header badge */}
        
        
        {/* Main heading */}
        <h1 className="animate-fade-in-up text-gray-100 font-outfit mb-2xl text-5xl md:text-6xl" style={{
        animationDelay: '0.1s',
        textShadow: '0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(147, 51, 234, 0.1)'
      }}>
          Scale Your Business with AI-Powered
          <br />
          Media Campaigns That Actually Convert
        </h1>
        
        {/* Subheading */}
        <p className="hero-text-light text-xl mb-md max-w-3xl mx-auto animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          Aurawave is the retainer-based media agency that combines cutting-edge AI technology with proven marketing strategies to deliver consistent, measurable growth for your business—month after month.
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-md justify-center mb-2xl animate-fade-in-up" style={{
        animationDelay: '0.3s'
      }}>
          <Button size="primary" onClick={() => scrollToSection('contact')} className="btn-primary">
            Get Started
          </Button>
          
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-4xl mx-auto animate-scale-in" style={{
        animationDelay: '0.4s'
      }}>
          
        </div>
      </div>
    </section>;
};
export default HeroSection;