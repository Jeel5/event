
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Wedding Elegance',
    category: 'Wedding',
    size: 'large',
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    title: 'Baby Shower',
    category: 'Celebration',
    size: 'small',
  },
  {
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Corporate Event',
    category: 'Business',
    size: 'small',
  },
  {
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    title: 'Birthday Party',
    category: 'Celebration',
    size: 'medium',
  },
  {
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Anniversary',
    category: 'Celebration',
    size: 'medium',
  },
  {
    image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Engagement',
    category: 'Celebration',
    size: 'small',
  },
];

const EventGallery = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    imageRefs.current.forEach((image, index) => {
      if (image) {
        image.classList.add('scroll-animate');
        image.style.transitionDelay = `${index * 150}ms`;
        observer.observe(image);
      }
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-luxe-blush">
      <div className="luxe-container">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Gallery</h2>
          <p className="text-luxe-taupe text-lg mt-6">
            Explore our portfolio of beautifully executed events and get inspired for your own special occasion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (imageRefs.current[index] = el)}
              className={cn(
                'relative group overflow-hidden rounded-sm',
                item.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : '',
                item.size === 'medium' ? 'lg:col-span-2' : ''
              )}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transform scale-100 group-hover:scale-110 transition-transform duration-2000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxe-charcoal/70 via-luxe-charcoal/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white/80 text-sm uppercase tracking-wider">{item.category}</p>
                  <h3 className="text-white font-display text-xl md:text-2xl">{item.title}</h3>
                  <Link 
                    to="/portfolio"
                    className="mt-3 text-luxe-gold text-sm uppercase tracking-wider flex items-center"
                  >
                    <span className="elegant-underline">View More</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/portfolio" className="btn-outline">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
