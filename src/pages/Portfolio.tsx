
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const portfolioItems = [
  {
    id: 1,
    title: 'Elegant Garden Wedding',
    category: 'Garden Wedding',
    location: 'Botanical Gardens, New York',
    date: 'June 2023',
    description: 'A romantic garden celebration surrounded by blooming flowers and lush greenery.',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    ]
  },
  {
    id: 2,
    title: 'Coastal Luxury Wedding',
    category: 'Beach Wedding',
    location: 'Malibu Beach, California',
    date: 'August 2023',
    description: 'A sophisticated beachfront celebration with panoramic ocean views and elegant decor.',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    ]
  },
  {
    id: 3,
    title: 'Rustic Vineyard Celebration',
    category: 'Vineyard Wedding',
    location: 'Napa Valley, California',
    date: 'May 2023',
    description: 'A charming vineyard wedding combining rustic elements with sophisticated details.',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    ]
  },
  {
    id: 4,
    title: 'Modern Urban Chic',
    category: 'Urban Wedding',
    location: 'Downtown Chicago, Illinois',
    date: 'October 2023',
    description: 'A contemporary celebration in an urban setting with sleek design and city views.',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    ]
  },
  {
    id: 5,
    title: 'Intimate Mountain Elopement',
    category: 'Elopement',
    location: 'Aspen, Colorado',
    date: 'December 2023',
    description: 'A private mountain celebration with breathtaking views and personal touches.',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    ]
  },
  {
    id: 6,
    title: 'Classic Ballroom Celebration',
    category: 'Ballroom Wedding',
    location: 'The Plaza, New York',
    date: 'September 2023',
    description: 'A timeless celebration in a historic ballroom with elegant decor and luxurious details.',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    ]
  },
];

const Portfolio = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const categories = ['All', 'Garden Wedding', 'Beach Wedding', 'Vineyard Wedding', 'Urban Wedding', 'Elopement', 'Ballroom Wedding'];
  
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);
  
  const selectedItem = selectedId 
    ? portfolioItems.find(item => item.id === selectedId) 
    : null;
  
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
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
    
    if (gridRef.current) {
      gridRef.current.classList.add('scroll-animate');
      observer.observe(gridRef.current);
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
            <p className="section-subtitle">Our Portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-luxe-charcoal mb-6">
              Celebrations Crafted with <span className="text-luxe-gold">Love</span>
            </h1>
            <p className="text-luxe-taupe text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Explore our curated collection of extraordinary weddings and events, each uniquely designed to tell a couple's distinct love story.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          {/* Filter */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-5 py-2 text-sm uppercase tracking-wider transition-all duration-300",
                  selectedCategory === category
                    ? "bg-luxe-gold text-white"
                    : "bg-luxe-cream text-luxe-charcoal hover:bg-luxe-gold/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedId(item.id)}
              >
                <div className="relative overflow-hidden rounded-sm">
                  <div className="aspect-[4/3]">
                    <img 
                      src={item.images[0]} 
                      alt={item.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-luxe-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-white/80 text-sm uppercase tracking-wider">{item.category}</p>
                    <h3 className="text-white font-display text-xl md:text-2xl">{item.title}</h3>
                    <div className="flex items-center mt-3 text-luxe-gold">
                      <span className="text-sm uppercase tracking-wider">View Details</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-luxe-gold text-sm uppercase tracking-wider mb-1">{item.category}</p>
                  <h3 className="font-display text-xl text-luxe-charcoal">{item.title}</h3>
                  <p className="text-luxe-taupe mt-1">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Modal */}
      {selectedId && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedId(null)}>
          <div className="relative max-w-4xl w-full bg-white rounded-sm shadow-elegant animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 text-luxe-charcoal hover:text-luxe-gold transition-colors"
              onClick={() => setSelectedId(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <div className="aspect-[3/4] md:aspect-auto md:h-full">
                  <img 
                    src={selectedItem?.images[0]} 
                    alt={selectedItem?.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <p className="text-luxe-gold text-sm uppercase tracking-wider mb-2">{selectedItem?.category}</p>
                <h3 className="font-display text-2xl md:text-3xl text-luxe-charcoal mb-2">{selectedItem?.title}</h3>
                <p className="text-luxe-taupe mb-6">{selectedItem?.location} | {selectedItem?.date}</p>
                
                <p className="text-luxe-charcoal mb-8">{selectedItem?.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-display text-lg text-luxe-charcoal">Gallery</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedItem?.images.map((image, index) => (
                      <div key={index} className="aspect-square rounded-sm overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Gallery image ${index + 1}`} 
                          className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-luxe-gold/10">
                  <p className="font-display text-lg text-luxe-charcoal mb-4">Interested in a similar experience?</p>
                  <button className="btn-luxe">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <section className="py-20 bg-luxe-blush">
        <div className="luxe-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
            Ready to Create Your Perfect Wedding?
          </h2>
          <p className="text-luxe-taupe text-lg max-w-2xl mx-auto mb-10">
            Let's transform your wedding dreams into a beautiful reality. Reach out for a consultation with our expert team.
          </p>
          <button className="btn-luxe">
            Start the Conversation
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
