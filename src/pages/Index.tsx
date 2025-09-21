import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Experiences from '@/components/Experiences';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <Hero />
      <Destinations />
      <Experiences />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
