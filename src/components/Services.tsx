
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import decorImage from '@/assets/decoration.jpg';
import weddingImage from '@/assets/wedding&venue.jpg';
import photoImage from '@/assets/photo.jpg';
import foodImage from '@/assets/food.jpg';
import entertainmentImage from '@/assets/entertainment.jpg';
import hospitalityImage from '@/assets/hospitality.jpg';

const services = [
  {
    id: 'decoration',
    image: decorImage,
    title: 'Decoration',
  },
  {
    id: 'wedding&venue',
    image: weddingImage,
    title: 'Wedding & Venue',
  },
  {
    id: 'photography',
    image: photoImage,
    title: 'Photography',
  },
  {
    id: 'food&beverages',
    image: foodImage,
    title: 'Food & Beverages',
  },
  {
    id: 'entertainment',
    image: entertainmentImage,
    title: 'Entertainment',
  },
  {
    id: 'hospitality',
    image: hospitalityImage,
    title: 'Hospitality'
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    cardRefs.current.forEach((card, index) => {
      if (card) {
        card.classList.add('scroll-animate');
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
      }
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-luxe-cream"
    >
      <div className="luxe-container">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle">Our Expertise</p>
          <h2 className="section-title">Services Tailored to Your Vision</h2>
        </div>
        
        {/* Services Section */}
      <section ref={sectionRef} className="py-20 md:py-32 bg-white">
        <div className="luxe-container">      
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
              key={service.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-sm shadow-soft border border-luxe-gold/10 hover:shadow-elegant transition-all duration-500 group overflow-hidden"
              >
              <Link to={`/services/${service.id}`} className="block h-full">
                <div className="h-72 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="font-display text-2xl text-white mb-2">
                  {service.title}
                  </h3>
                </div>
                </div>
              </Link>
              </div>
            ))}
            </div>
        </div>
      </section>
        
        <div className="mt-16 text-center">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
