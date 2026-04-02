
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Travel Guides', href: '#guides' },
    { name: 'Culture', href: '#culture' },
    { name: 'Book Hotels', href: '#hotels' },
    { name: 'Plan Trip', href: '#plan' }
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/logo.png"
              alt="Visit Sri Lanka"
              className="h-14 w-auto object-contain drop-shadow-md"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors duration-200 ${scrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-white drop-shadow-sm'}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#plan')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20"
            >
              Plan Your Visit
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={scrolled ? 'text-foreground' : 'text-white'}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l-border">
              <SheetTitle className="text-left font-serif text-2xl text-secondary mb-8 mt-4">Menu</SheetTitle>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-6 border-t border-border">
                  <Button
                    onClick={() => scrollToSection('#plan')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full rounded-full transition-all duration-200 active:scale-[0.98]"
                  >
                    Plan Your Visit
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
