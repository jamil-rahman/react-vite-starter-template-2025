import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { PackageCard } from "../components/PackageCard";
import { updatePageMeta } from "../lib/seo";
import {
  FaTicketAlt,
  FaBirthdayCake,
  FaChalkboardTeacher,
  FaArrowRight,
} from "react-icons/fa";
import type { PackageCard as PackageCardType } from "../types";

const packages: PackageCardType[] = [
  {
    id: "weekday",
    title: "Weekday Admission",
    description:
      "Perfect for weekday visits. Mon, Tue, Wed & Friday admission passes for unlimited play during operating hours.",
    price: "From $15",
    ctaText: "Book Now",
    ctaHref: "/bookings",
  },
  {
    id: "weekend",
    title: "Weekend Admission",
    description:
      "Weekend fun for the whole family. Sat & Sun admission passes for a day full of play and adventure.",
    price: "From $20",
    ctaText: "Book Now",
    ctaHref: "/bookings",
  },
];

export function Home() {
  useEffect(() => {
    updatePageMeta({
      title: "Bliss Play Space - Safe Indoor Playground & Party Venue",
      description:
        "Welcome to Bliss Play Space! Safe, fun indoor playground for children in Brantford, ON. Book admissions, parties, and events today.",
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary rounded-full opacity-10 -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-secondary bg-opacity-20 rounded-full">
                <span className="text-white font-semibold text-sm">
                  Indoor Playground & Party Venue
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-neutral mb-6 leading-tight">
                Where <span className="text-secondary">Fun</span> Meets{" "}
                <span className="text-tertiary">Safety</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover an indoor playground designed for children to explore,
                learn, and play in a safe, supervised environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  to="/bookings"
                  variant="secondary"
                  size="lg"
                  className="shadow-lg hover:shadow-xl"
                >
                  Book Your Visit
                </Button>
                <Button to="/contact" variant="tertiary" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-secondary rounded-2xl opacity-20"></div>
              <img
                src="/assets/img-6.jpg"
                alt="Children playing at Bliss Play Space"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/bookings"
              className="group relative bg-secondary hover:bg-tertiary text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <FaTicketAlt className="text-4xl mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Admission Booking
                </h3>
                <p className="text-white text-opacity-90 text-sm mb-4">
                  Book weekday or weekend play sessions
                </p>
                <span className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-200">
                  Learn More <FaArrowRight aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link
              to="/bookings"
              className="group relative bg-tertiary hover:bg-secondary text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <FaBirthdayCake className="text-4xl mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Parties & Events
                </h3>
                <p className="text-white text-opacity-90 text-sm mb-4">
                  Celebrate birthdays and special occasions
                </p>
                <span className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-200">
                  Learn More <FaArrowRight aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link
              to="/about"
              className="group relative bg-support hover:bg-tertiary text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <FaChalkboardTeacher
                  className="text-4xl mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Workshops & Camps
                </h3>
                <p className="text-white text-opacity-90 text-sm mb-4">
                  Educational programs and activities
                </p>
                <span className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-200">
                  Learn More <FaArrowRight aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Three Column Content Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Tickets Column */}
            <div className="flex flex-col">
              <div className="grow">
                <div className="inline-block mb-4 px-3 py-1 bg-secondary bg-opacity-10 rounded-full">
                  <span className="text-white font-semibold text-xs uppercase tracking-wide">
                    Admission
                  </span>
                </div>
                <h2 className="text-5xl font-heading font-bold text-tertiary mb-6">
                  Tickets
                </h2>
                <div className="space-y-5 mb-8">
                  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-secondary">
                    <h3 className="font-bold text-neutral text-xl mb-2">
                      Weekday Admission
                    </h3>
                    <p className="text-support font-semibold mb-2 text-sm">
                      Mon, Tue, Wed & Friday
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Perfect for weekday visits with unlimited play during
                      operating hours.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-tertiary">
                    <h3 className="font-bold text-neutral text-xl mb-2">
                      Weekend Admission
                    </h3>
                    <p className="text-support font-semibold mb-2 text-sm">
                      Sat & Sun
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Weekend fun for the whole family with extended playtime.
                    </p>
                  </div>
                </div>
                <Link
                  to="/bookings"
                  className="inline-flex items-center gap-2 text-tertiary hover:text-support font-heading font-bold text-lg group transition-colors duration-200"
                >
                  Book Now
                  <FaArrowRight
                    className="group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </div>
              <div className="mt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src="/assets/img-2.jpg"
                    alt="Children playing on playground equipment"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Party Image Column */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
                <div className="absolute inset-0 bg-tertiary rounded-3xl transform rotate-3 opacity-20"></div>
                <img
                  src="/assets/img-3.jpg"
                  alt="Children playing on playground equipment"
                  className="relative rounded-3xl shadow-2xl w-full h-full object-cover border-4 border-white"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Parties Column */}
            <div className="flex flex-col">
              <div className="grow">
                <div className="inline-block mb-4 px-3 py-1 bg-tertiary bg-opacity-10 rounded-full">
                  <span className="text-white font-semibold text-xs uppercase tracking-wide">
                    Celebrations
                  </span>
                </div>
                <h2 className="text-5xl font-heading font-bold text-tertiary mb-6">
                  Parties
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border-l-4 border-secondary hover:border-tertiary">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-bold text-neutral text-lg">
                        Package I
                      </h3>
                      <span className="text-secondary font-bold text-sm">
                        20 Guests
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Adults + children · 1 Room
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border-l-4 border-secondary hover:border-tertiary">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-bold text-neutral text-lg">
                        Package II
                      </h3>
                      <span className="text-secondary font-bold text-sm">
                        40 Guests
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Adults + children · 2 Rooms
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border-l-4 border-secondary hover:border-tertiary">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-bold text-neutral text-lg">
                        Package III
                      </h3>
                      <span className="text-secondary font-bold text-sm">
                        60 Guests
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Adults + children · 3 Rooms
                    </p>
                  </div>
                  <div className="mt-6 p-5 bg-primary rounded-xl border-2 border-secondary">
                    <p className="text-sm text-neutral leading-relaxed">
                      <strong className="text-support">Private Party?</strong>{" "}
                      Request via email at{" "}
                      <a
                        href="mailto:booking@blissplayspace.ca"
                        className="text-tertiary hover:text-support font-semibold underline break-all"
                      >
                        booking@blissplayspace.ca
                      </a>
                    </p>
                  </div>
                </div>
                <Link
                  to="/bookings"
                  className="inline-flex items-center gap-2 text-tertiary hover:text-support font-heading font-bold text-lg group transition-colors duration-200"
                >
                  Book Now
                  <FaArrowRight
                    className="group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary bg-opacity-20 rounded-full">
              <span className="text-white font-semibold text-sm">
                Popular Options
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-neutral opacity-80 text-lg max-w-2xl mx-auto">
              Select the perfect package for your visit and create unforgettable
              memories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-secondary bg-opacity-10 rounded-full">
                  <span className="text-white font-semibold text-sm">
                    About Us
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-6 leading-tight">
                  Welcome to{" "}
                  <span className="text-secondary">Bliss Play Space</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <Button
                  to="/about"
                  variant="primary"
                  size="lg"
                  className="shadow-lg hover:shadow-xl"
                >
                  Learn More About Us
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary rounded-2xl opacity-20"></div>
                <div className="relative bg-primary p-8 rounded-2xl shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-neutral text-xl mb-2">
                          Safe Environment
                        </h3>
                        <p className="text-gray-600">
                          Supervised play areas with trained staff ensuring
                          safety at all times
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-tertiary rounded-lg flex items-center justify-center  shrink-0">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-neutral text-xl mb-2">
                          Age-Appropriate
                        </h3>
                        <p className="text-gray-600">
                          Equipment and activities designed for different age
                          groups
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-support rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-neutral text-xl mb-2">
                          Clean & Sanitized
                        </h3>
                        <p className="text-gray-600">
                          Regular cleaning and sanitization throughout the day
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
