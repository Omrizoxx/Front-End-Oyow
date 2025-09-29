import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/Html/Destinations.html' },
    { name: 'Experiences', href: '/Html/Experiences.html' },
    { name: 'Security', href: '/Html/security.html' },
    { name: 'About', href: '/Html/about.html' },
    { name: 'Contact', href: '/Html/contact.html' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-luxury'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-serif font-bold">
            <span className="gradient-text">Oyow</span>
            <span className={isScrolled ? 'text-foreground' : 'text-cream'}>
              Adventures
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${
                  isScrolled ? 'text-foreground hover:text-gold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/Html/bookings.html"
              className={`btn-luxury ${isScrolled ? '' : 'btn-outline-luxury'}`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              isScrolled ? 'text-foreground' : 'text-cream'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-foreground hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/Html/bookings.html"
              className="btn-luxury mt-4 w-full block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
    
  );
};

export default Navigation;