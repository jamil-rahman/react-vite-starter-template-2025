// Centralized TypeScript types for Bliss Play Space

export type RouteId = 'home' | 'about' | 'bookings' | 'faq' | 'contact';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PackageCard {
  id: string;
  title: string;
  description: string;
  price: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  consent: boolean;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  bookingEmail: string;
  socialLinks: SocialLink[];
  hours: {
    [key: string]: string;
  };
}

