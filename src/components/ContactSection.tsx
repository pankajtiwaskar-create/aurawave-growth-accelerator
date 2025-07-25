import { useState } from 'react';
import { Mail, MessageSquare, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const trustBadges = [
    { name: 'Meta Business Partner', icon: CheckCircle2 },
    { name: 'Google Partner', icon: CheckCircle2 },
    { name: 'TikTok Marketing Partner', icon: CheckCircle2 },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
            Get Started Today
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-glow">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to scale your brand across Southeast Asia? Get a custom growth plan 
            tailored to your business goals – no strings attached.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="animate-scale-in">
            <div className="card-3d">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business goals and challenges..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-hero"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="mt-8">
              <h4 className="text-center text-sm font-medium text-muted-foreground mb-4">
                Certified Partners
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {trustBadges.map((badge, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2 shadow-sm"
                  >
                    <badge.icon className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Options & CTAs */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Quick Contact Options */}
            <div className="card-3d">
              <h3 className="text-2xl font-bold mb-6">Other ways to reach us</h3>
              
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-auto p-4 btn-ghost"
                  onClick={() => window.open('https://wa.me/919923765568', '_blank')}
                >
                  <MessageSquare className="w-5 h-5 mr-3 text-green-600" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp Chat</div>
                    <div className="text-sm text-muted-foreground">Quick questions & support</div>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start h-auto p-4 btn-ghost"
                  onClick={() => window.open('https://calendly.com/aurawave-digital', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Schedule Strategy Call</div>
                    <div className="text-sm text-muted-foreground">30-min free consultation</div>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start h-auto p-4 btn-ghost"
                  onClick={() => window.location.href = 'mailto:marketing@aurawavedigital.com'}
                >
                  <Mail className="w-5 h-5 mr-3 text-secondary" />
                  <div className="text-left">
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm text-muted-foreground">marketing@aurawavedigital.com</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-white">
              <h4 className="font-bold text-xl mb-2">⚡ Quick Response Guarantee</h4>
              <p className="text-white/90 mb-4">
                We respond to all inquiries within 2 hours during business hours 
                (9 AM - 6 PM SGT, Monday to Friday).
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Free strategy consultation included</span>
              </div>
            </div>

            {/* Office Locations */}
            <div className="card-3d">
              <h4 className="font-bold text-lg mb-4">We're Remote-First</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium">India Office</div>
                  <div className="text-muted-foreground">+91 99237 65568</div>
                </div>
                <div>
                  <div className="font-medium">Vietnam Office</div>
                  <div className="text-muted-foreground">+84 90242 1192</div>
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">marketing@aurawavedigital.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;