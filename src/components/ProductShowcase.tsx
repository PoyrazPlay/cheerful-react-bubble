
import { useScrollReveal } from '@/lib/animation';

const ProductShowcase = () => {
  const [ref1, isVisible1] = useScrollReveal();
  const [ref2, isVisible2] = useScrollReveal();
  
  return (
    <section id="product" className="py-24 md:py-32 overflow-hidden relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="caption mb-3 inline-block">Premium Quality</span>
          <h2 className="heading-lg max-w-3xl mx-auto">Designed with precision and refined with intention</h2>
        </div>
        
        <div 
          ref={ref1 as any}
          className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-20 md:mb-32 transition-all duration-1000 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex-1 order-2 md:order-1">
            <span className="caption mb-2 inline-block">Elegant Design</span>
            <h3 className="heading-md mb-4">Crafted with Attention to Detail</h3>
            <p className="text-muted-foreground mb-6">
              Every curve, every pixel, and every interaction has been meticulously designed 
              to provide an experience that feels natural and effortless. Our commitment to 
              quality is evident in the smallest details.
            </p>
            <a 
              href="#learn-more" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Discover our process
              <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div className="flex-1 order-1 md:order-2">
            <div className="glass-panel rounded-3xl p-1 shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-accent"></div>
            </div>
          </div>
        </div>
        
        <div 
          ref={ref2 as any}
          className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 transition-all duration-1000 ${
            isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex-1">
            <div className="glass-panel rounded-3xl p-1 shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-accent"></div>
            </div>
          </div>
          
          <div className="flex-1">
            <span className="caption mb-2 inline-block">Intuitive Experience</span>
            <h3 className="heading-md mb-4">Seamlessly Integrated Functionality</h3>
            <p className="text-muted-foreground mb-6">
              We believe that great design disappears, allowing the user to focus on what matters. 
              Our product combines powerful functionality with an interface that feels instantly familiar 
              and natural to use.
            </p>
            <a 
              href="#features" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Explore features
              <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
