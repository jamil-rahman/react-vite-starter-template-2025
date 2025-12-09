import { useState, useEffect } from 'react';
import { FormField } from '../components/FormField';
import { Button } from '../components/Button';
import { siteConfig } from '../lib/config';
import { updatePageMeta } from '../lib/seo';
import { validateContactForm } from '../lib/validation';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import type { ContactFormData, ContactFormErrors } from '../types';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  useEffect(() => {
    updatePageMeta({
      title: 'Contact Us - Bliss Play Space',
      description: 'Get in touch with Bliss Play Space. Contact us for bookings, inquiries, or general questions.',
    });
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
    if (errors.consent) {
      setErrors((prev) => ({ ...prev, consent: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    
    const validationErrors = validateContactForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // For now, just show success (no backend)
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPaperPlane className="text-white text-3xl" aria-hidden="true" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-neutral mb-6 leading-tight">
              Get In <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral opacity-90 leading-relaxed max-w-3xl mx-auto">
              Have a question or want to book a visit? Get in touch with us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-neutral mb-8">
                Visit <span className="text-secondary">Us</span>
              </h2>
              
              <div className="space-y-6">
                {/* Address Card */}
                <div className="bg-white border-2 border-primary rounded-2xl p-6 hover:border-secondary hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="text-white text-xl" aria-hidden="true" />
                    </div>
                    <div className="grow">
                      <h3 className="font-heading font-bold text-neutral mb-2 text-lg">Address</h3>
                      <address className="not-italic text-neutral leading-relaxed">
                        {siteConfig.address}
                      </address>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tertiary hover:text-support font-medium inline-flex items-center gap-2 mt-3 group"
                      >
                        View on Google Maps
                        <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Phone Card */}
                <div className="bg-white border-2 border-primary rounded-2xl p-6 hover:border-secondary hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-tertiary rounded-xl flex items-center justify-center shrink-0">
                      <FaPhone className="text-white text-xl" aria-hidden="true" />
                    </div>
                    <div className="grow">
                      <h3 className="font-heading font-bold text-neutral mb-2 text-lg">Phone</h3>
                      <a 
                        href={`tel:${siteConfig.phone}`} 
                        className="text-neutral hover:text-tertiary font-medium text-lg transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Email Card */}
                <div className="bg-white border-2 border-primary rounded-2xl p-6 hover:border-secondary hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-support rounded-xl flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-white text-xl" aria-hidden="true" />
                    </div>
                    <div className="grow">
                      <h3 className="font-heading font-bold text-neutral mb-3 text-lg">Email</h3>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-neutral block mb-1">General Inquiry</span>
                          <a 
                            href={`mailto:${siteConfig.email}`} 
                            className="text-tertiary hover:text-support transition-colors break-all"
                          >
                            {siteConfig.email}
                          </a>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-neutral block mb-1">Booking</span>
                          <a 
                            href={`mailto:${siteConfig.bookingEmail}`} 
                            className="text-tertiary hover:text-support transition-colors break-all"
                          >
                            {siteConfig.bookingEmail}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hours Card */}
                <div className="bg-white border-2 border-primary rounded-2xl p-6 hover:border-secondary hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral rounded-xl flex items-center justify-center shrink-0">
                      <FaClock className="text-white text-xl" aria-hidden="true" />
                    </div>
                    <div className="grow">
                      <h3 className="font-heading font-bold text-neutral mb-3 text-lg">Hours</h3>
                      <div className="space-y-2">
                        {Object.entries(siteConfig.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between items-center text-neutral">
                            <span className="font-medium">{day}</span>
                            <span className="text-tertiary font-semibold">{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/logo-with-title-circle-stack.png" 
                  alt="Bliss Play Space"
                  className="h-32 w-auto"
                />
              </div>
              <h2 className="text-3xl font-heading font-bold text-neutral mb-8 text-center">
                Send a <span className="text-secondary">Message</span>
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-6 bg-secondary border-2 border-secondary text-white rounded-2xl shadow-lg" role="alert">
                  <p className="font-heading font-bold text-lg mb-1">Thank you for your message!</p>
                  <p className="opacity-90">We'll get back to you as soon as possible.</p>
                </div>
              )}
              
              {submitError && (
                <div className="mb-6 p-6 bg-red-50 border-2 border-red-400 text-red-700 rounded-2xl" role="alert">
                  <p className="font-medium">{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} noValidate className="bg-white border-2 border-primary rounded-3xl p-8 hover:border-secondary hover:shadow-2xl transition-all duration-300">
                <FormField
                  label="Name"
                  id="name"
                  required
                  error={errors.name}
                  value={formData.name}
                  onChange={handleChange}
                />
                
                <FormField
                  label="Email"
                  id="email"
                  type="email"
                  required
                  error={errors.email}
                  value={formData.email}
                  onChange={handleChange}
                />
                
                <FormField
                  label="Phone"
                  id="phone"
                  type="tel"
                  description="Optional"
                  error={errors.phone}
                  value={formData.phone}
                  onChange={handleChange}
                />
                
                <FormField
                  label="Message"
                  id="message"
                  required
                  error={errors.message}
                  textarea
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                />
                
                <div className="mb-8">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-5 h-5 border-2 border-primary rounded focus-visible:outline-3 focus-visible:outline-offset-2 cursor-pointer accent-secondary"
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                      aria-invalid={!!errors.consent}
                    />
                    <span className="text-sm text-neutral leading-relaxed group-hover:text-neutral transition-colors">
                      I consent to being contacted by Bliss Play Space regarding my inquiry.
                      <span className="text-red-500 ml-1 font-bold" aria-label="required">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" className="mt-2 ml-8 text-sm text-red-600 font-medium" role="alert">
                      {errors.consent}
                    </p>
                  )}
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full group">
                  <span className="flex items-center justify-center gap-3">
                    Send Message
                    <FaPaperPlane className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

