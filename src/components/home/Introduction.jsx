import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

export default function Introduction() {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F4EF] border-b border-[#DFDBD2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Corporate Seating Partner"
              title="Where Comfort Meets Professionalism."
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 space-y-5 text-[#77756F] text-sm sm:text-base leading-relaxed"
            >
              <p>
                Based in Madurai, Tamil Nadu, SUN CHAIRS operates as a dedicated
                manufacturer and wholesale trader of executive chairs—focused on
                supplying dependable, composed seating for modern corporate offices,
                institutions, and commercial dealers.
              </p>
              <p>
                Every workspace demands seating that balances everyday ergonomics
                with an authoritative corporate presence. Through direct manufacturing
                and trading operations, we support bulk procurement and wholesale
                requirements across Tamil Nadu.
              </p>
            </motion.div>

            <div className="mt-10 pt-8 border-t border-[#DFDBD2] grid grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#A58A64] font-medium">
                  Primary Focus
                </p>
                <p className="mt-1.5 font-serif text-xl text-[#111210]">
                  Executive Seating
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#A58A64] font-medium">
                  Supply Region
                </p>
                <p className="mt-1.5 font-serif text-xl text-[#111210]">
                  Across Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE6DD] border border-[#DFDBD2]">
              <img
                src="/images/products/executive-chair-01.jpg"
                alt="Executive seating silhouette crafted for modern corporate cabins"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
