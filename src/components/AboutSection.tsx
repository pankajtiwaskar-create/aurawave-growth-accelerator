import { Globe, Users, TrendingUp, Eye, Target, Rocket, Settings, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: "SEA Market Domination",
      description: "We're not generalists—we deeply understand the nuances of Southeast Asian markets, from consumer behavior to cultural buying triggers."
    },
    {
      icon: Users,
      title: "Senior Expertise, Startup Agility",
      description: "You get access to senior strategists with 12+ years of experience, minus the slow-moving agency red tape. Faster pivots, sharper focus."
    },
    {
      icon: TrendingUp,
      title: "ROI-Driven, Not Just Impressions",
      description: "Every dollar spent is tied to measurable growth. We obsess over conversion metrics—not just reach or vanity numbers."
    },
    {
      icon: Eye,
      title: "Radical Transparency",
      description: "We give clients live access to dashboards, full visibility into every dollar spent, and proactive reporting you don't have to chase."
    },
    {
      icon: Target,
      title: "Full-Funnel Campaign Thinking",
      description: "From awareness to acquisition to retention, we design integrated strategies that move customers through your funnel with purpose."
    },
    {
      icon: Rocket,
      title: "Growth-Minded Partnerships",
      description: "We're more than service providers—we act as your in-house growth team. Your KPIs are our north star."
    },
    {
      icon: Settings,
      title: "Cross-Platform Mastery",
      description: "Meta, Google, YouTube, TikTok, Programmatic, DV360—you name it, we optimize across it with precision and platform-specific know-how."
    },
    {
      icon: Zap,
      title: "Creative Meets Data",
      description: "Our campaigns balance performance analytics with sharp creative storytelling—because clicks come from both logic and emotion."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Work With <span className="text-glow">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just run ads—we engineer growth with strategy, creativity, and tech.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card p-6 lg:p-8 rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;