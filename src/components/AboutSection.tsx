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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  <h4 className="font-semibold mb-1">AI-Powered Optimization</h4>
                  <p className="text-muted-foreground">Machine learning algorithms that continuously optimize your campaigns for maximum performance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-1">Regional Market Expertise</h4>
                  <p className="text-muted-foreground">Deep understanding of Southeast Asian consumer behavior and market dynamics.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary-glow rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-1">Transparent Reporting</h4>
                  <p className="text-muted-foreground">Real-time dashboards with actionable insights and clear ROI metrics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in" style={{
          animationDelay: '0.3s'
        }}>
            {stats.map((stat, index) => {})}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;