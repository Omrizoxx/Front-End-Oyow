import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecurityBooking from '@/components/SecurityBooking';

const SecurityBookingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SecurityBooking />
      <Footer />
    </div>
  );
};

export default SecurityBookingPage;
