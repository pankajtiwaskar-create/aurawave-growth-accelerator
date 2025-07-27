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
  useEffect(() => {
    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebglSupported(false);
    }
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer 
          url="https://prod.spline.design/4801VJdy440W2CV4/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        ></spline-viewer>
      </div>
      
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50 pointer-events-none"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        {/* Small header badge */}
        
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{
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
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{
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

      {/* Glowing Digital Globe at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-scale-in" style={{
      animationDelay: '0.5s'
    }}>
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
          {/* Globe base */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-purple-500/20 to-transparent rounded-full blur-xl"></div>
          
          {/* Globe surface */}
          <div className="absolute inset-4 bg-gradient-to-br from-primary/40 via-purple-500/30 to-blue-500/20 rounded-full opacity-80 animate-pulse"></div>
          
          {/* Globe glow */}
          <div className="absolute inset-8 bg-gradient-to-t from-primary/60 via-purple-500/40 to-transparent rounded-full animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          
          {/* Grid lines */}
          <div className="absolute inset-12 border border-primary/30 rounded-full"></div>
          <div className="absolute inset-16 border border-purple-500/20 rounded-full"></div>
          
          {/* Tech particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{
          animationDelay: '0.5s'
        }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" style={{
          animationDelay: '1s'
        }}></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;