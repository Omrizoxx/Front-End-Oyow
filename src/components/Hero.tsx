import { ChevronDown, Shield, MapPin, Users, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-mountains.jpg';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <>
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

      {/* Services Teaser */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Experience the perfect blend of adventure and security with our comprehensive travel protection services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Security Services */}
            <div className="group bg-card rounded-xl p-8 shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105 cursor-pointer"
                 onClick={() => navigate('/Html/security.html')}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Security Services</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Professional armed security personnel and state-of-the-art vehicles for complete protection
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>Armed Security Teams</span>
                </div>
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>VIP Escort Vehicles</span>
                </div>
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>24/7 Emergency Response</span>
                </div>
              </div>
              <div className="flex items-center text-red-500 font-medium group-hover:text-red-400 transition-colors">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Destinations */}
            <div className="group bg-card rounded-xl p-8 shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105 cursor-pointer"
                 onClick={() => navigate('/Html/Destinations.html')}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-twilight-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Premium Destinations</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Curated luxury destinations across East Africa's most breathtaking landscapes
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-forest-green rounded-full mr-3"></div>
                  <span>Mountain Adventures</span>
                </div>
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-forest-green rounded-full mr-3"></div>
                  <span>Beach Paradises</span>
                </div>
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-forest-green rounded-full mr-3"></div>
                  <span>Wildlife Safaris</span>
                </div>
              </div>
              <div className="flex items-center text-forest-green font-medium group-hover:text-twilight-blue transition-colors">
                <span className="text-sm">Explore Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Experiences */}
            <div className="group bg-card rounded-xl p-8 shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105 cursor-pointer"
                 onClick={() => navigate('/Html/Experiences.html')}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Luxury Experiences</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Unforgettable adventures designed for discerning travelers seeking extraordinary moments
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span>Helicopter Tours</span>
                </div>
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span>Private Safaris</span>
                </div>
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span>Cultural Immersions</span>
                </div>
              </div>
              <div className="flex items-center text-gold font-medium group-hover:text-yellow-500 transition-colors">
                <span className="text-sm">Discover More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Group Services */}
            <div className="group bg-card rounded-xl p-8 shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105 cursor-pointer"
                 onClick={() => navigate('/Html/bookings.html')}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-twilight-blue to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Group Services</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Specialized group protection and coordination for corporate and family adventures
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-twilight-blue rounded-full mr-3"></div>
                  <span>Corporate Events</span>
                </div>
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-twilight-blue rounded-full mr-3"></div>
                  <span>Family Adventures</span>
                </div>
                <div className="flex items-center text-sm text-foreground">
                  <div className="w-2 h-2 bg-twilight-blue rounded-full mr-3"></div>
                  <span>VIP Concierge</span>
                </div>
              </div>
              <div className="flex items-center text-twilight-blue font-medium group-hover:text-blue-500 transition-colors">
                <span className="text-sm">Book Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-forest-green to-twilight-blue rounded-2xl p-8 text-cream">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Ready for Your Next <span className="text-gold">Adventure?</span>
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Experience the perfect combination of luxury travel and professional security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-gold text-foreground px-8 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                  onClick={() => navigate('/Html/security.html')}
                >
                  View Security Packages
                </button>
                <button 
                  className="border-2 border-cream text-cream px-8 py-3 rounded-lg font-medium hover:bg-cream hover:text-foreground transition-colors"
                  onClick={() => navigate('/Html/contact.html')}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;