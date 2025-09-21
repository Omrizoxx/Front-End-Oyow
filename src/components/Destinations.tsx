import { MapPin, Star } from 'lucide-react';
import safariImage from '@/assets/destination-safari.jpg';
import oceanImage from '@/assets/destination-ocean.jpg';
import mountainImage from '@/assets/experience-mountain.jpg';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'African Safari',
      location: 'Serengeti, Tanzania',
      image: safariImage,
      rating: 4.9,
      description: 'Experience the raw beauty of African wildlife in their natural habitat with luxury safari lodges and expert guides.',
      highlights: ['Big Five Wildlife', 'Luxury Lodges', 'Cultural Immersion'],
    },
    {
      id: 2,
      name: 'Tropical Paradise',
      location: 'Maldives',
      image: oceanImage,
      rating: 4.8,
      description: 'Escape to crystal-clear waters and pristine beaches with overwater villas and world-class diving experiences.',
      highlights: ['Overwater Villas', 'Coral Reefs', 'Private Beaches'],
    },
    {
      id: 3,
      name: 'Mountain Expedition',
      location: 'Patagonia, Chile',
      image: mountainImage,
      rating: 4.9,
      description: 'Challenge yourself with breathtaking mountain treks and glacier explorations in one of Earth\'s last frontiers.',
      highlights: ['Glacier Trekking', 'Epic Landscapes', 'Adventure Sports'],
    },
  ];

  return (
    <section id="destinations" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Pristine <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey to extraordinary places where luxury meets adventure, 
            and every moment becomes a treasured memory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <button className="w-full btn-outline-luxury">
                  Explore Destination
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;