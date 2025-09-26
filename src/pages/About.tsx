import React from "react";
import About from "@/components/About";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
