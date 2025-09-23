import React, { useState } from 'react';

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
			// Simulate API call (replace with real endpoint when ready)
			await new Promise(resolve => setTimeout(resolve, 1500));
			setSubmitStatus('success');
			setForm(initialForm);
		} catch (_) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="contact-page">
			<section className="contact-hero">
				<div className="hero-background">
					<div className="hero-overlay"></div>
				</div>
				<div className="hero-content">
					<h1 className="contact-title">
						<span className="title-main">Get In</span>
						<span className="title-sub">Touch</span>
					</h1>
					<p className="contact-subtitle">
						Ready to start your next adventure? We're here to help you plan the perfect journey with our premium protection services.
					</p>
				</div>
			</section>

			<section className="contact-content">
				<div className="contact-container">
					<div className="contact-info-section">
						<h2 className="section-title">Contact Information</h2>
						<div className="contact-info-grid">
							{contactInfo.map((info, index) => (
								<div key={index} className="contact-info-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` as React.CSSProperties['animationDelay'] }}>
									<div className="info-icon">{info.icon}</div>
									<h3 className="info-title">{info.title}</h3>
									<p className="info-details">{info.details}</p>
									<p className="info-description">{info.description}</p>
								</div>
							))}
						</div>
					</div>

					<div className="contact-form-section">
						<div className="form-container">
							<div className="form-header">
								<h2 className="form-title">Send Us a Message</h2>
								<p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
							</div>

							<form onSubmit={onSubmit} className="contact-form">
								<div className="form-row">
									<div className="form-group">
										<label htmlFor="name" className="form-label">Full Name *</label>
										<input id="name" type="text" value={form.name} onChange={onChange} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Enter your full name" />
										{errors.name && <span className="error-message">{errors.name}</span>}
									</div>
									<div className="form-group">
										<label htmlFor="email" className="form-label">Email Address *</label>
										<input id="email" type="email" value={form.email} onChange={onChange} className={`form-input ${errors.email ? 'error' : ''}`} placeholder="Enter your email address" />
										{errors.email && <span className="error-message">{errors.email}</span>}
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="subject" className="form-label">Subject *</label>
									<input id="subject" type="text" value={form.subject} onChange={onChange} className={`form-input ${errors.subject ? 'error' : ''}`} placeholder="What's this about?" />
									{errors.subject && <span className="error-message">{errors.subject}</span>}
								</div>

								<div className="form-group">
									<label htmlFor="tourInterest" className="form-label">Tour Interest</label>
									<select id="tourInterest" value={form.tourInterest} onChange={onChange} className="form-select">
										<option value="">Select a tour type (optional)</option>
										{tourInterests.map((interest) => (
											<option key={interest} value={interest}>{interest}</option>
										))}
									</select>
								</div>

								<div className="form-group">
									<label htmlFor="message" className="form-label">Message *</label>
									<textarea id="message" value={form.message} onChange={onChange} className={`form-textarea ${errors.message ? 'error' : ''}`} placeholder="Tell us about your adventure plans..." rows={6} />
									{errors.message && <span className="error-message">{errors.message}</span>}
								</div>

								<button type="submit" disabled={isSubmitting} className={`submit-button ${isSubmitting ? 'loading' : ''}`}>
									{isSubmitting ? (<><div className="button-spinner"></div>Sending Message...</>) : ('Send Message')}
								</button>

								{submitStatus === 'success' && (
									<div className="success-message"><span className="success-icon">✓</span><span>Message sent successfully! We'll get back to you soon.</span></div>
								)}
								{submitStatus === 'error' && (
									<div className="error-message-general"><span className="error-icon">⚠</span><span>Failed to send message. Please try again.</span></div>
								)}
							</form>
						</div>
					</div>

					<div className="faq-section">
						<h2 className="section-title">Frequently Asked Questions</h2>
						<div className="faq-grid">
							<div className="faq-item">
								<h3 className="faq-question">How quickly can I get emergency assistance?</h3>
								<p className="faq-answer">Our emergency response team is available 24/7 and typically responds within 2-5 minutes of receiving an SOS signal.</p>
							</div>
							<div className="faq-item">
								<h3 className="faq-question">What safety equipment is included?</h3>
								<p className="faq-answer">All tours include GPS tracking devices, emergency communication equipment, first aid supplies, and access to our 24/7 monitoring center.</p>
							</div>
							<div className="faq-item">
								<h3 className="faq-question">Can I cancel my booking?</h3>
								<p className="faq-answer">Yes, we offer free cancellation up to 48 hours before your tour start date. Emergency situations are handled on a case-by-case basis.</p>
							</div>
							<div className="faq-item">
								<h3 className="faq-question">Do you offer group discounts?</h3>
								<p className="faq-answer">Absolutely! We offer special rates for groups of 6 or more people. Contact us for custom pricing and group arrangements.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
