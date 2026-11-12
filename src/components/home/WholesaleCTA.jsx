import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';

export default function WholesaleCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F4EF]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#111210] text-[#F6F4EF] px-6 py-14 sm:px-14 sm:py-20 border border-[#20211F]"
        >
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-[#A58A64] mb-4">
            Wholesale &amp; Bulk Supply
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-[1.12]">
            Looking for Executive Chairs in Bulk?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F6F4EF]/75 max-w-xl mx-auto leading-relaxed">
            Connect with SUN CHAIRS for wholesale and bulk chair enquiries.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/wholesale" variant="bronze" size="lg">
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <WhatsAppButton
              variant="lightOutline"
              size="lg"
              label="Enquire on WhatsApp"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
