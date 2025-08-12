import { Target, Users, Globe, Briefcase, BarChart3, Settings } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      Icon: Target,
      title: "Performance Media",
      description: "ROI-first campaigns on Instagram, Meta, Google, YouTube & TikTok with advanced audience targeting and conversion optimization.",
      pricing: "$2000/month",
      engagement: "Monthly retainer + ad spend",
      gradient: "from-slate-600 to-slate-700"
    },
    {
      Icon: Users,
      title: "Paid Social Strategy",
      description: "Data-backed social media plans that maximize reach and conversions across all major platforms with creative A/B testing.",
      pricing: "$2,000/month",
      engagement: "Project-based or retainer",
      gradient: "from-gray-600 to-gray-700"
    },
    {
      Icon: Globe,
      title: "Programmatic & Display",
      description: "Automated audience buying across top DSPs for scale and efficiency, leveraging real-time bidding and advanced targeting.",
      pricing: "$2000/month",
      engagement: "Enterprise partnerships",
      gradient: "from-zinc-600 to-zinc-700"
    },
    {
      Icon: Briefcase,
      title: "Creative for Performance",
      description: "High-impact creative assets optimized for A/B testing, designed specifically for performance marketing campaigns.",
      pricing: "From $1,500/month",
      engagement: "Ongoing creative packages",
      gradient: "from-stone-600 to-stone-700"
    },
    {
      Icon: BarChart3,
      title: "Data & Analytics Reporting",
      description: "Transparent dashboards with actionable insights, real-time performance tracking, and comprehensive ROI analysis.",
      pricing: "Included in packages",
      engagement: "Performance-based bonuses",
      gradient: "from-neutral-600 to-neutral-700"
    },
    {
      Icon: Settings,
      title: "AI-driven Creative & Website Dev",
      description: "Smart assets and landing pages powered by AI, optimized for conversion and personalized user experiences.",
      pricing: "Custom packages",
      engagement: "Project or equity-based",
      gradient: "from-slate-700 to-slate-800"
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-100/80 dark:bg-zinc-950/50">
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
                <div className="relative mb-4 flex justify-center">
                  <div className="relative">
                    {/* Subtle background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 blur-lg rounded-full scale-125 transition-all duration-500 group-hover:opacity-15 group-hover:scale-140`}></div>
                    
                    {/* Icon container with muted styling */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 shadow-lg group-hover:shadow-xl`}>
                      <service.Icon 
                        className="w-full h-full text-white transition-all duration-300" 
                        strokeWidth={1.5}
                      />
                    </div>
                    
                    {/* Subtle glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300 -z-10`}></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors text-center">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 text-center">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-primary">{service.pricing}</span>
                    <span className="text-muted-foreground text-xs">{service.engagement}</span>
                  </div>
                </div>
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