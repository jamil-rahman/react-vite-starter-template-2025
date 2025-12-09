import { useEffect } from 'react';
import { Accordion } from '../components/Accordion';
import { Button } from '../components/Button';
import { updatePageMeta } from '../lib/seo';
import { FaQuestionCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import type { FaqItem } from '../types';

const faqCategories = {
  general: [
    {
      id: 'footwear',
      question: 'What footwear is required?',
      answer: 'All visitors must wear socks at all times. Shoes are not allowed in the play areas to maintain cleanliness and safety. We recommend bringing a pair of socks for your visit.',
    },
    {
      id: 'age-range',
      question: 'What age range is appropriate?',
      answer: 'Our playspace is designed for children ages 1-8, though we welcome all ages. Different play areas are designed for specific age groups to ensure age-appropriate play and safety.',
    },
    {
      id: 'supervision',
      question: 'Do I need to supervise my child?',
      answer: 'Yes, parents or guardians must supervise their children at all times. While our staff monitors the play areas for safety, adult supervision is required for all children.',
    },
    {
      id: 'parking',
      question: 'Is parking available?',
      answer: 'Yes, we have free parking available on-site. Our parking lot is located directly in front of the facility and can accommodate multiple vehicles.',
    },
  ],
  booking: [
    {
      id: 'waiver',
      question: 'Do I need to sign a waiver?',
      answer: 'Yes, all visitors must have a signed waiver on file. You can complete the waiver online before your visit or in-person at our facility. Parents or guardians must sign for children under 18.',
    },
    {
      id: 'birthday-policy',
      question: 'What is your birthday party policy?',
      answer: 'We offer three party package options based on guest count. Party bookings include dedicated play time, a private party room, and party decorations. Please book at least 2 weeks in advance. For custom requests, contact us directly.',
    },
    {
      id: 'cancellation',
      question: 'What is your cancellation policy?',
      answer: 'Admission passes are non-refundable but can be rescheduled with 24 hours notice. Party bookings require at least 2 weeks notice for cancellation or rescheduling. Please contact us for specific cancellation terms.',
    },
    {
      id: 'group-discounts',
      question: 'Do you offer group discounts?',
      answer: 'Yes, we offer discounts for groups of 10 or more. Please contact us at booking@blissplayspace.ca or call (647) 482-3289 to discuss group rates and availability.',
    },
  ],
  safety: [
    {
      id: 'food-drinks',
      question: 'Can I bring outside food or drinks?',
      answer: 'Outside food and drinks are not permitted in the play areas. However, party packages include designated areas where food and drinks are allowed. We also offer snack options for purchase.',
    },
    {
      id: 'safety-measures',
      question: 'What safety measures do you have in place?',
      answer: 'We maintain strict safety protocols including regular equipment inspections, sanitization throughout the day, trained staff supervision, and age-appropriate play zones. All equipment meets or exceeds safety standards.',
    },
  ],
};

const allFaqItems: FaqItem[] = [
  ...faqCategories.general,
  ...faqCategories.booking,
  ...faqCategories.safety,
];

export function FAQ() {
  useEffect(() => {
    updatePageMeta({
      title: 'FAQ - Bliss Play Space',
      description: 'Frequently asked questions about Bliss Play Space, including policies, safety, bookings, and more.',
    });
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full opacity-10 -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-tertiary rounded-full opacity-10 -mr-32 -mb-32"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <FaQuestionCircle className="text-white text-4xl" aria-hidden="true" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-neutral mb-6 leading-tight">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral opacity-90 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about visiting, booking, and enjoying Bliss Play Space.
            </p>
          </div>
        </div>
      </section>
      
     
      
      {/* Accordion Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion items={allFaqItems} />
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg md:text-xl text-neutral opacity-90 leading-relaxed">
                We're here to help! Contact us and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-white text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral mb-2">Email Us</h3>
                    <a
                      href="mailto:info@blissplayspace.ca"
                      className="text-tertiary hover:text-support underline font-semibold break-all"
                    >
                      info@blissplayspace.ca
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center shrink-0">
                    <FaPhone className="text-white text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral mb-2">Call Us</h3>
                    <a
                      href="tel:+16474823289"
                      className="text-tertiary hover:text-support underline font-semibold"
                    >
                      (647) 482-3289
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button to="/contact" variant="secondary" size="lg" className="shadow-lg hover:shadow-xl">
                Visit Contact Page
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

