import React from "react";
import Experiences from "@/components/Experiences";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ExperiencesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Experiences />
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencesPage;
