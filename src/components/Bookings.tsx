import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Star, CheckCircle } from 'lucide-react';
import { useTours } from '@/hooks/useTours';
import { api, BookingData } from '@/services/api';
import beachImage from '@/assets/beach-paradise.jpg';
import safariImage from '@/assets/destination-safari.jpg';
import mountainImage from '@/assets/mountain-adventure.jpg';

const Bookings = () => {
  const { tours, loading, error } = useTours();
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    phone: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await api.createBooking({
        tourId: selectedTour._id,
        name: bookingData.name,
        email: bookingData.email,
        date: bookingData.date,
        phone: bookingData.phone,
        specialRequests: bookingData.specialRequests
      });
      
      setSubmitStatus('success');
      setIsModalOpen(false);
      setBookingData({ name: '', email: '', date: '', phone: '', specialRequests: '' });
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading tours...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error loading tours: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-luxury"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green to-twilight-blue">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-cream max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-shadow">
            Book Your
            <span className="block gradient-text">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-shadow">
            Choose from our curated selection of luxury travel experiences and create unforgettable memories.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Available <span className="gradient-text">Tours</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select your perfect adventure and book with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour._id}
                className="group bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-forest-green to-twilight-blue flex items-center justify-center">
                  <div className="text-cream text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-lg font-medium">{tour.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                    {tour.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Tour Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{tour.duration} day{tour.duration > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{tour.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Small groups</span>
                    </div>
                  </div>

                  {/* Price and Book Button */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-foreground">${tour.price}</span>
                      <span className="text-muted-foreground"> per person</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedTour(tour);
                      setIsModalOpen(true);
                    }}
                    className="w-full btn-luxury"
                  >
                    Book This Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-serif font-bold text-foreground">
                  Book <span className="gradient-text">{selectedTour?.title}</span>
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Any special requirements or requests..."
                  />
                </div>

                {/* Tour Summary */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Booking Summary</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{selectedTour?.title}</span>
                    <span className="font-bold text-foreground">${selectedTour?.price}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-luxury text-lg py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-foreground mr-2"></div>
                      Processing Booking...
                    </div>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                    <CheckCircle className="text-green-600 text-xl mr-3" />
                    <span className="text-green-800">Booking confirmed! We'll contact you soon.</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                    <span className="text-red-600 text-xl mr-3">⚠</span>
                    <span className="text-red-800">Failed to process booking. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
