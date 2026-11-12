import { z } from 'zod';

const phoneRegex = /^[+]?[\d\s\-()]{10,16}$/;

export const wholesaleEnquirySchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(2, 'Please enter your business or company name.')
    .max(120, 'Company name is too long.'),
  contactPerson: z
    .string()
    .trim()
    .min(2, 'Please enter the contact person name.')
    .max(100, 'Name is too long.'),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, 'Please enter a valid phone number (at least 10 digits).'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .optional()
    .or(z.literal('')),
  location: z
    .string()
    .trim()
    .min(2, 'Please enter your city or delivery location.')
    .max(120, 'Location is too long.'),
  productInterest: z
    .string()
    .trim()
    .min(2, 'Please select or specify your product interest.'),
  quantity: z.coerce
    .number({ invalid_type_error: 'Please enter a valid quantity.' })
    .int('Quantity must be a whole number.')
    .positive('Required quantity must be greater than zero.'),
  additionalRequirements: z
    .string()
    .trim()
    .max(1000, 'Please keep additional requirements under 1000 characters.')
    .optional()
    .or(z.literal('')),
});

export const contactEnquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(100, 'Name is too long.'),
  company: z
    .string()
    .trim()
    .max(120, 'Company name is too long.')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, 'Please enter a valid phone number (at least 10 digits).'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .optional()
    .or(z.literal('')),
  location: z
    .string()
    .trim()
    .max(120, 'Location is too long.')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(5, 'Please enter a brief message or enquiry.')
    .max(1000, 'Message is too long.'),
});
