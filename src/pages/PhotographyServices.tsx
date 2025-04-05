import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import photoImage from '@/assets/photo.jpg';
import { CheckCircle, ArrowRight } from 'lucide-react';

const PhotographyServices = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Wedding Portraits'
    },
    {
      url: 'https://images.unsplash.com/photo-1519741347686-c1e331ec5a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Ceremony'
    },
    {
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Group Photos'
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      category: 'Reception'
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      category: 'Engagement'
    },
    {
      url: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Details'
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
              Photography <span className="text-luxe-gold">Services</span>
            </h1>
            <p className="text-luxe-taupe text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Capture every precious moment of your special day with our professional photography services that tell your unique love story.
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
                  src={photoImage} 
                  alt="Wedding photography" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-luxe-blush rounded-sm -z-10"></div>
            </div>
            
            <div className="max-w-xl">
              <p className="section-subtitle">Expert Service</p>
              <h2 className="section-title mb-6">Timeless Photography</h2>
              
              <p className="text-luxe-taupe text-lg mb-6">
                Capture every moment of your special day with our expert wedding photography services. From candid emotions to amazing portraits, we ensure every detail is beautifully preserved.
              </p>
              
              <p className="text-luxe-taupe text-lg mb-6">
                Our professional photographers blend creativity with storytelling, delivering timeless memories you'll cherish forever.
              </p>
              
              <p className="text-luxe-taupe text-lg mb-8">
                Let's turn your story into stunning visuals that will be treasured for generations to come!
              </p>
              
              <div className="border-t border-luxe-gold/20 pt-8">
                <h3 className="font-display text-xl text-luxe-charcoal mb-4">Our Photography Packages Include</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    'Engagement Session', 
                    'Full Day Coverage', 
                    'Multiple Photographers', 
                    'Digital Gallery',
                    'High-Resolution Files', 
                    'Custom Albums', 
                    'Prints & Wall Art'
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
            <h2 className="section-title">Photography Gallery</h2>
            <p className="text-luxe-taupe text-lg mt-4">
              Explore a selection of our wedding photography work.
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
            Ready to Capture Your Special Day?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss your wedding photography needs and secure your date.
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

export default PhotographyServices;
