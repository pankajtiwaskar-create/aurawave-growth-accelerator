import { Award, Globe, Briefcase, DollarSign } from 'lucide-react';
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
    Icon: Award,
    text: "15+ years of experience",
    description: "Leading performance marketing initiatives",
    gradient: "from-yellow-500 to-orange-500"
  }, {
    Icon: DollarSign,
    text: "$50M+ Media Spends Managed",
    description: "Across global advertising platforms",
    gradient: "from-green-500 to-emerald-500"
  }, {
    Icon: Briefcase,
    text: "30+ Brands Scaled",
    description: "From seed stage to enterprise",
    gradient: "from-blue-500 to-cyan-500"
  }, {
    Icon: Globe,
    text: "Experience in 5+ Asia Markets",
    description: "India, Japan, Singapore, Vietnam, Australia",
    gradient: "from-purple-500 to-pink-500"
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
                <img src="/lovable-uploads/cfb4c06c-7423-43d4-a9c6-aeedea0d21f3.png" alt="Aurawave founder portrait" className="w-full h-full object-cover" loading="lazy" />
              </div>
              
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Pankaj Tiwaskar</h3>
            <p className="text-muted-foreground text-lg mb-4">Founder & CEO, Aurawave Digital</p>
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
                  <div className="relative flex-shrink-0">
                    {/* Enhanced gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-10 group-hover:opacity-20 rounded-2xl transition-all duration-300 group-hover:scale-110 blur-sm`}></div>
                    
                    {/* Icon container */}
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${achievement.gradient} rounded-2xl p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl`}>
                      <achievement.Icon 
                        className="w-full h-full text-white transition-all duration-300 group-hover:scale-110" 
                        strokeWidth={2}
                      />
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-300 -z-10`}></div>
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
          <h3 className="text-center text-lg font-semibold mb-2 text-muted-foreground">Founder's Experience</h3>
          <p className="text-center text-sm text-muted-foreground/80 mb-8">
            Excelled in leading multinational corporations across diverse markets including Singapore, Japan, and India, with expertise in APAC markets
          </p>
          
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