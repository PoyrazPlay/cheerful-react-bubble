
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Add smooth scroll effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  // Add enter animation for the page
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.style.opacity = '1';
      pageRef.current.style.transform = 'translateY(0)';
    }
  }, []);
  
  return (
    <div 
      ref={pageRef}
      className="min-h-screen bg-background transition-all duration-700 opacity-0 translate-y-5"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <Navbar />
      <Hero />
      <ProductShowcase />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Index;
