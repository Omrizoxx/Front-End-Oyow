import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-mountains.jpg';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-shadow">
          Extraordinary
          <span className="block gradient-text">Adventures</span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-light">
            Await
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-shadow">
          Discover pristine destinations and create unforgettable memories with our 
          curated luxury travel experiences across the world's most breathtaking landscapes.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn-luxury text-lg" onClick={() => navigate('/Html/Destinations.html')}>
            Explore Destinations
          </button>
          <button className="btn-outline-luxury text-lg" onClick={() => navigate('/Html/Experiences.html')}>
            View Experiences
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-light mb-2">Discover More</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;