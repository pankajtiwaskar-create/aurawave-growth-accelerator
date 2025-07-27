import { Award, Globe, Briefcase, Users } from 'lucide-react';
const FounderSection = () => {
  const clientLogos = [{
    name: 'IBM',
    color: 'text-blue-600'
  }, {
    name: '3M',
    color: 'text-red-600'
  }, {
    name: 'Publicis',
    color: 'text-purple-600'
  }, {
    name: 'WPP',
    color: 'text-orange-600'
  }, {
    name: 'Omnicom',
    color: 'text-green-600'
  }];
  const achievements = [{
    icon: Award,
    text: "Experience in 5+ Markets",
    description: "Leading performance marketing initiatives"
  }, {
    icon: Users,
    text: "$50M+ Media Spend Managed",
    description: "Across global advertising platforms"
  }, {
    icon: Briefcase,
    text: "50+ Brands Scaled",
    description: "From seed stage to enterprise"
  }, {
    icon: Globe,
    text: "Active in 5+ Markets",
    description: "India, Japan, Singapore, Vietnam, Australia"
  }];
  return <section id="founder" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
            Founded and Managed
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Leadership That <span className="text-glow">Delivers</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Founder Profile */}
          <div className="lg:col-span-1 text-center animate-scale-in">
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-elegant ring-4 ring-primary/20">
                <img 
                  src="/lovable-uploads/f0f73619-1c03-49b4-901a-3c466c3438fc.png"
                  alt="Pankaj Tiwaskar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">CEO</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Pankaj Tiwaskar</h3>
            <p className="text-muted-foreground text-lg mb-4">Founder & CEO, AuraWave Digital</p>
            <p className="text-muted-foreground leading-relaxed">
              Performance marketing strategist with 12+ years of experience scaling brands 
              across Southeast Asia markets through data-driven paid media campaigns.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            {achievements.map((achievement, index) => <div key={index} className="card-3d group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 icon-3d flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <achievement.icon className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 text-foreground">
                      {achievement.text}
                    </h4>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-20 animate-fade-in-up" style={{
        animationDelay: '0.6s'
      }}>
          <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">Work Experience</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {clientLogos.map((logo, index) => <div key={index} className="group cursor-pointer transition-all duration-300 hover:scale-110">
                <div className={`text-3xl font-bold ${logo.color} group-hover:text-primary transition-colors`}>
                  {logo.name}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default FounderSection;