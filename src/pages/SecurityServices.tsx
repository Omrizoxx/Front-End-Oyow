import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecurityServices from '@/components/SecurityServices';

const SecurityServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SecurityServices />
      <Footer />
    </div>
  );
};

export default SecurityServicesPage;
