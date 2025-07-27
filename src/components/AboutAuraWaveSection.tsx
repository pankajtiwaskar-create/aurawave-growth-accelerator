const AboutAuraWaveSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-glow">AuraWave Digital</span>
            </h2>
            
            <p className="text-xl text-primary/80 mb-8 font-medium">
              Where experience meets innovation.
            </p>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                AuraWave Digital was born out of a bold idea: bring together seasoned professionals from across the digital marketing landscape—strategists, creatives, media specialists, and industry advisors—to create a new kind of agency. One that doesn't just execute campaigns but becomes a true growth partner to brands.
              </p>
              
              <p>
                Our team includes experts from global agencies, tech giants, and fast-scaling startups. Backed by advisors from industries like fintech, retail, and lifestyle, we combine creative intelligence with platform precision to deliver marketing that works.
              </p>
              
              <p>
                We don't believe in one-size-fits-all. Every campaign is crafted with performance in mind—whether it's bold brand storytelling or razor-sharp targeting. We use data, design, and innovation to build smarter media strategies and scalable results.
              </p>
              
              <p className="font-medium text-foreground">
                When you partner with AuraWave Digital, you're not outsourcing a service — you're gaining a team that thinks like an owner, acts like an extension of your brand, and is invested in your growth.
              </p>
            </div>
          </div>

          {/* Right Column - Abstract Illustration */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl">
                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-primary rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-secondary rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-gradient-accent rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Wave Lines */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent transform rotate-12"></div>
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent transform -rotate-6"></div>
                  <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent transform rotate-3"></div>
                </div>
                
                {/* Spark Lines */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/3 right-1/4 w-24 h-px bg-gradient-to-r from-primary to-transparent transform rotate-45 opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-1/2 left-1/4 w-32 h-px bg-gradient-to-r from-secondary to-transparent transform -rotate-12 opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-2/3 right-1/3 w-20 h-px bg-gradient-to-r from-accent to-transparent transform rotate-30 opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuraWaveSection;