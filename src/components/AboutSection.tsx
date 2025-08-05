import { Globe, Zap, Users, TrendingUp, Eye, Target, Rocket, Settings } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      Icon: Globe,
      title: "SEA Market Domination",
      description: "We're not generalists—we deeply understand the nuances of Southeast Asian markets, from consumer behavior to cultural buying triggers.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      Icon: Zap,
      title: "AI-Led Performance Engine",
      description: "We leverage AI and machine learning to constantly optimize campaigns, identify micro-trends, and drive smarter decisions in real time.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      Icon: Users,
      title: "Senior Expertise, Startup Agility",
      description: "You get access to senior strategists with 12+ years of experience, minus the slow-moving agency red tape. Faster pivots, sharper focus.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      Icon: TrendingUp,
      title: "ROI-Driven, Not Just Impressions",
      description: "Every dollar spent is tied to measurable growth. We obsess over conversion metrics—not just reach or vanity numbers.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      Icon: Eye,
      title: "Radical Transparency",
      description: "We give clients live access to dashboards, full visibility into every dollar spent, and proactive reporting you don't have to chase.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      Icon: Target,
      title: "Full-Funnel Campaign Thinking",
      description: "From awareness to acquisition to retention, we design integrated strategies that move customers through your funnel with purpose.",
      gradient: "from-red-500 to-rose-500"
    },
    {
      Icon: Rocket,
      title: "Growth-Minded Partnerships",
      description: "We're more than service providers—we act as your in-house growth team. Your KPIs are our north star.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      Icon: Settings,
      title: "Cross-Platform Mastery",
      description: "Meta, Google, YouTube, TikTok, Programmatic, DV360—you name it, we optimize across it with precision and platform-specific know-how.",
      gradient: "from-slate-500 to-gray-500"
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-100/80">
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
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-6 lg:p-8 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 hover:border-primary/30 animate-fade-in-up hover:bg-gradient-to-br hover:from-card hover:to-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 rounded-2xl transition-all duration-300 group-hover:scale-110 blur-sm`}></div>
                    
                    {/* Icon container */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl`}>
                      <feature.Icon 
                        className="w-full h-full text-white transition-all duration-300 group-hover:scale-110" 
                        strokeWidth={2}
                      />
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-300 -z-10`}></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;