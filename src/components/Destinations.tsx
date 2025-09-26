import { MapPin, Star } from 'lucide-react';
import safariImage from '@/assets/destination-safari.jpg';
import oceanImage from '@/assets/destination-ocean.jpg';
import kakamega from '@/assets/kakamega.jpg'
import wilderbeast from '@/assets/wilder-mara2.jpg'
import nairobipark from '@/assets/Nairobi park.jpg'
import mountkili from '@/assets/mount kili.jpg'
import crater from '@/assets/crater.jpg'
import bwindi from '@/assets/bwindi.jpg'
import diani from '@/assets/diani.jpg'
import watamu from '@/assets/watamu.jpg'
import amboseli from '@/assets/amboseli.jpg'
import zanzibar from '@/assets/zanzibar.jpg'
import lamu from '@/assets/lamu.jpg'
import magadi from '@/assets/lake magadi.jpg'
import chyulu from '@/assets/chyulu.jpg'
import React from 'react';
import Modal from './modals/modal';

interface BookingForm {
  name: string;
  email: string;
  date: string;
}


const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Serengeti National Park',
      location: 'Serengeti, Tanzania',
      image: safariImage,
      rating: 4.9,
      description: 'Experience the raw beauty of African wildlife in their natural habitat with luxury safari lodges and expert guides.',
      highlights: ['Wilderbeast Migration' , 'Big Five Wildlife', 'Luxury Lodges', 'Cultural Immersion'],
    },
    {
      id: 2,
      name: 'Masaai Mara National Reserve',
      location: 'Narok , Kenya',
      image: wilderbeast,
      rating: 4.8,
      description: 'Witness the world-famous Great Migration and explore the vast savannahs of the Maasai Mara, where abundant wildlife and breathtaking landscapes await. Enjoy luxury camps, guided game drives, and authentic cultural encounters with the Maasai people.',
      highlights: ['Great Migration', 'Vast Savannahs', 'Luxury Camps', 'Maasai Culture'],
    },
    {
      id: 3,
      name: 'Nairobi National Park',
      location: 'Nairobi ,Kenya',
      image: nairobipark,
      rating: 4.5,
      description: 'Discover the wild beauty of Nairobi National Park, where you can witness iconic wildlife against the backdrop of Nairobi’s skyline. Enjoy guided game drives, birdwatching, and unique opportunities to see rhinos, lions, and giraffes just outside the city.',
      highlights: ['Glacier Trekking', 'Epic Landscapes', 'Adventure Sports'],
    },
    {
      id: 4,
      name: 'Ngorongoro Crater',
      location: 'Arusha, Tanzania',
      image: crater,
      rating: 4.7,
      description: 'Marvel at the breathtaking Ngorongoro Crater, a UNESCO World Heritage Site and one of Africa’s most remarkable natural wonders. Explore the lush crater floor teeming with diverse wildlife, including lions, elephants, and rare black rhinos. Enjoy guided safaris, stunning views from the crater rim, and the unique opportunity to witness the harmonious coexistence of animals in this ancient volcanic caldera.',
      highlights: ['Crater Safaris', 'Stunning Views', 'Diverse Wildlife', 'Guided Tours'],
    },
    {
      id: 5,
      name: 'Bwindi Impenerable Forest ',
      location: 'Southwest ,Uganda',
      image: bwindi,
      rating: 4.4,
      description: 'Venture into the lush Bwindi Impenetrable Forest, a UNESCO World Heritage Site renowned for its population of endangered mountain gorillas. Embark on guided gorilla trekking adventures, explore dense rainforests, and experience the rich biodiversity and unique culture of southwestern Uganda.',
      highlights: ['Gorilla Trekking', 'Rainforest Exploration', 'Biodiversity', 'Cultural Encounters'],
    },
    {
      id: 6,
      name: 'Mount Kilimanjaro ',
      location: 'Moshi ,Tanzania',
      image: mountkili,
      rating: 4.7,
      description: 'Conquer Africa highest peak, Mount Kilimanjaro, and experience the thrill of trekking through diverse ecosystems from rainforest to alpine desert. Enjoy guided climbs, breathtaking vistas, and the sense of achievement at Uhuru Peak.',
      highlights: ['Summit Treks', 'Diverse Ecosystems', 'Guided Climbs', 'Breathtaking Views'],
    },
    {
      id: 7,
      name: 'Zanzibar Island',
      location: 'Zanzibar ,Tanzania',
      image: zanzibar,
      rating: 4.9,
      description: 'Escape to the enchanting Zanzibar Island, where pristine white-sand beaches meet turquoise waters and vibrant Swahili culture. Relax in luxury resorts, explore historic Stone Town, and indulge in spice tours and water sports on this idyllic Indian Ocean paradise.',
      highlights: ['White-Sand Beaches', 'Stone Town', 'Spice Tours', 'Water Sports'],
    },
    {
      id: 8,
      name: 'Diani',
      location: 'Mombasa ,Kenya',
      image: diani,
      rating: 4.7,
      description: 'Relax on the stunning white sands of Diani Beach, renowned for its crystal-clear waters, swaying palm trees, and vibrant coral reefs. Enjoy world-class water sports, beach resorts, and the laid-back coastal charm of Kenya’s Indian Ocean paradise.',
      highlights: ['White-Sand Beaches', 'Coral Reefs', 'Water Sports', 'Luxury Resorts'],
    },
    {
      id: 9,
      name: 'Watamu',
      location: 'Northern Coast ,Kenya',
      image: watamu,
      rating: 4.8,
      description: 'Discover the wild beauty of Nairobi National Park, where you can witness iconic wildlife against the backdrop of Nairobi’s skyline. Enjoy guided game drives, birdwatching, and unique opportunities to see rhinos, lions, and giraffes just outside the city.',
      highlights: ['Glacier Trekking', 'Epic Landscapes', 'Adventure Sports'],
    },
    {
      id: 10,
      name: 'Amboseli National Park',
      location: 'Southern ,Kenya',
      image: amboseli,
      rating: 4.4,
      description: 'Famous for its spectacular views of Mount Kilimanjaro, Africas highest peak, which lies across the border in Tanzania. Amboseli is a park of vast, dry plains and lush, swampy areas that attract large herds of elephants.',
      highlights: ['Elephant Herds', 'Mount Kilimanjaro Views', 'Swamp Safaris', 'Wildlife Photography'],
    },
    {
      id: 11,
      name: 'Lamu Island',
      location: 'Lamu ,Kenya',
      image: lamu,
      rating: 4.6,
      description: 'A step back in time, Lamu Old Town is the oldest and best-preserved Swahili settlement in East Africa, a UNESCO World Heritage Site. Life moves at a slow pace, with donkeys and dhows as the main transport.',
      highlights: ['Lamu Old Town', 'Dhow Safaris', 'Rich Culture & Festivals'],
    },
    {
      id: 12,
      name: 'Chyulu Hills National Park',
      location: 'Narok ,Kenya',
      image: chyulu,
      rating: 4.4,
      description: 'A mesmerizing range of young, volcanic hills covered in a thick, emerald-green cloud forest. Often called the "Green Hills of Africa" from Hemingway"s book. It feels like a different world—lush, misty, and ancient.',
      highlights: ['Cloud Forests', 'Volcanic Hills', 'Scenic Hiking', 'Unique Wildlife'],
    },
    {
      id: 13,
      name: 'Lake Magadi & Shompole Conservercy',
      location: 'Southern ,Kenya',
      image: magadi,
      rating: 4.5,
      description: 'A surreal, otherworldly landscape at the southern end of the Rift Valley. Lake Magadi is a vast, blindingly white soda lake, while the neighboring Shompole Conservancy is a model of community-based conservation with dramatic, arid beauty.',
      highlights: ['Soda Lake', 'Community Conservation', 'Dramatic Landscapes', 'Arid Beauty'],
    },
    {
      id: 14,
      name: 'Kakamega Forest And National Conservercy',
      location: 'Western ,Kenya',
      image: kakamega,
      rating: 4.6,
      description: "Kenya's only tropical rainforest, a remnant of the ancient Guineo-Congolian forest that once stretched across central Africa. It's a biodiversity hotspot and a paradise for birdwatchers and botanists.",
      highlights: ['Primate Watching', 'Birdwatching Paradise', 'Ancient Rainforest', 'Botanical Diversity'],
    },
    {
      id: 15,
      name: 'Kiwayu Island & Manda Bay',
      location: 'North of Lamu ,Kenya',
      image: oceanImage,
      rating: 4.5,
      description: 'For those who find Lamu too busy, this is the ultimate escape. Kiwayu is a pristine, private-feeling island north of Lamu, with untouched beaches and simple, eco-friendly lodges. Manda Bay is a tranquil area on Manda Island.',
      highlights: ['Kiwayu Island', 'Untouched Beaches', 'Eco-Friendly Lodges', 'Manda Bay Tranquility'],
    },
  ];

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking data", formData)
    setIsModalOpen(false);
  };

  const [formData, setFormData] = React.useState<BookingForm>({
                        name: "",
                        email: "",
                        date: "",
                    });

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