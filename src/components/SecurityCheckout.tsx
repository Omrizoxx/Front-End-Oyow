import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, CheckCircle, Clock, Users, MapPin, Phone, Mail, Calendar } from 'lucide-react';

interface CheckoutFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Billing Information
  address: string;
  city: string;
  country: string;
  postalCode: string;
  
  // Payment Information
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
  
  // Booking Details
  packageType: string;
  startDate: string;
  endDate: string;
  groupSize: number;
  specialRequests: string;
  
  // Emergency Contact
  emergencyContact: string;
  emergencyPhone: string;
  
  // Terms and Conditions
  agreeTerms: boolean;
  agreePrivacy: boolean;
}

const SecurityCheckout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Kenya',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    packageType: '',
    startDate: '',
    endDate: '',
    groupSize: 1,
    specialRequests: '',
    emergencyContact: '',
    emergencyPhone: '',
    agreeTerms: false,
    agreePrivacy: false
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, name: 'Package Details', icon: Shield },
    { id: 2, name: 'Personal Info', icon: Users },
    { id: 3, name: 'Payment', icon: CreditCard },
    { id: 4, name: 'Confirmation', icon: CheckCircle }
  ];

  useEffect(() => {
    if (location.state?.package) {
      setSelectedPackage(location.state.package);
      setFormData(prev => ({
        ...prev,
        packageType: location.state.package.name
      }));
    } else {
      navigate('/Html/security.html');
    }
  }, [location.state, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const calculateTotal = () => {
    if (!selectedPackage) return 0;
    const basePrice = selectedPackage.price;
    const groupMultiplier = formData.groupSize > 1 ? formData.groupSize * 0.8 : 1; // 20% discount for groups
    const days = formData.startDate && formData.endDate ? 
      Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24)) : 1;
    
    return Math.round(basePrice * groupMultiplier * days);
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setSubmitStatus('idle');

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('Security checkout completed:', formData);
      setSubmitStatus('success');
      
      // Redirect to success page after 3 seconds
      setTimeout(() => {
        navigate('/Html/security.html', { 
          state: { message: 'Booking confirmed! Our security team will contact you within 24 hours.' }
        });
      }, 3000);
    } catch (error) {
      console.error('Checkout error:', error);
      setSubmitStatus('error');
    } finally {
      setIsProcessing(false);
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

  const total = calculateTotal();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green to-twilight-blue">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-cream max-w-4xl mx-auto px-6">
          <button
            onClick={() => navigate('/Html/security.html')}
            className="absolute left-6 top-6 flex items-center text-cream hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Security Services
          </button>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-shadow">
            Security Package
            <span className="block gradient-text">Checkout</span>
          </h1>
          <p className="text-lg text-cream opacity-90">
            Complete your security package booking and payment
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Checkout Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.id 
                        ? 'bg-gold border-gold text-foreground' 
                        : 'border-muted-foreground text-muted-foreground'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className={`ml-2 text-sm font-medium ${
                      currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.name}
                    </span>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 mx-4 ${
                        currentStep > step.id ? 'bg-gold' : 'bg-muted-foreground'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Steps */}
            <div className="bg-card rounded-xl p-8 shadow-luxury">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Package Details</h2>
                  <div className="space-y-6">
                    <div className="bg-slate-900 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">{selectedPackage.icon}</span>
                        <div>
                          <h3 className="text-xl font-serif font-bold text-foreground">{selectedPackage.name}</h3>
                          <p className="text-gold text-lg font-bold">${selectedPackage.price}/{selectedPackage.duration}</p>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Start Date *</label>
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">End Date *</label>
                        <input
                          type="date"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Group Size *</label>
                      <input
                        type="number"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleInputChange}
                        min="1"
                        max="20"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Special Requests</label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                        placeholder="Any special requirements or requests..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Personal Information</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="Street address"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Country *</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        >
                          <option value="Kenya">Kenya</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Postal Code</label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Emergency Contact Name *</label>
                        <input
                          type="text"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Emergency Contact Phone *</label>
                        <input
                          type="tel"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Payment Information</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name *</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="Name on card"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Card Number *</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Expiry Date *</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">CVV *</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleInputChange}
                          required
                          className="mt-1 mr-3"
                        />
                        <label className="text-sm text-muted-foreground">
                          I agree to the <a href="#" className="text-gold hover:underline">Terms and Conditions</a> and <a href="#" className="text-gold hover:underline">Privacy Policy</a>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          name="agreePrivacy"
                          checked={formData.agreePrivacy}
                          onChange={handleInputChange}
                          required
                          className="mt-1 mr-3"
                        />
                        <label className="text-sm text-muted-foreground">
                          I consent to the processing of my personal data for security service provision
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Confirmation</h2>
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-center">
                        <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                        <div>
                          <h3 className="text-lg font-bold text-green-800">Ready to Confirm</h3>
                          <p className="text-green-700">Please review your booking details before proceeding with payment.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 rounded-lg p-6">
                      <h3 className="text-lg font-serif font-bold text-foreground mb-4">Booking Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Package:</span>
                          <span className="text-foreground font-medium">{selectedPackage.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="text-foreground font-medium">
                            {formData.startDate && formData.endDate ? 
                              Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24)) : 1} days
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Group Size:</span>
                          <span className="text-foreground font-medium">{formData.groupSize} people</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Base Price:</span>
                          <span className="text-foreground font-medium">${selectedPackage.price}/day</span>
                        </div>
                        {formData.groupSize > 1 && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Group Discount (20%):</span>
                            <span className="text-green-400 font-medium">-${Math.round(selectedPackage.price * formData.groupSize * 0.2)}</span>
                          </div>
                        )}
                        <div className="border-t border-slate-700 pt-3">
                          <div className="flex justify-between text-lg font-bold">
                            <span className="text-foreground">Total:</span>
                            <span className="text-gold">${total}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    currentStep === 1
                      ? 'bg-muted-foreground cursor-not-allowed text-muted-foreground'
                      : 'bg-slate-700 text-foreground hover:bg-slate-600'
                  }`}
                >
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3 bg-forest-green text-cream rounded-lg font-medium hover:bg-twilight-blue transition-all duration-300"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isProcessing || !formData.agreeTerms || !formData.agreePrivacy}
                    className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isProcessing || !formData.agreeTerms || !formData.agreePrivacy
                        ? 'bg-muted-foreground cursor-not-allowed text-muted-foreground'
                        : 'bg-gold text-foreground hover:bg-yellow-500'
                    }`}
                  >
                    {isProcessing ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-foreground mr-2"></div>
                        Processing Payment...
                      </div>
                    ) : (
                      'Complete Payment'
                    )}
                  </button>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Payment successful! Redirecting to confirmation page...</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                  <span className="text-red-600 text-xl mr-3">⚠</span>
                  <span className="text-red-800">Payment failed. Please try again.</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-luxury sticky top-8">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{selectedPackage.icon}</span>
                  <div>
                    <h4 className="font-bold text-foreground">{selectedPackage.name}</h4>
                    <p className="text-sm text-muted-foreground">{selectedPackage.description}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground">
                      {formData.startDate && formData.endDate ? 
                        Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24)) : 1} days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Group Size:</span>
                    <span className="text-foreground">{formData.groupSize} people</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base Price:</span>
                    <span className="text-foreground">${selectedPackage.price}/day</span>
                  </div>
                  {formData.groupSize > 1 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Group Discount:</span>
                      <span className="text-green-400">20% off</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-gold">${total}</span>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg p-4 mt-6">
                  <h4 className="font-bold text-foreground mb-2">What's Included:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {selectedPackage.features.slice(0, 4).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {selectedPackage.features.length > 4 && (
                      <li className="text-gold text-xs">+ {selectedPackage.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>

                <div className="bg-forest-green/10 border border-forest-green/20 rounded-lg p-4 mt-6">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-forest-green mr-2" />
                    <span className="font-bold text-foreground">Security Guarantee</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your safety is our priority. Our security team is available 24/7 for your protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCheckout;
