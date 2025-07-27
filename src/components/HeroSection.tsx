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
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Small header text */}
            <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                NEXT GENERATION OF PAID MEDIA
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Accelerate Growth with{' '}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                AI-
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Powered Media Campaigns
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              AuraWave combines artificial intelligence with cutting-edge media 
              strategies to help you maximize your Southeast Asia investments with precision 
              and ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="btn-hero text-lg px-8 py-4">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/10">
                Learn how it works
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