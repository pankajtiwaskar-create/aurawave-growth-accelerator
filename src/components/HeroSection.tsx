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
  return <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Background with ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-primary/5"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        {/* Small header badge */}
        <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 animate-fade-in-up">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            NEXT GENERATION OF PAID MEDIA
          </span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
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
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          AuraWave combines artificial intelligence with cutting-edge media 
          strategies to help you maximize your Southeast Asia investments with precision 
          and ease.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')} 
            className="btn-hero text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/10 backdrop-blur-sm"
          >
            Learn how it works
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative bg-background/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-1 shadow-2xl">
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">A</span>
                  </div>
                  <span className="text-foreground font-semibold">AuraWave</span>
                </div>
                <div className="text-sm text-muted-foreground">Dashboard</div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">$32,485.27</div>
                  <div className="text-sm text-muted-foreground">Total Revenue</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">$9,842.50</div>
                  <div className="text-sm text-muted-foreground">Active Campaigns</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">12</div>
                  <div className="text-sm text-muted-foreground">Campaigns</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">$4,280.00</div>
                  <div className="text-sm text-muted-foreground">Wallet Balance</div>
                </div>
              </div>
              
              {/* Chart placeholder */}
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-lg p-4 h-32">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Performance Chart</span>
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div className="h-20 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glowing Digital Globe at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-scale-in" style={{ animationDelay: '0.5s' }}>
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
          {/* Globe base */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-purple-500/20 to-transparent rounded-full blur-xl"></div>
          
          {/* Globe surface */}
          <div className="absolute inset-4 bg-gradient-to-br from-primary/40 via-purple-500/30 to-blue-500/20 rounded-full opacity-80 animate-pulse"></div>
          
          {/* Globe glow */}
          <div className="absolute inset-8 bg-gradient-to-t from-primary/60 via-purple-500/40 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Grid lines */}
          <div className="absolute inset-12 border border-primary/30 rounded-full"></div>
          <div className="absolute inset-16 border border-purple-500/20 rounded-full"></div>
          
          {/* Tech particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;