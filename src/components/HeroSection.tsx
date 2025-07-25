import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-pattern">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Accelerate Growth with{' '}
              <span className="text-glow">Paid Media</span>{' '}
              That Delivers
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Helping ambitious brands win across Southeast Asia with data-driven campaigns, 
              AI-powered optimization, and proven performance strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="btn-hero text-lg px-8 py-4"
              >
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="btn-ghost text-lg px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Device Mockup */}
              <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[480px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-[3rem] shadow-2xl transform rotate-6 animate-float">
                  {/* Screen */}
                  <div className="absolute top-6 left-6 right-6 bottom-6 bg-gradient-primary rounded-[2rem] p-6 flex flex-col justify-center items-center text-white">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">ROI Dashboard</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Meta Ads</span>
                          <span className="text-green-300">+247%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Google Ads</span>
                          <span className="text-green-300">+189%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>TikTok Ads</span>
                          <span className="text-green-300">+312%</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-white/20 rounded-lg">
                        <p className="text-sm">Total ROAS: 4.2x</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tablet Behind */}
                <div className="absolute -top-8 -right-8 w-64 h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-2xl shadow-xl transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="absolute top-4 left-4 right-4 bottom-4 bg-gradient-accent rounded-xl p-4 text-white">
                    <h4 className="text-lg font-semibold mb-2">Campaign Analytics</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Impressions</span>
                        <span>2.4M</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Clicks</span>
                        <span>156K</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conversions</span>
                        <span>8.2K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-card animate-pulse-glow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$50M+</div>
                  <div className="text-sm text-muted-foreground">Media Spend</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-card animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Brands Scaled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;