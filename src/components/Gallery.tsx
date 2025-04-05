
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Lakeside Elegance',
    category: 'Destination Wedding',
    size: 'large',
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    title: 'Garden Romance',
    category: 'Spring Wedding',
    size: 'small',
  },
  {
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Rustic Charm',
    category: 'Barn Wedding',
    size: 'small',
  },
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Modern Minimalism',
    category: 'Urban Wedding',
    size: 'medium',
  },
];

const Gallery = () => {
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
    <></>
    /*
    <section className="py-20 md:py-32 bg-white">
      <div className="luxe-container">
        <div ref={titleRef} className="max-w-3xl mb-16">
          <p className="section-subtitle">Our Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="section-title mb-0">Captivating Celebrations</h2>
            <Link 
              to="/portfolio" 
              className="flex items-center text-luxe-gold group mt-4 md:mt-0"
            >
              <span className="mr-2 text-sm uppercase tracking-wider font-medium elegant-underline">View All Work</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    to={`/portfolio/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-3 text-luxe-gold text-sm uppercase tracking-wider flex items-center"
                  >
                    <span className="elegant-underline">View Event</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    */
  );
};

export default Gallery;
