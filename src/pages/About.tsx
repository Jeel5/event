import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import pfp from '../assets/pfp.jpg'
import { useRef, useEffect } from 'react';

const About = () => {
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
    <div className="min-h-screen">
      <Navbar />
      <section ref={sectionRef} className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          {/* Desktop Layout - Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="aspect-square rounded-sm overflow-hidden">
                <img 
                  src={pfp}
                  alt="Company founder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="section-title scroll-animate">About Us</h2>
              <p className='scroll-animate mb-1'>Devang Rathod</p>
              <p className="text-luxe-gold italic scroll-animate mb-6">Founder and Director</p>
              
              <div className="text-luxe-taupe">
                <p className="scroll-animate">
                  We believe that every event deserves to be unforgettable. We are passionate about crafting events that exceed expectations and create lasting memories. We are dedicated to providing personalized service, meticulous attention to detail, and creative solutions for every event. From concept to execution, we handle every aspect of your event, including planning, design, logistics, and vendor management. Let us help you create an unforgettable event. Contact us today for a free consultation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mobile Layout - Single column with specific order */}
          <div className="md:hidden flex mt-16 flex-col"> 
            <h2 className="text-center section-title scroll-animate mb-6">About Us</h2>
            <div className="scroll-animate mb-6">
              <div className="aspect-square rounded-sm overflow-hidden max-w-xs mx-auto">
                <img 
                  src={pfp}
                  alt="Company founder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center mb-2">
              <p className="text-xl font-semibold text-luxe-charcoal scroll-animate">Devang Rathod</p>
              <p className="text-luxe-gold italic scroll-animate">Founder and Director</p>
            </div>
            
            <div className="mt-6 text-luxe-taupe">
              <p className="scroll-animate text-center">
                We believe that every event deserves to be unforgettable. We are passionate about crafting events that exceed expectations and create lasting memories. We are dedicated to providing personalized service, meticulous attention to detail, and creative solutions for every event. From concept to execution, we handle every aspect of your event, including planning, design, logistics, and vendor management. Let us help you create an unforgettable event. Contact us today for a free consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
