
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (titleRef.current) {
      titleRef.current.classList.add('opacity-0');
      observer.observe(titleRef.current);
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.classList.add('opacity-0');
      observer.observe(subtitleRef.current);
    }
    
    if (ctaRef.current) {
      ctaRef.current.classList.add('opacity-0');
      observer.observe(ctaRef.current);
    }
    
    if (imageRef.current) {
      imageRef.current.classList.add('opacity-0');
      observer.observe(imageRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <></>
    /*
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxe-cream to-white -z-10"></div>
      
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-luxe-gold/5 animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-luxe-gold/10 animate-float animate-delay-500"></div>
      
      <div className="luxe-container grid md:grid-cols-2 gap-12 items-center">
        <div className="pt-16 md:pt-0">
          <p ref={subtitleRef} className="section-subtitle mb-4 animate-delay-300">
            Crafting Unforgettable Celebrations
          </p>
          
          <h1 
            ref={titleRef} 
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-luxe-charcoal mb-6 animate-delay-200"
          >
            Your Perfect <br />
            <span className="text-luxe-gold">Wedding Day</span> <br />
            Begins Here
          </h1>
          
          <p ref={subtitleRef} className="text-luxe-taupe text-lg md:text-xl max-w-lg mb-8 animate-delay-300">
            Elevating your special moments with meticulous planning, exquisite design, and flawless execution for a truly remarkable celebration.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-delay-400">
            <Link to="/contact" className="btn-luxe">
              Start Planning
            </Link>
            <Link to="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
        
        <div 
          ref={imageRef} 
          className="relative animate-delay-500 rounded-lg overflow-hidden"
        >
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Elegant wedding setting" 
              className="object-cover w-full h-full transform scale-100 hover:scale-105 transition-transform duration-2000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxe-charcoal/20 to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-sm shadow-elegant animate-float animate-delay-700">
            <p className="font-display text-xl text-luxe-charcoal">Experience the Élégance</p>
            <div className="flex items-center mt-3">
              <span className="text-luxe-gold text-sm mr-2">Discover our approach</span>
              <ArrowRight className="h-4 w-4 text-luxe-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
    */
  );
};

export default Hero;
