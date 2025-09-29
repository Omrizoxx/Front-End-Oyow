import React, { useState } from 'react';
import { api, ContactData } from '@/services/api';

type SubmitStatus = 'idle' | 'success' | 'error';

type ContactFormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
	tourInterest?: string;
};

const initialForm: ContactFormData = {
	name: '',
	email: '',
	subject: '',
	message: '',
	tourInterest: ''
};

export default function Contact() {
	const [form, setForm] = useState<ContactFormData>(initialForm);
	const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

	const contactInfo = [
		{ icon: '📧', title: 'Email Us', details: 'info@oyowtours@gmail.com', description: 'Send us an email anytime' },
		{ icon: '📞', title: 'Call Us', details: '+254 755 280 345', description: '24/7 emergency support' },
		{ icon: '📍', title: 'Visit Us', details: 'Ronald Ngala Street', description: 'Nairobi' },
		{ icon: '💬', title: 'Live Chat', details: 'Available 24/7', description: 'Get instant help online' }
	];

	const tourInterests = [
		'Mountain Adventures',
		'City Tours',
		'Beach Paradise',
		'Cultural Experiences',
		'Wildlife Safaris',
		'Extreme Sports',
		'Photography Tours',
		'Food & Wine Tours'
	];

	const validate = (values: ContactFormData) => {
		const nextErrors: Partial<Record<keyof ContactFormData, string>> = {};
		if (!values.name.trim()) nextErrors.name = 'Name is required';
		if (!values.email.trim()) nextErrors.email = 'Email is required';
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) nextErrors.email = 'Invalid email address';
		if (!values.subject.trim()) nextErrors.subject = 'Subject is required';
		if (!values.message.trim()) nextErrors.message = 'Message is required';
		else if (values.message.trim().length < 10) nextErrors.message = 'Message must be at least 10 characters';
		return nextErrors;
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { id, value } = e.target;
		setForm(prev => ({ ...prev, [id]: value }));
		setErrors(prev => ({ ...prev, [id]: undefined }));
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitStatus('idle');
		const v = validate(form);
		setErrors(v);
		if (Object.keys(v).length > 0) return;

		setIsSubmitting(true);
		try {
			console.log('Submitting contact form:', form);
			// Submit to server
			const result = await api.submitContact(form as ContactData);
			console.log('Contact form submitted successfully:', result);
			setSubmitStatus('success');
			setForm(initialForm);
		} catch (error) {
			console.error('Contact form error:', error);
			console.error('Error details:', {
				message: error instanceof Error ? error.message : 'Unknown error',
				formData: form
			});
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
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
						Get In
						<span className="block gradient-text">Touch</span>
					</h1>
					<p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-shadow">
						Ready to start your next adventure? We're here to help you plan the perfect journey with our premium protection services.
					</p>
				</div>
			</section>

			{/* Contact Content */}
			<section className="section-padding bg-background">
				<div className="max-w-7xl mx-auto">
					{/* Contact Information */}
					<div className="mb-16">
						<h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-center">
							Contact <span className="gradient-text">Information</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{contactInfo.map((info, index) => (
								<div 
									key={index} 
									className="group bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-500 transform hover:scale-105"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className="text-4xl mb-4">{info.icon}</div>
									<h3 className="text-xl font-serif font-bold text-foreground mb-2">{info.title}</h3>
									<p className="text-gold font-medium mb-2">{info.details}</p>
									<p className="text-muted-foreground text-sm">{info.description}</p>
								</div>
							))}
						</div>
					</div>

					{/* Contact Form */}
					<div className="max-w-4xl mx-auto">
						<div className="bg-card rounded-xl p-8 shadow-luxury">
							<div className="text-center mb-8">
								<h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
									Send Us a <span className="gradient-text">Message</span>
								</h2>
								<p className="text-muted-foreground text-lg">
									Fill out the form below and we'll get back to you within 24 hours
								</p>
							</div>

							<form onSubmit={onSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label htmlFor="name" className="block text-sm font-medium text-foreground">
											Full Name *
										</label>
										<input 
											id="name" 
											type="text" 
											value={form.name} 
											onChange={onChange} 
											className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-border'}`}
											placeholder="Enter your full name" 
										/>
										{errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
									</div>
									<div className="space-y-2">
										<label htmlFor="email" className="block text-sm font-medium text-foreground">
											Email Address *
										</label>
										<input 
											id="email" 
											type="email" 
											value={form.email} 
											onChange={onChange} 
											className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-border'}`}
											placeholder="Enter your email address" 
										/>
										{errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
									</div>
								</div>

								<div className="space-y-2">
									<label htmlFor="subject" className="block text-sm font-medium text-foreground">
										Subject *
									</label>
									<input 
										id="subject" 
										type="text" 
										value={form.subject} 
										onChange={onChange} 
										className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 ${errors.subject ? 'border-red-500' : 'border-border'}`}
										placeholder="What's this about?" 
									/>
									{errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
								</div>

								<div className="space-y-2">
									<label htmlFor="tourInterest" className="block text-sm font-medium text-foreground">
										Tour Interest
									</label>
									<select 
										id="tourInterest" 
										value={form.tourInterest} 
										onChange={onChange} 
										className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
									>
										<option value="">Select a tour type (optional)</option>
										{tourInterests.map((interest) => (
											<option key={interest} value={interest}>{interest}</option>
										))}
									</select>
								</div>

								<div className="space-y-2">
									<label htmlFor="message" className="block text-sm font-medium text-foreground">
										Message *
									</label>
									<textarea 
										id="message" 
										value={form.message} 
										onChange={onChange} 
										className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
										placeholder="Tell us about your adventure plans..." 
										rows={6} 
									/>
									{errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
								</div>

								<button 
									type="submit" 
									disabled={isSubmitting} 
									className={`w-full btn-luxury text-lg py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
								>
									{isSubmitting ? (
										<div className="flex items-center justify-center">
											<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-foreground mr-2"></div>
											Sending Message...
										</div>
									) : (
										'Send Message'
									)}
								</button>

								{submitStatus === 'success' && (
									<div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
										<span className="text-green-600 text-xl mr-3">✓</span>
										<span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
									</div>
								)}
								{submitStatus === 'error' && (
									<div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
										<span className="text-red-600 text-xl mr-3">⚠</span>
										<span className="text-red-800">Failed to send message. Please try again.</span>
									</div>
								)}
							</form>
						</div>
					</div>

					{/* FAQ Section */}
					<div className="mt-20">
						<h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center">
							Frequently Asked <span className="gradient-text">Questions</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-300">
								<h3 className="text-xl font-serif font-bold text-foreground mb-4">How quickly can I get emergency assistance?</h3>
								<p className="text-muted-foreground">Our emergency response team is available 24/7 and typically responds within 2-5 minutes of receiving an SOS signal.</p>
							</div>
							<div className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-300">
								<h3 className="text-xl font-serif font-bold text-foreground mb-4">What safety equipment is included?</h3>
								<p className="text-muted-foreground">All tours include GPS tracking devices, emergency communication equipment, first aid supplies, and access to our 24/7 monitoring center.</p>
							</div>
							<div className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-300">
								<h3 className="text-xl font-serif font-bold text-foreground mb-4">Can I cancel my booking?</h3>
								<p className="text-muted-foreground">Yes, we offer free cancellation up to 48 hours before your tour start date. Emergency situations are handled on a case-by-case basis.</p>
							</div>
							<div className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-gold transition-all duration-300">
								<h3 className="text-xl font-serif font-bold text-foreground mb-4">Do you offer group discounts?</h3>
								<p className="text-muted-foreground">Absolutely! We offer special rates for groups of 6 or more people. Contact us for custom pricing and group arrangements.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
