import digitalDashboard from '@/assets/digital-marketing-dashboard.jpg';

const AboutAuraWaveSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-glow">AuraWave Digital</span>
          </h2>
          <p className="text-xl text-primary/80 font-medium max-w-2xl mx-auto">
            Where experience meets innovation in performance marketing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Key Points */}
          <div className="animate-fade-in-up space-y-6">
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-elegant transition-all duration-300">
              <h3 className="text-lg font-bold mb-2 text-primary">Seasoned Professionals</h3>
              <p className="text-muted-foreground">
                Our team includes experts from global agencies, tech giants, and fast-scaling startups, bringing together strategists, creatives, and media specialists.
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-elegant transition-all duration-300">
              <h3 className="text-lg font-bold mb-2 text-primary">Performance-First Approach</h3>
              <p className="text-muted-foreground">
                Every campaign is crafted with performance in mind—combining bold brand storytelling with razor-sharp targeting and data-driven optimization.
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-elegant transition-all duration-300">
              <h3 className="text-lg font-bold mb-2 text-primary">True Growth Partnership</h3>
              <p className="text-muted-foreground">
                We don't just execute campaigns—we become an extension of your brand, thinking like owners and investing in your long-term growth.
              </p>
            </div>
          </div>

          {/* Right Column - Enhanced Visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-80 lg:h-96 overflow-hidden rounded-xl shadow-elegant">
              {/* Background Image */}
              <img 
                src={digitalDashboard}
                alt="Digital marketing performance dashboard"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/10 to-primary/30"></div>
              
              {/* Floating Performance Metrics */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                    <div className="text-2xl font-bold text-primary">12+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                    <div className="text-2xl font-bold text-primary">$50M+</div>
                    <div className="text-sm opacity-90">Media Managed</div>
                  </div>
                  <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm opacity-90">Asia Markets</div>
                  </div>
                  <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                    <div className="text-2xl font-bold text-primary">30+</div>
                    <div className="text-sm opacity-90">Brands Scaled</div>
                  </div>
                </div>
              </div>
              
              {/* Animated Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 left-4 w-1 h-8 bg-accent/50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-border/30">
            <p className="text-lg font-medium text-foreground max-w-4xl mx-auto">
              When you partner with AuraWave Digital, you're not outsourcing a service — you're gaining a team that thinks like an owner, acts like an extension of your brand, and is invested in your growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuraWaveSection;