import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Factory, Armchair, Handshake } from 'lucide-react';
import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { COMPANY_CONFIG } from '../config/company';

const OPERATIONS = [
  {
    icon: Factory,
    title: 'Manufacturing & Trading Operations',
    description:
      'SUN CHAIRS operates as both a manufacturer and trader, allowing us to address varied executive seating requirements for direct corporate buyers and regional dealers.',
  },
  {
    icon: Armchair,
    title: 'Executive Seating Specialization',
    description:
      'Our primary focus is executive seating—chairs built for leadership cabins, conference rooms, managerial desks, and professional office environments.',
  },
  {
    icon: MapPin,
    title: 'Tamil Nadu Market Coverage',
    description:
      'Headquartered in Madurai, Tamil Nadu, we supply wholesale and bulk executive chair orders to businesses and trade partners across the state.',
  },
  {
    icon: Handshake,
    title: 'Direct Business Relationships',
    description:
      'We prioritize clear, direct communication for every wholesale quotation, helping procurement teams and furniture dealers source with confidence.',
  },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="pt-28 sm:pt-36 bg-[#F6F4EF]"
    >
      <Seo
        title="About SUN CHAIRS"
        description="Learn about SUN CHAIRS, a manufacturer and wholesale trader of executive chairs based in Madurai, Tamil Nadu, serving businesses across the state."
        path="/about"
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 border-b border-[#DFDBD2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="About SUN CHAIRS"
              title="Dedicated to Executive Seating & Wholesale Supply."
            />
            <div className="mt-6 space-y-5 text-sm sm:text-base text-[#77756F] leading-relaxed">
              <p>
                {COMPANY_CONFIG.shortDescription}
              </p>
              <p>
                Whether outfitting an executive suite, furnishing an entire corporate
                office, or sourcing commercial seating for regional distribution,
                SUN CHAIRS provides a focused, business-oriented partnership rooted
                in Madurai.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden border border-[#DFDBD2] bg-[#EAE6DD]">
              <img
                src="/images/story-workspace.jpg"
                alt="Corporate boardroom with executive chairs"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operations Grid */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Business Overview"
          title="How We Serve Our Clients"
          description="Structured around wholesale supply, executive seating focus, and responsive direct enquiries."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {OPERATIONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#FFFFFF] border border-[#DFDBD2] p-8"
              >
                <div className="w-10 h-10 border border-[#A58A64]/40 flex items-center justify-center text-[#A58A64] mb-5">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#111210]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[#77756F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Business Enquiry CTA */}
      <section className="py-16 sm:py-20 bg-[#20211F] text-[#F6F4EF]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#A58A64] mb-3">
              Business Enquiries
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">
              Partner with SUN CHAIRS for Your Next Workspace Project.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
            <Button to="/wholesale" variant="bronze" size="md">
              <span>Wholesale Enquiry</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <WhatsAppButton variant="lightOutline" size="md" label="WhatsApp" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
