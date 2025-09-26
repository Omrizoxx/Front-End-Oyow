import React from "react";
import Destinations from "@/components/Destinations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Destinations />
      </main>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
