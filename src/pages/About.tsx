import { useEffect } from "react";
import { Button } from "../components/Button";
import { updatePageMeta } from "../lib/seo";
import { FaShieldAlt, FaUsers, FaHeart, FaClock } from "react-icons/fa";

export function About() {
  useEffect(() => {
    updatePageMeta({
      title: "About Us - Bliss Play Space",
      description:
        "Learn about Bliss Play Space, our mission, safety standards, and commitment to providing a fun and safe indoor playground experience.",
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-neutral mb-6 leading-tight">
              About <span className="text-secondary">Bliss Play Space</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral opacity-90 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg md:text-xl text-neutral opacity-90 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* Billboard Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img
              src="/assets/billboard.jpg"
              alt="Bliss Play Space Billboard"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary rounded-xl">
                  <div className="text-4xl font-heading font-bold text-secondary mb-1">
                    500+
                  </div>
                  <p className="text-sm text-neutral font-semibold">
                    Happy Families
                  </p>
                </div>
                <div className="text-center p-4 bg-primary rounded-xl">
                  <div className="text-4xl font-heading font-bold text-tertiary mb-1">
                    5+
                  </div>
                  <p className="text-sm text-neutral font-semibold">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-tertiary rounded-3xl opacity-20"></div>
              <img
                src="/assets/img-4.jpg"
                alt="Children playing at Bliss Play Space"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Age Range Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              Perfect for Every Age
            </h2>
            <p className="text-neutral opacity-80 text-lg max-w-2xl mx-auto">
              Age-appropriate play areas designed for safety and maximum fun
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full opacity-10 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  👶
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral mb-3">
                  Ages 1-3
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Toddler-friendly play areas with age-appropriate equipment and
                  soft surfaces.
                </p>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary rounded-full opacity-10 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-tertiary rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  🧒
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral mb-3">
                  Ages 4-8
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Interactive play structures designed for active exploration
                  and social interaction.
                </p>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-support rounded-full opacity-10 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-support rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  🎈
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral mb-3">
                  All Ages
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Family-friendly spaces where everyone can play together
                  safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Cleanliness Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              Safety & Cleanliness
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your child's safety and wellbeing is our top priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-primary p-6 rounded-2xl hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <FaShieldAlt
                    className="text-white text-2xl"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-neutral mb-2">
                    Safety First
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    All equipment meets or exceeds safety standards and is
                    regularly inspected for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-primary p-6 rounded-2xl hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-tertiary rounded-xl flex items-center justify-center shrink-0">
                  <FaUsers className="text-white text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-neutral mb-2">
                    Supervised Play
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Trained staff members are always present to ensure a safe
                    and enjoyable experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-primary p-6 rounded-2xl hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-support rounded-xl flex items-center justify-center shrink-0">
                  <FaHeart className="text-white text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-neutral mb-2">
                    Regular Sanitization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    All play equipment and surfaces are cleaned and sanitized
                    regularly throughout the day.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-primary p-6 rounded-2xl hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <FaClock className="text-white text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-neutral mb-2">
                    Clean Environment
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Maintained temperature-controlled environment with proper
                    ventilation for maximum comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-6">
              Ready to Visit?
            </h2>
            <p className="text-lg md:text-xl text-neutral opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book your visit today and experience the joy of indoor play at
              Bliss Play Space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/bookings"
                variant="secondary"
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                Book Your Visit
              </Button>
              <Button
                to="/contact"
                variant="tertiary"
                size="lg"
                className="border-2 border-neutral hover:border-none"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
