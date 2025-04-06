
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CarouselBanner from '@/components/CarouselBanner';
import DescriptionSection from '@/components/DescriptionSection';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with the scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CarouselBanner />
      <DescriptionSection />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
