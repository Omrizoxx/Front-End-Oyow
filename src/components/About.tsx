import { Globe, Shield, Heart, Compass } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Globe,
      title: 'Sustainable Travel',
      description: 'We partner with local communities and conservation efforts to ensure our adventures protect the environments we explore.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our priority. All our expeditions are led by certified guides with extensive experience in their regions.'
    },
    {
      icon: Heart,
      title: 'Authentic Connections',
      description: 'We believe in meaningful travel that creates genuine connections with cultures, wildlife, and landscapes.'
    },
    {
      icon: Compass,
      title: 'Expert Guidance',
      description: 'Our team of local experts and adventure specialists ensure you discover hidden gems and unique perspectives.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Where Luxury Meets <span className="gradient-text">Adventure</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over a decade, Wanderlust Adventures has been crafting extraordinary 
              travel experiences that go beyond the ordinary. We believe that true luxury 
              lies not just in comfort, but in the transformative power of authentic adventure.
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              From the pristine wilderness of Patagonia to the vibrant savannas of Africa, 
              we curate journeys that respect local cultures, protect fragile ecosystems, 
              and create memories that last a lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-luxury">
                Our Story
              </button>
              <button className="btn-outline-luxury">
                Meet Our Team
              </button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-luxury hover:shadow-gold transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-serif font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Adventures Crafted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold gradient-text mb-2">50+</div>
            <div className="text-muted-foreground">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold gradient-text mb-2">15</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Guest Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;