import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { siteConfig } from '../lib/config';
import { FaBars, FaTimes } from 'react-icons/fa';
import type { RouteId } from '../types';

interface NavItem {
  id: RouteId;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'bookings', label: 'Bookings', path: '/bookings' },
  { id: 'faq', label: 'FAQ', path: '/faq' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b-2 border-primary sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="focus-visible:outline-3 focus-visible:outline-offset-2 rounded-lg"
            >
              <img 
                src="/assets/logo-with-title.png" 
                alt={siteConfig.name}
                className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-5 py-2.5 rounded-xl font-semibold text-base transition-all duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 ${
                        isActive
                          ? 'bg-secondary text-white shadow-md'
                          : 'text-neutral hover:bg-primary hover:text-neutral'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-neutral hover:bg-primary transition-colors focus-visible:outline-3 focus-visible:outline-offset-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" aria-hidden="true" />
            ) : (
              <FaBars className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="container mx-auto px-4 py-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 ${
                      isActive
                        ? 'bg-secondary text-white shadow-lg'
                        : 'text-neutral hover:bg-primary hover:text-neutral border-2 border-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-20 bg-neutral bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

