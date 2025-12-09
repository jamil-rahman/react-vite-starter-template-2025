import { useEffect } from 'react';
import { PackageCard } from '../components/PackageCard';
import { updatePageMeta } from '../lib/seo';
import { FaTicketAlt, FaBirthdayCake, FaCalendarCheck, FaPhone, FaEnvelope } from 'react-icons/fa';
import type { PackageCard as PackageCardType } from '../types';

const bookingPackages: PackageCardType[] = [
  {
    id: 'weekday-admission',
    title: 'Weekday Admission',
    description: 'Perfect for weekday visits. Mon, Tue, Wed & Friday admission passes for unlimited play during operating hours. Great for regular visitors and playgroups.',
    price: 'From $15',
    ctaText: 'Book Now',
    ctaHref: '/contact',
  },
  {
    id: 'weekend-admission',
    title: 'Weekend Admission',
    description: 'Weekend fun for the whole family. Sat & Sun admission passes for a day full of play and adventure. Perfect for family outings.',
    price: 'From $20',
    ctaText: 'Book Now',
    ctaHref: '/contact',
  },
  {
    id: 'party-package-1',
    title: 'Party Package I',
    description: '20 Guests (adults + children) - 1 Room. Perfect for intimate birthday celebrations with dedicated play space and party room.',
    price: 'From $250',
    ctaText: 'Book Now',
    ctaHref: '/contact',
  },
  {
    id: 'party-package-2',
    title: 'Party Package II',
    description: '40 Guests (adults + children) - 2 Rooms. Ideal for larger celebrations with multiple play areas and party rooms.',
    price: 'From $450',
    ctaText: 'Book Now',
    ctaHref: '/contact',
  },
  {
    id: 'party-package-3',
    title: 'Party Package III',
    description: '60 Guests (adults + children) - 3 Rooms. Ultimate party experience with exclusive access to multiple play areas and party rooms.',
    price: 'From $650',
    ctaText: 'Book Now',
    ctaHref: '/contact',
  }
];

export function Bookings() {
  useEffect(() => {
    updatePageMeta({
      title: 'Bookings - Bliss Play Space',
      description: 'Book your visit, party, or event at Bliss Play Space. Choose from weekday admission, weekend admission, or party packages.',
    });
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full opacity-10 -ml-48 -mb-48"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
           
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-neutral mb-6 leading-tight">
              Book Your <span className="text-secondary">Visit</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral opacity-90 leading-relaxed max-w-3xl mx-auto">
              Choose from our selection of admission passes and party packages. All bookings include access to our safe, supervised play areas.
            </p>
          </div>
        </div>
      </section>
      
      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white border-2 border-primary rounded-2xl hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTicketAlt className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-2">Daily Admission</h3>
              <p className="text-gray-600 text-sm">Weekday & weekend passes available</p>
            </div>
            
            <div className="text-center p-6 bg-white border-2 border-primary rounded-2xl hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBirthdayCake className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-2">Party Packages</h3>
              <p className="text-gray-600 text-sm">Multiple package options for all sizes</p>
            </div>
            
            <div className="text-center p-6 bg-white border-2 border-primary rounded-2xl hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-support rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarCheck className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-2">Private Events</h3>
              <p className="text-gray-600 text-sm">Custom events tailored to your needs</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admission Passes Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              Admission Passes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible options for weekday and weekend visits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bookingPackages.slice(0, 2).map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Party Packages Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
           
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              Party Packages
            </h2>
            <p className="text-neutral opacity-80 text-lg max-w-2xl mx-auto">
              Everything you need for an unforgettable celebration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bookingPackages.slice(2, 6).map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Events CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border-4 border-primary rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                 
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral mb-4">
                    Need Something Custom?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    For private parties, corporate events, or special requests, please contact us directly. We're happy to work with you to create the perfect experience.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                        <FaEnvelope className="text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <a href="mailto:booking@blissplayspace.ca" className="text-tertiary hover:text-support font-semibold underline break-all">
                          booking@blissplayspace.ca
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center shrink-0">
                        <FaPhone className="text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <a href="tel:+16474823289" className="text-tertiary hover:text-support font-semibold underline">
                          (647) 482-3289
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary p-8 rounded-2xl">
                  <h3 className="text-2xl font-heading font-bold text-neutral mb-6">What We Offer</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral mb-1">Corporate Events</h4>
                        <p className="text-sm text-gray-600">Team building activities and company gatherings</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-tertiary rounded-full flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral mb-1">Private Bookings</h4>
                        <p className="text-sm text-gray-600">Exclusive access to our facility</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-support rounded-full flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral mb-1">Special Occasions</h4>
                        <p className="text-sm text-gray-600">Tailored packages for any celebration</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral mb-1">Group Discounts</h4>
                        <p className="text-sm text-gray-600">Special rates for large groups</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

