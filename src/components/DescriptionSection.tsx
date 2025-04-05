
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DescriptionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-luxe-cream">
      <div className="luxe-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title scroll-animate">Welcome to Samarthya Events</h2>
            
            <div className="space-y-6 text-luxe-taupe">
              <p className="text-lg scroll-animate">
                Samarthya Events is here, Whether it's a dream wedding, a rocking birthday party, Blissful Engagement, Baby shower, Baby Welcoming, Anniversary celebration and high-profile corporate event, we're here to bring your vision to life—stress-free and with loads of creativity!
              </p>
              
              <p className="text-lg scroll-animate">
                With our talented team handling the details, you can focus on making memories while we take care of everything else. Let's make your event the talk of the town!
              </p>
              
              <div className="mt-8 scroll-animate">
                <Link to="/about" className="btn-luxe">
                  About Us
                </Link>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 scroll-animate">
            <div className="aspect-square rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Event planning" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
