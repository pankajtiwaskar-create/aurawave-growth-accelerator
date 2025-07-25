import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
const CTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Scale Your Brand in{' '}
              <span className="text-glow">Southeast Asia?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get a custom growth plan tailored to your business goals. 
              Join 50+ brands that have achieved exceptional ROI with our 
              data-driven paid media strategies.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-glow mb-2">4.2x</div>
              <div className="text-muted-foreground">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-glow mb-2">$50M+</div>
              <div className="text-muted-foreground">Media Spend Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-glow mb-2">24h</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="btn-hero text-lg px-8 py-4 group">
              Schedule Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => window.open('https://wa.me/919923765568', '_blank')} className="btn-ghost text-lg px-8 py-4">
              Chat on WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              ✅ Free consultation • ✅ No long-term contracts • ✅ Transparent reporting
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Meta Business Partner</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Google Partner</span>
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;