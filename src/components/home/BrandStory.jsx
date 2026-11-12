import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function BrandStory() {
  return (
    <section className="py-20 sm:py-28 bg-[#20211F] text-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden border border-[#F6F4EF]/15 bg-[#111210]">
              <img
                src="/images/story-workspace.jpg"
                alt="Executive boardroom furnished with dark walnut table and executive seating"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <SectionHeading
              eyebrow="Our Focus"
              title="Seating Solutions for Modern Workspaces."
              theme="light"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 space-y-5 text-[#F6F4EF]/75 text-sm sm:text-base leading-relaxed"
            >
              <p>
                SUN CHAIRS combines manufacturing capability with wholesale trading to
                deliver executive seating suited for contemporary corporate offices,
                boardrooms, and commercial enterprises.
              </p>
              <p>
                From single executive suites to multi-floor office fit-outs and
                regional dealer requirements, our wholesale-first model ensures
                direct communication and tailored quotations for every business order.
              </p>
            </motion.div>

            <div className="mt-9">
              <Button to="/about" variant="lightOutline" size="md">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
