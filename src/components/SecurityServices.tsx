import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Car, Plane, MapPin, Clock, Users, CheckCircle, Star, Phone, Mail, Camera, Eye } from 'lucide-react';

interface SecurityPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  description: string;
  popular?: boolean;
  icon: string;
}

interface AirportService {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  icon: string;
}

const SecurityServices = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const securityPackages: SecurityPackage[] = [
    {
      id: 'basic',
      name: 'Basic Security',
      price: 99,
      duration: 'Per Day',
      description: 'Essential security coverage for your adventure',
      features: [
        '24/7 Emergency Response',
        'GPS Tracking Device',
        'Basic First Aid Kit',
        'Emergency Communication',
        'Local Guide Support',
        'VIP Escort'
      ],
      icon: '🛡️'
    },
    {
      id: 'premium',
      name: 'Premium Security',
      price: 250,
      duration: 'Per Day',
      description: 'Comprehensive security with advanced features',
      features: [
        'All Basic Features',
        'Dedicated Security Guard',
        'Advanced Medical Kit',
        'Satellite Communication',
        'Real-time Monitoring',
        'Insurance Coverage',
        'VIP Escort'
      ],
      popular: true,
      icon: '🔒'
    },
    {
      id: 'elite',
      name: 'Elite Security',
      price: 600,
      duration: 'Per Day',
      description: 'Ultimate protection for high-risk adventures',
      features: [
        'All Premium Features',
        'Armed Security Team',
        'Medical Emergency Team',
        'Helicopter Evacuation',
        'VVVIP Concierge Service',
        'Full Insurance Coverage',
        'Priority Emergency Response'
      ],
      icon: '👑'
    }
  ];

  const airportServices: AirportService[] = [
    {
      id: 'pickup',
      name: 'Airport Pickup',
      price: 250,
      description: 'Professional pickup service from any major airport',
      features: [
        'Meet & Greet Service',
        'Luggage Assistance',
        'Comfortable Vehicle',
        'Professional Driver',
        'Real-time Flight Tracking',
        'VIP Escort'
      ],
      icon: '✈️'
    },
    {
      id: 'dropoff',
      name: 'Airport Dropoff',
      price: 205,
      description: 'Reliable dropoff service to any major airport',
      features: [
        'On-time Departure',
        'Luggage Handling',
        'Flight Check-in Assistance',
        'Priority Lane Access',
        'Complimentary Refreshments',
        'VVIP Escort'
      ],
      icon: '🚗'
    },
    {
      id: 'roundtrip',
      name: 'Round Trip',
      price: 120,
      description: 'Complete airport transfer service',
      features: [
        'Pickup & Dropoff',
        'Meet & Greet Both Ways',
        'Luggage Service',
        'Flight Monitoring',
        'Priority Service',
        '20% Discount on Total'
      ],
      icon: '🔄'
    }
  ];

  const contactInfo = [
    { icon: Phone, title: 'Emergency Hotline', details: '+254 755 280 345', description: '24/7 Security Support' },
    { icon: Mail, title: 'Security Email', details: 'security@oyowtours.com', description: 'Non-emergency Inquiries' },
    { icon: MapPin, title: 'Security Center', details: 'Nairobi Security Hub', description: 'Ronald Ngala Street' }
  ];

  const handlePackageSelect = (pkg: SecurityPackage) => {
    setSelectedPackage(pkg.id);
    // Navigate to booking page with package data
    navigate('/Html/security-booking.html', { 
      state: { package: pkg } 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green to-twilight-blue">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-cream max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-shadow">
            Security
            <span className="block gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-shadow">
            Your safety is our priority. Choose from our comprehensive security packages and airport services for complete peace of mind.
          </p>
        </div>
      </section>

      {/* Security Fleet & Personnel Showcase */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Our Security <span className="gradient-text">Fleet & Personnel</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              State-of-the-art vehicles and highly trained security personnel ready to protect you on your adventures.
            </p>
          </div>

          {/* Escort Vehicles */}
          <div className="mb-20">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Escort <span className="gradient-text">Vehicles</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-gold transition-all duration-500 transform hover:scale-105 border border-slate-700">
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-9xl opacity-90">🚗</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-gold to-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    VIP ESCORT
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-gold/30">
                      <h4 className="text-white font-bold text-lg mb-1">Luxury Armored Sedan</h4>
                      <p className="text-gold text-sm font-medium">Executive Protection Vehicle</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-900">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-bold text-lg">Level 7 Armor</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-slate-300">
                        <Shield className="w-4 h-4 text-gold mr-2" />
                        <span>Bulletproof Glass</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <MapPin className="w-4 h-4 text-gold mr-2" />
                        <span>GPS Tracking</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 text-gold mr-2" />
                        <span>Satellite Comm</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Users className="w-4 h-4 text-gold mr-2" />
                        <span>4 Passengers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-gold transition-all duration-500 transform hover:scale-105 border border-slate-700">
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-9xl opacity-90">🚙</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    TACTICAL
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                      <h4 className="text-white font-bold text-lg mb-1">Tactical SUV</h4>
                      <p className="text-red-400 text-sm font-medium">High-Risk Operations</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-900">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-bold text-lg">All-Terrain</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-slate-300">
                        <Shield className="w-4 h-4 text-red-400 mr-2" />
                        <span>Reinforced Chassis</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <MapPin className="w-4 h-4 text-red-400 mr-2" />
                        <span>Off-Road Capable</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 text-red-400 mr-2" />
                        <span>Medical Equipment</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Users className="w-4 h-4 text-red-400 mr-2" />
                        <span>6 Passengers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-gold transition-all duration-500 transform hover:scale-105 border border-slate-700">
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-9xl opacity-90">🚐</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    GROUP
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
                      <h4 className="text-white font-bold text-lg mb-1">Security Van</h4>
                      <p className="text-blue-400 text-sm font-medium">Group Protection</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-900">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-bold text-lg">Group Capacity</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-slate-300">
                        <Shield className="w-4 h-4 text-blue-400 mr-2" />
                        <span>Live Monitoring</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <MapPin className="w-4 h-4 text-blue-400 mr-2" />
                        <span>GPS Tracking</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 text-blue-400 mr-2" />
                        <span>Emergency Kit</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Users className="w-4 h-4 text-blue-400 mr-2" />
                        <span>8-12 Passengers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Armed Security Personnel */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Armed Security <span className="gradient-text">Personnel</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-gold transition-all duration-500 transform hover:scale-105 border border-slate-700">
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-9xl opacity-90">👨‍✈️</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ARMED
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                      <h4 className="text-white font-bold text-lg mb-1">Team Leader</h4>
                      <p className="text-red-400 text-sm font-medium">Special Forces</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-900">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-bold text-lg">15+ Years</span>
                      <div className="flex space-x-1">
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-slate-300 text-sm">
                        <Shield className="w-4 h-4 text-red-400 mr-2" />
                        <span>Sniper Specialist</span>
                      </div>
                      <div className="flex items-center text-slate-300 text-sm">
                        <Users className="w-4 h-4 text-red-400 mr-2" />
                        <span>Tactical Operations</span>
                      </div>
                      <div className="flex items-center text-slate-300 text-sm">
                        <Phone className="w-4 h-4 text-red-400 mr-2" />
                        <span>Counter-Terrorism</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-gold transition-all duration-500 transform hover:scale-105 border border-slate-700">
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-9xl opacity-90">👩‍✈️</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ARMED
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                      <h4 className="text-white font-bold text-lg mb-1">Close Protection</h4>
                      <p className="text-red-400 text-sm font-medium">VIP Specialist</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-900">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-bold text-lg">12+ Years</span>
                      <div className="flex space-x-1">
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-slate-300 text-sm">
                        <Shield className="w-4 h-4 text-red-400 mr-2" />
                        <span>VIP Protection</span>
                      </div>
                      <div className="flex items-center text-slate-300 text-sm">
                        <Users className="w-4 h-4 text-red-400 mr-2" />
                        <span>Medical Training</span>
                      </div>
                      <div className="flex items-center text-slate-300 text-sm">
                        <Phone className="w-4 h-4 text-red-400 mr-2" />
                        <span>Combat Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-gold transition-all duration-500 transform hover:scale-105 border border-slate-700">
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-9xl opacity-90">👨‍💼</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ARMED
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                      <h4 className="text-white font-bold text-lg mb-1">Tactical Specialist</h4>
                      <p className="text-red-400 text-sm font-medium">Counter-Terror</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-900">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-bold text-lg">10+ Years</span>
                      <div className="flex space-x-1">
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-slate-300 text-sm">
                        <Shield className="w-4 h-4 text-red-400 mr-2" />
                        <span>Explosives Expert</span>
                      </div>
                      <div className="flex items-center text-slate-300 text-sm">
                        <Users className="w-4 h-4 text-red-400 mr-2" />
                        <span>High-Risk Ops</span>
                      </div>
                      <div className="flex items-center text-slate-300 text-sm">
                        <Phone className="w-4 h-4 text-red-400 mr-2" />
                        <span>Threat Assessment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-gold transition-all duration-500 transform hover:scale-105 border border-slate-700">
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-9xl opacity-90">👩‍💼</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ARMED
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                      <h4 className="text-white font-bold text-lg mb-1">Intelligence Officer</h4>
                      <p className="text-red-400 text-sm font-medium">Security Analysis</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-900">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-bold text-lg">8+ Years</span>
                      <div className="flex space-x-1">
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <Star className="w-4 h-4 text-gold fill-current" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-slate-300 text-sm">
                        <Shield className="w-4 h-4 text-red-400 mr-2" />
                        <span>Intelligence</span>
                      </div>
                      <div className="flex items-center text-slate-300 text-sm">
                        <Users className="w-4 h-4 text-red-400 mr-2" />
                        <span>Risk Analysis</span>
                      </div>
                      <div className="flex items-center text-slate-300 text-sm">
                        <Phone className="w-4 h-4 text-red-400 mr-2" />
                        <span>Security Planning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Packages */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Security <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose the level of protection that matches your adventure needs. All packages include 24/7 emergency response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`relative bg-card rounded-xl p-8 shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  selectedPackage === pkg.id ? 'ring-2 ring-gold' : ''
                } ${pkg.popular ? 'border-2 border-gold' : ''}`}
                onClick={() => handlePackageSelect(pkg)}
                style={{ animationDelay: `${index * 0.1}s` as React.CSSProperties['animationDelay'] }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-foreground px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-gold">${pkg.price}</span>
                    <span className="text-muted-foreground ml-2">/{pkg.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  selectedPackage === pkg.id
                    ? 'bg-gold text-foreground'
                    : 'bg-forest-green text-cream hover:bg-twilight-blue'
                }`}>
                  Book This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Services */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Airport <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Start and end your journey with our professional airport transfer services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {airportServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-card rounded-xl p-8 shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  selectedService === service.id ? 'ring-2 ring-gold' : ''
                }`}
                onClick={() => setSelectedService(service.id)}
                style={{ animationDelay: `${index * 0.1}s` as React.CSSProperties['animationDelay'] }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-gold">${service.price}</span>
                    <span className="text-muted-foreground ml-2">per trip</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  selectedService === service.id
                    ? 'bg-gold text-foreground'
                    : 'bg-forest-green text-cream hover:bg-twilight-blue'
                }`}>
                  {selectedService === service.id ? 'Selected' : 'Select Service'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Security <span className="gradient-text">Contact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Need immediate assistance or have questions about our security services? Contact our security team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` as React.CSSProperties['animationDelay'] }}
              >
                <div className="flex items-center mb-4">
                  <info.icon className="w-8 h-8 text-gold mr-4" />
                  <h3 className="text-xl font-serif font-bold text-foreground">{info.title}</h3>
                </div>
                <p className="text-gold font-medium mb-2">{info.details}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Features */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Emergency <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Advanced safety features designed to keep you protected during your adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-300">
              <Shield className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">GPS Tracking</h3>
              <p className="text-muted-foreground">Real-time location tracking for instant emergency response.</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-300">
              <Phone className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">SOS Button</h3>
              <p className="text-muted-foreground">One-touch emergency alert system with instant response.</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-300">
              <Users className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Trained Guards</h3>
              <p className="text-muted-foreground">Professional security personnel with extensive training.</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-300">
              <Clock className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">24/7 Monitoring</h3>
              <p className="text-muted-foreground">Round-the-clock security monitoring and support.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-forest-green to-twilight-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Ready to Book Your
            <span className="block gradient-text">Security Services?</span>
          </h2>
          <p className="text-xl text-cream mb-8 opacity-90">
            Contact our security team to customize your protection package and ensure a safe adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn-luxury text-lg"
              onClick={() => navigate('/Html/security-checkout.html')}
            >
              Book Security Package
            </button>
            <button className="btn-outline-luxury text-lg">
              Contact Security Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityServices;
