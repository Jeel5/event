import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Calendar, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    city: '',
    eventName: '',
    eventDate: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        {
          from_name: formState.name,
          reply_to: formState.email,
          subject: formState.subject,
          city: formState.city,
          event_name: formState.eventName,
          event_date: formState.eventDate,
          message: formState.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log(formState)

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID,
        {
          to_name: formState.name,
            to_email: formState.email,
          subject: `Thank you for contacting Samarthya Events regarding ${formState.eventName}`,
          event_name: formState.eventName,
          event_date: formState.eventDate,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      setFormState({
        name: '',
        city: '',
        eventName: '',
        eventDate: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-luxe-cream">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subtitle">Contact Us</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-luxe-charcoal mb-6">
              Let's Create Something <span className="text-luxe-gold">Beautiful</span>
            </h1>
            <p className="text-luxe-taupe text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              We're excited to hear about your vision. Reach out to begin the conversation about your perfect celebration.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-luxe-cream p-8 md:p-10 rounded-sm shadow-soft border border-luxe-gold/10"
              >
                <h2 className="font-display text-2xl md:text-3xl text-luxe-charcoal mb-2">Schedule Your Consultation</h2>
                <p className="text-luxe-taupe mb-8">Fill out the form below to start planning your dream wedding.</p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-luxe-charcoal mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors"
                        placeholder="Your Full Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm text-luxe-charcoal mb-2">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formState.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors"
                        placeholder="Your City"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventName" className="block text-sm text-luxe-charcoal mb-2">Event Name *</label>
                      <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={formState.eventName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors"
                        placeholder="Wedding, Anniversary, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="eventDate" className="block text-sm text-luxe-charcoal mb-2">Event Date *</label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formState.eventDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm text-luxe-charcoal mb-2">Email Address *</label>
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
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm text-luxe-charcoal mb-2">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm text-luxe-charcoal mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:border-luxe-gold transition-colors resize-none"
                      placeholder="Share your event details, requirements, or any questions you may have..."
                    />
                  </div>
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-sm">
                      {submitError}
                    </div>
                  )}
                  
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
            </div>
            
            {/* Contact Info */}
            <div ref={infoRef} className="lg:col-span-2 flex flex-col">
              <h2 className="font-display text-2xl md:text-3xl text-luxe-charcoal mb-8 title-accent">Contact Information</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="p-3 rounded-sm bg-luxe-blush/50 mr-4">
                    <Mail className="h-6 w-6 text-luxe-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-luxe-taupe mb-1">Email Us</p>
                    <a href="samarthyaevents.com" className="text-lg text-luxe-charcoal hover:text-luxe-gold transition-colors">
                      samarthyaevents@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-sm bg-luxe-blush/50 mr-4">
                    <Phone className="h-6 w-6 text-luxe-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-luxe-taupe mb-1">Call Us</p>
                    <a href="tel:+918866793934" className="text-lg text-luxe-charcoal hover:text-luxe-gold transition-colors">
                      +91 88667 93934
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-sm bg-luxe-blush/50 mr-4">
                    <Calendar className="h-6 w-6 text-luxe-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-luxe-taupe mb-1">Office Hours</p>
                    <p className="text-lg text-luxe-charcoal">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-sm bg-luxe-blush/50 mr-4">
                    <MapPin className="h-6 w-6 text-luxe-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-luxe-taupe mb-1">Visit Our Studio</p>
                    <p className="text-lg text-luxe-charcoal">
                      Address
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-luxe-gold text-sm uppercase tracking-wider mt-2 inline-block elegant-underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="font-display text-xl text-luxe-charcoal mb-4">Follow Us</h3>
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
      
      {/* Map Section */}
      <section className="py-20 bg-luxe-cream">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
              Visit Our Studio
            </h2>
            <p className="text-luxe-taupe">
              Schedule an in-person consultation to discuss your vision in our elegant planning studio.
            </p>
          </div>
          
          <div className="rounded-sm overflow-hidden shadow-soft h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175903063953!2d-73.9888832!3d40.7445794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1679234367548!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-subtitle">Common Questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-luxe-cream rounded-sm shadow-soft border border-luxe-gold/10">
              <h3 className="font-display text-xl text-luxe-charcoal mb-4">When should I book a wedding planner?</h3>
              <p className="text-luxe-taupe">
                We recommend securing your wedding planner 9-12 months before your wedding date, or as soon as you're engaged for destination weddings. This allows ample time for venue selection, vendor bookings, and design development.
              </p>
            </div>
            
            <div className="p-8 bg-luxe-cream rounded-sm shadow-soft border border-luxe-gold/10">
              <h3 className="font-display text-xl text-luxe-charcoal mb-4">What services do you offer?</h3>
              <p className="text-luxe-taupe">
                We offer comprehensive wedding planning services including full planning, day-of coordination, design and styling, vendor selection, and destination wedding planning. Each package can be customized to your specific needs.
              </p>
            </div>
            
            <div className="p-8 bg-luxe-cream rounded-sm shadow-soft border border-luxe-gold/10">
              <h3 className="font-display text-xl text-luxe-charcoal mb-4">How much does wedding planning cost?</h3>
              <p className="text-luxe-taupe">
                Our services are tailored to each couple's unique needs and wedding scale. We offer packages starting at $3,500 for day-of coordination and comprehensive planning services starting at $8,500. We'll provide a detailed quote after understanding your vision.
              </p>
            </div>
            
            <div className="p-8 bg-luxe-cream rounded-sm shadow-soft border border-luxe-gold/10">
              <h3 className="font-display text-xl text-luxe-charcoal mb-4">Do you travel for destination weddings?</h3>
              <p className="text-luxe-taupe">
                Absolutely! We specialize in destination weddings and have planned celebrations across the globe. Travel fees are determined based on location and duration, and we'll include these details in your custom proposal.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
