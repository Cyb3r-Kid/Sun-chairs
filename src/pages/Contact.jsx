import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/common/EnquiryForm';
import Button from '../components/common/Button';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { COMPANY_CONFIG } from '../config/company';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="pt-28 sm:pt-36 pb-20 bg-[#F6F4EF]"
    >
      <Seo
        title="Contact Us"
        description="Contact SUN CHAIRS in Madurai, Tamil Nadu on +91 99442 82155 or via WhatsApp for executive chair and wholesale enquiries."
        path="/contact"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact SUN CHAIRS"
          description="Reach out directly by phone, WhatsApp, or the enquiry form below for product information and wholesale quotations."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Verified Contact Info & Madurai Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] border border-[#DFDBD2] p-8 space-y-7">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#A58A64] font-medium">
                  Company
                </p>
                <p className="mt-1.5 font-serif text-2xl text-[#111210]">
                  {COMPANY_CONFIG.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#77756F]">
                  {COMPANY_CONFIG.businessType}
                </p>
              </div>

              <div className="pt-6 border-t border-[#DFDBD2] flex items-start gap-3.5">
                <MapPin
                  className="w-5 h-5 text-[#A58A64] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#77756F]">
                    Location
                  </p>
                  <p className="mt-1 text-base font-medium text-[#111210]">
                    {COMPANY_CONFIG.location.display}
                  </p>
                  <p className="mt-1 text-xs text-[#77756F]">
                    {COMPANY_CONFIG.location.streetAddressNote}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#DFDBD2] flex items-start gap-3.5">
                <Phone
                  className="w-5 h-5 text-[#A58A64] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#77756F]">
                    Phone (Click to Call)
                  </p>
                  <a
                    href={COMPANY_CONFIG.contact.phoneHref}
                    className="mt-1 inline-block text-lg font-medium text-[#111210] hover:text-[#A58A64] transition-colors"
                  >
                    {COMPANY_CONFIG.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-[#DFDBD2] flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY_CONFIG.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border border-[#20211F]/30 px-5 py-3 text-xs uppercase tracking-[0.16em] font-medium text-[#20211F] hover:border-[#20211F] hover:bg-[#20211F]/5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#A58A64]" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
                <WhatsAppButton
                  variant="primary"
                  size="sm"
                  label="WhatsApp"
                  className="py-3 px-5"
                />
              </div>
            </div>

            {/* Madurai Location Placeholder */}
            <div className="bg-[#EAE6DD] border border-[#DFDBD2] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#DFDBD2] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#20211F]">
                  Madurai, Tamil Nadu
                </span>
                <span className="text-[11px] text-[#77756F]">
                  Location Placeholder
                </span>
              </div>
              <div className="aspect-[16/10] w-full bg-[#EAE6DD]">
                <iframe
                  title="Madurai, Tamil Nadu Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=78.04%2C9.86%2C78.20%2C9.98&layer=mapnik"
                  className="w-full h-full border-0 grayscale contrast-90 opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Contact Form & Business Enquiry CTA */}
          <div className="lg:col-span-7 space-y-8">
            <EnquiryForm mode="contact" />

            <div className="bg-[#20211F] text-[#F6F4EF] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#A58A64]">
                  Bulk Orders
                </p>
                <p className="mt-1.5 font-serif text-2xl">
                  Planning a wholesale or corporate order?
                </p>
              </div>
              <Button to="/wholesale" variant="bronze" size="md" className="shrink-0">
                <span>Wholesale Form</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
