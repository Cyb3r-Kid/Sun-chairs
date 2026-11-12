import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Building2 } from 'lucide-react';
import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/common/EnquiryForm';
import { COMPANY_CONFIG } from '../config/company';
import { buildGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function Wholesale() {
  const [searchParams] = useSearchParams();
  const productFromQuery = searchParams.get('product') || '';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="pt-28 sm:pt-36 pb-20 bg-[#F6F4EF]"
    >
      <Seo
        title="Wholesale & Bulk Orders"
        description="Submit wholesale and bulk executive chair enquiries to SUN CHAIRS in Madurai, Tamil Nadu."
        path="/wholesale"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="Wholesale & Bulk Supply"
              title="Your Wholesale Executive Chair Partner."
              description="Connect with SUN CHAIRS for bulk executive chair enquiries and business requirements."
            />

            <div className="bg-[#FFFFFF] border border-[#DFDBD2] p-7 space-y-6">
              <div className="flex items-start gap-3.5">
                <Building2
                  className="w-5 h-5 text-[#A58A64] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-serif text-xl font-medium text-[#111210]">
                    Who We Supply
                  </h2>
                  <p className="mt-1.5 text-sm text-[#77756F] leading-relaxed">
                    Corporate offices, institutions, commercial interiors, and
                    furniture dealers &amp; distributors across Tamil Nadu.
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-[#DFDBD2] space-y-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#A58A64] font-medium">
                  Direct Wholesale Desk
                </p>

                <a
                  href={COMPANY_CONFIG.contact.phoneHref}
                  className="flex items-center gap-3 text-sm font-medium text-[#111210] hover:text-[#A58A64] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#A58A64]" aria-hidden="true" />
                  <span>{COMPANY_CONFIG.contact.phoneDisplay}</span>
                </a>

                <a
                  href={buildGeneralWhatsAppUrl(
                    'I would like to discuss a wholesale executive chair requirement.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.16em] font-medium text-[#20211F] hover:text-[#A58A64] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#A58A64]" aria-hidden="true" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              mode="wholesale"
              defaultProductInterest={productFromQuery}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
