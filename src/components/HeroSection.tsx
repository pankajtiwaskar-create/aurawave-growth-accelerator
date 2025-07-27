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
      {/* 3D Spline Background - Fixed positioning to prevent scrolling */}
      {isHeroVisible && (
        <div 
          className="fixed inset-0 w-full h-full z-0"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
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
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center mt-auto mb-8">
        {/* Small header badge */}
        
        
        {/* Main heading */}
        <h1 className="hero-text-light text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{
        animationDelay: '0.1s'
      }}>
          Trade Smarter with{' '}
          <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            AI-
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Powered
          </span>{' '}
          Media Campaigns
        </h1>
        
        {/* Subheading */}
        <p className="hero-text-light text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          AuraWave combines artificial intelligence with cutting-edge media 
          strategies to help you maximize your Southeast Asia investments with precision 
          and ease.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{
        animationDelay: '0.3s'
      }}>
          <Button size="lg" onClick={() => scrollToSection('contact')} className="btn-hero text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300">
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