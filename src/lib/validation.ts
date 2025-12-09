import type { ContactFormData, ContactFormErrors } from '../types';

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (data.phone && !/^[\d\s\-\(\)]+$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  if (!data.consent) {
    errors.consent = 'You must consent to being contacted';
  }
  
  return errors;
}

