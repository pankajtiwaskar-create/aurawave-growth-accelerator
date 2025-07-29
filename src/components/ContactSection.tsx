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
  const {
    toast
  } = useToast();
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
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  const trustBadges = [{
    name: 'Meta Business Partner',
    icon: CheckCircle2
  }, {
    name: 'Google Partner',
    icon: CheckCircle2
  }, {
    name: 'TikTok Marketing Partner',
    icon: CheckCircle2
  }];
  return <section id="contact" className="section-padding bg-muted/30">
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
              
              <div className="flex justify-center">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdqEib-ZoDXNFomnNC1rYAast2BrFhj7zB49MHUy_XXDGG8tQ/viewform?embedded=true" 
                  width="640" 
                  height="642" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="w-full max-w-full"
                >
                  Loading…
                </iframe>
              </div>
            </div>

            {/* Trust Badges */}
            
          </div>

          {/* Contact Options & CTAs */}
          <div className="space-y-8 animate-fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            {/* Quick Contact Options */}
            <div className="card-3d">
              <h3 className="text-2xl font-bold mb-6">Other ways to reach us</h3>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start h-auto p-4 btn-ghost group" onClick={() => window.open('https://wa.me/919923765568', '_blank')}>
                  <div className="w-8 h-8 icon-glow flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300">
                    <MessageSquare className="w-5 h-5 text-muted-foreground dark:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp Chat</div>
                    <div className="text-sm text-muted-foreground">Quick questions & support</div>
                  </div>
                </Button>

                <Button variant="outline" className="w-full justify-start h-auto p-4 btn-ghost group" onClick={() => window.open('https://calendly.com/aurawave-digital', '_blank')}>
                  <div className="w-8 h-8 icon-glow flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300">
                    <Calendar className="w-5 h-5 text-muted-foreground dark:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Schedule Strategy Call</div>
                    <div className="text-sm text-muted-foreground">30-min free consultation</div>
                  </div>
                </Button>

                <Button variant="outline" className="w-full justify-start h-auto p-4 btn-ghost group" onClick={() => window.location.href = 'mailto:marketing@aurawavedigital.com'}>
                  <div className="w-8 h-8 icon-glow flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5 text-muted-foreground dark:text-white" />
                  </div>
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
                  <div className="font-medium">India</div>
                  <div className="text-muted-foreground">+91 99237 65568</div>
                </div>
                <div>
                  <div className="font-medium">Vietnam</div>
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
    </section>;
};
export default ContactSection;