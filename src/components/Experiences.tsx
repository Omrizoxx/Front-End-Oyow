import { Clock, Users, Award } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: 'Private Wildlife Photography',
      duration: '7 Days',
      groupSize: '4-6 People',
      level: 'All Levels',
      description: 'Capture stunning wildlife moments with professional photographers as your guides in exclusive locations.',
      features: [
        'Professional photography equipment provided',
        'One-on-one mentoring sessions',
        'Private game drives',
        'Photo editing workshops'
      ],
      price: 'From $4,500'
    },
    {
      id: 2,
      title: 'Luxury Mountain Retreat',
      duration: '5 Days',
      groupSize: '8-12 People',
      level: 'Moderate',
      description: 'Experience the serenity of mountain peaks with yoga sessions, spa treatments, and gourmet dining.',
      features: [
        'Daily yoga and meditation',
        'Spa treatments in nature',
        'Michelin-starred mountain cuisine',
        'Guided nature walks'
      ],
      price: 'From $3,200'
    },
    {
      id: 3,
      title: 'Ocean Conservation Expedition',
      duration: '10 Days',
      groupSize: '6-10 People',
      level: 'Advanced',
      description: 'Join marine biologists in protecting coral reefs while enjoying luxury accommodations and diving.',
      features: [
        'Work with marine researchers',
        'Advanced diving certification',
        'Underwater photography',
        'Conservation impact certificate'
      ],
      price: 'From $5,800'
    }
  ];

  return (
    <section id="experiences" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Curated <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in carefully crafted adventures that combine luxury, 
            learning, and unforgettable moments in extraordinary settings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-card rounded-xl p-8 shadow-luxury hover:shadow-gold transition-all duration-300 group"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{experience.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">{experience.level}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {experience.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif font-bold gradient-text">
                    {experience.price}
                  </span>
                  <span className="text-sm text-muted-foreground">per person</span>
                </div>
                <button className="w-full btn-luxury">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;