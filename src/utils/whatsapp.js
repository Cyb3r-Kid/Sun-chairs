import { COMPANY_CONFIG } from '../config/company';

const WHATSAPP_BASE_URL = `https://wa.me/${COMPANY_CONFIG.contact.whatsappNumber}`;

/**
 * Builds a properly URL-encoded WhatsApp click-to-chat URL.
 */
export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message.trim());
  return `${WHATSAPP_BASE_URL}?text=${encoded}`;
}

/**
 * Generates a product-specific WhatsApp enquiry URL.
 */
export function buildProductWhatsAppUrl(productName) {
  const message = `Hello ${COMPANY_CONFIG.name},

I am interested in your ${productName}.

Please share the product details and wholesale quotation.

Thank you.`;

  return buildWhatsAppUrl(message);
}

/**
 * Generates a general business enquiry WhatsApp URL.
 */
export function buildGeneralWhatsAppUrl(customNote = '') {
  const message = customNote
    ? `Hello ${COMPANY_CONFIG.name},\n\n${customNote}\n\nThank you.`
    : `Hello ${COMPANY_CONFIG.name},\n\nI would like to enquire about executive chairs and wholesale pricing.\n\nThank you.`;

  return buildWhatsAppUrl(message);
}

/**
 * Generates a bulk/wholesale enquiry WhatsApp URL from validated form data.
 */
export function buildWholesaleWhatsAppUrl(data) {
  const lines = [
    `Hello ${COMPANY_CONFIG.name},`,
    '',
    'I would like to submit a wholesale / bulk executive chair enquiry:',
    '',
    `Company / Business: ${data.companyName}`,
    `Contact Person: ${data.contactPerson}`,
    `Phone: ${data.phone}`,
  ];

  if (data.email) {
    lines.push(`Email: ${data.email}`);
  }

  lines.push(`Location: ${data.location}`);
  lines.push(`Product Interest: ${data.productInterest}`);
  lines.push(`Required Quantity: ${data.quantity}`);

  if (data.additionalRequirements) {
    lines.push(`Additional Requirements: ${data.additionalRequirements}`);
  }

  lines.push('', 'Please share product details and a wholesale quotation. Thank you.');

  return buildWhatsAppUrl(lines.join('\n'));
}

/**
 * Generates a contact page enquiry WhatsApp URL from validated form data.
 */
export function buildContactWhatsAppUrl(data) {
  const lines = [
    `Hello ${COMPANY_CONFIG.name},`,
    '',
    'New business enquiry from the website contact form:',
    '',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];

  if (data.company) {
    lines.push(`Company: ${data.company}`);
  }
  if (data.email) {
    lines.push(`Email: ${data.email}`);
  }
  if (data.location) {
    lines.push(`Location: ${data.location}`);
  }

  lines.push(`Message: ${data.message}`);

  return buildWhatsAppUrl(lines.join('\n'));
}
