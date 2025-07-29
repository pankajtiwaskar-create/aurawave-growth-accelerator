import { useState } from 'react';
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import auraWaveLogo from '/lovable-uploads/10a26a67-60d6-4878-acab-46f09790c371.png';
const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Linkedin,
    href: 'https://linkedin.com/company/aurawave-digital',
    label: 'LinkedIn'
  }, {
    icon: Instagram,
    href: 'https://instagram.com/aurawavedigital',
    label: 'Instagram'
  }, {
    icon: Twitter,
    href: 'https://twitter.com/aurawavedigital',
    label: 'Twitter'
  }];
  const quickLinks = [{
    label: 'Home',
    href: 'hero'
  }, {
    label: 'About',
    href: 'about'
  }, {
    label: 'Services',
    href: 'services'
  }, {
    label: 'News',
    href: 'news'
  }, {
    label: 'Contact',
    href: 'contact'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', email);
    setEmail('');
  };
  return <footer className="bg-background dark:bg-slate-900 border-t border-border/50 dark:border-slate-700/30 transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Company Info - 40% width */}
          <div className="md:col-span-1 lg:pr-8 animate-fade-in-up space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img src={auraWaveLogo} alt="AuraWave Digital" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl font-bold text-glow transition-all duration-300 group-hover:scale-105">
                AuraWave Digital
              </span>
            </div>
            
            <p className="text-muted-foreground text-base leading-relaxed">
              Accelerating growth for ambitious brands across Southeast Asia with 
              data-driven paid media campaigns and AI-powered optimization.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <MapPin className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                <span className="text-sm">Southeast Asia (Remote)</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                <a href="mailto:hello@aurawavedigital.com" className="text-sm hover:text-primary transition-colors duration-300 relative link-underline">
                  hello@aurawavedigital.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links - 30% width */}
          <div className="animate-fade-in-up space-y-6" style={{
          animationDelay: '0.1s'
        }}>
            <h3 className="font-bold text-lg text-foreground">Quick Links</h3>
            <nav className="space-y-4">
              {quickLinks.map((link, index) => <button key={link.label} onClick={() => scrollToSection(link.href)} className="block text-muted-foreground hover:text-primary transition-all duration-300 text-sm relative link-underline group text-left" style={{
              animationDelay: `${0.2 + index * 0.05}s`
            }}>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                    {link.label}
                  </span>
                </button>)}
            </nav>
          </div>

          {/* Social Media & Contact - 30% width */}
          <div className="animate-fade-in-up space-y-6" style={{
          animationDelay: '0.2s'
        }}>
            <h3 className="font-bold text-lg text-foreground">Connect With Us</h3>
            
            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex space-x-3">
                {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-muted dark:bg-slate-800 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 group relative overflow-hidden" aria-label={social.label}>
                    <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </a>)}
              </div>

              {/* Contact Numbers */}
              <div className="space-y-4">
                <div className="group">
                  <h4 className="font-semibold mb-2 text-sm text-foreground">India</h4>
                  <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Phone className="w-3 h-3 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                    <a href="tel:+919923765568" className="text-xs hover:text-primary transition-colors duration-300 link-underline">
                      +91 99237 65568
                    </a>
                  </div>
                </div>
                
                <div className="group">
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Vietnam</h4>
                  <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300">
                    
                    <a href="tel:+84902421192" className="text-xs hover:text-primary transition-colors duration-300 link-underline">
                      +84 90242 1192
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/50 dark:border-slate-700/30 animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;