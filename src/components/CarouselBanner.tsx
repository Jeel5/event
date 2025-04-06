import { useEffect, useState, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/button';
import { cn } from '@/lib/utils';

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Elegant wedding setting"
  },
  {
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Rustic wedding decor"
  },
  {
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    alt: "Beautiful wedding flowers"
  }
];

const slogans = [
  "Let's create something timeless",
  "Let's make something incredible together!"
];

const CarouselBanner = () => {
  const [activeSlogan, setActiveSlogan] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const fullTextRef = useRef(slogans[activeSlogan]);
  const indexRef = useRef(0);
  
  const autoplay = Autoplay({ delay: 5000 });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 40 },
    [autoplay]
  );
  
  // Typing animation effect
  useEffect(() => {
    fullTextRef.current = slogans[activeSlogan];
    
    // Reset and show empty string first
    setDisplayText("");
    setIsTyping(true);
    indexRef.current = 0;
    
    // Start with text hidden, then animate it in
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 100);
    
    // Add a small delay before starting typing
    const initialDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (indexRef.current < fullTextRef.current.length) {
          setDisplayText(fullTextRef.current.substring(0, indexRef.current + 1));
          indexRef.current += 1;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          // Set timeout to switch to the next slogan after 3 seconds
          const switchTimeout = setTimeout(() => {
            setActiveSlogan(prev => (prev === 0 ? 1 : 0));
          }, 3000);
          
          return () => clearTimeout(switchTimeout);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }, 600); // Delay before typing starts
    
    return () => clearTimeout(initialDelay);
  }, [activeSlogan]);

  // Format the display text to highlight the first letter
  const formattedText = displayText ? (
    <>
      <span className="text-luxe-gold">{displayText.charAt(0)}</span>
      {displayText.substring(1)}
    </>
  ) : '';

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.reset();
    }
  }, [emblaApi, autoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.reset();
    }
  }, [emblaApi, autoplay]);

  return (
    <section className="relative min-h-[70vh] md:min-h-screen mt-8 flex items-center pt-16 md:pt-20 overflow-hidden">
      <div className="w-full h-[70vh] md:h-screen" ref={emblaRef}>
        <div className="flex h-full">
          {carouselItems.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] h-full min-w-0">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 md:px-10">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-black/20 hover:bg-black/40 text-white border-none rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center focus:text-white active:text-white"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 pointer-events-none" />
          <span className="sr-only">Previous</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-black/20 hover:bg-black/40 text-white border-none rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center focus:text-white active:text-white"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 pointer-events-none" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
      
      {/* Centered Text Overlay with animation */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div 
          className={cn(
            "text-center p-4 md:p-8 bg-black/40 backdrop-blur-sm rounded-lg max-w-3xl mx-auto transition-all duration-1000 transform",
            textVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-20"
          )}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-4 min-h-[3rem] md:min-h-[4rem]">
            {formattedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CarouselBanner;
