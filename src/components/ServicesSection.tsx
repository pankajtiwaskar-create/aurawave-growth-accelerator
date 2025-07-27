import { 
  Rocket, 
  Zap, 
  TrendingUp, 
  Palette, 
  BarChart3, 
  Brain 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "Performance Media",
      description: "ROI-first campaigns on Instagram, Meta, Google, YouTube & TikTok with advanced audience targeting and conversion optimization."
    },
    {
      icon: Zap,
      title: "Paid Social Strategy",
      description: "Data-backed social media plans that maximize reach and conversions across all major platforms with creative A/B testing."
    },
    {
      icon: TrendingUp,
      title: "Programmatic & Display",
      description: "Automated audience buying across top DSPs for scale and efficiency, leveraging real-time bidding and advanced targeting."
    },
    {
      icon: Palette,
      title: "Creative for Performance",
      description: "High-impact creative assets optimized for A/B testing, designed specifically for performance marketing campaigns."
    },
    {
      icon: BarChart3,
      title: "Data & Analytics Reporting",
      description: "Transparent dashboards with actionable insights, real-time performance tracking, and comprehensive ROI analysis."
    },
    {
      icon: Brain,
      title: "AI-driven Creative & Website Dev",
      description: "Smart assets and landing pages powered by AI, optimized for conversion and personalized user experiences."
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
            Our Expertise
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What <span className="text-glow">We Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive paid media services designed to accelerate your growth 
            across Southeast Asian markets with proven strategies and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-3d group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 icon-3d flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 shadow-elegant">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to accelerate your growth?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how our proven strategies can help scale your brand across Southeast Asia.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Growth Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;