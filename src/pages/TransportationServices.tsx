import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import transportImage from '@/assets/transport.jpg';
import { CheckCircle, ArrowRight } from 'lucide-react';

const TransportationServices = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      category: 'Luxury Cars'
    },
    {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      category: 'Wedding Vehicles'
    },
    {
      url: 'https://images.unsplash.com/photo-1535655685871-dc8158ff167e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Guest Shuttles'
    },
    {
      url: 'https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Vintage Cars'
    },
    {
      url: 'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Premium Services'
    },
    {
      url: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Airport Transfers'
    }
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    [heroRef, descriptionRef, galleryRef].forEach(ref => {
      if (ref.current) {
        ref.current.classList.add('scroll-animate');
        observer.observe(ref.current);
      }
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-luxe-cream">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subtitle">Our Expertise</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-luxe-charcoal mb-6">
              Transportation <span className="text-luxe-gold">Services</span>
            </h1>
            <p className="text-luxe-taupe text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Reliable and efficient transportation solutions to ensure seamless travel for you and your guests.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section ref={descriptionRef} className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
                <img 
                  src={transportImage} 
                  alt="Wedding transportation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-luxe-blush rounded-sm -z-10"></div>
            </div>
            
            <div className="max-w-xl">
              <p className="section-subtitle">Expert Service</p>
              <h2 className="section-title mb-6">Seamless Transportation</h2>
              
              <p className="text-luxe-taupe text-lg mb-6">
                We provide reliable and efficient transportation services for guests and visitors. Our team can customize solutions to meet your specific requirements, including routes, schedules, and vehicle types.
              </p>
              
              <p className="text-luxe-taupe text-lg mb-6">
                We manage a diverse fleet of vehicles, including luxury cars, vans, and buses, ensuring that everyone arrives safely and on time to your events.
              </p>
                
              <p className="text-luxe-taupe text-lg mb-8">
                From airport pickups for out-of-town guests to luxury transportation for the wedding party, we coordinate all the logistics so you can focus on enjoying your special day.
              </p>
              
              <div className="border-t border-luxe-gold/20 pt-8">
                <h3 className="font-display text-xl text-luxe-charcoal mb-4">Our Transportation Services</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    'Luxury Vehicles', 
                    'Guest Shuttles', 
                    'Airport Transfers', 
                    'Custom Routes',
                    'Vintage Cars', 
                    'Chauffeur Services', 
                    'Group Transportation'
                  ].map((service, i) => (
                    <li key={i} className="flex items-center text-luxe-taupe">
                      <CheckCircle className="h-5 w-5 text-luxe-gold mr-2 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 md:py-32 bg-luxe-cream">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-subtitle">Our Portfolio</p>
            <h2 className="section-title">Transportation Gallery</h2>
            <p className="text-luxe-taupe text-lg mt-4">
              Explore our transportation options from previous events.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="aspect-square">
                  <img 
                    src={image.url} 
                    alt={`${image.category}`} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxe-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white font-medium">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn-outline flex items-center justify-center mx-auto w-48">
              <span>View Full Portfolio</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold text-white">
        <div className="luxe-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
            Plan Your Event Transportation
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss your transportation needs and ensure a seamless experience for you and your guests.
          </p>
          <Link to="/contact" className="btn-luxe bg-white text-luxe-gold hover:bg-luxe-cream">
            Contact Us
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TransportationServices;
