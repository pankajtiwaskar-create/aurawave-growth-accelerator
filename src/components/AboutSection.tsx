import { Award, TrendingUp, Globe, Zap } from 'lucide-react';
const AboutSection = () => {
  const stats = [{
    icon: Award,
    number: "12+",
    label: "Years of Experience",
    description: "Proven track record in performance marketing"
  }, {
    icon: TrendingUp,
    number: "$50M+",
    label: "Media Spend Managed",
    description: "Across all major advertising platforms"
  }, {
    icon: Globe,
    number: "50+",
    label: "Brands Scaled",
    description: "From startups to enterprise companies"
  }, {
    icon: Zap,
    number: "5+",
    label: "SEA Markets",
    description: "India, Japan, Singapore, Vietnam, Australia"
  }];
  return <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
                Building Your Vision
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Work With <span className="text-glow">Us</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We combine AI-driven performance marketing with deep regional expertise 
              to deliver exceptional ROI across Southeast Asian markets. Our data-first 
              approach and proven methodologies have helped ambitious brands achieve 
              sustainable growth at scale.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-1">AI-Led Performance Engine</h4>
                  <p className="text-muted-foreground">We leverage AI and machine learning to constantly optimize campaigns, identify micro-trends, and drive smarter decisions in real time.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-1">SEA Market Domination</h4>
                  <p className="text-muted-foreground">We're not generalists—we deeply understand the nuances of Southeast Asian markets, from consumer behavior to cultural buying triggers.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary-glow rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-1">Senior Expertise, Startup Agility</h4>
                  <p className="text-muted-foreground">You get access to senior strategists with 12+ years of experience, minus the slow-moving agency red tape. Faster pivots, sharper focus.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-1">ROI-Driven, Not Just Impressions</h4>
                  <p className="text-muted-foreground">Every dollar spent is tied to measurable growth. We obsess over conversion metrics—not just reach or vanity numbers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="space-y-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {/* Tech visualization image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center"
                alt="Social media campaigns and digital marketing"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl"></div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 group hover:bg-card transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 icon-glow flex items-center justify-center mr-2 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-muted-foreground dark:text-white" />
                      </div>
                      <span className="text-2xl font-bold text-foreground">{stat.number}</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{stat.label}</h4>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;