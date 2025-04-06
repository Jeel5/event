import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { cn } from '@/lib/utils';

/**
 * Navbar component - Simplified with no scroll behavior
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links configuration
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Fixed navbar with consistent styling - no scroll behavior */}
      <header 
        className="fixed top-0 left-0 w-full z-50 h-28 flex items-center bg-white/95 shadow-md"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 w-1/3">
              <Link to="/" className="flex items-center">
                <img 
                  src={logo} 
                  alt="Samarthya Events Logo" 
                  className="h-20 w-auto object-contain"
                  style={{ minWidth: "160px" }}
                />
                <span className="ml-3 font-display text-xl md:text-2xl lg:text-3xl text-luxe-charcoal hidden sm:inline-block">
                  Samarthya Events
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex ml-16 items-center justify-center w-1/3">
              <nav className="flex justify-center items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'font-sans text-sm font-medium tracking-wide transition-colors duration-300 py-2 px-1',
                      isActive(link.path) 
                        ? 'text-luxe-gold border-b-2 border-luxe-gold' 
                        : 'text-luxe-charcoal hover:text-luxe-gold'
                    )} 
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Contact Button Section - Desktop */}
            <div className="hidden md:flex items-center justify-end w-1/3">
              <Link 
                to="/contact" 
                className="px-6 py-3 border border-luxe-gold text-luxe-gold hover:bg-luxe-gold hover:text-white transition-colors duration-300 rounded-sm"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 md:hidden focus:outline-none focus:ring-2 focus:ring-luxe-gold focus:ring-opacity-50 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 text-luxe-charcoal" />
              ) : (
                <Menu className="h-8 w-8 text-luxe-charcoal" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 transition-all duration-500 md:hidden flex flex-col',
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!isMenuOpen}
      >
        {/* Close Button */}
        <div className="h-28 flex items-center justify-end px-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-luxe-gold focus:ring-opacity-50 rounded-md"
            aria-label="Close menu"
          >
            <X className="h-10 w-10 text-luxe-charcoal" />
          </button>
        </div>
        
        {/* Mobile Menu Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Logo */}
          <div 
            className={cn(
              "mb-10 transition-all duration-500 transform",
              isMenuOpen 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 -translate-y-10"
            )}
            style={{ transitionDelay: "150ms" }}
          >
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-7 mb-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-display text-3xl transition-all duration-500 transform',
                  isActive(link.path) 
                    ? 'text-luxe-gold' 
                    : 'text-luxe-charcoal hover:text-luxe-gold',
                  isMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                )}
                style={{ 
                  transitionDelay: `${200 + index * 100}ms` 
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Contact Button - Mobile */}
          <Link 
            to="/contact" 
            className={cn(
              "px-10 py-4 border-2 border-luxe-gold text-xl text-luxe-gold hover:bg-luxe-gold hover:text-white transition-all duration-500 transform rounded-sm",
              isMenuOpen 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            )}
            style={{ 
              transitionDelay: `${200 + navLinks.length * 100}ms` 
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
