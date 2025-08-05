import { Card, CardContent } from "@/components/ui/card";

const HowWeWorkSection = () => {
  const workProcess = [
    {
      step: "01",
      title: "Partnership Discovery",
      description: "We start with a comprehensive audit of your current marketing efforts and business goals. This isn't a sales call—it's a strategic session to understand your unique challenges.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "We develop a custom growth strategy with clear KPIs, budget allocation, and performance targets. You get a detailed roadmap before we touch any ad spend.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description: "Our team becomes an extension of yours, executing campaigns with weekly performance reviews and real-time optimizations based on data.",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Growth & Scale",
      description: "As we hit targets, we reinvest learnings to scale successful campaigns and explore new channels. Our success is directly tied to your growth.",
      duration: "Month 3+"
    }
  ];

  const businessPrinciples = [
    {
      title: "Performance-Based Pricing",
      description: "We offer flexible pricing models including performance bonuses tied to your success metrics."
    },
    {
      title: "Full Transparency",
      description: "You get access to all campaign data, weekly reports, and direct communication with your dedicated team."
    },
    {
      title: "No Long-Term Lock-ins",
      description: "While we prefer partnerships, we work on 30-day rolling contracts. Great results speak louder than contracts."
    },
    {
      title: "Owner's Mindset",
      description: "We think like business owners, not just marketers. Every dollar spent is treated like our own investment."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We <span className="text-glow">Work</span>
          </h2>
          <p className="text-xl text-primary/80 mb-4 font-medium">
            Partnership-first approach, not just another agency.
          </p>
          <p className="text-lg text-muted-foreground">
            We don't believe in the traditional agency model. Instead, we become true growth partners invested in your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workProcess.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{step.description}</p>
                <div className="text-sm font-medium text-primary">{step.duration}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Business <span className="text-glow">Philosophy</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {businessPrinciples.map((principle, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{principle.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;