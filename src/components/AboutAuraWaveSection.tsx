const AboutAuraWaveSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-glow">AuraWave Digital</span>
          </h2>
          
          <p className="text-xl text-primary/80 mb-10 font-medium">
            Where experience meets innovation.
          </p>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              AuraWave Digital was born out of a bold idea: bring together seasoned professionals from across the digital marketing landscape—strategists, creatives, media specialists, and industry advisors—to create a new kind of agency. One that doesn't just execute campaigns but becomes a true growth partner to brands.
            </p>
            
            <p>
              Our team includes experts from global agencies, tech giants, and fast-scaling startups. Backed by advisors from industries like fintech, retail, and lifestyle, we combine creative intelligence with platform precision to deliver marketing that works.
            </p>
            
            <p>
              We don't believe in one-size-fits-all. Every campaign is crafted with performance in mind—whether it's bold brand storytelling or razor-sharp targeting. We use data, design, and innovation to build smarter media strategies and scalable results.
            </p>

            <div className="bg-card border rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Business Philosophy</h3>
              <p className="text-muted-foreground mb-4">
                Unlike traditional agencies that charge hefty retainers regardless of results, we believe in <strong className="text-foreground">performance-driven partnerships</strong>. Our success is directly tied to your growth.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Transparent pricing with no hidden fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Performance bonuses aligned with your KPIs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>30-day rolling contracts, no lock-ins</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Full access to campaign data & insights</span>
                </div>
              </div>
            </div>
            
            <p className="font-medium text-foreground text-xl">
              When you partner with AuraWave Digital, you're not outsourcing a service — you're gaining a team that thinks like an owner, acts like an extension of your brand, and is invested in your growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuraWaveSection;