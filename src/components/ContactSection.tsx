
import { useRef, useEffect, useState, FormEvent } from 'react';
import { Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    eventName: '',
    eventDate: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      city: '',
      eventName: '',
      eventDate: '',
      email: '',
      subject: '',
      message: ''
    });
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
    
    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 bg-white">
      <div className="luxe-container">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-luxe-taupe text-lg mt-6">
            Ready to start planning your dream event? Contact us today and let's create something unforgettable together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 scroll-animate">
            <div className="bg-luxe-cream p-8 rounded-sm h-full">
              <h3 className="font-display text-2xl text-luxe-charcoal mb-6">Samarthya events</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-luxe-gold mr-4" />
                  <p className="text-luxe-taupe">8866793934</p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-luxe-gold mr-4" />
                  <p className="text-luxe-taupe">samarthyaevents.com</p>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-luxe-taupe">
                  We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 scroll-animate">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-luxe-charcoal mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/30"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-luxe-charcoal mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/30"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventName" className="block text-luxe-charcoal mb-2">Event Name</label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    className="w-full p-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/30"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="eventDate" className="block text-luxe-charcoal mb-2">Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full p-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/30"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-luxe-charcoal mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/30"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-luxe-charcoal mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/30"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-luxe-charcoal mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-luxe-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/30 h-32"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-luxe w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
