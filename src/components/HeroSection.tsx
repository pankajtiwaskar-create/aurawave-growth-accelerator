import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
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
              {/* Main Device Mockup */}
              <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[480px]">
                {/* Phone Frame */}
                

                {/* Tablet Behind */}
                
              </div>

              {/* Floating Stats */}
              

              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;