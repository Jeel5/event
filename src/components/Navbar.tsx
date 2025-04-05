import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
          ? 'py-3 bg-white/90 backdrop-blur-lg shadow-soft' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="luxe-container flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-10 font-display text-2xl text-luxe-charcoal"
        >
          Samarthya Events
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'font-sans text-sm tracking-wide transition-colors duration-300 elegant-underline',
                isActive(link.path) 
                  ? 'text-luxe-gold' 
                  : 'text-luxe-charcoal hover:text-luxe-gold'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link 
          to="/contact" 
          className="hidden md:inline-flex btn-outline"
        >
          Contact Us
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-10 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-luxe-charcoal" />
          ) : (
            <Menu className="h-6 w-6 text-luxe-charcoal" />
          )}
        </button>

        {/* Mobile menu */}
        <div 
          className={cn(
            'fixed inset-0 bg-white flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden',
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-display text-2xl transition-colors duration-300',
                  isActive(link.path) 
                    ? 'text-luxe-gold' 
                    : 'text-luxe-charcoal hover:text-luxe-gold',
                  isMenuOpen ? 'animate-fade-up' : '',
                  `animate-delay-${(index + 1) * 100}`
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={cn(
                'btn-luxe mt-4',
                isMenuOpen ? 'animate-fade-up' : '',
                'animate-delay-700'
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
