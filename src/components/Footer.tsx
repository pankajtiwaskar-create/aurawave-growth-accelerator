import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import auraWaveLogo from '/lovable-uploads/10a26a67-60d6-4878-acab-46f09790c371.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
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
  return <footer className="relative bg-gradient-to-br from-background via-background to-primary/5 dark:from-slate-900 dark:via-slate-900 dark:to-primary/10 border-t border-primary/20 dark:border-primary/30 transition-colors duration-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      <div className="content-container relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding grid grid-cols-1 md:grid-cols-3 gap-lg lg:gap-2xl">
          
          {/* Company Info - Enhanced Design */}
          <div className="md:col-span-1 lg:pr-8 animate-fade-in-up space-y-8">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <img src={auraWaveLogo} alt="Aurawave Digital" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-h3 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                Aurawave Digital
              </span>
            </div>
            
            <p className="text-muted-foreground/90 text-base leading-relaxed max-w-sm">
              Accelerating growth for ambitious brands across Southeast Asia with 
              data-driven paid media campaigns and AI-powered optimization.
            </p>

          </div>

          {/* Quick Links - Enhanced Design */}
          <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button 
                  key={link.label} 
                  onClick={() => scrollToSection(link.href)} 
                  className="block w-full text-left p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 text-sm font-medium group"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <span className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Contact - Enhanced Design */}
          <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect With Us</h3>
            
            {/* Contact Numbers */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 group hover:border-primary/30 transition-colors duration-300">
                <h4 className="font-semibold mb-3 text-foreground flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                  <span>India Office</span>
                </h4>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0 text-primary" />
                  </div>
                  <a href="tel:+919923765568" className="text-sm hover:text-primary transition-colors duration-300 font-medium">
                    +91 99237 65568
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="py-8 border-t border-primary/20 dark:border-primary/30 animate-fade-in-up bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Aurawave Digital.</span>
              <span className="text-primary">•</span>
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;