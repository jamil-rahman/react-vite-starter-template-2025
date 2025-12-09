import { Link } from 'react-router-dom';
import { siteConfig } from '../lib/config';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-(--color-neutral) text-white mt-auto">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <img 
              src="/assets/logo-with-title-vertical-stack-circle-cropped.png" 
              alt={siteConfig.name}
              className="h-32 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed mb-6 text-gray-200">
              Where fun meets safety. A premier indoor playground designed for children to explore, learn, and play in a safe, supervised environment.
            </p>
            <div>
              <h3 className="font-semibold mb-3 text-(--color-primary)">Follow Us</h3>
              <div className="flex gap-3">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="w-10 h-10 flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-[var(--color-neutral)] rounded-full transition-all duration-200 focus-visible:outline-3 focus-visible:outline-offset-2"
                  >
                    {social.icon === 'facebook' && <FaFacebook aria-hidden="true" className="text-lg" />}
                    {social.icon === 'instagram' && <FaInstagram aria-hidden="true" className="text-lg" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
                <h2 className="text-xl font-heading font-bold mb-4 text-(--color-primary)">Quick Links</h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-200 hover:text-(--color-secondary) transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-200 hover:text-(--color-secondary) transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/bookings" 
                    className="text-gray-200 hover:text-(--color-secondary) transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                    Bookings
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/faq" 
                    className="text-gray-200 hover:text-(--color-secondary) transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-200 hover:text-(--color-secondary) transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-heading font-bold mb-4 text-(--color-primary)">Contact Us</h2>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FaPhone className="text-[var(--color-secondary)] mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Phone</p>
                  <a 
                    href={`tel:${siteConfig.phone}`} 
                    className="text-gray-200 hover:text-[var(--color-secondary)] transition-colors duration-200"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-[var(--color-secondary)] mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">General Inquiries</p>
                  <a 
                    href={`mailto:${siteConfig.email}`} 
                    className="text-gray-200 hover:text-[var(--color-secondary)] transition-colors duration-200 break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-[var(--color-secondary)] mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Bookings</p>
                  <a 
                    href={`mailto:${siteConfig.bookingEmail}`} 
                    className="text-gray-200 hover:text-[var(--color-secondary)] transition-colors duration-200 break-all"
                  >
                    {siteConfig.bookingEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--color-secondary)] mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Address</p>
                  <p className="text-gray-200 leading-relaxed">{siteConfig.address}</p>
                </div>
              </div>
            </address>
          </div>
          
          {/* Hours */}
          <div>
            <h2 className="text-xl font-heading font-bold mb-4 text-[var(--color-primary)] flex items-center gap-2">
              <FaClock className="text-[var(--color-secondary)]" aria-hidden="true" />
              Hours
            </h2>
            <div className="space-y-2 text-sm">
              {Object.entries(siteConfig.hours).map(([day, hours]) => (
                <div 
                  key={day} 
                  className="flex justify-between items-center py-1.5 border-b border-[var(--color-support)] border-opacity-30"
                >
                  <span className="font-semibold text-gray-200">{day}</span>
                  <span className="text-gray-300">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-[var(--color-support)] border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-300">
              Where <span className="font-bold text-[var(--color-secondary)]">fun</span> meets <span className="font-bold text-[var(--color-secondary)]">safety</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

