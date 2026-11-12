import { motion } from 'framer-motion';
import { Factory, Armchair, Boxes, MapPin, PhoneCall } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const PILLARS = [
  {
    icon: Factory,
    title: 'Manufacturer & Trading Business',
    description:
      'Operating as both a manufacturer and trader, enabling flexible sourcing and direct supply for business buyers.',
  },
  {
    icon: Armchair,
    title: 'Executive Chair Specialization',
    description:
      'Focused exclusively on executive and commercial office seating designed for professional environments.',
  },
  {
    icon: Boxes,
    title: 'Wholesale-Focused Business Model',
    description:
      'Structured around bulk procurement, corporate office fit-outs, and dealer or distributor enquiries.',
  },
  {
    icon: MapPin,
    title: 'Serving Customers Across Tamil Nadu',
    description:
      'Headquartered in Madurai with wholesale supply reach extending to businesses throughout Tamil Nadu.',
  },
  {
    icon: PhoneCall,
    title: 'Direct Business Enquiries',
    description:
      'Speak directly with our team via phone or WhatsApp for quotations, model availability, and bulk requirements.',
  },
];

export default function WhySunChairs() {
  return (
    <section className="py-20 sm:py-28 bg-[#EAE6DD]/55 border-y border-[#DFDBD2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Why SUN CHAIRS"
          title="Built Around Wholesale Reliability"
          description="A straightforward, business-oriented approach to executive seating supply."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-[#FFFFFF] border border-[#DFDBD2] p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 border border-[#A58A64]/40 flex items-center justify-center text-[#A58A64] mb-6">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#111210]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#77756F] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
