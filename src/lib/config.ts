import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Bliss Play Space',
  tagline: 'Where fun meets safety',
  address: 'Brantford, ON',
  phone: '(647) 482-3289',
  email: 'info@blissplayspace.ca',
  bookingEmail: 'booking@blissplayspace.ca',
  socialLinks: [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'instagram',
    },
  ],
  hours: {
    Monday: '9:00 AM - 6:00 PM',
    Tuesday: '9:00 AM - 6:00 PM',
    Wednesday: '9:00 AM - 6:00 PM',
    Thursday: '9:00 AM - 6:00 PM',
    Friday: '9:00 AM - 6:00 PM',
    Saturday: '9:00 AM - 7:00 PM',
    Sunday: '10:00 AM - 5:00 PM',
  },
};

