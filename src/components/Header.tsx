import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import auraWaveLogo from '@/assets/aurawave-logo.png';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background/70 backdrop-blur-xl border-b border-border/50 dark:border-border/30 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img 
              src={auraWaveLogo} 
              alt="AuraWave Digital" 
              className="w-8 h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl lg:text-2xl font-bold text-glow transition-all duration-300 group-hover:scale-105">
              AuraWave Digital
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="relative font-medium text-foreground hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 relative overflow-hidden group hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300"
            >
              <div className="relative">
                {isDark ? (
                  <Sun className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                ) : (
                  <Moon className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                )}
              </div>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden w-9 h-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex relative overflow-hidden group bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-2.5 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:scale-105">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/50 to-secondary/50 blur-lg -z-10"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 dark:bg-background/90 backdrop-blur-xl border-t border-border/50 animate-fade-in-up">
          <nav className="container mx-auto px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="block w-full text-left font-medium text-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-6 relative overflow-hidden group bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;