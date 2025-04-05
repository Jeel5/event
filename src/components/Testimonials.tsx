
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Alexandra & Michael',
    image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    quote: 'Working with Élégance was the best decision we made. They transformed our vision into a reality beyond our wildest dreams. Every detail was perfect, allowing us to truly enjoy our special day without worry.',
    location: 'Coastal Wedding, California',
  },
  {
    id: 2,
    name: 'Emma & James',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    quote: 'The attention to detail was extraordinary. From the floral arrangements to the table settings, everything was meticulously executed. Our guests are still talking about how beautiful our wedding was.',
    location: 'Garden Estate, New York',
  },
  {
    id: 3,
    name: 'Sophia & Thomas',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91dfe6d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    quote: 'Planning our destination wedding seemed overwhelming until we found Élégance. Their expertise and connections made everything seamless. They created a magical weekend celebration that we and our guests will never forget.',
    location: 'Vineyard Wedding, Tuscany',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (titleRef.current) {
      titleRef.current.classList.add('scroll-animate');
      observer.observe(titleRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Reset animation when testimonial changes
  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.classList.remove('animate-fade-up');
      void testimonialRef.current.offsetWidth; // Trigger reflow
      testimonialRef.current.classList.add('animate-fade-up');
    }
  }, [activeIndex]);

  return (
    <></>
    /*
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-luxe-blush"
    >
      <div className="luxe-container">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">Words from Our Couples</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={testimonialRef}
            className="bg-white rounded-sm shadow-elegant p-8 md:p-10 opacity-0 animate-fade-up"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              <div className="w-full md:w-2/5">
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-3/5">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-luxe-gold text-luxe-gold" />
                  ))}
                </div>
                
                <blockquote className="mb-6">
                  <p className="text-luxe-charcoal text-lg md:text-xl italic font-serif leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </blockquote>
                
                <div>
                  <p className="font-display text-xl text-luxe-charcoal">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-luxe-taupe">
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-luxe-gold/20 text-luxe-gold hover:bg-luxe-gold hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all duration-300',
                    index === activeIndex 
                      ? 'bg-luxe-gold w-6' 
                      : 'bg-luxe-gold/30 hover:bg-luxe-gold/50'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-luxe-gold/20 text-luxe-gold hover:bg-luxe-gold hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
    */
  );
};

export default Testimonials;
