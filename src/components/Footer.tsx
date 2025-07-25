import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import auraWaveLogo from '@/assets/aurawave-logo.png';
const Footer = () => {
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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={auraWaveLogo} alt="AuraWave Digital" className="w-8 h-8" />
              <span className="text-xl font-bold text-glow">
                AuraWave Digital
              </span>
            </div>
            
            <p className="text-muted-foreground text-lg mb-6 max-w-md leading-relaxed">
              Accelerating growth for ambitious brands across Southeast Asia with 
              data-driven paid media campaigns and AI-powered optimization.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Fully Remote Agency</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <a href="mailto:marketing@aurawavedigital.com" className="hover:text-primary transition-colors link-underline">
                  marketing@aurawavedigital.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {[{
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
            }].map(link => <button key={link.label} onClick={() => scrollToSection(link.href)} className="block text-muted-foreground hover:text-primary transition-colors link-underline">
                  {link.label}
                </button>)}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">India </h4>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919923765568" className="hover:text-primary transition-colors link-underline">
                    +91 99237 65568
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-1">Vietnam</h4>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+84902421192" className="hover:text-primary transition-colors link-underline">
                    +84 90242 1192
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105" aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} AuraWave Digital. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors link-underline">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors link-underline">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors link-underline">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;