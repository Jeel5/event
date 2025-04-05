import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import decorImage from '@/assets/decoration.jpg';
import { CheckCircle, ArrowRight } from 'lucide-react';

const DecorationServices = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&q=80',
      category: 'Wedding'
    },
    {
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      category: 'Birthday Party'
    },
    {
      url: 'https://images.unsplash.com/photo-1544113559-d0b5f2dbcfa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Baby Shower'
    },
    {
      url: 'https://images.unsplash.com/photo-1535955565956-4a631318a111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Corporate Event'
    },
    {
      url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Anniversary'
    },
    {
      url: 'https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Engagement Ceremony'
    },
    {
      url: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      category: 'Baby Welcoming'
    },
    {
      url: 'https://images.unsplash.com/photo-1555232967-3cf0e095eba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      category: 'Wedding'
    }
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
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
    
    [heroRef, descriptionRef, servicesRef, galleryRef].forEach(ref => {
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
              Decoration <span className="text-luxe-gold">Services</span>
            </h1>
            <p className="text-luxe-taupe text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Transform any event into an extraordinary visual experience with our bespoke decoration services tailored to your occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section ref={descriptionRef} className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square md:aspect-[12/13] lg:aspect-[1/1] overflow-hidden rounded-sm shadow-elegant">
            <img 
          src={decorImage} 
          alt="Luxurious event decoration" 
          className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-luxe-blush rounded-sm -z-10"></div>
        </div>
        <div className="max-w-xl">
          <p className="section-subtitle">Expert Service</p>
          <h2 className="section-title mb-6">Exceptional Entertainment</h2>
          <p className="text-luxe-taupe text-lg mb-6">
            Transform your event into unforgettable moments with our expert decor services. From elegant floral arrangements and ambient lighting to customized themes, we bring your vision to life. Our team ensures every detail is meticulously curated to create a stunning atmosphere.
          </p>
          <p className="text-luxe-taupe text-lg mb-8">
            Let us craft a magical setting that leaves a lasting impression on you and your guests.
          </p>
          <div className="border-t border-luxe-gold/20 pt-8">
            <h3 className="font-display text-xl text-luxe-charcoal mb-4">Events We Decorate</h3>
            <ul className="grid grid-cols-2 gap-2">
          {['Birthday Parties', 'Baby Showers', 'Baby Welcoming', 'Anniversary Celebrations', 'Engagement Ceremonies', 'Weddings', 'Corporate Events'].map((event, i) => (
            <li key={i} className="flex items-center text-luxe-taupe">
              <CheckCircle className="h-5 w-5 text-luxe-gold mr-2 flex-shrink-0" />
              <span>{event}</span>
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
            <h2 className="section-title">Decoration Gallery</h2>
            <p className="text-luxe-taupe text-lg mt-4">
              Explore our previous decoration projects across various events and celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="aspect-square">
                  <img 
                    src={image.url} 
                    alt={`Decoration for ${image.category}`} 
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
            Ready to Transform Your Event?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss how our decoration services can bring your vision to life.
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

export default DecorationServices;
