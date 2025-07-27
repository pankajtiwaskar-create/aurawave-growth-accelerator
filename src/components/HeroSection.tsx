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
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-pattern">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-glow/10 rounded-full animate-float" style={{
      animationDelay: '4s'
    }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center animate-fade-in-up mx-[10px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Accelerate Growth with{' '}
              <span className="text-glow">Paid Media</span>{' '}
              That Delivers
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Helping ambitious brands win across Southeast Asia with data-driven campaigns, 
              AI-powered optimization, and proven performance strategies.
            </p>

            <div className="flex justify-center">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="btn-hero text-lg px-8 py-4 text-gray-50">
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-scale-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative">
              {webglSupported && !splineError ? (
                <Spline
                  scene="https://prod.spline.design/Gcf-Qg0h2WFothfj/scene.splinecode"
                  className="w-full h-[500px] lg:h-[600px]"
                  onError={() => setSplineError(true)}
                />
              ) : (
                <div className="w-full h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">3D Animation</h3>
                    <p className="text-muted-foreground">WebGL not supported on this device</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;