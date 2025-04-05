
import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        message: '',
      });
      
      // Reset submission state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
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
    
    if (formRef.current) {
      formRef.current.classList.add('scroll-animate');
      observer.observe(formRef.current);
    }
    
    if (infoRef.current) {
      infoRef.current.classList.add('scroll-animate');
      observer.observe(infoRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="luxe-container">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Begin Your Wedding Journey</h2>
          <p className="text-luxe-taupe text-lg mt-6">
            Let's create something extraordinary together. Contact us to schedule a consultation and start turning your dream wedding into reality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <form 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="bg-luxe-cream p-8 rounded-sm shadow-soft border border-luxe-gold/10"
          >
            <h3 className="font-display text-2xl text-luxe-charcoal mb-6">Schedule a Consultation</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-luxe-charcoal mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-luxe-charcoal mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm text-luxe-charcoal mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventDate" className="block text-sm text-luxe-charcoal mb-2">Tentative Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formState.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-luxe-charcoal mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors resize-none"
                  placeholder="Tell us about your wedding vision..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  "btn-luxe w-full flex items-center justify-center",
                  (isSubmitting || isSubmitted) && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    Message Sent! We'll Contact You Soon
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </div>
          </form>
          
          <div ref={infoRef} className="flex flex-col justify-center">
            <h3 className="font-display text-2xl text-luxe-charcoal mb-6 title-accent">Contact Information</h3>
            
            <div className="space-y-8 mt-4">
              <div className="flex items-start">
                <div className="p-3 rounded-sm bg-luxe-blush/50 mr-4">
                  <Mail className="h-6 w-6 text-luxe-gold" />
                </div>
                <div>
                  <p className="text-sm text-luxe-taupe mb-1">Email Us</p>
                  <a href="mailto:hello@elegance-events.com" className="text-lg text-luxe-charcoal hover:text-luxe-gold transition-colors">
                    hello@elegance-events.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-sm bg-luxe-blush/50 mr-4">
                  <MapPin className="h-6 w-6 text-luxe-gold" />
                </div>
                <div>
                  <p className="text-sm text-luxe-taupe mb-1">Visit Our Studio</p>
                  <p className="text-lg text-luxe-charcoal">
                    1234 Elegant Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-sm bg-luxe-blush/50 mr-4">
                  <Phone className="h-6 w-6 text-luxe-gold" />
                </div>
                <div>
                  <p className="text-sm text-luxe-taupe mb-1">Call Us</p>
                  <a href="tel:+12345678900" className="text-lg text-luxe-charcoal hover:text-luxe-gold transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-10 border-t border-luxe-gold/10">
              <p className="text-luxe-charcoal font-medium mb-4">Follow Our Journey</p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-luxe-cream rounded-sm text-luxe-gold hover:bg-luxe-gold hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="p-3 bg-luxe-cream rounded-sm text-luxe-gold hover:bg-luxe-gold hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="p-3 bg-luxe-cream rounded-sm text-luxe-gold hover:bg-luxe-gold hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="p-3 bg-luxe-cream rounded-sm text-luxe-gold hover:bg-luxe-gold hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
