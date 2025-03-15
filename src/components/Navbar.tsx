
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-4 bg-white/80 backdrop-blur-xl shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-80">
          Morpheus
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Product', 'Features', 'Pricing', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-primary/80 transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-md active:scale-100"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
