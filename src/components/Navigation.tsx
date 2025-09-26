import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './modals/modal';
import { api, BookingData } from '@/services/api';

interface BookingForm {
  name: string;
  email: string;
  date: string;
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = React.useState<BookingForm>({
                        name: "",
                        email: "",
                        date: "",
                    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Submit booking to server
      await api.createBooking({
        tourId: '1', // Default tour ID, you can make this dynamic
        name: formData.name,
        email: formData.email,
        date: formData.date,
      });
      console.log("Booking submitted successfully!");
      setIsModalOpen(false);
      setFormData({ name: "", email: "", date: "" });
      // You could add a success toast here
    } catch (error) {
      console.error('Booking error:', error);
      // You could add an error toast here
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <button className={`btn-luxury ${isScrolled ? '' : 'btn-outline-luxury'}`}
            onClick={() => setIsModalOpen(true)} >
              Book Now
            </button>
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
            <button className="btn-luxury mt-4 w-full"
            onClick={() => setIsModalOpen(true)}>Book Now</button>
          </div>
        )}
      </div>
                <Modal
                            isOpen={isModalOpen}            // 👈 show modal if true
                            onClose={() => setIsModalOpen(false)} // 👈 closes modal
                            title="Book Your Trip"
                        >
                            <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Booking confirmed ✅"); // here you’ll connect to backend
                                setIsModalOpen(false); // close modal after submit
                            }}
                            className="space-y-4"
                            >
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 border rounded"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 border rounded"
                                required
                            />
                            <input
                                type="date"
                                className="w-full p-2 border rounded"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                            >
                                Confirm Booking
                            </button>
                            </form>
                    </Modal>
    </nav>
    
  );
};

export default Navigation;