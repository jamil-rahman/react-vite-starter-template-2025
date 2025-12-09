import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useEffect } from 'react';
import { updatePageMeta } from '../lib/seo';

export function NotFound() {
  useEffect(() => {
    updatePageMeta({
      title: 'Page Not Found - Bliss Play Space',
      description: 'The page you are looking for could not be found.',
    });
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-neutral mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-neutral mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="primary" size="lg">
            Go Home
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

