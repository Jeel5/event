
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const eventTypes = [
  'birthday party',
  'baby shower',
  'baby welcoming',
  'Anniversary celebration',
  'engagement ceremony',
  'wedding',
  'corporate events'
];

const DecorSection = () => {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="luxe-container">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
          <h2 className="section-title">Decoration Services</h2>
          <p className="text-luxe-taupe text-lg mt-6">
            Transform your event into an unforgettable moments with our expert decor services. From elegant floral arrangements and ambient lighting to customized themes, we bring your vision to life and our team ensures every detail is meticulously curated to create a stunning atmosphere.
          </p>
          <p className="text-luxe-taupe text-lg mt-4">
            Let us craft a magical setting that leaves a lasting impression on you and your guests.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-animate">
          {eventTypes.map((event, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-luxe-blush text-luxe-charcoal rounded-full text-sm font-medium capitalize"
            >
              {event}
            </span>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="scroll-animate">
            <h3 className="font-display text-3xl text-luxe-charcoal mb-4">Wedding & venue</h3>
            <p className="text-luxe-taupe mb-6">
              From cascading florals to twinkling light, we create enchanting settings tailored to your love story. transform your venue into a breathtaking masterpiece. 
              your guests unwind and indulge in unforgettable experiences at your wedding. How about masti moments at the Haldi, an interactive gaming session at the Mehendi, 
              a performer electrifying the Sangeet, or a mesmerizing fireworks show at events. Make every moment extraordinary & Memorable.
            </p>
            <Link to="/decoration-services" className="btn-luxe">
              Learn More
            </Link>
          </div>
          
          <div className="scroll-animate">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Wedding venue decoration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 scroll-animate">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Photography services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 scroll-animate">
            <h3 className="font-display text-3xl text-luxe-charcoal mb-4">Photography</h3>
            <p className="text-luxe-taupe mb-6">
              Capture every moment of your special day with our expert wedding photography services. From candid emotions to amazing portraits, 
              we ensure every detail is beautifully preserved. Our professional photographers blend creativity with storytelling, 
              delivering timeless memories you'll cherish forever. Let's turn your story into stunning visuals!
            </p>
            <Link to="/decoration-services" className="btn-outline">
              Explore More
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="scroll-animate">
            <h3 className="font-display text-3xl text-luxe-charcoal mb-4">Food & beverages</h3>
            <p className="text-luxe-taupe mb-6">
              We elevate the event with Delicious Dining Experience. Our Team ensure the smooth services, Impeccable presentation and attentive care of your guests.
              We work closely with you to create a menu that fits in your budget, Dietary needs and your theme. We are here to manage Beautiful plating, 
              elegant table settings and personalized touches. We handle everything from set up and services, leaving you free to enjoy your event.
              We offer a variety of delicious refreshing beverages, from classic favorites to trendy options, to suit any event theme and audience.
            </p>
            <Link to="/decoration-services" className="btn-luxe">
              Learn More
            </Link>
          </div>
          
          <div className="scroll-animate">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Food and beverages" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 scroll-animate">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Entertainment services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 scroll-animate">
            <h3 className="font-display text-3xl text-luxe-charcoal mb-4">Entertainment</h3>
            <p className="text-luxe-taupe mb-6">
              Our skilled DJ will keep the dance floor alive with classic tunes, popular hits and custom Playlist.
              We are here to understand your vision and arrange the customized Lighting to create beautiful ambiance of the event.
              Let our Lighting transform your event in to captivating visuals by range of special effects.
            </p>
            <Link to="/decoration-services" className="btn-outline">
              Explore More
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/decoration-services" className="btn-luxe">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DecorSection;
