import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Shield, Users, Radio, Camera, Phone, MapPin, Clock, CheckCircle, Star, ArrowLeft } from 'lucide-react';

interface SecurityTeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string[];
  image: string;
  bio: string;
}

interface SecurityEquipment {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  category: 'communication' | 'medical' | 'tracking' | 'protection';
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  packageType: string;
  startDate: string;
  endDate: string;
  groupSize: number;
  specialRequests: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const SecurityBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    packageType: '',
    startDate: '',
    endDate: '',
    groupSize: 1,
    specialRequests: '',
    emergencyContact: '',
    emergencyPhone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const securityTeam: SecurityTeamMember[] = [
    {
      id: '1',
      name: 'Captain James Mwangi',
      role: 'Security Team Lead',
      experience: '15+ years',
      certifications: ['Military Special Forces', 'Counter-Terrorism', 'Emergency Medical'],
      image: '👨‍✈️',
      bio: 'Former Kenya Special Forces with extensive experience in high-risk operations and VIP protection.'
    },
    {
      id: '2',
      name: 'Sergeant Sarah Kimani',
      role: 'Medical Specialist',
      experience: '12+ years',
      certifications: ['Paramedic', 'Wilderness Medicine', 'Trauma Care'],
      image: '👩‍⚕️',
      bio: 'Certified paramedic specializing in remote area medical emergencies and evacuation procedures.'
    },
    {
      id: '3',
      name: 'Officer David Ochieng',
      role: 'Communication Specialist',
      experience: '10+ years',
      certifications: ['Radio Operations', 'Satellite Communication', 'GPS Navigation'],
      image: '👨‍💼',
      bio: 'Expert in communication systems and real-time monitoring for seamless emergency response.'
    },
    {
      id: '4',
      name: 'Agent Grace Wanjiku',
      role: 'Intelligence Analyst',
      experience: '8+ years',
      certifications: ['Risk Assessment', 'Threat Analysis', 'Security Planning'],
      image: '👩‍💻',
      bio: 'Specializes in threat assessment and security planning for complex adventure operations.'
    }
  ];

  const securityEquipment: SecurityEquipment[] = [
    {
      id: '1',
      name: 'GPS Tracking System',
      description: 'Real-time location tracking with satellite backup',
      image: '📡',
      features: ['Real-time GPS', 'Satellite Backup', 'Battery Life: 72hrs', 'Waterproof'],
      category: 'tracking'
    },
    {
      id: '2',
      name: 'Emergency Communication Radio',
      description: 'Military-grade communication system',
      image: '📻',
      features: ['Long Range', 'Encrypted', 'Weather Resistant', 'Emergency Channels'],
      category: 'communication'
    },
    {
      id: '3',
      name: 'Advanced Medical Kit',
      description: 'Comprehensive medical supplies for emergencies',
      image: '🏥',
      features: ['Trauma Supplies', 'Medications', 'Surgical Tools', 'Defibrillator'],
      category: 'medical'
    },
    {
      id: '4',
      name: 'Body Cameras',
      description: 'High-definition recording for security documentation',
      image: '📹',
      features: ['4K Recording', 'Night Vision', 'Cloud Storage', 'Live Streaming'],
      category: 'protection'
    },
    {
      id: '5',
      name: 'Satellite Phone',
      description: 'Global communication in remote areas',
      image: '📱',
      features: ['Global Coverage', 'Emergency SOS', 'Weather Updates', 'GPS Location'],
      category: 'communication'
    },
    {
      id: '6',
      name: 'First Aid Station',
      description: 'Mobile medical facility for group emergencies',
      image: '🚑',
      features: ['Portable', 'Full Medical Kit', 'Oxygen Supply', 'Stretcher'],
      category: 'medical'
    }
  ];

  useEffect(() => {
    // Get selected package from location state
    if (location.state?.package) {
      setSelectedPackage(location.state.package);
      setFormData(prev => ({
        ...prev,
        packageType: location.state.package.name
      }));
    } else {
      // If no package selected, redirect back to security services
      navigate('/Html/security.html');
    }
  }, [location.state, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Security booking submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          packageType: selectedPackage?.name || '',
          startDate: '',
          endDate: '',
          groupSize: 1,
          specialRequests: '',
          emergencyContact: '',
          emergencyPhone: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green to-twilight-blue">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
          <button
              onClick={() => navigate('/Html/security.html')}
              className="absolute left-6 top-6 flex items-center text-cream hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Security Services
            </button>
          <div className="relative z-10 text-center text-cream max-w-4xl mx-auto px-6">
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-shadow">
            Book {selectedPackage.name}
          </h1>
          <p className="text-lg text-cream opacity-90">
            Complete your security package booking with our expert team
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Team & Equipment Showcase */}
          <div className="space-y-12">
            {/* Selected Package Summary */}
            <div className="bg-card rounded-xl p-6 shadow-luxury">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{selectedPackage.icon}</span>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">{selectedPackage.name}</h2>
                  <p className="text-gold text-xl font-bold">${selectedPackage.price}/{selectedPackage.duration}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{selectedPackage.description}</p>
              <ul className="space-y-2">
                {selectedPackage.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Team */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
                Our Security <span className="gradient-text">Team</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {securityTeam.map((member) => (
                  <div key={member.id} className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <span className="text-3xl mr-4">{member.image}</span>
                      <div>
                        <h4 className="text-lg font-serif font-bold text-foreground">{member.name}</h4>
                        <p className="text-gold font-medium">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.experience} experience</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.certifications.map((cert, idx) => (
                        <span key={idx} className="bg-forest-green text-cream px-2 py-1 rounded text-xs">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Equipment */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
                Security <span className="gradient-text">Equipment</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityEquipment.map((equipment) => (
                  <div key={equipment.id} className="bg-card rounded-xl p-4 shadow-luxury hover:shadow-gold transition-all duration-300">
                    <div className="flex items-start mb-3">
                      <span className="text-2xl mr-3">{equipment.image}</span>
                      <div className="flex-1">
                        <h4 className="font-serif font-bold text-foreground">{equipment.name}</h4>
                        <p className="text-sm text-muted-foreground">{equipment.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {equipment.features.map((feature, idx) => (
                        <span key={idx} className="bg-twilight-blue text-cream px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div>
            <div className="bg-card rounded-xl p-8 shadow-luxury sticky top-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Book Your <span className="gradient-text">Security Package</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium text-foreground mb-2">
                      Group Size *
                    </label>
                    <input
                      type="number"
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      min="1"
                      max="20"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-foreground mb-2">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-foreground mb-2">
                      End Date *
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="emergencyContact" className="block text-sm font-medium text-foreground mb-2">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Emergency contact person"
                  />
                </div>

                <div>
                  <label htmlFor="emergencyPhone" className="block text-sm font-medium text-foreground mb-2">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Emergency contact phone"
                  />
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-foreground mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    placeholder="Any special requirements or requests..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-muted-foreground cursor-not-allowed'
                      : 'bg-forest-green text-cream hover:bg-twilight-blue'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cream mr-2"></div>
                      Processing Booking...
                    </div>
                  ) : (
                    'Book Security Package'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-green-800">Booking submitted successfully! We'll contact you within 24 hours.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                    <span className="text-red-600 text-xl mr-3">⚠</span>
                    <span className="text-red-800">Failed to submit booking. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityBooking;
