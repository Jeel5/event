import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'py-2 bg-white/90 backdrop-blur-lg shadow-md' 
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 mr-4">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Samarthya Events Logo" 
                className="h-10 sm:h-14 w-auto object-contain"
              />
              <span className="ml-3 font-display text-xl md:text-2xl text-luxe-charcoal hidden sm:inline-block">
                Samarthya Events
              </span>
            </Link>
          </div>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'font-sans text-sm tracking-wide transition-colors duration-300 py-2',
                    isActive(link.path) 
                      ? 'text-luxe-gold font-medium border-b-2 border-luxe-gold' 
                      : 'text-luxe-charcoal hover:text-luxe-gold'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Right Section - Contact Button + Mobile Menu */}
          <div className="flex items-center">
            <Link 
              to="/contact" 
              className="hidden md:inline-flex px-5 py-2 border border-luxe-gold text-luxe-gold hover:bg-luxe-gold hover:text-white transition-colors duration-300 rounded-sm mr-4"
            >
              Contact Us
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-luxe-charcoal" />
              ) : (
                <Menu className="h-6 w-6 text-luxe-charcoal" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - Full Screen Overlay */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 transition-all duration-300 md:hidden',
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-display text-2xl transition-colors duration-300',
                  isActive(link.path) 
                    ? 'text-luxe-gold' 
                    : 'text-luxe-charcoal hover:text-luxe-gold',
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link 
            to="/contact" 
            className="mt-8 px-8 py-3 border-2 border-luxe-gold text-luxe-gold hover:bg-luxe-gold hover:text-white transition-colors duration-300 rounded-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
