import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import decorImage from '@/assets/decoration.jpg';
import weddingImage from '@/assets/wedding&venue.jpg';
import photoImage from '@/assets/photo.jpg';
import foodImage from '@/assets/food.jpg';
import entertainmentImage from '@/assets/entertainment.jpg';
import hospitalityImage from '@/assets/hospitality.jpg';
import transportImage from '@/assets/transport.jpg';
import { Heart, Camera, Music, Utensils } from 'lucide-react';

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      id: 'Food&Beverages',
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
    },
    {
      id: 'transportation',
      image: transportImage,
      title: 'Transportation'
    }
  ];

  const additionalServices = [
    {
      icon: <Heart className="h-8 w-8 text-luxe-gold" />,
      title: 'Proposal Planning',
      description: 'Create an unforgettable proposal moment with our specialized planning services.'
    },
    {
      icon: <Camera className="h-8 w-8 text-luxe-gold" />,
      title: 'Vendor Selection',
      description: 'Access our curated network of premium vendors for your wedding needs.'
    },
    {
      icon: <Music className="h-8 w-8 text-luxe-gold" />,
      title: 'Entertainment Planning',
      description: 'Book exceptional entertainment options from live music to interactive experiences.'
    },
    {
      icon: <Utensils className="h-8 w-8 text-luxe-gold" />,
      title: 'Catering & Menu Design',
      description: 'Curate an exceptional culinary experience tailored to your preferences and dietary needs.'
    }
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const additionalRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (heroRef.current) {
      heroRef.current.classList.add('scroll-animate');
      observer.observe(heroRef.current);
    }
    
    if (servicesRef.current) {
      servicesRef.current.classList.add('scroll-animate');
      observer.observe(servicesRef.current);
    }
    
    if (additionalRef.current) {
      additionalRef.current.classList.add('scroll-animate');
      observer.observe(additionalRef.current);
    }
    
    if (processRef.current) {
      processRef.current.classList.add('scroll-animate');
      observer.observe(processRef.current);
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-luxe-cream">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subtitle">Our Services</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-luxe-charcoal mb-6">
              Elevating Your <span className="text-luxe-gold">Wedding Experience</span>
            </h1>
            <p className="text-luxe-taupe text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              From comprehensive planning to day-of coordination, our tailored services are designed to create an exceptional and stress-free wedding experience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} className="py-20 md:py-32 bg-white">
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
      
      {/* Additional Services */}
      <section ref={additionalRef} className="py-20 md:py-28 bg-luxe-blush">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-subtitle">Additional Offerings</p>
            <h2 className="section-title">Specialized Services</h2>
            <p className="text-luxe-taupe text-lg mt-4">
              Enhance your wedding experience with our additional specialized services.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-sm shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxe-cream mb-6">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl text-luxe-charcoal mb-3">{service.title}</h3>
                <p className="text-luxe-taupe">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold text-white">
        <div className="luxe-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
            Ready to Begin Your Wedding Journey?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to schedule a consultation and discover how our tailored services can bring your wedding vision to life.
          </p>
          <Link to="/contact" className="btn-luxe bg-white text-luxe-gold hover:bg-luxe-cream">
            Contact Us Now
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
