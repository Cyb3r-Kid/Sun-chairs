import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageCircle, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';
import { wholesaleEnquirySchema, contactEnquirySchema } from '../../utils/validation';
import {
  buildWholesaleWhatsAppUrl,
  buildContactWhatsAppUrl,
} from '../../utils/whatsapp';
import { CATEGORIES } from '../../data/categories';
import Button from './Button';

const inputClasses =
  'w-full bg-[#FFFFFF] border border-[#DFDBD2] px-4 py-3 text-sm text-[#111210] placeholder:text-[#77756F]/65 focus:outline-none focus:border-[#A58A64] transition-colors';
const labelClasses =
  'block text-[11px] font-medium uppercase tracking-[0.18em] text-[#20211F] mb-2';
const errorClasses = 'mt-1.5 text-xs text-[#9E2A2B] flex items-center gap-1';

export default function EnquiryForm({
  mode = 'wholesale',
  defaultProductInterest = '',
}) {
  const isWholesale = mode === 'wholesale';
  const [generatedUrl, setGeneratedUrl] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(
      isWholesale ? wholesaleEnquirySchema : contactEnquirySchema
    ),
    defaultValues: isWholesale
      ? {
          companyName: '',
          contactPerson: '',
          phone: '',
          email: '',
          location: '',
          productInterest: defaultProductInterest || 'Executive Chairs',
          quantity: 10,
          additionalRequirements: '',
        }
      : {
          name: '',
          company: '',
          phone: '',
          email: '',
          location: '',
          message: '',
        },
  });

  const onSubmit = (data) => {
    const whatsappUrl = isWholesale
      ? buildWholesaleWhatsAppUrl(data)
      : buildContactWhatsAppUrl(data);

    setGeneratedUrl(whatsappUrl);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (generatedUrl) {
    return (
      <div className="bg-[#FFFFFF] border border-[#A58A64]/60 p-8 sm:p-10 space-y-5">
        <div className="flex items-start gap-3.5">
          <CheckCircle2
            className="w-6 h-6 text-[#A58A64] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div>
            <h3 className="font-serif text-2xl font-medium text-[#111210]">
              WhatsApp Enquiry Prepared
            </h3>
            <p className="mt-2 text-sm text-[#77756F] leading-relaxed">
              Your enquiry details have been formatted for WhatsApp. If WhatsApp did
              not open automatically, use the button below to open your prefilled
              message and send it directly to SUN CHAIRS.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={generatedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#20211F] text-[#F6F4EF] px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#111210] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#A58A64]" aria-hidden="true" />
            <span>Open WhatsApp Message</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setGeneratedUrl('');
              reset();
            }}
            className="inline-flex items-center justify-center gap-2 border border-[#DFDBD2] px-5 py-3.5 text-xs uppercase tracking-[0.16em] font-medium text-[#77756F] hover:text-[#111210] hover:border-[#20211F] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Prepare Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-[#FFFFFF] border border-[#DFDBD2] p-6 sm:p-10 space-y-6"
    >
      {isWholesale ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className={labelClasses}>
                Business / Company Name *
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="e.g., Apex Corporate Solutions"
                {...register('companyName')}
                className={inputClasses}
              />
              {errors.companyName && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.companyName.message}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contactPerson" className={labelClasses}>
                Contact Person *
              </label>
              <input
                id="contactPerson"
                type="text"
                placeholder="Full name"
                {...register('contactPerson')}
                className={inputClasses}
              />
              {errors.contactPerson && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.contactPerson.message}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 98XXX XXXXX"
                {...register('phone')}
                className={inputClasses}
              />
              {errors.phone && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone.message}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email Address (Optional)
              </label>
              <input
                id="email"
                type="email"
                placeholder="procurement@company.com"
                {...register('email')}
                className={inputClasses}
              />
              {errors.email && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="location" className={labelClasses}>
                City / Location *
              </label>
              <input
                id="location"
                type="text"
                placeholder="e.g., Madurai, Chennai, Coimbatore"
                {...register('location')}
                className={inputClasses}
              />
              {errors.location && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.location.message}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="productInterest" className={labelClasses}>
                Product Interest *
              </label>
              <select
                id="productInterest"
                {...register('productInterest')}
                className={inputClasses}
              >
                {CATEGORIES.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
                <option value="Mixed Bulk Requirement">
                  Mixed Bulk Requirement
                </option>
              </select>
              {errors.productInterest && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.productInterest.message}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="quantity" className={labelClasses}>
                Required Quantity *
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                step="1"
                placeholder="e.g., 25"
                {...register('quantity')}
                className={inputClasses}
              />
              {errors.quantity && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.quantity.message}</span>
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="additionalRequirements" className={labelClasses}>
              Additional Requirements (Optional)
            </label>
            <textarea
              id="additionalRequirements"
              rows={4}
              placeholder="Share preferred chair styles, upholstery preferences, or project timeline..."
              {...register('additionalRequirements')}
              className={inputClasses}
            />
            {errors.additionalRequirements && (
              <p className={errorClasses} role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.additionalRequirements.message}</span>
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="Full name"
                {...register('name')}
                className={inputClasses}
              />
              {errors.name && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company" className={labelClasses}>
                Company / Business (Optional)
              </label>
              <input
                id="company"
                type="text"
                placeholder="Organization name"
                {...register('company')}
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-phone" className={labelClasses}>
                Phone Number *
              </label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="+91 98XXX XXXXX"
                {...register('phone')}
                className={inputClasses}
              />
              {errors.phone && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone.message}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClasses}>
                Email Address (Optional)
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="name@company.com"
                {...register('email')}
                className={inputClasses}
              />
              {errors.email && (
                <p className={errorClasses} role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="contact-location" className={labelClasses}>
              Location (Optional)
            </label>
            <input
              id="contact-location"
              type="text"
              placeholder="City or district in Tamil Nadu"
              {...register('location')}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Enquiry Message *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your executive chair or wholesale requirement..."
              {...register('message')}
              className={inputClasses}
            />
            {errors.message && (
              <p className={errorClasses} role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>
        </>
      )}

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-[#77756F]">
          Submitting opens WhatsApp with your details prefilled for direct communication.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="shrink-0"
        >
          <MessageCircle className="w-4 h-4 text-[#A58A64]" aria-hidden="true" />
          <span>Continue to WhatsApp</span>
        </Button>
      </div>
    </form>
  );
}
