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
      <div className="content-container">
        {/* Main Footer Content */}
        <div className="section-padding grid grid-cols-1 md:grid-cols-3 gap-lg lg:gap-2xl">
          
          {/* Company Info - 40% width */}
          <div className="md:col-span-1 lg:pr-8 animate-fade-in-up space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img src={auraWaveLogo} alt="AuraWave Digital" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-h3 font-bold text-glow transition-all duration-300 group-hover:scale-105">
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
            <h3>Quick Links</h3>
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

          {/* Contact - 30% width */}
          <div className="animate-fade-in-up space-y-6" style={{
          animationDelay: '0.2s'
        }}>
            <h3>Connect With Us</h3>
            
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
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/50 dark:border-slate-700/30 animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            
            <div className="flex items-center space-x-8 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;