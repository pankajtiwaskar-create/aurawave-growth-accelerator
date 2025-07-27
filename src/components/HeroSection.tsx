import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
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
  return <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        {webglSupported && !splineError ? (
          <Spline
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            onError={() => setSplineError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-background via-primary/5 to-purple-500/10"></div>
        )}
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80"></div>
      </div>

      {/* Content positioned above the 3D background */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 lg:px-8">
        <div className="container mx-auto text-center pt-20 pb-20">
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
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
            AuraWave combines artificial intelligence with cutting-edge media 
            strategies to help you maximize your Southeast Asia investments with precision 
            and ease.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
            animationDelay: '0.3s'
          }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')} 
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-primary/25 transition-all duration-300 backdrop-blur-sm"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;