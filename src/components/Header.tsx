import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import auraWaveLogo from '/lovable-uploads/10a26a67-60d6-4878-acab-46f09790c371.png';

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
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 dark:bg-slate-900/80 backdrop-blur-xl border-b border-border/50 dark:border-slate-700/30 transition-all duration-500 animate-fade-in-up shadow-sm dark:shadow-slate-900/20">
      <div className="content-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img 
              src={auraWaveLogo} 
              alt="Aurawave Digital" 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-h3 font-bold text-glow transition-all duration-300 group-hover:scale-105">
              Aurawave Digital
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="relative font-medium text-foreground/80 hover:text-primary transition-all duration-500 px-4 py-2.5 rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 group animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-8 rounded-full"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              className="w-10 h-10 relative overflow-hidden group hover:bg-primary/10 dark:hover:bg-primary/15 transition-all duration-500 rounded-xl animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="relative transition-all duration-500">
                {isDark ? (
                  <Sun className="h-5 w-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-90 text-foreground/80 group-hover:text-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 text-foreground/80 group-hover:text-blue-500" />
                )}
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

            <Button
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="hidden lg:block bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              Get Started
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
            <div className="mt-6">
              <Button
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;