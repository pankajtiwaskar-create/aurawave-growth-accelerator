import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingTiers = [
    {
      name: "Growth Starter",
      price: "$3,500",
      period: "/month",
      minSpend: "$5,000",
      badge: "Most Popular",
      description: "Perfect for businesses ready to scale their digital presence with proven strategies.",
      features: [
        "Google & Meta Ads management",
        "Landing page optimization",
        "Weekly performance reports",
        "Dedicated account manager",
        "Creative development (2 sets/month)",
        "Conversion tracking setup",
        "30-day rolling contract"
      ],
      cta: "Start Growing",
      highlighted: true
    },
    {
      name: "Scale & Optimize",
      price: "$6,500",
      period: "/month", 
      minSpend: "$15,000",
      badge: "Enterprise",
      description: "For established businesses looking to dominate their market with advanced strategies.",
      features: [
        "Multi-platform campaign management",
        "Advanced audience research & targeting",
        "A/B testing & optimization",
        "Custom dashboard & analytics",
        "Weekly strategy calls",
        "Creative development (4 sets/month)",
        "Performance-based bonus structure",
        "Priority support"
      ],
      cta: "Scale Now",
      highlighted: false
    },
    {
      name: "Custom Partnership",
      price: "Custom",
      period: "",
      minSpend: "$25,000+",
      badge: "Partnership",
      description: "Fully customized growth partnerships for ambitious brands ready to disrupt their industry.",
      features: [
        "Full-service growth strategy",
        "Dedicated team of specialists",
        "Custom pricing & performance bonuses",
        "Monthly board-level reporting",
        "Unlimited creative development",
        "New channel exploration",
        "Flexible contract terms",
        "Direct CEO access"
      ],
      cta: "Discuss Partnership",
      highlighted: false
    }
  ];

  const additionalServices = [
    "Performance-based pricing available for all tiers",
    "Free marketing audit & strategy session",
    "No setup fees or hidden costs",
    "Cancel anytime with 30-day notice",
    "ROI guarantee on Growth Starter tier"
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Investment <span className="text-glow">Packages</span>
          </h2>
          <p className="text-xl text-primary/80 mb-4 font-medium">
            Transparent pricing. No surprises. Just results.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the partnership level that matches your growth ambitions. All packages include our signature performance-first approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                tier.highlighted ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {tier.badge && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                  {tier.badge}
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-1">{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">Min. ad spend: {tier.minSpend}</p>
                <p className="text-sm text-foreground/80 leading-relaxed mt-2">{tier.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${tier.highlighted ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={tier.highlighted ? 'default' : 'outline'}
                  onClick={() => scrollToSection('contact')}
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            What's <span className="text-glow">Included</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Not sure which package fits your needs?
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              Get Custom Recommendation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;