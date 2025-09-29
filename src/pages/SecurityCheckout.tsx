import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecurityCheckout from '@/components/SecurityCheckout';

const SecurityCheckoutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SecurityCheckout />
      <Footer />
    </div>
  );
};

export default SecurityCheckoutPage;
