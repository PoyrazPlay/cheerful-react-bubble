
import { useState, useEffect } from 'react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const newScrolled = Math.min(1, window.scrollY / 500);
      setScrolled(newScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white"></div>
      
      {/* Abstract shapes in background */}
      <div 
        className="absolute top-1/3 -right-64 w-[800px] h-[800px] rounded-full opacity-20 bg-blue-50 blur-3xl"
        style={{ 
          transform: `translateY(${scrolled * 100}px)` 
        }}
      />
      <div 
        className="absolute bottom-0 -left-64 w-[600px] h-[600px] rounded-full opacity-20 bg-purple-50 blur-3xl"
        style={{ 
          transform: `translateY(${-scrolled * 80}px)` 
        }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <span className="inline-block caption mb-6 px-4 py-1.5 bg-accent text-accent-foreground rounded-full">
              Introducing Morpheus
            </span>
            
            <h1 className="heading-xl mb-6 animate-fade-up [animation-delay:200ms]">
              Design Perfection <br />
              <span className="text-primary/80">Reimagined</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto animate-fade-up [animation-delay:400ms]">
              Experience the future of design with seamless interactions, beautiful aesthetics, and uncompromising attention to detail.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-up [animation-delay:600ms]">
              <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium transition-all hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]">
                Get Started
              </button>
              <button className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-medium transition-all hover:shadow-sm hover:bg-secondary/80">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 animate-fade-up [animation-delay:800ms]">
          <div className="relative mx-auto max-w-5xl glass-panel rounded-3xl shadow-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-purple-50/60 to-blue-50/60 opacity-40 mix-blend-overlay"
              style={{ 
                transform: `translateY(${scrolled * 30}px)` 
              }}
            />
            
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
