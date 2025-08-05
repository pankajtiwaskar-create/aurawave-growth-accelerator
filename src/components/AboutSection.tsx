// Import 3D icon images
import globeIcon from '@/assets/icons/globe-3d.png';
import brainIcon from '@/assets/icons/brain-3d.png';
import usersIcon from '@/assets/icons/users-3d.png';
import chartIcon from '@/assets/icons/chart-3d.png';
import eyeIcon from '@/assets/icons/eye-3d.png';
import targetIcon from '@/assets/icons/target-3d.png';
import rocketIcon from '@/assets/icons/rocket-3d.png';
import settingsIcon from '@/assets/icons/settings-3d.png';
import puzzleIcon from '@/assets/icons/puzzle-3d.png';

const AboutSection = () => {
  const features = [
    {
      icon: globeIcon,
      title: "SEA Market Domination",
      description: "We're not generalists—we deeply understand the nuances of Southeast Asian markets, from consumer behavior to cultural buying triggers."
    },
    {
      icon: brainIcon,
      title: "AI-Led Performance Engine",
      description: "We leverage AI and machine learning to constantly optimize campaigns, identify micro-trends, and drive smarter decisions in real time."
    },
    {
      icon: usersIcon,
      title: "Senior Expertise, Startup Agility",
      description: "You get access to senior strategists with 12+ years of experience, minus the slow-moving agency red tape. Faster pivots, sharper focus."
    },
    {
      icon: chartIcon,
      title: "ROI-Driven, Not Just Impressions",
      description: "Every dollar spent is tied to measurable growth. We obsess over conversion metrics—not just reach or vanity numbers."
    },
    {
      icon: eyeIcon,
      title: "Radical Transparency",
      description: "We give clients live access to dashboards, full visibility into every dollar spent, and proactive reporting you don't have to chase."
    },
    {
      icon: targetIcon,
      title: "Full-Funnel Campaign Thinking",
      description: "From awareness to acquisition to retention, we design integrated strategies that move customers through your funnel with purpose."
    },
    {
      icon: rocketIcon,
      title: "Growth-Minded Partnerships",
      description: "We're more than service providers—we act as your in-house growth team. Your KPIs are our north star."
    },
    {
      icon: settingsIcon,
      title: "Cross-Platform Mastery",
      description: "Meta, Google, YouTube, TikTok, Programmatic, DV360—you name it, we optimize across it with precision and platform-specific know-how."
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-50/80">
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
                  <div className="relative group-hover:scale-110 transition-all duration-300">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-14 h-14 object-contain transform transition-all duration-300 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      style={{
                        filter: 'grayscale(20%) brightness(0.9) contrast(1.1)',
                      }}
                    />
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